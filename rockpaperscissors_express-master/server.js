const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log("Runing");
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
  // res.sendFile(__dirname+'/main.js')
});
