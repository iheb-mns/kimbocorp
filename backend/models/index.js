const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.company = require("./company.model.js")(mongoose);
db.directors = require("./directors.model.js")(mongoose);
db.shareholders = require("./shareholders.model.js")(mongoose);
db.officers = require("./officers.model.js")(mongoose);

module.exports = db;