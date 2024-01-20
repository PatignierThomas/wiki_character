import Query from "../model/Query.js";

// {
//     "name": "toto",
//     "description": "Desc of image",
//     "username": "toto",
//     "src":"Test.pnj",
//     "alt":"Postman Test"
// }
export const addCharacter = async (req, res) => {

    // TODO: revert change if one query fail
    const getUser = "SELECT id FROM `user` WHERE name = ?";
    const [user] = await Query.renderWithValues(getUser, [req.body.username]);
    
    const query = "INSERT INTO `characters` (name, description) VALUES (?, ?)";
    const character = await Query.renderWithValues(query, [req.body.name, req.body.description]);

    const query2 = "INSERT INTO `picture` (src, alt, character_id) VALUES (?, ?, ?)";
    const picture = await Query.renderWithValues(query2, [req.file.filename, req.body.alt, character.insertId]);
    
    // also in auth.js could be utils.js
    const date= new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query3 = "INSERT INTO `article` (publish_date, last_update, character_id, user_id) VALUES (?, ?, ?, ?)";
    const article = await Query.renderWithValues(query3, [date, date, character.insertId, user.id]);

    const query4 = "INSERT INTO `characters_category` (character_id, category_id) VALUES (?, ?)";
    const many = await Query.renderWithValues(query4, [character.insertId, req.body.category]);

    res.json({character, picture, article});
}



