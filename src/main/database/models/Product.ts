import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  price: number;
  custo: number;
  grupo: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export default class Product extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
 
  public id!: number;
  public name!: string;
  public price!: number;
  public custo!: number;
  public grupo!: string;

  static initModel(sequelize: Sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        custo: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        grupo:
        {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        tableName: 'products',
      }
    );
  }
}
