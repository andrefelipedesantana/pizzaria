import { CreateProductService } from "../../services/product/CreateProductService.js";
import { Request, Response } from "express";

class CreateProductController{
    async handle(req: Request, res: Response){
        const createProductController = new CreateProductService();

        const {name, description, price, category_id} = req.body;

        if(!req.file){
            throw new Error("error upload file")
        }else{
            const {originalname, filename: banner} = req.file;

            const product = await createProductController.execute({
                name,
                description, 
                price, 
                banner,
                category_id
            })

            return res.json(product)
        }
    }
}


export {CreateProductController}