import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('get requested');
  res.send("Hello World");
});

app.listen(3000);
