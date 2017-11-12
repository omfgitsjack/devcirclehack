import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";
import urlButton from "../../replyTemplates/urlButton";

import ReturnProcess from "./ReturnProcess";
import Refunds from "./Refunds";

import welcome from "./Welcome";

const actionName = "RETURNS";
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
          text: `We're sorry you're not loving what you ordered, but don't worry - you can exchange any item purchased online!`,
          buttons: [
            textButton("How long?", ReturnProcess.actionName, {}),
            textButton("Full refund?", Refunds.actionName, {}),
            urlButton("Exchange Policy", "https://candyboxx.com/pages/faq"),
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
