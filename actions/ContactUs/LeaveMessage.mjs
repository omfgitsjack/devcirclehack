import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import ContactUsMenu from "./ContactUsMenu";

const actionName = "LEAVE_MESSAGE";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Don't stress, we'll do our best to pick up your call within 1 min! We're open Monday - Sunday 8:30 AM - 8:30 PM EST`,
      quick_replies: [     
        // textButton("Call", LingerieSizing.actionNames, {}), //TODO CALL BUTTON   
        textButton("Back", ContactUsMenu.actionNames, {}),
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
