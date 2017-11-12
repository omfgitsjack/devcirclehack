import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";

const actionName = "RETURN_PROCESS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Returns are typically processed within three weeks from you dropping the package in the mail. Please allow 30 days for us to process your request upon receipt.`,
      quick_replies: [
        urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),        
        urlButton("Go back", "https://candyboxx.com/pages/fa", {}), //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
