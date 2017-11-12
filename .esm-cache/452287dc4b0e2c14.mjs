let messenger;_4b0‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_4b0‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let Welcome;_4b0‍.w("./Welcome",[["default",function(v){Welcome=v}]]);



const extractData = product => {
  product;
};

const actionName = "GetDiscounts";
const handler = async (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Enter your email below to receive 15% off our products!`,
      quick_replies: [textButton("Back", Welcome.actionName, {})]
    }
  };

  messenger.callSendAPI(messageData);
};

_4b0‍.d({
  actionName,
  handler
});
