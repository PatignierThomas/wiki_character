import Query from '../model/Query.js';

export const getCharacters = async (req, res) => {
    const query = `
    SELECT characters.id, 
           characters.name, 
           characters.description, 
           picture.src, 
           picture.alt,
           article.isValidated
    FROM article 
    JOIN characters ON article.character_id = characters.id
    JOIN picture ON characters.id = picture.character_id
    `;
    const characters = await Query.render(query);
    res.json(characters);
}

export const getOneCharacter = async (req, res) => {
    const query = `
        SELECT 
            characters.id, 
            characters.name, 
            characters.description, 
            picture.src, 
            picture.alt, 
            category.label,
            user.name AS author,
            article.publish_date,
            article.last_update
        FROM article
        JOIN characters ON article.character_id = characters.id
        JOIN picture ON characters.id = picture.character_id 
        JOIN characters_category ON characters.id = characters_category.character_id
        JOIN category ON category.id = characters_category.category_id
        JOIN user ON article.user_id = user.id
        WHERE characters.id = ? 
        `;
    const character = await Query.renderWithValues(query, [req.params.id]);
    res.json(character);
}

export const getRecentCharacters = async (req, res) => {
    const query = `
        SELECT 
            characters.id, 
            name, 
            description, 
            picture.src, 
            picture.alt 
        FROM characters 
        JOIN picture 
        ON characters.id = picture.character_id 
        ORDER BY characters.id DESC 
        LIMIT 3
        `;
    const character = await Query.render(query);
    res.json(character);
}
