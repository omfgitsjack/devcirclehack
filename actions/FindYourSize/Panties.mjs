import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";
import urlButton from "../../replyTemplates/urlButton.js";

import FindYourSizeMenu from "./FindYourSizeMenu";

const actionName = "LINGERIE_SIZING";
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
          text: `Take a look at our panties sizing chart!`, //TODO SHOW CHART
          buttons: [
            urlButton("Back", "https://candyboxx.com/pages/sizing") //FIX
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