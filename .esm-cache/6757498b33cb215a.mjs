let messenger;_33c‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_33c‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_33c‍.w("../services/shopify",[["default",function(v){shopify=v}]]);let GetProductType;_33c‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);let Welcome;_33c‍.w("./Welcome",[["default",function(v){Welcome=v}]]);let BOT_NAME;_33c‍.w("../BOT_NAME",[["default",function(v){BOT_NAME=v}]]);let getUserSettings,setUserSettings;_33c‍.w("../services/userData",[["getUserSettings",function(v){getUserSettings=v}],["setUserSettings",function(v){setUserSettings=v}]]);let products;_33c‍.w("../services/products",[["default",function(v){products=v}]]);let _;_33c‍.w("lodash",[["default",function(v){_=v}]]);










const actionName = "NarrowProductType";
const handler = async (recipientId, requestPayload) => {
  const productTypePrefix = requestPayload.productTypePrefix;

  setUserSettings({
    productTypePrefix: requestPayload.productTypePrefix
  });

  console.log("processing ", productTypePrefix);
  const productTypes = await products.getPopularProductTypes(productTypePrefix);
  const secondLevelTypes = productTypes.map(
    key => key.split(productTypePrefix)[1]
  );
  console.log("product types", secondLevelTypes);

  if (secondLevelTypes.length === 0) {
    // We're at the root level. Let's display the products.
  } else {
    const extractSecondLevel = type => type.split(" - ")[1];
    const categories = _.uniq(secondLevelTypes.map(extractSecondLevel));
    console.log("next level categories:", categories);

    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: `Nice, what kind of ${productTypePrefix} item?`,
        quick_replies: categories.map(category => {
          return textButton(category, actionName, {
            productTypePrefix: productTypePrefix + " - " + category
          });
        })
      }
    };

    messenger.callSendAPI(messageData);
  }
};

_33c‍.d({
  actionName,
  handler
});
