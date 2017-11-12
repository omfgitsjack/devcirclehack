import messenger from "../services/messenger";
import textButton from "../replyTemplates/textButton";
import shopify from "../services/shopify";
import GetProductType from "./GetProductType";
import Welcome from "./Welcome";
import BOT_NAME from "../BOT_NAME";
import { getUserSettings, setUserSettings } from "../services/userData";

import products from "../services/products";
import _ from "lodash";

const actionName = "NarrowProductType";
const handler = async (recipientId, requestPayload) => {
  const productTypePrefix = requestPayload.productTypePrefix;

  setUserSettings({
    productTypePrefix: requestPayload.productTypePrefix
  });

  console.log("processing ", productTypePrefix);
  const productTypes = await products.getPopularProductTypes(productTypePrefix);
  const secondLevelTypes = productTypes.map(
    key => key.split(productTypePrefix)[1]
  );
  console.log("product types", secondLevelTypes);

  if (secondLevelTypes.length === 0) {
    // We're at the root level. Let's display the products.
  } else {
    const extractSecondLevel = type => type.split(" - ")[1];
    const categories = _.uniq(secondLevelTypes.map(extractSecondLevel));
    console.log("next level categories:", categories);

    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: `Nice, what kind of ${productTypePrefix} item?`,
        quick_replies: categories.map(category => {
          return textButton(category, actionName, {
            productTypePrefix: productTypePrefix + " - " + category
          });
        })
      }
    };

    messenger.callSendAPI(messageData);
  }
};

export default {
  actionName,
  handler
};
