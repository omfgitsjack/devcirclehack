let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let FindYourSizeMenu;_051‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);




const actionName = "BRA_SIZING";
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
          text: `Take a look at our bra sizing chart!`,
          buttons: [
            urlButton("Click to view", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", FindYourSizeMenu.actionName, {} )
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_051‍.d({
  actionName,
  handler
});
