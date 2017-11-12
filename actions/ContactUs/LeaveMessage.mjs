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
      text: `Leave a message and we'll get back to you as soon as we can!`,
      quick_replies: [     
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
