let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let ContactUsMenu;_051‍.w("./ContactUsMenu",[["default",function(v){ContactUsMenu=v}]]);let callButton;_051‍.w("../../replyTemplates/callButton.js",[["default",function(v){callButton=v}]]);





const actionName = "CALL_US";
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
          text: `Don't stress, we'll do our best to pick up your call within 1 min! We're open Monday - Sunday 8:30 AM - 8:30 PM EST`,
          buttons: [
            callButton("Call", "+18889660794"),
            textButton("Go Back", ContactUsMenu.actionName, {})
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
