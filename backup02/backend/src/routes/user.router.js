const express=require('express')
const router=express.Router()
const {Register}=require('../controller/user.controller')


router.post('/register',Register)


module.exports=router
