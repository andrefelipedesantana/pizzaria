import { Response, Request} from "express";
import { CreateUseService } from "../../services/user/CreateUserService.js";


class CreateUserControler{
    async handle(req: Request, res: Response){

        const {name, email, password} = req.body;

        const createUserSerice = new CreateUseService();

        const user = await createUserSerice.execute({name, email, password});

        return res.json(user)
    }
}

export {CreateUserControler};