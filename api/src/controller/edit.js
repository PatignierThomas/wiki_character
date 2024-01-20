import Query from "../model/Query.js";

// {
//     "name": "First",
//     "description": "Test update",
//     "username": "toto",
//     "src":"Test.pnj",
//     "alt":"Postman Test"
// }
export const editCharacter = async (req, res) => {

    const getUser = "SELECT id FROM `user` WHERE name = ?";
    console.log(req.body.username);
    const [user] = await Query.renderWithValues(getUser, [req.body.username]);


    const query = "UPDATE `characters` SET name = ?, description = ? WHERE id = ?";
    const character = await Query.renderWithValues(query, [req.body.name, req.body.description, req.params.id]);

    const query2 = "UPDATE `picture` SET src = ?, alt = ?";
    const picture = await Query.renderWithValues(query2, [req.body.src, req.body.alt, req.params.id]);

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query3 = "UPDATE `article` SET last_update = ?, user_id = ? WHERE character_id = ?";
    const article = await Query.renderWithValues(query3, [date, user.id,  req.params.id]);

    res.json({character, picture, article});

}