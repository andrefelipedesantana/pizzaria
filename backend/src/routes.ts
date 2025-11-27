import { Router } from 'express';
import { CreateUserControler } from './controllers/user/CreateUserController.js';
import { AuthUserControler } from './controllers/user/AuthUserControler.js';
import { DetailUserControler } from './controllers/user/DetailUserController.js';
import { isAuthenticated } from './middlewares/isAuthenticated.js';
import { CreateCategoryController } from './controllers/category/CreateCategoryController.js';
import { ListCategoryController } from './controllers/category/ListCategoryController.js';
import { CreateProductController } from './controllers/product/CreateProductController.js';
import { FilterProductController } from './controllers/product/FilterProductController.js';
import { CreateOrderController } from './controllers/order/CreateOrderController.js';
import { RemoveOrderController } from './controllers/order/RemoveOrderController.js';
import { CreateItemController } from './controllers/item/CreateItemController.js';
import { AddItemController } from './controllers/order/AddItemController.js';
import { RemoveItemController } from './controllers/item/RemoveItemController.js';
import { RemoveItemOrderController } from './controllers/order/RemoveItemOrderService.js';
import uploadConfig from './config/multer.js';
import multer from 'multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


router.post('/users', new CreateUserControler().handle);

router.post('/session', new AuthUserControler().handle);

router.get('/me',isAuthenticated, new DetailUserControler().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/category', isAuthenticated, new ListCategoryController().handle);

router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new FilterProductController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new CreateItemController().handle);

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order/delete', isAuthenticated, new RemoveItemOrderController().handle);
export { router };