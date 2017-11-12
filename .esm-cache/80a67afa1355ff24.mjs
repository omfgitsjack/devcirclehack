let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let ContactUsMenu;_135‍.w("./ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);




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

_135‍.d({
  actionName,
  handler
});
