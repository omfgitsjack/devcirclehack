import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import ContactUsMenu from "./ContactUsMenu";
import callButton from "../../replyTemplates/callButton.js";

const actionName = "CALL_US";
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
          text: `Don't stress, we'll do our best to pick up your call within 1 min! We're open Monday - Sunday 8:30 AM - 8:30 PM EST`,
          buttons: [
            callButton("Call", "+18889660794"),
            textButton("Go Back", ContactUsMenu.actionName, {})
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
