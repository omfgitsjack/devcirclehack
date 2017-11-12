let messenger;_3fa‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_3fa‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_3fa‍.w("../../replyTemplates/urlButton",[["default",function(v){urlButton=v}]]);let Welcome;_3fa‍.w("../Welcome",[["default",function(v){Welcome=v}]]);let AmericanRates;_3fa‍.w("./AmericanRates",[["default",function(v){AmericanRates=v}]]);let CanadianRates;_3fa‍.w("./CanadianRates",[["default",function(v){CanadianRates=v}]]);








const actionName = "SHIPPING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We offer flat rate shipping! What best describes what you're looking for?`,
      quick_replies: [
        textButton("US Rates", AmericanRates.actionName, {}),
        textButton("Canadian Rates", CanadianRates.actionName, {}),
        // urlButton("Learn more", "https://candyboxx.com/pages/faq", {})
        textButton("Go back", Welcome.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_3fa‍.d({
  actionName,
  handler
});
