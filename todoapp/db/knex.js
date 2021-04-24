const environment = "development";
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);
// 変数knexが外部ファイルから呼び出すためにmodule.exportsを利用し、外部に公開
module.exports = knex;
