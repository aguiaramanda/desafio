import { Dialect, Sequelize } from "sequelize";

const dbName = process.env.POSTGRES_DATABASE as string
const dbUser = process.env.POSTGRES_USERNAME as string
const dbHost = process.env.POSTGRES_HOST as string
const dbDialect = process.env.POSTGRES_DIALECT as Dialect
const dbPassword = process.env.POSTGRES_PASSWORD

const sequelizeConnection = new Sequelize('bd_tarefas', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

export default sequelizeConnection
