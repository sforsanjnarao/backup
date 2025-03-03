const express = require('express');
const app = express();
const userRouter=require('./routes/user.router')
const cors = require('cors');
app.use(cors());




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',userRouter)





module.exports=app