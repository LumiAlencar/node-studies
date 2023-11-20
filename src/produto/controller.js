const pool = require("../../db")
const queries = require("./queries")

const getProdutos = (req, res) => {
    pool.query(queries.getProdutos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProdutosById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProdutosById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getProdutosByName = (req, res) => {
    const nome = parseInt(req.params.nome);
    pool.query(queries.getProdutosByName, [nome], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getProdutos,
    getProdutosById,
    getProdutosByName,
}