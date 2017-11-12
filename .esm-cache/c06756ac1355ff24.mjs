let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let CallUs;_135‍.w("./CallUs",[["default",function(v){CallUs=v}]]);let LeaveMessage;_135‍.w("./LeaveMessage",[["default",function(v){LeaveMessage=v}]]);





const actionName = "CONTACT_US_MENU";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Feel free to contact us to help serve you better!`,
      quick_replies: [
        textButton("Call us now", CallUs.actionName, {}),
        textButton("Leave a message", LeaveMessage.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
