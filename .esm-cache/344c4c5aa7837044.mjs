let messenger;_a78‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_a78‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_a78‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




const actionName = "BUST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure loosely around the fullest part of your bust (usually over the nipples), keeping the tape measure straight all the way around your body.`,
      quick_replies: [
        textButton("Go Back", HowToMeasure.actionName, {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_a78‍.d({
  actionName,
  handler
});
