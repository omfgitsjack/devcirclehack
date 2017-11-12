let TellJokeActionName;_051‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_051‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_051‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);let GetShipping;_051‍.w("./Shipping/GetShipping",[["default",function(v){GetShipping=v}]]);let GetReturns;_051‍.w("./Returns/GetReturns",[["default",function(v){GetReturns=v}]]);let GetMenOrFemaleProducts;_051‍.w("./GetMenOrFemaleProducts",[["default",function(v){GetMenOrFemaleProducts=v}]]);let FindYourSizeMenu;_051‍.w("./FindYourSize/FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);let ContactUsMenu;_051‍.w("./ContactUs/ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);









const actionName = "MAIN_MENU";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },

    message: {
      text: `Fantastic! We're here to help. What best describes your question?`,
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

_051‍.d({
  actionName,
  handler
});
