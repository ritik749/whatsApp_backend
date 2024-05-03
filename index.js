
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

import connect from './DbConfig/dbconfigure.js'


import rout from './Routes/route.js'


app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use('/',rout);
connect();




app.listen(4000,()=>console.log(`server is up to running ${4000}`))