import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import Bust from "./Bust";
import Chest from "./Chest";
import Hips from "./Hips";
import FindYourSizeMenu from "./FindYourSizeMenu";

const actionName = "HOW_TO_MEASURE";
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
          text: `Take a look at our sizing chart!`,
          buttons: [
            textButton("Bust", Bust.actionName, {}),
            textButton("Chest", Chest.actionName, {}),
            textButton("Hips", Hips.actionName, {}),
            textButton("Go Back", FindYourSizeMenu.actionName, {})
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
