let messenger;_a78‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_a78‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let ContactUsMenu;_a78‍.w("./ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);




const actionName = "LEAVE_MESSAGE";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Leave a message and we'll get back to you as soon as we can!`,
      quick_replies: [textButton("Back", ContactUsMenu.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_a78‍.d({
  actionName,
  handler
});
