import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primarykey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        age: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING,
          validade: {
            isEmail: true,
          },
        },
        phone: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        cpf: {
          allowNull: true,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    this.removeAttribute('id');
    return this;
  }
}

export default User;
