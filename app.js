const express = require('express');
const app = express();

app.get('/yo', (req,res) => {
  res.send("Yo, Austin");
});

app.listen(process.env.port || 3000);
console.log('Port '+ (process.env.port || 3000));