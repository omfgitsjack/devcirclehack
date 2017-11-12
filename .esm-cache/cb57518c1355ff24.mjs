let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let LingerieSizing;_135‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);




const actionName = "CURVY_FIT";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Take a look at our sizing chart!`, //TODO SHOW CHART
      quick_replies: [textButton("Back", LingerieSizing.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
