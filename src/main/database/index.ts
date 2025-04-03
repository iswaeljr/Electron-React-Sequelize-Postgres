import {sequelize, sequelizeSqlServer} from './config/config'; 
import User from './models/User'; 
import Product from './models/Product';
import Usuario from './models/Usuario';

const initializeDatabase = async () => {
  try {
    
    // Inicializa os modelos
    User.initModel(sequelize);
    Product.initModel(sequelize);
    Usuario.initModel(sequelize);

    // Sincroniza o banco de dados (cria as tabelas automaticamente)
    await sequelize.sync({ alter: true }); // `alter: true` ajusta alterações no esquema
    console.log('Banco de dados sincronizado com sucesso!');
    return { success: true }; // Retorna sucesso

  } catch (error) {
    //console.error('Erro ao inicializar o banco de dados:', error);
    return { success: false }; 
  }
};

const InicializeDataBaseSql = async () =>{
   try {
    // Inicializa os modelos
    User.initModel(sequelizeSqlServer);
    Product.initModel(sequelizeSqlServer);
    
    // Sincroniza o banco de dados (cria as tabelas automaticamente)
    await sequelizeSqlServer.sync({ alter: true }); // `alter: true` ajusta alterações no esquema
    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
    throw error; // Opcional: Propaga o erro para fins de depuração
  }
}


export {initializeDatabase, InicializeDataBaseSql}