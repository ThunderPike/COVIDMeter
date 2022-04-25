import express from 'express';
import CovidDeath from '../controllers/covidDeath.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('get requested');
  res.send('Hello World');
});

router.get('/getTest', (req, res) => {
  console.log('Get router is online');
  res.send({
    Shirt: '👕',
  });
});

router.get('/getCovidDeath', CovidDeath.getCovidDeath);

export default router;
