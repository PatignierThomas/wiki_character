import express from 'express';
import { getCharacters, getOneCharacter, getRecentCharacters } from '../controller/character.js';
import { addCharacter } from '../controller/add.js';
import { editCharacter } from '../controller/edit.js';
import { deleteCharacter } from '../controller/delete.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'public/assets/img/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

const characterRouter = express.Router();

characterRouter.get("/", getCharacters);

characterRouter.get("/recent", getRecentCharacters);

characterRouter.get("/:id", getOneCharacter);

characterRouter.post("/create", upload.single("image"), addCharacter);

characterRouter.patch("/update/:id", upload.single("image"), editCharacter);

characterRouter.delete("/delete/:id", deleteCharacter);



export default characterRouter;