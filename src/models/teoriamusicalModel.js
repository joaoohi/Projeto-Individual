var database = require("../database/config");

function buscar(idUsuario) {

  var instrucaoSql = `SELECT * FROM usuario WHERE idUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(email, senha) {
  
  var instrucaoSql = `INSERT INTO (email, senha) aquario VALUES (${email}, ${senha})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscar,
  cadastrar
}
