import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService.js";

class RemoveOrderController{
    async handle(req:Request, res:Response){
        const removeOrderService = new RemoveOrderService();

        const order_id = req.query.order_id as string;
        const order = await removeOrderService.execute({
            order_id
        });

        return res.json(order);
    }
}

export {RemoveOrderController}