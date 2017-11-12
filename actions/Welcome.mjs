import TellJokeActionName from "./TellJoke";
import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import GetProductCategories from "./GetProductCategories";
import GetShipping from "./Shipping/GetShipping";
import GetReturns from "./Returns/GetReturns";
import GetMenOrFemaleProducts from "./GetMenOrFemaleProducts";
import FindYourSize from "./FindYourSize";
import ContactUs from "./ContactUs"

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
        // textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        // textButton("Tell me a joke", TellJokeActionName.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {}),
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Find your size", FindYourSize.actionName, {}),
        textButton("Contact Us", ContactUs.actionName, {})

        // textButton("I don't know what to get for my wife")
        // textButton("Get 3 products", "QR_GET_PRODUCT_LIST", { limit: 3 }),
        // textButton("Tell me a joke", TellJokeActionName.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
