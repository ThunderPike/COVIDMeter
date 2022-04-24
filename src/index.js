import express from 'express';
import { PORT } from './config.js';

// import mongodb from './services/mongodb';
// Import Routers
// import getRouter from './router/get.js';

const app = express();

app.use(express.json());
// Middleware
// app.use(getRouter);

app.listen(PORT, () => console.log(`⚡️ Server is listening on ${PORT}`));
app.listen(3000);
