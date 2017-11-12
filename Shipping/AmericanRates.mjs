import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";

const actionName = "AMERICAN_RATES";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $7.`,
      quick_replies: [
        urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),
        textButton("Go back", AmericanRates.actionName, {}),
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};