import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import CallUs from "./CallUs";
import LeaveMessage from "./LeaveMessage";

const actionName = "CONTACT_US_MENU";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Feel free to contact us to help serve you better!`,
      quick_replies: [     
        textButton("Call us now", CallUs.actionNames, {}),        
        textButton("Leave a message", LeaveMessage.actionNames, {}),
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
