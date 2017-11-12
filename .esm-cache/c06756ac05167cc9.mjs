let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let CallUs;_051‍.w("./CallUs",[["default",function(v){CallUs=v}]]);let LeaveMessage;_051‍.w("./LeaveMessage",[["default",function(v){LeaveMessage=v}]]);let Welcome;_051‍.w("../Welcome",[["default",function(v){Welcome=v}]]);







const actionName = "CONTACT_US_MENU";
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
          text: `Feel free to contact us to help serve you better!`,
          buttons: [
            textButton("Hours", CallUs.actionName, {}),            
            callButton("Call Us Now", "+18889660794"),
            textButton("Go Back", Welcome.actionName, {})
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
