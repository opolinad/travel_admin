import express from 'express';
import * as dotenv from 'dotenv';

import routes from './routes';



class App {
  public app;

  constructor() {
    this.app = express();
    this.routes();
    this.dotenv();
    this.app.listen(process.env.PORT, () => {
        console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  }

  routes() {
    this.app.use(routes);
  }

  dotenv() {
    dotenv.config();
  }
}

export default new App().app;