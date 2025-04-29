const { connectDatabase, mongoose } = require('../src/database/db');


afterAll(async () => {
  // await mongoose.connection.dropDatabase(); // limpa o banco de teste
  await mongoose.connection.close(); 
});
