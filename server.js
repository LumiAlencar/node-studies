const express = require('express');
const cors = require('cors')
const produtoRoutes = require('./src/produto/routes')
const data = require('./data.json');
const e = require('express');

const app = express();
const port = 3000;

app.use("/api/v1/produtos", produtoRoutes)
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/clients/:id", (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

app.get("/clients", (req, res) => {
    var { name } = req.query;
    const client = data.find(cli => cli.name.toLowerCase().includes(name.toLocaleLowerCase()));

    if (!client) return res.status(204).json();

    res.json(client);
});

app.put("/clients/:id", (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json()

    const { name } = req.body

    client.name = name;

    res.json(client)
});

app.delete("/clients/:id", (req, res) => {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id === id);

    req.json(clientsFiltered);
});

app.listen(port, () => { console.log(`Server in running on ${port}`) });
