let messenger;_b4f‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_b4f‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_b4f‍.w("../../replyTemplates/urlButton",[["default",function(v){urlButton=v}]]);let Welcome;_b4f‍.w("../Welcome",[["default",function(v){Welcome=v}]]);let AmericanRates;_b4f‍.w("./AmericanRates",[["default",function(v){AmericanRates=v}]]);let CanadianRates;_b4f‍.w("./CanadianRates",[["default",function(v){CanadianRates=v}]]);








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
        textButton("Home", Welcome.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_b4f‍.d({
  actionName,
  handler
});
