let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let FindYourSizeMenu;_135‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);




const actionName = "BRA_SIZING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Take a look at our bra sizing chart!`, //TODO SHOW CHART
      quick_replies: [
        // textButton("How to Measure", HowToMeasure.actionName, {}),
        // urlButton("Back", FindYourSizeMenu.actionName, {}), //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
