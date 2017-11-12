let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetShipping;_9dc‍.w("./GetShipping",[["default",function(v){GetShipping=v}]]);




const actionName = "CANADIAN_RATES";
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
          text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $14.`,
          buttons: [
            urlButton("Learn more!", "https://candyboxx.com/pages/faq"),
            textButton("Go back", GetShipping.actionName, {})
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_9dc‍.d({
  actionName,
  handler
});
