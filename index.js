//                          CRIAÇÃO DO SERVIDOR BÁSICO DO BACKEND
// importação do express armazenando na variável 'express'
const express = require('express')
// nome da aplicação, nome do server: APP
const app = express()
// toda aplicação precisa de uma porta na url http
const port = 3001
//          API
// get, pegar
// post, enviar ou criar um recurso no servidor
// put, edita tudo
// delete, 
// patch, edita parcialmente

// app.get = pegar os dados '/' na raiz
// requisição ao servidor - resposta do servidor
// (req, res) => retorno da função {} arrow function: sem parametro
app.get('/', (requisicao, resposta) => {
    // envie a resposta
    resposta.send('olá mundo')
})
app.get('/senac', (requisicao, resposta) => {
    // envie a resposta
    resposta.send('olá senac')
})
// ouvir o retorno do servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
