const Product = require('../models/Product');

async function createProduct(req, res) {
  try {
    const { name, price } = req.body;
    const product = await Product.create({ name, price });
    return res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
}

async function listProducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    return res.status(500).json({ error: 'Erro ao listar produtos' });
  }
}

module.exports = {
  createProduct,
  listProducts,
};
