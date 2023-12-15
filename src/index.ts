import app from './main.tsx'
const server = Bun.serve({
  port: 3000,
  async fetch(request: Request, server: Server) {
  return app.handle(request)
  }
});

console.log(`🐯Listening on http://localhost:${server.port}`);
