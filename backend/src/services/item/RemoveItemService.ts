import prismaClient from "../../prisma/index.js";

interface ItemRequest {
  id: string;
}

class RemoveItemService {
  async execute({ id }: ItemRequest) {
    const item = await prismaClient.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new Error("Item não encontrado");
    }

    const itemRemovido = await prismaClient.item.delete({
      where: { id },
    });

    return itemRemovido;
  }
}

export { RemoveItemService };
