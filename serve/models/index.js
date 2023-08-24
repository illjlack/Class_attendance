const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.UserInfo = require("./UserInfo.model.js")(sequelize, Sequelize);
db.AttendanceConfig = require("./AttendanceConfig.model.js")(sequelize, Sequelize);
db.AttendanceRecord = require("./AttendanceRecord.model.js")(sequelize, Sequelize);
db.LeaveInfo = require("./LeaveInfo.model.js")(sequelize, Sequelize);
db.Classroom = require("./Classroom.model.js")(sequelize, Sequelize);

module.exports = db;
