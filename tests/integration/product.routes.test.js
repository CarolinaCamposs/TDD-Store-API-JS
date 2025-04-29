const request = require('supertest');
const app = require('../../src/app');

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
});
