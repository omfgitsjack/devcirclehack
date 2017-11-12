let messenger;_794‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_794‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);


const actionName = "TELL_JOKE";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `you stupid`,
      quick_replies: [
        textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        textButton("Tell me a joke", "TELL_JOKE", {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_794‍.d({
  actionName,
  handler
});
