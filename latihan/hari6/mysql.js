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



//INSERT
let{title, year} = req.body
connectionPool.query(`INSERT INTO movies (title, year, created_at, updated_at) VALUES ('${title}', ${year}, NOW(), NOW())` ,(err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    res.json('movie was successfully created')
})


//READ
connectionPool.query("SELECT * FROM movies", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // rows fetch
  let movies = data.map((el) => {
    let { id, title, year, created_at, updated_at } = el;
    let movie = {};
    movie.id = id;
    movie.title = title;
    movie.year = year;
    movie.created_at = created_at;
    movie.updated_at = updated_at;
    return movie;
  });
  res.json(movies);
});


//UPDATE
// let {title, year} = req.body
// let {id} = req.params
connectionPool.query(`UPDATE movies SET ......`, (err, data) => {
    if(err) {
        console.error(err)
        return;
    }
    res.json('movie was successfully update')
})


//DELETE
// let {id} = req.params
connectionPool.query(`DELETE FROM movies WHERE ......`, (err, data) => {
    if(err) {
        console.error(err)
        return;
    }
    res.json('movie was successfully delete')
})