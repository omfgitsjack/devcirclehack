let messenger;_f94‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_f94‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_f94‍.w("../services/shopify",[["default",function(v){shopify=v}]]);let GetProductType;_f94‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);let Welcome;_f94‍.w("./Welcome",[["default",function(v){Welcome=v}]]);let BOT_NAME;_f94‍.w("../BOT_NAME",[["default",function(v){BOT_NAME=v}]]);let getUserSettings,setUserSettings;_f94‍.w("../services/userData",[["getUserSettings",function(v){getUserSettings=v}],["setUserSettings",function(v){setUserSettings=v}]]);let NarrowProductType;_f94‍.w("./NarrowProductType",[["default",function(v){NarrowProductType=v}]]);let products;_f94‍.w("../services/products",[["default",function(v){products=v}]]);let _;_f94‍.w("lodash",[["default",function(v){_=v}]]);











const actionName = "GetProductType";
const handler = async (recipientId, requestPayload) => {
  setUserSettings(recipientId, {
    productGender: requestPayload.productGender
  });

  if (requestPayload.productGender === "men") {
    messenger.callSendAPI({
      recipient: {
        id: recipientId
      },
      message: {
        text: `Sorry, CandyBoxx doesn't have anything for men. Maybe you'd like to buy something for your girlfriend?`,
        quick_replies: [
          textButton(`Great idea ${BOT_NAME}`, actionName, {
            productGender: "women"
          }),
          textButton("Go back", Welcome.actionName, {})
        ]
      }
    });
  } else {
    const productTypes = await products.getPopularProductTypes();
    const extractFirstLevel = type => type.split(" - ")[0];
    const categories = _.uniq(productTypes.map(extractFirstLevel));

    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: `We can help with that. What kind of ${requestPayload.productGender}'s items?`,
        quick_replies: categories.map(category => {
          return textButton(category, NarrowProductType.actionName, {
            productTypePrefix: category
          });
        })
      }
    };

    messenger.callSendAPI(messageData);
  }
};

_f94‍.d({
  actionName,
  handler
});
