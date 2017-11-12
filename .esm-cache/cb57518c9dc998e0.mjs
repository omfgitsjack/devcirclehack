let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let LingerieSizing;_9dc‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);




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

_9dc‍.d({
  actionName,
  handler
});
