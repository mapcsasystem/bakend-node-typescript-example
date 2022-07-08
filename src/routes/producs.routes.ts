import { Request, Response, Router } from 'express';
const router:Router = Router();
router.get('/', (_req: Request, res: Response) => {
    res.json({
        msg: 'get all products',
        status: 'ok'
    });
});
// router.get('/:id',  (req: Request, res: Response) => { return; });
// router.put('/:id', (req: Request, res: Response) => { return; });
// router.delete('/:id',  (req: Request, res: Response) => { return; });

export default router;