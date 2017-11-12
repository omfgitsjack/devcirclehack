import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import Welcome from "./Welcome";

const extractData = product => {
  product;
};

const actionName = "GetDiscounts";
const handler = async (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Enter your email below to receive 15% off our products!`,
      quick_replies: [textButton("Back", Welcome.actionName, {})]
    }
  };

  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
