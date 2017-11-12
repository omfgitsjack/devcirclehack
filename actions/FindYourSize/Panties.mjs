import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import FindYourSizeMenu from "./FindYourSizeMenu";

const actionName = "LINGERIE_SIZING";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Take a look at our panties sizing chart!`, //TODO SHOW CHART
      quick_replies: [
        // textButton("How to Measure", HowToMeasure.actionName, {}),
        urlButton("Back", FindYourSizeMenu.actionNames, {}), //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};