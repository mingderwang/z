export default {
  async fetch(request: Request, server: Server) {
    const text = "Hello from Bun on Vercel!\n";

    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
  },
};
