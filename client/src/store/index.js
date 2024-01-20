import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth.slice.js"
import crudSlice from "./crud.slice.js"
import characterSlice from "./character.slice.js";
import db_infoSlice from "./db_info.slice.js";
import adminUserSlice from "./admin.user.slice.js";
import adminArticleSlice from "./admin.article.slice.js";
import adminCharacterSlice from "./admin.character.slice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        crud: crudSlice,
        characters: characterSlice,
        db_info: db_infoSlice,
        adminUser: adminUserSlice,
        adminArticle: adminArticleSlice,
        adminCharacter: adminCharacterSlice,
    },
});

export default store;