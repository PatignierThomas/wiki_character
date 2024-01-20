import express from 'express';
import characterRouter from './character.route.js';
import registerRouter from './auth.route.js';
import infoRouter from './info.route.js';
import updateInfoRouter from './updateInfo.route.js';

const indexRouter = express.Router();

indexRouter.get("/api/v1", (req, res) => {
    res.send("Hello World!");
    }
);

indexRouter.use('/api/v1/characters', characterRouter);

indexRouter.use("/api/v1/auth", registerRouter);

indexRouter.use("/api/v1/info", infoRouter);

indexRouter.use("/api/v1/update-info", updateInfoRouter)

indexRouter.get("*", (req, res) => {
    res.json({ error: "Page not found" })
});

export default indexRouter;
