
import { DetailUserService } from "../../services/user/DetailUserService.js";
import { Response, Request } from "express";


class DetailUserControler{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;
        
        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute(user_id);

        return res.json(user);
    }
}

export {DetailUserControler}