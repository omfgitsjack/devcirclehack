import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import ReturnProcess from "./ReturnProcess";
import Refunds from "./Refunds";

const actionName = "RETURNS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We're sorry you're not loving what you ordered, but don't worry - you can exchange any item purchased online!`,
      quick_replies: [
        textButton("How long does it take?", ReturnProcess.actionName, {}),
        textButton("Can I get a full refund?", Refunds.actionName, {})
        // urlButton("Our exchange policy", "https://candyboxx.com/pages/faq", {}),
        // urlButton("Go back", "https://candyboxx.com/pages/fa", {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
