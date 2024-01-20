import Query from '../model/Query.js';

export const getUserInfo = async (req, res) => {
    const info = 'SELECT * FROM user WHERE id = ?';
    const values = [req.params.id];
    const [data] = await Query.renderWithValues(info, values);
    res.json(data);
}

export const updateUserInfo = async (req, res) => {
    const query = `UPDATE user SET name = ?, email = ?, role_id = ? WHERE id = ?`;
    if (!req.body.email) req.body.email = null;
    if (!req.body.role) req.body.role = 1;
    const values = [req.body.name, req.body.email, req.body.role, req.params.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const deleteUserInfo = async (req, res) => {
    const query = `DELETE FROM user WHERE id = ?`;
    const values = [req.params.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const allowArticle = async (req, res) => {
    const query = `UPDATE article SET isValidated = ? WHERE id = ?`;
    const isValidated = req.body.validation === 0 ? 0 : 1;
    const values = [isValidated, req.params.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const getCharacterInfo = async (req, res) => {
    const info = 'SELECT * FROM character WHERE id = ?';
    const values = [req.params.id];
    const [data] = await Query.renderWithValues(info, values);
    res.json(data);
}

export const updateCharacterInfo = async (req, res) => {
    const getUser = "SELECT id FROM `user` WHERE name = ?";
    const [user] = await Query.renderWithValues(getUser, [req.body.username]);

    const query = `UPDATE characters SET name = ?, description = ? WHERE id = ?`;
    const values = [req.body.name, req.body.description, req.params.id];
    const result = await Query.renderWithValues(query, values);

    const checkQuery = "SELECT * FROM category"
    const categories = await Query.render(checkQuery);

    const query2 = `UPDATE characters_category SET category_id = ? WHERE character_id = ?`;


    categories.filter(category => {
        if (req.body.category.includes(category.label)) {
            const values2 = [category.id, req.params.id];
            Query.renderWithValues(query2, values2);
        }
    });

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query3 = "UPDATE `article` SET last_update = ?, user_id = ? WHERE character_id = ?";
    const article = await Query.renderWithValues(query3, [date, user.id,  req.params.id]);

    res.json(result);
}

export const updateCharacterImage = async (req, res) => {
    const query = `UPDATE picture SET src = ?, alt = ? WHERE character_id = ?`;
    const values = [req.file.filename, req.body.alt, req.params.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const deleteCharacterInfo = async (req, res) => {
    const query = `DELETE FROM characters WHERE id = ?`;
    const values = [req.params.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const addRoleInfo = async (req, res) => {
    const query = `INSERT INTO role (name) VALUES (?)`;
    const values = [req.body.name];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const deleteRoleInfo = async (req, res) => {
    const query = `DELETE FROM role WHERE id = ?`;
    const values = [req.body.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const updateRoleInfo = async (req, res) => {
    const query = `UPDATE role SET name = ? WHERE id = ?`;
    const values = [req.body.name, req.body.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const addCategoryInfo = async (req, res) => {
    const query = `INSERT INTO category (name) VALUES (?)`;
    const values = [req.body.name];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const deleteCategoryInfo = async (req, res) => {
    const query = `DELETE FROM category WHERE id = ?`;
    const values = [req.body.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}

export const updateCategoryInfo = async (req, res) => {
    const query = `UPDATE category SET name = ? WHERE id = ?`;
    const values = [req.body.name, req.body.id];
    const result = await Query.renderWithValues(query, values);
    res.json(result);
}