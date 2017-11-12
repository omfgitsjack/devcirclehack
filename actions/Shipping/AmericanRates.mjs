import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import GetShipping from "./GetShipping";

const actionName = "AMERICAN_RATES";
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
          text: `Great news! All orders $25 and above are FREE. Shipping for orders under $25 will be $7.`,
          buttons: [
            urlButton("Learn more!", "https://candyboxx.com/pages/faq"),
            textButton("Go back", GetShipping.actionName, {})
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
