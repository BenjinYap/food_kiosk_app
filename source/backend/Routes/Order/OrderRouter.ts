import express, {Router, Request, Response} from "express";
import {CategoryRepoMock} from "../../Models/Category/CategoryRepoMock";
import {ProductRepoMock} from "../../Models/Product/ProductRepoMock";
import {CategoryRepoInterface} from "../../Models/Category/CategoryRepoInterface";
import {ProductRepoInterface} from "../../Models/Product/ProductRepoInterface";

const router: Router = express.Router();
const categoryRepo: CategoryRepoInterface = new CategoryRepoMock();
const productRepo: ProductRepoInterface = new ProductRepoMock();

router.get('/', (req: Request, res: Response): void => {
  res.send('hella');
});

router.get('/cart_count', (req: Request, res: Response): void => {
  res.send('cart_count');
});

export {router as OrderRouter};