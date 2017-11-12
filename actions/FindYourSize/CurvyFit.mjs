import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import LingerieSizing from "./LingerieSizing";

const actionName = "CURVY_FIT";
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
          text: `Take a look at our sizing chart!`,
          buttons: [
            urlButton("Click to view", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", LingerieSize.actionName, {} )
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
