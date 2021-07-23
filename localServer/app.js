const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));//解析 application/x-www-form-urlencoded
app.use(express.json())//解析 application/json

app.use('/api/register',require('./router/register'));
app.use('/api/logon',require('./router/logon'));

//错误处理
app.use((err,req,res,next)=>{
    if(err instanceof Joi.ValidationError){
        return res.send({
            status:1,
            msg:[err.details[0].context.label,err.details[0].message]
        })
    }
    res.send({
        status:1,
        msg:err.message||err
    })
})

//监听端口号
app.listen(8888,()=>console.log('server running on http://localhost:8888'));