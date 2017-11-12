import TellJokeActionName from "./TellJoke";
import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
// import GetProductCategories from "./GetProductCategories";
// import GetShipping from "./Shipping/GetShipping";
// import GetReturns from "./Returns/GetReturns";
// import GetMenOrFemaleProducts from "./GetMenOrFemaleProducts";
// import FindYourSizeMenu from "./FindYourSize/FindYourSizeMenu";
import ContactUsMenu from "./ContactUs/ContactUsMenu";
import MainMenu from "./MainMenu";

const actionName = "Welcome";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: {
            title:"Look and feel fabulous with our designer active wear line!",
            image_url:"https://cdn.shopify.com/s/files/1/2463/4523/products/1_f20031e4-a74b-4721-b0a4-63a7b1234ff3_1024x1024@2x.jpg?v=1508425326",
            subtitle:"Ready to take a sneak peek at our products and services?",
            default_action: {
              type: "web_url",
              url: "https://dev-circle-toronto-hackathon.myshopify.com/collections/all",
              messenger_extensions: true,
              webview_height_ratio: "tall",
              fallback_url: "https://dev-circle-toronto-hackathon.myshopify.com/collections/all"
            },
            "buttons":[
              textButton("Yes, please!", MainMenu.actionName, {}),
              textButton("I'm good", ContactUsMenu.actionName, {})
            ]      
          }
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
