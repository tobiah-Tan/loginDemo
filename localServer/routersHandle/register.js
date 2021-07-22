const db = require('../database');

module.exports= (req,res)=>{
    //查询用户名是否存在
    const sql = 'SELECT * FROM users WHERE username=?';
    db(sql,req.body.username,result =>{
        if(result.length >= 1){
            res.send({
                status:1,
                msg:'用户名已存在'
            });
        }

        const sql = 'INSERT INTO users set ?';
        const{username,email,password} = req.body;
        db(sql,{username,email,password},result=>{
            res.send(result)
        })
        // res.send({
        //     status:0,
        //     msg:'注册成功',
        // })
    } )
    // res.send(req.body);
}