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
      text: `Please take a look at our bra sizing chart!`,
      quick_replies: [
        textButton("Bust", Bust.actionName, {}),
        textButton("Chest", Chest.actionName, {}),
        textButton("Hips", Hips.actionName, {}),
        textButton("Back", FindYourSizeMenu.actionName, {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
