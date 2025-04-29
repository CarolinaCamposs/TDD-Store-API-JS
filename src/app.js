const express = require('express');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json()); // Middleware para entender JSON
app.use(productRoutes); // Conectar as rotas

module.exports = app;
