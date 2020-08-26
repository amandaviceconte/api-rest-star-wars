# API REST de planetas de Star Wars
## Rodando a aplicação


<p>Baixe o projeto, instale os pacotes e inicie: </p>

> `npm install`

> `npm start`
<p>Caso queira popular o banco com alguns exemplos de planetas já prontos:</p>

> `mongod`

> `mongo planetAPI < planetsJson.js`
<p>Isto irá popular o banco com o conteúdo de planetsJson.js.</p>
<br>

#### Para adicionar um novo planeta, utilize uma ferramenta como o [Postman](https://www.postman.com/downloads/) para enviar as requisições HTTP
<li>Em uma requisição do tipo POST, utilize a url:</li>

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
