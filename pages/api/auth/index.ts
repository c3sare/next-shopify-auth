import { shopify } from "@/libs/shopify";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return shopify.auth.begin({
    shop: shopify.utils.sanitizeShop(
      process.env.SHOPIFY_SHOP_URL as string,
      true
    )!,
    callbackPath: "/api/auth/callback",
    isOnline: false,
    rawRequest: req,
    rawResponse: res,
  });
}
