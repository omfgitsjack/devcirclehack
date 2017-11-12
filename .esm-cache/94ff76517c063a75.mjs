let config;_7c0‍.w("config",[["default",function(v){config=v}]]);let Shopify;_7c0‍.w("shopify-api-node",[["default",function(v){Shopify=v}]]);


const SHOPIFY_SHOP_NAME = process.env.SHOP_NAME
  ? process.env.SHOP_NAME
  : config.get("sh_shopName");

const SHOPIFY_API_KEY = process.env.SHOP_API_KEY
  ? process.env.SHOP_API_KEY
  : config.get("sh_apiKey");

const SHOPIFY_API_PASSWORD = process.env.SHOP_API_PASSWORD
  ? process.env.SHOP_API_PASSWORD
  : config.get("sh_apiPassword");

const HOST_URL = process.env.HOST_URL
  ? process.env.HOST_URL
  : config.get("host_url");

if (!(SHOPIFY_SHOP_NAME && SHOPIFY_API_KEY && SHOPIFY_API_PASSWORD)) {
  throw new Error("Shopify creds aren't set");
}

const shopify = new Shopify({
  shopName: SHOPIFY_SHOP_NAME,
  apiKey: SHOPIFY_API_KEY,
  password: SHOPIFY_API_PASSWORD
});

_7c0‍.d(shopify);
