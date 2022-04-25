// @ts-nocheck
import express from 'express';
import { PORT } from './config.js';

import router from './router/index.js';

const app = express();

app.use(express.json());

app.use(router);

app.get('/health-check', (req, res) => {
  res.send({
    message: 'good',
  });
});

app.listen(PORT, () => console.log(`⚡️ Server is listening on ${PORT}`));

app.listen(3000);
