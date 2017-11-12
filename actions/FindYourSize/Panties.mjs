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
          text: `Take a look at our panties sizing chart!`,
          buttons: [
            urlButton("Go Back", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", FindYourSizeMenu.actionName, {})
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
