import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/trips', (req: Request, res: Response) => {
  return res.json({
    status: true,
    message: 'Data of trips successfully obtained.',
    data: [
      {
        name: 'Trip 1',
        price: 1000,
        currency: 'EUR'
      },
      {
        name: 'Trip 2',
        price: 1000,
        currency: 'USD'
      },
      {
        name: 'Trip 3',
        price: 3000,
        currency: 'EUR'
      }
    ]
  });
});

export default routes;