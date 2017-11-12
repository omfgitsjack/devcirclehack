let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let ContactUsMenu;_9dc‍.w("./ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);




const actionName = "LEAVE_MESSAGE";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Leave a message and we'll get back to you as soon as we can!`,
      quick_replies: [textButton("Go Back", ContactUsMenu.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

_9dc‍.d({
  actionName,
  handler
});
