const express = require('express');
const app = express();

app.get('/hello', (req,res) => {
  res.send("Hello");
});

app.listen(process.env.port || 3000);
console.log('Port '+ (process.env.port || 3000));