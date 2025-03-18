import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis do .env

// Criação da instância Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME || 'database_name',
    process.env.DB_USER || 'user',
    process.env.DB_PASSWORD || '',
    {
      host: process.env.DB_HOST || 'localhost',
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
  