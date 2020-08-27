# API REST de planetas de Star Wars

## Sobre o projeto

#### Trata-se de uma API REST feita em node.js com informações sobre planetas do Star Wars como nome, clima, terreno e quantidade de aparições em filmes. 
#### Esta API permite adicionar, listar e remover planetas. Também permite que seja realizada uma busca pelo ID do planeta ou pelo nome do planeta. 
#### A motivação por trás deste projeto foi participar de um desafio da B2W e aprimorar os meus conhecimentos em desenvolvimento back-end.

## Rodando a aplicação


<p>Baixe o projeto, instale os pacotes e inicie: </p>

> `npm install`

> `npm start`

Caso queira popular o banco com alguns exemplos de planetas já prontos, baixe o [MongoDB](https://www.mongodb.com/try/download/community), inicie o banco e insira os dados:

> `mongod`

> `mongo planetAPI < planetsJson.js`
<p>Isto irá popular o banco com o conteúdo de planetsJson.js.</p>

#### Para adicionar um novo planeta, utilize uma ferramenta como o [Postman](https://www.postman.com/downloads/) para enviar as requisições HTTP
Em uma requisição do tipo POST, utilize a url:

> `http://localhost:4000/api/planets`

> Adicione no body um objeto JSON (como o exemplo a seguir) contendo name, climate e terrain:

```
{
   "name": "Tatooine",
   "climate": "Árido",
   "terrain": "Deserto"
}
```

#### Para listar todos os planetas:

> `http://localhost:4000/api/planets`

#### Para buscar um planeta pelo ID:

> `http://localhost:4000/api/planets/<id>`

#### Para buscar um planeta pelo nome:

> `http://localhost:4000/api/planets?name=<nome do planeta>`

> Exemplos:

```
http://localhost:4000/api/planets?name=Mustafar
http://localhost:4000/api/planets?name=Yavin 4
```

#### Para remover um planeta, envie uma requisição HTTP DELETE por uma ferramenta como o [Postman](https://www.postman.com/downloads/), utilizando a URL:
`http://localhost:4000/api/planets/{_id}`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
