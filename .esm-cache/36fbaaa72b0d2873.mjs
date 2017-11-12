let messenger;_2b0‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_2b0‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetShipping;_2b0‍.w("./GetShipping",[["default",function(v){GetShipping=v}]]);




const actionName = "AMERICAN_RATES";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $7.`,
      quick_replies: [
        // urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),
        textButton("Go back", GetShipping.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_2b0‍.d({
  actionName,
  handler
});
