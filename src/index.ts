import app from './main.ts'
const server = Bun.serve({
  port: 3001,
  async fetch(request: Request, server: Server) {
  return app.handle(request)
  }
});

console.log(`🐯Listening on http://localhost:${server.port}`);
