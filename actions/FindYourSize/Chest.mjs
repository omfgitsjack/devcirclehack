import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import HowToMeasure from "./HowToMeasure";

const actionName = "CHEST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Use a soft tape measure. To obtain your band size measurement, measure very snugly around your rib cage, just underneath your breasts. It should feel tight. Be sure that the tape measure lies straight all the way around.`,
      quick_replies: [
        textButton("Back", HowToMeasure.actionNames, {}),
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
