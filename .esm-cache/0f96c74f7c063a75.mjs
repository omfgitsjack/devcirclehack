let TellJokeActionName;_7c0‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_7c0‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_7c0‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_7c0‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);




const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Welcome to Candy Boxx! How can i help you today :)`,
      quick_replies: [
        textButton(
          "Checkout our products!",
          GetProductCategories.actionName,
          {}
        ),
        textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        textButton("Tell me a joke", TellJokeActionName.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_7c0‍.d({
  actionName,
  handler
});
