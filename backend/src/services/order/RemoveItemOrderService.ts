import prismaClient from "../../prisma/index.js";

interface ItemRequest{
    item_id: string;
}

class RemoveItemOrderService{
    async execute({item_id}:ItemRequest){
        
        const order = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })
        return order;
    }
}

export {RemoveItemOrderService}