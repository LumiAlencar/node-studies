const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProdutos);
router.get("/id=:id", controller.getProdutosById);
router.get("/nm=:nome", controller.getProdutosByName);

module.exports = router;
