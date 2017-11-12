let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_135‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




const actionName = "BUST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure loosely around the fullest part of your bust (usually over the nipples), keeping the tape measure straight all the way around your body.`,
      quick_replies: [
        textButton("Back", HowToMeasure.actionName, {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
