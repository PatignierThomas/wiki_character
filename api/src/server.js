import express from "express";
import router from "./router/index.route.js";
import cors from "cors";
import path from "path";
import "dotenv/config";

const app = express();

const dotenv = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/src/assets/img', express.static(path.join(process.cwd(), "/public/assets/img/")));

app.use(cors({
    origin: "http://localhost:5173",
}));

app.listen(dotenv.LOCAL_PORT, () => {
    console.log("API server running at http://localhost:3000");
    }
);

app.use(router)
