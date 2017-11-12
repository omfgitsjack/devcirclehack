import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import GetProductType from "./GetProductType";

const extractData = product => {
  product;
};

const actionName = "GetMenOrFemaleProducts";
const handler = async (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Alright, so what are you looking for today?`,
      quick_replies: [
        textButton("Women's items", GetProductType.actionName, {
          productGender: "women"
        }),
        textButton("Men's items", GetProductType.actionName, {
          productGender: "men"
        })
      ]
    }
  };

  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
