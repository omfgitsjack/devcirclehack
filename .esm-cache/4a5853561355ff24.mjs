let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let HowToMeasure;_135‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);




const actionName = "CHEST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Use a soft tape measure. To obtain your band size measurement, measure very snugly around your rib cage, just underneath your breasts. It should feel tight. Be sure that the tape measure lies straight all the way around.`,
      quick_replies: [textButton("Go Back", HowToMeasure.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
