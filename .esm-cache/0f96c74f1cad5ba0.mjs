let TellJokeActionName;_1ca‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_1ca‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_1ca‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_1ca‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);let GetShipping;_1ca‍.w("./Shipping/GetShipping",[["default",function(v){GetShipping=v}]]);let GetReturns;_1ca‍.w("./Returns/GetReturns",[["default",function(v){GetReturns=v}]]);let GetMenOrFemaleProducts;_1ca‍.w("./GetMenOrFemaleProducts",[["default",function(v){GetMenOrFemaleProducts=v}]]);let FindYourSizeMenu;_1ca‍.w("./FindYourSize/FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);let ContactUsMenu;_1ca‍.w("./ContactUs/ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);









const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },

    message: {
      text: `Hey my name is Audrey, how can I help you today? :)`,
      quick_replies: [
        textButton(
          "Checkout our products!",
          GetProductCategories.actionName,
          {}
        ),
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Find your size", FindYourSizeMenu.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {}),
        textButton("Contact Us", ContactUsMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_1ca‍.d({
  actionName,
  handler
});
