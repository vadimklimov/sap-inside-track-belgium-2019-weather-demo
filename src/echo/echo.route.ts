import { Request, Response, Router } from 'express';

export const echoRouter: Router = Router();

echoRouter.get('/', (req: Request, res: Response): void => {
  const prefix = 'ECHO';
  const text: string | undefined = req.query.text;

  res.status(200);
  res.json({
    in: text,
    out: `${prefix} - ${text}`
  });
});
