import { Response, Request } from "express";
import { FilterProductService } from "../../services/product/FilterProductService.js";


class FilterProductController{
    async handle(req: Request, res:Response){
        const filterProductService = new FilterProductService();

        const category_id = req.query.category_id as string;
        const produtos = await filterProductService.execute({
            category_id
        });

        return res.json(produtos)
    }
}

export {FilterProductController}