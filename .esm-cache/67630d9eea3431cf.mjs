let messenger;_ea3‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_ea3‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let ReturnProcess;_ea3‍.w("./ReturnProcess",[["default",function(v){ReturnProcess=v}]]);let Refunds;_ea3‍.w("./Refunds",[["default",function(v){Refunds=v}]]);





const actionName = "RETURNS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We're sorry you're not loving what you ordered, but don't worry - you can exchange any item purchased online!`,
      quick_replies: [
        textButton("How long does it take?", ReturnProcess.actionName, {}),
        textButton("Can I get a full refund?", Refunds.actionName, {})
        // urlButton("Our exchange policy", "https://candyboxx.com/pages/faq", {}),
        // urlButton("Go back", "https://candyboxx.com/pages/fa", {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_ea3‍.d({
  actionName,
  handler
});
