# API REST de planetas de Star Wars
## Rodando a aplicação


<p>Baixe o projeto e rode em um terminal no diretório do projeto o seguinte comando para baixar os pacotes: </p>

>`npm install`
<p>Após finalizadas as instalações, rode o projeto:</p>

>`npm start`
<p>Caso queira popular o banco com alguns exemplos de planetas já prontos, primeiro rode:</p>

> `mongod`
<p>Em um novo terminal, ainda no diretório do projeto, rode:</p>

> `mongo planetAPI < planetsJson.js`
<p>Isto irá popular o banco com o conteúdo de planetsJson.js</p>

### Caso queira adicionar um novo planeta, utilize uma ferramenta como o [Postman](https://www.postman.com/downloads/) para enviar as requisições HTTP
<li>Abra uma nova requisição no Postman</li>
<li>Mude o tipo de requisição para POST</li>
<li>No campo da URL, insira:</li>

`http://localhost:4000/api/planets`
<li>Adicione no body um objeto JSON contendo name, climate e terrain e envie a requisição.</li>
