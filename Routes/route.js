import express from "express";

import {addUser,getUser} from '../Controller/controller.js'


const router = express.Router();

router.post('/add',addUser);
router.get('/user',getUser)



export default router;
