var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM usuario WHERE id = '${idUsuario}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idUsuario, nome, email, senha, fkCadastro FROM usuario`;

  return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
  var instrucaoSql = `SELECT * FROM usuario WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}

// function cadastrar(nome, sobrenome, email) {
//   var instrucaoSql = `INSERT INTO usuario (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(instrucaoSql);
// }

module.exports = {buscarPorId, listar, buscarPorEmail};
