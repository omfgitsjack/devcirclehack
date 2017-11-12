let messenger;_a78‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_a78‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_a78‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




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

_a78‍.d({
  actionName,
  handler
});
