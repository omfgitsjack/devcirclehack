let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_051‍.w("../../replyTemplates/urlButton",[["default",function(v){urlButton=v}]]);let Welcome;_051‍.w("../Welcome",[["default",function(v){Welcome=v}]]);let AmericanRates;_051‍.w("./AmericanRates",[["default",function(v){AmericanRates=v}]]);let CanadianRates;_051‍.w("./CanadianRates",[["default",function(v){CanadianRates=v}]]);








const actionName = "SHIPPING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `We offer flat rate shipping! What best describes what you're looking for?`,
          buttons: [
            textButton("US Rates", AmericanRates.actionName, {}),
            textButton("Canadian Rates", CanadianRates.actionName, {}),
            urlButton("Learn more!", "https://candyboxx.com/pages/faq"),
            textButton("Go back", Welcome.actionName, {})
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_051‍.d({
  actionName,
  handler
});
