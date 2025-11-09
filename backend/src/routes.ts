import { Router } from 'express';
import { CreateUserControler } from './controllers/user/CreateUserController.js';
import { AuthUserControler } from './controllers/user/AuthUserControler.js';
import { DetailUserControler } from './controllers/user/DetailUserController.js';
import { isAuthenticated } from './middlewares/isAuthenticated.js';

const router = Router();

router.post('/users', new CreateUserControler().handle);

router.post('/session', new AuthUserControler().handle);



router.get('/me',isAuthenticated, new DetailUserControler().handle);


export { router };