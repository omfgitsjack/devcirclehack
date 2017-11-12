import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import HowToMeasure from "./HowToMeasure";

const actionName = "HIPS";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure around the fullest portion of your hips and backside.`,
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
