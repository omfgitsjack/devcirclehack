let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_051‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




const actionName = "HIPS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure around the fullest portion of your hips and backside.`,
      quick_replies: [textButton("Go Back", HowToMeasure.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_051‍.d({
  actionName,
  handler
});
