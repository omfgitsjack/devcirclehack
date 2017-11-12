let shopify;_966‍.w("./shopify",[["default",function(v){shopify=v}]]);

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

_966‍.d({
  getProducts
});
