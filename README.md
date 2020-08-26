# API REST de planetas de Star Wars
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

> Adicione no body um objeto JSON contendo name, climate e terrain.

#### Para listar todos os planetas:

> `http://localhost:4000/api/planets`

#### Para buscar um planeta pelo ID:

> `http://localhost:4000/api/planets/<id>`

#### Para buscar um planeta pelo nome:

> `http://localhost:4000/api/planets/name/<nome do planeta>`

> Exemplos:

```
http://localhost:4000/api/planets/name/Mustafar
http://localhost:4000/api/planets/name/Yavin 4
```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
