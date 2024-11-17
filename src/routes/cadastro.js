var express = require("express");
var router = express.Router();

var cadastroController = require("../controllers/cadastroController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    cadastroController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    cadastroController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  cadastroController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  cadastroController.listar(req, res);
});

module.exports = router;