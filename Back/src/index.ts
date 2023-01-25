import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import routes from './routes';



class App {
  public app;

  constructor() {
    this.app = express();
    this.dotenv();
    this.useCors();
    this.routes();
    this.app.listen(process.env.PORT, () => {
        console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  }
  dotenv() {
    dotenv.config();
  }

  useCors(){
    const options:cors.CorsOptions = {
      origin: [process.env.FRONT_URL]
    };
    this.app.use(cors(options));
  }
  
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;