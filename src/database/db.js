const mongoose = require('mongoose');

const dbName = process.env.NODE_ENV === 'test' ? 'tdd_store_test' : 'tdd_store';
const mongoURI = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão no MongoDB:'));
db.once('open', () => console.log('Conectado ao MongoDB!'));

module.exports = mongoose;
