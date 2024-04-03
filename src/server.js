import Hapi from "@hapi/hapi";
import routes from "./routes/routes.js";

async function init() {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();
