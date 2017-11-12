let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let FindYourSizeMenu;_135‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);




const actionName = "LINGERIE_SIZING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Find lingerie that fits right just for you!`, //TODO SHOW CHART
      quick_replies: [
        textButton("Slim Fit", SlimFit.actionName, {}),
        textButton("Curvy Fit", CurvyFit.actionName, {}),
        textButton("Back", FindYourSizeMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
