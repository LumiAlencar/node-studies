const getProdutos = "SELECT * FROM Produto";
const getProdutosById = "SELECT * FROM Produtos WHERE id = $1"
const getProdutosByName = "SELECT * FROM Produtos WHERE nome = $1"

module.exports = {
    getProdutos,
    getProdutosById,
    getProdutosByName,
}