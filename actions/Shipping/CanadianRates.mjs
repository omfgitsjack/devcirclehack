import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import GetShipping from "./GetShipping";

const actionName = "CANADIAN_RATES";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $14.`,
      quick_replies: [
        // urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),
        textButton("Go back", GetShipping.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
