const express = require('express');
const app = express();
const UsuariosRotas = require('./src/routes')

// HABILITANDO PASSAGEM VIA BODY
app.use(express.json())

app.get('/', (request, response) => {
    return response.status(200).send("Hello Express")
})

app.use(UsuariosRotas)

app.get('/produtos', (request, response) => {
    const lista = [
        {
            id: '1',
            nome: 'Mouse Pad',
            valor: 15.99
        }
    ]
    return response.status(200).json(lista)
})


// DADOS PASSANDO COM QUERY, PARAMS E BODY
// http://localhost:3000/dados/110?nome=Marcio&sobrenome=Ferreira

app.get('/dados/:id', (request, response) => {
    const query = request.query
    const params = request.params;
    const body = request.body;

    const dados = {
        query: query,
        params: params,
        body: body
    };
    return response.json(dados);
})


app.use('**', (request, response) => {
    return response.status(404).send('Nao encontrada')
})

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando na url http://localhost:3000")
})