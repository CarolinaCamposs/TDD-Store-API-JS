const request = require('supertest');
const app = require('../../src/app');

let productId;

beforeEach(async () => {
  const response = await request(app).post('/products').send({
    name: 'Produto de teste',
    price: 100
  });

  productId = response.body._id;  
});

describe('Product Routes', () => {
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send({ name: 'Produto Teste 2', price: 29.99 });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  it('should list all products', async () => {
    const response = await request(app)
      .get('/products')
      .send();

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should update a products name and price', async () => {

    const updateResponse = await request(app)
      .put(`/products/${productId}`).send({
        name: 'Produto Atualizado',
        price: 150
      });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.name).toBe('Produto Atualizado');
    expect(updateResponse.body.price).toBe(150);

  });

  it('should delete product by id', async () => {

    const deleteResponse = await request(app)
      .delete(`/products/${productId}`);

      expect(deleteResponse.status).toBe(200);
      
  });

});
