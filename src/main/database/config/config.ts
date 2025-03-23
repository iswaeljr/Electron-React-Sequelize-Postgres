import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { CarregarArquivoConfig } from './index'

dotenv.config(); // Carrega variáveis do .env

const {database, user, password, host} = CarregarArquivoConfig();

// Criação da instância Sequelize
const sequelize = new Sequelize(
    database || 'database_name',
    user || 'user',
    password || '',
    {
      host: host || 'localhost',
      dialect: 'postgres', // ou 'mysql', 'sqlite', 'mariadb'
      logging: false, // Logar queries (pode ser desativado em produção)
    }
  );

  const sequelizeSqlServer = new Sequelize(
    process.env.DB_NAME2 || 'database_name',
    process.env.DB_USER2 || 'user',
    process.env.DB_PASSWORD2 || '',
    {
      host: process.env.DB_HOST2 || 'localhost',
      dialect: 'mssql', // ou 'mysql', 'sqlite', 'mariadb'
      logging: false, // Logar queries (pode ser desativado em produção)
    }
  );
  
  export { sequelize, sequelizeSqlServer };
  