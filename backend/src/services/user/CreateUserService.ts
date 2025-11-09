import prismaClient from "../../prisma/index.js";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUseService{
    async execute({name, email, password}:UserRequest){

        if(!email){
        throw new Error("Email incorreto")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists) throw new Error("Usuário já existe");

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                name: true,
                email: true,
                id: true
            }
        })
        
    

        return user;

    }
}

export {CreateUseService};