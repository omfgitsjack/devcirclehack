import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import HowToMeasure from "./HowToMeasure";

const actionName = "BUST";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Measure loosely around the fullest part of your bust (usually over the nipples), keeping the tape measure straight all the way around your body.`,
      quick_replies: [
        textButton("Go Back", HowToMeasure.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
