import express, { Request, Response } from "express";
import { Order } from "../models/shipping.types";
import { getShippingRule } from "../services/shipping/shipping";

export function shippingRoutes(app: express.Application): void {
  app.post("/shipping", async (req: Request, res: Response) => {
    try {
      const { weight, price, postcode } = req.body as Order;
      const rule = getShippingRule(weight, price, postcode);

      res.status(200).json(rule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
