let messenger;_a78‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_a78‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let LingerieSizing;_a78‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);




const actionName = "CURVY_FIT";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Take a look at our sizing chart!`, //TODO SHOW CHART
      quick_replies: [textButton("Go Back", LingerieSizing.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_a78‍.d({
  actionName,
  handler
});
