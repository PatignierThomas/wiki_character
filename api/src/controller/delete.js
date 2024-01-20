import Query from "../model/Query.js";

export const deleteCharacter = async (req, res) => {

    const query = "DELETE FROM `characters` WHERE id = ?";
    const character = await Query.renderWithValues(query, [req.params.id]);

    res.json(character);
}