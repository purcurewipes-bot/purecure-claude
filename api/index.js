export const config = {
  runtime: "nodejs",
};

import handler from "../dist/server/server.js";

export default function (request) {
  return handler.fetch(request, process.env, {});
}
