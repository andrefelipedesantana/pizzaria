import prismaClient from "../../prisma/index.js";

interface ProductRequest{
    category_id: string;
}

class FilterProductService{
    async execute({category_id}: ProductRequest){
        const produtos = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return produtos;
    }
}

export {FilterProductService}