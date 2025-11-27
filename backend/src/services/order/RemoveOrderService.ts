import prismaClient from "../../prisma/index.js";

interface OrderRequest{
    order_id: string;
}

class RemoveOrderService{
    async execute({order_id}: OrderRequest){
        const removerOrder = await prismaClient.order.delete({
            where:{
                id: order_id
            }
        })

        return removerOrder;
    }
}

export {RemoveOrderService}