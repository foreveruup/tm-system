const request = require('supertest');
const app = require('../app');

describe('App', () => {
    it('should return 404 for undefined routes', async () => {
        const response = await request(app).get('/undefined-route');

        expect(response.status).toBe(404);
    });

    it('should start the server and listen to requests', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(404); // Мы ожидаем 404, потому что это неопределенный маршрут в нашем приложении.
    });
});
