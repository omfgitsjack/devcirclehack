let TellJokeActionName;_ba6‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_ba6‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_ba6‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_ba6‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);let GetShipping;_ba6‍.w("./Shipping/GetShipping",[["default",function(v){GetShipping=v}]]);let GetReturns;_ba6‍.w("./Returns/GetReturns",[["default",function(v){GetReturns=v}]]);let GetMenOrFemaleProducts;_ba6‍.w("./GetMenOrFemaleProducts",[["default",function(v){GetMenOrFemaleProducts=v}]]);







const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Welcome to Candy Boxx! How can I help you today? :)`,
      quick_replies: [
        // textButton(
        //   "Checkout our products!",
        //   GetProductCategories.actionName,
        //   {}
        // ),
        // textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        // textButton("Tell me a joke", TellJokeActionName.actionName, {}),
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {})
        // textButton("I don't know what to get for my wife")
        // textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        // textButton("Tell me a joke", TellJokeActionName.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_ba6‍.d({
  actionName,
  handler
});
