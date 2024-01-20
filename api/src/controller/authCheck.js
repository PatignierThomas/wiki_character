import jwt from 'jsonwebtoken';

export const AuthChecker = async (req, res) => {
    jwt.verify(req.cookies.token, "dev_key", (err, decoded) => {
        if (err) {
            console.log(err);
            res.json({error: "Authentification invalide"});
        }
        else {
            res.status(200).json({name: decoded.name, role: decoded.role});
        }
    });
}