import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import LingerieSizing from "./LingerieSizing";

const actionName = "CALL_US";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Don't stress, we'll do our best to pick up your call within 1 min!`,
      quick_replies: [     
        textButton("Call", LingerieSizing.actionNames, {}),        
        textButton("Hours", LingerieSizing.actionNames, {}),
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
