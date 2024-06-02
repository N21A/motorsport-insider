// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS news (info TEXT)");
    db.run("INSERT INTO news (info) VALUES ('Motorsport Insider News')");
});

module.exports = db;