import { ListCategoryService } from "../../services/category/ListCategoryService.js";
import { Request, Response } from "express";

class ListCategoryController{
    async handle(req: Request, res: Response){

        const listCategoryService =  new ListCategoryService();

        const categories = await listCategoryService.execute();

        return res.json(categories)
    }
}

export {ListCategoryController}