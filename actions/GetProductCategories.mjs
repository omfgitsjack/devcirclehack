import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import shopify from "../services/shopify";

const extractData = product => {
  product;
};

const actionName = "GetProductCategories";
const handler = async (recipientId, requestPayload) => {
  console.log("searchin for data");

  const productCategories = await shopify.product.list({ limit: 10 });
  console.log("productCategories");
  console.log(productCategories);

  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Feel free to search for anything you want or filter by categories`
      // quick_replies: [
      //   // textButton("Checkout our products!"),
      //   textButton("Get 3 products", "QR_GET_PRODUCT_LIST", {}),
      //   textButton("Tell me a joke", TellJokeActionName.actionName, {})
      // ]
    }
  };

  messenger.callSendAPI(messageData);
};

export default {
  actionName,
  handler
};
