import TellJokeActionName from "./TellJoke";
import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import GetProductCategories from "./GetProductCategories";
import GetShipping from "./Shipping/GetShipping";
import GetReturns from "./Returns/GetReturns";

const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Welcome to Candy Boxx! How can I help you today? :)`,
      quick_replies: [
        textButton(
          "Checkout our products!",
          GetProductCategories.actionName,
          {}
        ),
        textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        textButton("Tell me a joke", TellJokeActionName.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
