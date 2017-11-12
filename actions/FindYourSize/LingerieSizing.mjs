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
      text: `Find lingerie that fits right just for you!`,
      quick_replies: [
        textButton("Slim Fit", SlimFit.actionName, {}),
        textButton("Curvy Fit", CurvyFit.actionName, {}),
        textButton("Go Back", FindYourSizeMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
