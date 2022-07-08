import express, { Application } from 'express';
import categoriesRouter from './categories.routes';
import productsRouter from './producs.routes';
import usersRouter from './users.routes';

const routerApiV1 = (app: Application) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
};

export default routerApiV1;