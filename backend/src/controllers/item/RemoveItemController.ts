import { Request, Response } from "express";
import { RemoveItemService } from "../../services/item/RemoveItemService.js";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "ID inválido ou não informado" });
    }

    const removeItemService = new RemoveItemService();

    const itemRemovido = await removeItemService.execute({ id });

    return res.json(itemRemovido);
  }
}

export { RemoveItemController };
