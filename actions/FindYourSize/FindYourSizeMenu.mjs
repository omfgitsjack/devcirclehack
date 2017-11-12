import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

import BraSizing from "./BraSizing";
import HowToMeasure from "./HowToMeasure";
import LingerieSizing from "./LingerieSizing";
import Panties from "./Panties";

import Welcome from "../Welcome";

const actionName = "SIZING_MENU";
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
            textButton("How to Measure", HowToMeasure.actionName, {}),
            textButton("Bra Sizing", BraSizing.actionName, {}),
            textButton("Lingerie Sizing", LingerieSizing.actionName, {}),
            textButton("Panties", Panties.actionName, {}),
            urlButton("Learn More!", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", Welcome.actionName, {} )
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
