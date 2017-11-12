let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let CallUs;_9dc‍.w("./CallUs",[["default",function(v){CallUs=v}]]);let LeaveMessage;_9dc‍.w("./LeaveMessage",[["default",function(v){LeaveMessage=v}]]);let Welcome;_9dc‍.w("../Welcome",[["default",function(v){Welcome=v}]]);







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

_9dc‍.d({
  actionName,
  handler
});
