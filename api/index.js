export const config = {
  runtime: "nodejs",
};

import handler from "../dist/server/server.js";

export default function (request) {
  const host = request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const url = new URL(request.url, `${proto}://${host}`);

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const absoluteRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: hasBody ? request.body : undefined,
    duplex: hasBody ? "half" : undefined,
  });

  return handler.fetch(absoluteRequest, process.env, {});
}
