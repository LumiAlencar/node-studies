const getProdutos = "SELECT * FROM Produto";
const getProdutosById = "SELECT * FROM Produtos WHERE id = $1"

module.exports = {
    getProdutos,
    getProdutosById,
}