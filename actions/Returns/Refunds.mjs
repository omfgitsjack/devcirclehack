import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

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

export default {
  actionName,
  handler
};
