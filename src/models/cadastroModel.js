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

function cadastrar(nome, sobrenome, ddd, celular, email, senha, confirmar_senha, instrumento) {
  var instrucaoSql = `INSERT INTO usuario VALUES ('${nome}', '${sobrenomej}', '${ddd}', '${celular}', '${email}', '${senha}', '${confirmar_senha}', '${instrumento}' )`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarPorId, listar, buscarPorEmail};
