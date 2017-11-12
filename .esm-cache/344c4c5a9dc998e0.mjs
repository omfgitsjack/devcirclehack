let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_9dc‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




const actionName = "BUST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure loosely around the fullest part of your bust (usually over the nipples), keeping the tape measure straight all the way around your body.`,
      quick_replies: [
        textButton("Go Back", HowToMeasure.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_9dc‍.d({
  actionName,
  handler
});
