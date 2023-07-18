"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.POSTGRES_DATABASE;
const dbUser = process.env.POSTGRES_USERNAME;
const dbHost = process.env.POSTGRES_HOST;
const dbDialect = process.env.POSTGRES_DIALECT;
const dbPassword = process.env.POSTGRES_PASSWORD;
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect
});
exports.default = sequelizeConnection;
