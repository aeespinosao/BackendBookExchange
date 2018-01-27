import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hola',(req:Request, res:Response) => {
    res.send("hola mundo");
});

export default router;