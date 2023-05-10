const mysql = require('mysql');

const connect = mysql.createConnection({
    host: "31.31.198.105",
    user: "u1196731_root",
    password: "u1196731_root",
    database: "u1196731_vk-api-back"
});

connect.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = connect;
