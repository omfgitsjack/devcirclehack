import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";
import urlButton from "../../replyTemplates/urlButton";

import Welcome from "../Welcome";

import AmericanRates from "./AmericanRates";
import CanadianRates from "./CanadianRates";

const actionName = "SHIPPING";
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
          text: `We offer flat rate shipping! What best describes what you're looking for?`,
          buttons: [
            textButton("US Rates", AmericanRates.actionName, {}),
            textButton("Canadian Rates", CanadianRates.actionName, {}),
            urlButton("Learn more!", "https://candyboxx.com/pages/faq"),
            textButton("Go back", Welcome.actionName, {})
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
