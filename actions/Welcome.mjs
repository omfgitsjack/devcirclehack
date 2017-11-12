import TellJokeActionName from "./TellJoke";
import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import GetProductCategories from "./GetProductCategories";
import GetShipping from "./Shipping/GetShipping";
import GetReturns from "./Returns/GetReturns";
import GetMenOrFemaleProducts from "./GetMenOrFemaleProducts";
import FindYourSizeMenu from "./FindYourSize/FindYourSizeMenu";
import ContactUsMenu from "./ContactUs/ContactUsMenu";

const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },

    message: {
      text: `Hey my name is Audrey, how can I help you today? :)`,
      quick_replies: [
        textButton("Find a product", GetMenOrFemaleProducts.actionName, {}),
        textButton("Find your size", FindYourSizeMenu.actionName, {}),
        textButton("Shipping", GetShipping.actionName, {}),
        textButton("Returns & Exchanges", GetReturns.actionName, {}),
        textButton("Contact Us", ContactUsMenu.actionName, {})
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
