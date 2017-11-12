let messenger;_3d3‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_3d3‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_3d3‍.w("../services/shopify",[["default",function(v){shopify=v}]]);let GetProductType;_3d3‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);let Welcome;_3d3‍.w("./Welcome",[["default",function(v){Welcome=v}]]);let BOT_NAME;_3d3‍.w("../BOT_NAME",[["default",function(v){BOT_NAME=v}]]);let getUserSettings,setUserSettings;_3d3‍.w("../services/userData",[["getUserSettings",function(v){getUserSettings=v}],["setUserSettings",function(v){setUserSettings=v}]]);







// import { getProducts } from "../services/products";

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
    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: `We can help with that. What kind of ${requestPayload.productGender}'s items?`
      }
    };

    messenger.callSendAPI(messageData);
  }
};

_3d3‍.d({
  actionName,
  handler
});
