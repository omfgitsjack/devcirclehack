let messenger;_48a‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_48a‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);


const actionName = "REFUNDS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Full priced items may be returned for a full refund but are subject to a $5.95 restocking fee per each returned lingerie set or equivalent.`,
      quick_replies: [
        // urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),
        // urlButton("Go back", "https://candyboxx.com/pages/fa", {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_48a‍.d({
  actionName,
  handler
});
