import prismaClient from "../../prisma/index.js";

class ListOrderService{

    async execute(){
        const orders = prismaClient.order.findMany({
            where:{
                draft: false
            }
        })

        return orders;
    }
}

export {ListOrderService};