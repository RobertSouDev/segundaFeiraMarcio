const express = require('express');
const req = require('express/lib/request');

const UsuariosRotas = express.Router()

let lista = [
    {
        id: 1,
        nome: 'Admin'
    }
];

UsuariosRotas.get('/usuarios', (request, response) => {
    return response.status(200).json(lista)
})

UsuariosRotas.post('/usuarios', (request, response) => {
    const dados = request.body;
    lista.push(dados);
    return response.status(201).send("Usuario inserido com sucesso");
})

UsuariosRotas.put('/usuarios/:id', (request, response) => {
    const id = request.params.id;
    const indice = lista.findIndex(item => item.id == id)

    const dados = request.body;
    dados.id = id;
    lista[indice] = dados;
    return response.status(201).send("Usuario atualizado com sucesso");
})

UsuariosRotas.delete('/usuarios/:id', (request, response) => {
    const id = request.params.id
    lista = lista.filter(item => item.id != id)
    return response.status(201).send("Usuario removido com sucesso");
})

module.exports = UsuariosRotas