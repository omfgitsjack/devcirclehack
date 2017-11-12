let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let FindYourSizeMenu;_051‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);




const actionName = "LINGERIE_SIZING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Find lingerie that fits right just for you!`,
      quick_replies: [
        textButton("Slim Fit", SlimFit.actionName, {}),
        textButton("Curvy Fit", CurvyFit.actionName, {}),
        textButton("Go Back", FindYourSizeMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_051‍.d({
  actionName,
  handler
});
