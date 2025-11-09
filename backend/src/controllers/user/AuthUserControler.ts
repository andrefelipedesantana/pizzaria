import { AuthUserService } from "../../services/user/AuthUserService.js";
import { Response, Request } from "express";

class AuthUserControler{
    async handle(req: Request, res: Response){
        
        const {email, password} = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({email, password});
        
        return res.json(auth);
    }
}

export {AuthUserControler};