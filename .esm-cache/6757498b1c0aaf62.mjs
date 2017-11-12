let messenger;_1c0‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_1c0‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let shopify;_1c0‍.w("../services/shopify",[["default",function(v){shopify=v}]]);let GetProductType;_1c0‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);let Welcome;_1c0‍.w("./Welcome",[["default",function(v){Welcome=v}]]);let BOT_NAME;_1c0‍.w("../BOT_NAME",[["default",function(v){BOT_NAME=v}]]);let getUserSettings,setUserSettings;_1c0‍.w("../services/userData",[["getUserSettings",function(v){getUserSettings=v}],["setUserSettings",function(v){setUserSettings=v}]]);let products;_1c0‍.w("../services/products",[["default",function(v){products=v}]]);let _;_1c0‍.w("lodash",[["default",function(v){_=v}]]);let config;_1c0‍.w("config",[["default",function(v){config=v}]]);let sectionButton;_1c0‍.w("../replyTemplates/sectionButton",[["default",function(v){sectionButton=v}]]);













const HOST_URL = process.env.HOST_URL
  ? process.env.HOST_URL
  : config.get("host_url");

const actionName = "NarrowProductType";
const handler = async (recipientId, requestPayload) => {
  const productTypePrefix = requestPayload.productTypePrefix;

  setUserSettings({
    productTypePrefix: requestPayload.productTypePrefix
  });

  console.log("processing ", productTypePrefix);
  const productTypes = await products.getPopularProductTypes(productTypePrefix);
  const secondLevelTypes = productTypes
    .map(key => key.split(productTypePrefix)[1])
    .filter(defined => defined);
  console.log("product types", secondLevelTypes);

  if (secondLevelTypes.length === 0) {
    // We're at the root level. Let's display the products.
    console.log("Processing this", productTypePrefix);
    const productsToGrab = await products.getProductIdsByProductType(
      productTypePrefix
    );
    try {
      const dbProducts = await shopify.product.list({
        ids: _.take(productsToGrab, 5).join(",")
      });

      console.log("dbProducts");
      console.log(dbProducts);

      let templateElements = [];
      dbProducts.forEach(function(product) {
        var url = HOST_URL + "/product.html?id=" + product.id;
        templateElements.push({
          title: product.title,
          subtitle: product.tags,
          image_url: product.image.src,
          buttons: [
            {
              type: "web_url",
              url: url,
              title: "Read description",
              webview_height_ratio: "compact",
              messenger_extensions: "true"
            },
            sectionButton("Get options", "QR_GET_PRODUCT_OPTIONS", {
              id: product.id
            })
          ]
        });
      });

      var messageData = {
        recipient: {
          id: recipientId
        },
        message: {
          attachment: {
            type: "template",
            payload: {
              template_type: "generic",
              elements: templateElements
            }
          }
        }
      };

      messenger.callSendAPI({
        recipient: {
          id: recipientId
        },
        message: {
          text: `Awesome thanks! Here are five items that I think you'll love!`
        }
      });
      messenger.callSendAPI(messageData);
    } catch (err) {
      console.error(err);
    }
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

_1c0‍.d({
  actionName,
  handler
});
