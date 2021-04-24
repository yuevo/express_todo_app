const config  = require('./config');

module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: config.password,
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: config.password,
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: config.password,
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
