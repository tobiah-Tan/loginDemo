
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'tan12345',
    database: 'login'
})

module.exports = (sql,arr,callback) =>{
    db.query(sql,arr,function(error,result){
        if(error){
            return console.log(error);
        }
        callback(result);
    })
}