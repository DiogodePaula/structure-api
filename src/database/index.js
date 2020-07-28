import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User];
// se tiver 50 models vai ter 50 imports e 50 itens na lista

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('BOMBANDO');
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models.map((model) => model.init(this.connection));

    // for (model of models) {
    //   model.init(this.connection);
    // }
  }
}

export default new DataBase();
