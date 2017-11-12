import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import CallUs from "./CallUs";
import LeaveMessage from "./LeaveMessage";

import Welcome from "../Welcome"

const actionName = "CONTACT_US_MENU";
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
          text: `Feel free to contact us to help serve you better!`,
          buttons: [
            textButton("Hours", CallUs.actionName, {}),            
            callButton("Call Us Now", "+18889660794"),
            textButton("Go Back", Welcome.actionName, {})
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
