let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_051‍.w("../../replyTemplates/urlButton",[["default",function(v){urlButton=v}]]);let ReturnProcess;_051‍.w("./ReturnProcess",[["default",function(v){ReturnProcess=v}]]);let Refunds;_051‍.w("./Refunds",[["default",function(v){Refunds=v}]]);let Welcome;_051‍.w("../Welcome",[["default",function(v){Welcome=v}]]);








const actionName = "RETURNS";
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
          text: `We're sorry you're not loving what you ordered, but don't worry - you can exchange any item purchased online!`,
          buttons: [
            textButton("How long?", ReturnProcess.actionName, {}),
            textButton("Full refund?", Refunds.actionName, {}),
            urlButton("Exchange Policy", "https://candyboxx.com/pages/faq"),
            textButton("Go Back", Welcome.actionName, {})
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
