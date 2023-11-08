const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data.json');

app.use(express.json())
app.use(cors())

app.get("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

app.get("/clients", function(req, res) {
    console.log(req.query);
    const { name } = req.query;
    const client = data.find(cli => cli.name.includes(name));

    if (!client) return res.status(204).json();

    res.json(client);
});

app.put("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json()

    const { name } = req.body

    client.name = name;

    res.json(client)
});

app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id === id);

    req.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log("Server in running...")
});
