import shopify from "./shopify";

let products = null;
let dTags = {};
let dProductType = {};

const filterProductType = productType => {
  const keys = productType
    .split(" - ")
    .filter(key => key !== "Women")
    .filter(key => key !== "Apparel");

  return keys;
};

const extractData = async () => {
  products = [];
  const productCategories = await shopify.product.list({ limit: 120 });

  products = productCategories.map(product => {
    return {
      id: product.id,
      tags: product.tags.split(", "),
      productType: filterProductType(product.product_type).join(" - ")
    };
  });

  products.forEach(product => {
    product.tags.forEach(tag => {
      if (dTags[tag]) {
        dTags[tag].push(product.id);
      } else {
        dTags[tag] = [product.id];
      }
    });

    if (dProductType[product.productType]) {
      dProductType[product.productType].push(product.id);
    } else {
      dProductType[product.productType] = [product.id];
    }
  });

  return {
    dTags,
    dProductType
  };
};

const getProductTypeCount = async () => {
  const { dProductType } = await getProducts();

  const copy = { ...dProductType };
  for (let key in copy) {
    copy[key] = copy[key].length;
  }

  return copy;
};

const getProducts = async () => {
  if (!products) {
    await extractData();
  }

  return {
    products,
    dTags,
    dProductType
  };
};

export default {
  getProducts
};
