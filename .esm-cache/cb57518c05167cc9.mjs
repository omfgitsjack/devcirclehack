let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let LingerieSizing;_051‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);




const actionName = "CURVY_FIT";
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
          text: `Take a look at our sizing chart!`,
          buttons: [
            urlButton("Click to view", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", LingerieSize.actionName, {} )
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
