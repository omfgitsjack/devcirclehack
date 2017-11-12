let TellJokeActionName;_9ad‍.w("./TellJoke",[["default",function(v){TellJokeActionName=v}]]);let messenger;_9ad‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9ad‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductCategories;_9ad‍.w("./GetProductCategories",[["default",function(v){GetProductCategories=v}]]);let GetShipping;_9ad‍.w("./Shipping/GetShipping",[["default",function(v){GetShipping=v}]]);let GetReturns;_9ad‍.w("./Returns/GetReturns",[["default",function(v){GetReturns=v}]]);let GetMenOrFemaleProducts;_9ad‍.w("./GetMenOrFemaleProducts",[["default",function(v){GetMenOrFemaleProducts=v}]]);let FindYourSizeMenu;_9ad‍.w("./FindYourSize/FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);let ContactUsMenu;_9ad‍.w("./ContactUs/ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);let GetDiscounts;_9ad‍.w("./GetDiscounts",[["default",function(v){GetDiscounts=v}]]);










const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },

    message: {
      text: `Hey my name is Audrey, how can I help you today? :)`,
      quick_replies: [
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Find your size", FindYourSizeMenu.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {}),
        textButton("Discounts", GetDiscounts.actionName, {}),
        textButton("Contact Us", ContactUsMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_9ad‍.d({
  actionName,
  handler
});
