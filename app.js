const express = require('express');
const { exec } = require('child_process');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;


app.get('/say',(req,res) => {
    console.log(req.query);
    axios.get(`https://os1qsooo3e.execute-api.us-east-2.amazonaws.com/default/myfirstfunction?keyword=${req.query.keyword}`)
    .then((response) => {
        console.log(response.data);
    res.send(response.data.body);
 
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});