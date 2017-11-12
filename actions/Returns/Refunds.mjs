import messenger from "../../services/messenger";
import textButton from "../../replyTemplates/textButton";

const actionName = "REFUNDS";
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
          text: `Full priced items may be returned for a full refund but are subject to a $5.95 restocking fee per each returned lingerie set or equivalent.`,
          buttons: [
            urlButton("Learn more", "https://candyboxx.com/pages/faq"),
            textButton("Go Back", Welcome.actionName, {})
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
