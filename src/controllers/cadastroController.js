var usuarioModel = require("../models/usuarioModel");

function buscarPorEmail(req, res) {
  var email = req.query.email;

  usuarioModelModel.buscarPorEmailj(email).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  usuarioModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var idUsuario = req.params.idUsuario;

  usuarioModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
var email = req.body.email
  var sobrenome = req.body.sobrenome
  var nome = req.body.nome
    usuarioModel.buscarPorCnpj(cnpj).then((resultado) => {
      if (resultado.length > 0) {
        res
          .status(401)
          .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
      } else {
        usuarioModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
          res.status(201).json(resultado);
        });
      }
    });
}

module.exports = {
  buscarPorEmail,
  buscarPorId,
  listar,
};
