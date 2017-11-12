let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let urlButton;_9dc‍.w("../../replyTemplates/urlButton.js",[["default",function(v){urlButton=v}]]);let FindYourSizeMenu;_9dc‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);





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
          text: `Take a look at our panties sizing chart!`,
          buttons: [
            urlButton("Go Back", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", FindYourSizeMenu.actionName, {})
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_9dc‍.d({
  actionName,
  handler
});
