const request = require('supertest');
const app = require('../index');

describe('API', () => {
  it('method1', async () => {
    const res = await request(app).get('/api/method1');
    expect(res.statusCode).toBe(200);
  });
});