let messenger;_d91‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_d91‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_d91‍.w("../services/shopify",[["default",function(v){shopify=v}]]);



const extractData = async () => {
  const productCategories = await shopify.product.list({ limit: 120 });
  let dTags = {};

  let dProductType = {};

  let parsedProducts = productCategories.map(product => {
    return {
      id: product.id,
      tags: product.tags.split(", "),
      productType: product.product_type
    };
  });

  parsedProducts.forEach(product => {
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

  // console.log(dProductType);
  console.log(dTags);
};

// extractData()

const actionName = "GetProductCategories";
const handler = async (recipientId, requestPayload) => {
  console.log("searchin for data");

  const productCategories = await shopify.product.list({ limit: 120 });
  console.log("productCategories");
  console.log(productCategories);

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Feel free to search for anything you want or filter by categories`
      // quick_replies: [
      //   // textButton("Checkout our products!"),
      //   textButton("Get 3 products", "QR_GET_PRODUCT_LIST", {}),
      //   textButton("Tell me a joke", TellJokeActionName.actionName, {})
      // ]
    }
  };

  messenger.callSendAPI(messageData);
};

_d91‍.d({
  actionName,
  handler
});
