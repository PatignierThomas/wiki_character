import express from 'express';
import { allUsers, allCharacters, allCategories, allRoles, allArticles } from '../controller/db_info.js';

const infoRouter = express.Router();

infoRouter.get("/users", allUsers); 

infoRouter.get("/characters", allCharacters);

infoRouter.get("/categories", allCategories);

infoRouter.get("/roles", allRoles);

infoRouter.get("/articles", allArticles)

export default infoRouter;