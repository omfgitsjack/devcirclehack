let messenger;_c02‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_c02‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_c02‍.w("../services/shopify",[["default",function(v){shopify=v}]]);let GetProductType;_c02‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);let getUserSettings,setUserSettings;_c02‍.w("../services/userData",[["getUserSettings",function(v){getUserSettings=v}],["setUserSettings",function(v){setUserSettings=v}]]);






const actionName = "GetProductType";
const handler = async (recipientId, requestPayload) => {
  setUserSettings(recipientId, {
    productGender: requestPayload.productGender
  });
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We can help with that. What kind of ${requestPayload.productGender}'s items?`
    }
  };

  messenger.callSendAPI(messageData);
};

_c02‍.d({
  actionName,
  handler
});
