const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {

  });

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
