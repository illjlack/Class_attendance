// {
//     "host": "bj-cynosdbmysql-grp-08n5bmn0.sql.tencentcdb.com",
//     "user": "root",
//     "password": "awdawd56746/8972136",
//     "database": "password",
//     "port": 25521
//   }

module.exports = {
    HOST: "bj-cynosdbmysql-grp-08n5bmn0.sql.tencentcdb.com",
    PORT: "25521",
    USER: "root",
    PASSWORD: "awdawd56746/8972136",
    DB: "password",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };