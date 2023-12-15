import app from '../src/main.ts'
const baseUrl = `${app.server?.hostname}:${app.server?.port}/ping`; 

describe('GET Users suite', () => {

    it('should return a list of users successfully', async () => {
      const req = new Request(baseUrl);
      const res = await app.fetch(req);
      expect(res.status).toEqual(200);
    });
})
