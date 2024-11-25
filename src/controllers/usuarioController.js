var usuarioModel = require("../models/usuarioModel");
var teoriamusical = require("../models/teoriamusicalModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha== undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            email: resultadoAutenticar[0].email,
                            idCadastro: resultadoAutenticar[0].idCadastro

                        });
                        // teoriamusical.buscar(resultadoAutenticar[0].idUsuario)
                        //     .then((resultado) => {
                        //         if (resultado.length > 0) {
                        //             res.json({
                        //                 email: resultadoAutenticar[0].email,
                        //                 senha: resultadoAutenticar[0].senha,
                            
                        //             });
                        //         } 
                        //     })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}



function cadastrarResposta(req, res){

    var pergunta = req.body.numeroPerguntaServer;
    var resposta = req.body.respostaServer;
    var idcadastro = req.body.idcadastroServer;
    console.log(idcadastro)
    usuarioModel.cadastrarResposta(pergunta, resposta, idcadastro)
    .then(
        function (resultado) {
            res.json(resultado);
            res.json({
                numeroPergunta: resultado[0].numeroPergunta,
                resposta: resultado[0].resposta,
                idcadastro: resultado[0].idcadastro
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
           
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function quiz(req, res){

    var idcadastro = req.body.idcadastroServer;

    usuarioModel.quiz(idcadastro)

    .then(
        function (resultado) {
            res.json(resultado);
            res.json({
                idcadastro: resultado[0].idcadastro
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
           
            res.status(500).json(erro.sqlMessage);
        }
    );
}




function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var ddd = req.body.dddServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var confirmar_senha = req.body.confirmarServer;
    var instrumento = req.body.instrumentoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (ddd == undefined) {
        res.status(400).send("Seu DDD está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else if (email == undefined){
        res.status(400).send("Seu email está undefined!");
    } else if(senha == undefined){
        res.status(400).send("Sua senha está undefined!");
    } else if(confirmar_senha == undefined){
        res.status(400).send("Seu confirmar senha está undefined!");
    } else if(instrumento == undefined){
        res.status(400).send("Seu instrumento está undefined!");
    }

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, ddd, celular, email, senha, confirmar_senha, instrumento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    autenticar,
    cadastrar,
    cadastrarResposta,
    quiz
}