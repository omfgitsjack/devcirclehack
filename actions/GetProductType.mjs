import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import shopify from "../services/shopify";
import GetProductType from "./GetProductType";

import { getUserSettings, setUserSettings } from "../services/userData";

const actionName = "GetProductType";
const handler = async (recipientId, requestPayload) => {
  setUserSettings(recipientId, {
    productGender: requestPayload.productGender
  });
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `We can help with that. What kind of ${requestPayload.productGender}'s items?`
    }
  };

  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
