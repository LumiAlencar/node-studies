const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProdutos);
router.get("/:id", controller.getProdutosById);

module.exports = router;
