import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import routes from './api/routes.js';
const server = express();
const port = process.env.PORT;

routes(server);
server.listen(port, function () {
  console.log('Server started on port: ' + port);
});
