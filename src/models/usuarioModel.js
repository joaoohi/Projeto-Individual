var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
      SELECT idCadastro, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, ddd, celular, email, senha, confirmar_senha, instrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, ddd, celular, email, senha, confirmar_senha, instrumento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, ddd, celular, email, senha, confirmar_senha, instrumento) VALUES ('${nome}', '${sobrenome}','${ddd}', '${celular}', 
        '${email}', '${senha}', '${confirmar_senha}', '${instrumento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarResposta(numeroPergunta, resposta, idcadastro){
    var instrucaoSql = 
    `
    INSERT INTO quiz (pergunta, resposta, fkUsuario) VALUES ('${numeroPergunta}', '${resposta}', '${idcadastro}');
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function quiz (idcadastro){
    var instrucaoSql = 
    `
    select 
SUM(CASE WHEN resposta = 1 THEN 1 ELSE 0 END) AS qtd_certa,
  SUM(CASE WHEN resposta = 0 THEN 1 ELSE 0 END) AS qtd_errada
 from quiz where fkUsuario =  '${idcadastro}'; 
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrar,
    cadastrarResposta,
    quiz
};