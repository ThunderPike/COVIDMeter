// let express = require("express");
import express from "express"
let router = express.Router();


router.get('/', (req, res) => {
    console.log('get requested');
    res.send('Hello World');
  });

router.get('/getTest', (req,res)=> {
    console.log('Get router is online')
    res.send({
    "Shirt":"👕"
})
});

export default router;


