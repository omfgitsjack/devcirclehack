let messenger;_32e‍.w("../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_32e‍.w("../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let GetProductType;_32e‍.w("./GetProductType",[["default",function(v){GetProductType=v}]]);



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

_32e‍.d({
  actionName,
  handler
});
