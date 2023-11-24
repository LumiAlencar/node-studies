const getProdutos = "SELECT * FROM Produto";
const getProdutosById = "SELECT * FROM Produto WHERE id = $1"
const getProdutosByName = "SELECT * FROM Produto WHERE nome = $1"

module.exports = {
    getProdutos,
    getProdutosById,
    getProdutosByName,
}