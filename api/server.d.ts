declare module "../dist/server/server.js" {
  const handler: {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };
  export default handler;
}
