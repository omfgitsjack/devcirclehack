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
      text: `Take a look at our sizing chart!`, //TODO SHOW CHART
      quick_replies: [textButton("Back", LingerieSizing.actionName, {})]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
