import Sequelize from 'sequelize';
const  configDB = require('../config/database');

class Database{
  public connection!: Sequelize.Sequelize;
  constructor(){
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(configDB);
  }
}

const database: Database = new Database();

export default database;