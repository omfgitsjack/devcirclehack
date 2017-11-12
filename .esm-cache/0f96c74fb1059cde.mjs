let TellJokeActionName;_b10‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_b10‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_b10‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_b10‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);let GetShipping;_b10‍.w("./Shipping/GetShipping",[["default",function(v){GetShipping=v}]]);let GetReturns;_b10‍.w("./Returns/GetReturns",[["default",function(v){GetReturns=v}]]);let GetMenOrFemaleProducts;_b10‍.w("./GetMenOrFemaleProducts",[["default",function(v){GetMenOrFemaleProducts=v}]]);let FindYourSizeMenu;_b10‍.w("./FindYourSize/FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);let ContactUsMenu;_b10‍.w("./ContactUs/ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);









const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Welcome to Candy Boxx! How can I help you today? :)`,
      quick_replies: [
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {}),
        textButton("Find your size", FindYourSizeMenu.actionName, {}),
        textButton("Contact Us", ContactUsMenu.actionName, {})

        // textButton("I don't know what to get for my wife")
        // textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        // textButton("Tell me a joke", TellJokeActionName.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_b10‍.d({
  actionName,
  handler
});
