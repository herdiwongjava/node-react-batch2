const mysql = require("mysql")

const connectionPool = mysql.createPool({
    host:"",
    user :"",
    password : "",
    database : ""
})

connectionPool.getConnection( (err) => {
    if(err) {
        throw err
    }
})

module.exports = {
    connectionPool
}
