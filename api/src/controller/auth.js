import Query from '../model/Query.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerAccount = async (req, res) => {
    const { name, password } = req.body;
    const check = `SELECT name FROM user WHERE name = ?`;
    const [data] = await Query.renderWithValues(check, [name]);
    if (data) return res.json({error: "L'utilisateur existe déjà"});

    // also in add.js could be utils.js
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    const query = `INSERT INTO user (name, password, account_creation_date, role_id) 
                   VALUES (?, ?, ?, ?)`;
                   
    const hash = await bcrypt.hash(password, 10);
                   
    // 1 is the role_id for the user role
    // 2 is the role_id for the admin role
    const values = [name, hash, date, 1];
    const result = await Query.renderWithValues(query, values);

    res.json(result);
}

export const loginAccount = async (req, res) => {
    const { name, password } = req.body;
    
    const query = `SELECT password, role_id FROM user WHERE name = ?`;
    const values = [name];
    const [data] = await Query.renderWithValues(query, values);

    if (!data) return res.json({error: "Mauvais nom d'utilisateur ou mot de passe"});
    
    bcrypt.compare(password, data.password, function(err, result) {
        if (err) {
            console.log(err);
            res.json({error: "Mauvais nom d'utilisateur ou mot de passe"});
        }
        if (result) {
            // const token = jwt.sign({name: name, role: data.role_id}, "dev_key", {expiresIn: "1h"});
            // res.cookie('token', token, {
            //     httpOnly: true, 
            //     sameSite: 'lax'
            // }).status(200).json({name : name, role_id: data.role_id});
            res.status(200).json({name : name, role_id: data.role_id});

        }
    });
}

export const logoutAccount = async (req, res) => {
    res.json({loged: false});
}