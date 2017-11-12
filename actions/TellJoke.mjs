import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";

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

export default {
  actionName,
  handler
};
