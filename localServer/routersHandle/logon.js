const db = require('../database');

module.exports = (req,res) => {
    //1、查询用户名是否存在
    const sql = 'SELECT * FROM users WHERE username=?';
    db(sql,req.body.username,result=>{
        if(result.length !== 1){
            return res.send({
                status: 1,
                msg:'此用户不存在，请先注册！',
            });
        }
        //2、查询用户名对应的密码是否一致
        if(req.body.password !== result[0].password){
            return res.send({
                status:1,
                msg:'密码错误！'
            })
        }
        res.send({
            status: 0,
            msg: '登陆成功！'
        })
    })
    // res.send('ok');
};