let messenger;_b4a‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_b4a‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetShipping;_b4a‍.w("./GetShipping",[["default",function(v){GetShipping=v}]]);




const actionName = "CANADIAN_RATES";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $14.`,
      quick_replies: [
        // urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),
        textButton("Go back", GetShipping.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_b4a‍.d({
  actionName,
  handler
});
