//coloque todo o conteúdo abaixo dentro de umarquivo index.js
//rode o comando “npm init” na mesma pasta doindex.js e apenas aperte Enter para tudo
//rode os comandos “npm install -S express fs” para instalar as dependências
//use o comando “node index” na pasta do index.js para iniciar esse programa

const express = require('express')
const fs = require('fs') 	//fs é o módulo filesystem,para ler arquivos
const app = express()

app.get('/', processRequest)

function processRequest (request, response) {
	readText(request, response)
	console.log('requisição terminou')
	}

function readText (request, response) {  //salve um arquivo teste.txt junto a esse arquivo com qualquer coisa dentro
	fs.readFile('teste.txt', function(err, data) {
		if (err){
			console.log('erro na leitura')
			return response.status(500).send('Erro ao ler o arquivo.')
		}
	response.write(data)
	response.end();
	console.log('leu arquivo')
	});

console.log('Lendo o arquivo, aguarde.')
}

app.listen(3000)