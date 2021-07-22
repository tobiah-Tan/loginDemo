//注册相关的路由模块
const express = require('express');
const router = express.Router();
const valid = require('../middleware/valid');
const {registerSchema} =require('../schema/register');
const routesHandle = require('../routersHandle/register')

router.post('/',valid(registerSchema),routesHandle)

module.exports = router;