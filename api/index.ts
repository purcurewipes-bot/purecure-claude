export const config = {
  runtime: "nodejs",
};

// @ts-expect-error - build output generated at build time, no type declarations
import handler from "../dist/server/server.js";

export default function (request: Request) {
  return handler.fetch(request, process.env, {});
}
