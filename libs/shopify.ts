import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_CLIENT_ID as string,
  apiSecretKey: process.env.SHOPIFY_CLIENT_SECRET as string,
  scopes: ["read_products"],
  hostName: process.env.SITE_URL as string,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
  hostScheme: "http",
});
