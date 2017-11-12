import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";

import AmericanRates from "./AmericanRates";
import CanadianRates from "./CanadianRates";

const actionName = "SHIPPING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We offer flat rate shipping! What best describes what you're looking for?`,
      quick_replies: [
        textButton("US Rates", AmericanRates.actionName, {}),
        textButton("Candian Rates", CanadianRates.actionName, {}),
        urlButton("Learn more", "https://candyboxx.com/pages/faq", {}),        
        // textButton("Go Back",)
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
