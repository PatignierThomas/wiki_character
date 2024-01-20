import express from 'express';
import multer from 'multer';
import path from 'path';
import { updateUserInfo, 
         getUserInfo, 
         deleteUserInfo,
         allowArticle, 
         getCharacterInfo, 
         updateCharacterImage, 
         updateCharacterInfo,
         deleteCharacterInfo,
         addRoleInfo, 
         deleteRoleInfo,
         updateRoleInfo,
         addCategoryInfo,
         deleteCategoryInfo,
         updateCategoryInfo
        } 
from '../controller/updateInfo.js';


const storage = multer.diskStorage({
    destination: 'public/assets/img/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

const updateInfoRouter = express.Router();

updateInfoRouter.get("/user/:id", getUserInfo);

updateInfoRouter.patch("/user/:id", updateUserInfo);

updateInfoRouter.delete("/user/:id", deleteUserInfo);


updateInfoRouter.patch("/article/:id", allowArticle);


updateInfoRouter.get("/character/:id", getCharacterInfo);

updateInfoRouter.patch("/character/:id", updateCharacterInfo);

updateInfoRouter.patch("/character/:id/image", upload.single("image"), updateCharacterImage);

updateInfoRouter.delete("/character/:id", deleteCharacterInfo);



updateInfoRouter.post("/role", addRoleInfo);

updateInfoRouter.patch("/role", updateRoleInfo);

updateInfoRouter.delete("/role", deleteRoleInfo);



updateInfoRouter.post("/category", addCategoryInfo);

updateInfoRouter.patch("/category", updateCategoryInfo);

updateInfoRouter.delete("/category", deleteCategoryInfo);

export default updateInfoRouter;



// front dispatch to get all info in useEffect
// and dispatch to post new info in handleSubmit