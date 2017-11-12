let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_135‍.w("../../replyTemplates/urlButton.js",[["default",function(v){urlButton=v}]]);let FindYourSizeMenu;_135‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);





const actionName = "LINGERIE_SIZING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `Take a look at our panties sizing chart!`, //TODO SHOW CHART
          buttons: [
            urlButton("Go Back", "https://candyboxx.com/pages/sizing") //FIX
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
