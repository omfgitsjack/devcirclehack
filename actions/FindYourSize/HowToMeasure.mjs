import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import Bust from "./Bust"
import Chest from "./Chest"
import Hips from "./Hips"
import FindYourSize from "./FindYourSize";

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
        textButton("Back", FindYourSize.actionNames, {}), //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
