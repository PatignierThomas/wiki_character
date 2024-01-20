import Query from '../model/Query.js';

export const allCategories = async (req, res) => {
    const query = "SELECT * FROM category";
    const category = await Query.render(query);
    res.json(category);
}

export const allUsers = async (req, res) => {
    const query = "SELECT * FROM user";
    const users = await Query.render(query);
    res.json(users);
}

export const allCharacters = async (req, res) => {
    const query = "SELECT * FROM characters";
    const characters = await Query.render(query);
    res.json(characters);
}

export const allRoles = async (req, res) => {
    const query = "SELECT * FROM role";
    const roles = await Query.render(query);
    res.json(roles);
}

export const allArticles = async (req, res) => {
    const query = "SELECT * FROM article";
    const articles = await Query.render(query);
    res.json(articles);
}
