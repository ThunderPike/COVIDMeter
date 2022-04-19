import express from 'express';

const app = express();
app.use(express.json());

//Import Routers
import getRouter from './router/get.js'
//Middleware
app.use(getRouter)




app.listen(3000);
