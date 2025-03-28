const express=require('express')
const router=express.Router()
const {Register, login}=require('../controller/user.controller')


router.post('/register',Register)
router.post('/login',login)


module.exports=router
