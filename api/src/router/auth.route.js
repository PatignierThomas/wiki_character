import express from 'express';
import { registerAccount, loginAccount, logoutAccount} from '../controller/auth.js';
import { AuthChecker } from '../controller/authCheck.js';

const registerRouter = express.Router();

registerRouter.post("/register", registerAccount);

registerRouter.post("/login", loginAccount);

registerRouter.post("/logout", logoutAccount);

registerRouter.post("/check", AuthChecker)




export default registerRouter;