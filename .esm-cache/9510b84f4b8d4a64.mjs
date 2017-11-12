let shopify;_4b8‍.w("./shopify",[["default",function(v){shopify=v}]]);

let products = null;
let dTags = {};
let dProductType = {};
let productTypeCount = null;

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
  if (!productTypeCount) {
    const { dProductType } = await getProducts();

    const copy = { ...dProductType };
    for (let key in copy) {
      copy[key] = copy[key].length;
    }

    productTypeCount = copy;
  }

  return productTypeCount;
};

const getProductIdsByProductType = async productType => {
  const { dProductType } = await getProducts();

  return dProductType[productType];
};

const getPopularProductTypes = async prefix => {
  const productTypeCount = await getProductTypeCount();

  const popularTypes = Object.entries(productTypeCount)
    .filter(([key, count]) => {
      if (prefix) {
        return key.startsWith(prefix);
      } else {
        return true; // if no prefix we want to return everything
      }
    })
    .sort((a, b) => {
      // sort by popularity
      return b[1] - a[1];
    })
    .map(entry => entry[0]);
  // .map(key => key.split(prefix)[1]); // Grab the new unique product type key

  return popularTypes;
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

_4b8‍.d({
  getProducts,
  getProductTypeCount,
  getPopularProductTypes,
  getProductIdsByProductType
});
