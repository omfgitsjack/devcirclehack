let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let BraSizing;_9dc‍.w("./BraSizing",[["default",function(v){BraSizing=v}]]);let HowToMeasure;_9dc‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);let LingerieSizing;_9dc‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);let Panties;_9dc‍.w("./Panties",[["default",function(v){Panties=v}]]);let Welcome;_9dc‍.w("../Welcome",[["default",function(v){Welcome=v}]]);









const actionName = "SIZING_MENU";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `Take a look at our sizing chart!`,
          buttons: [
            textButton("How to Measure", HowToMeasure.actionName, {}),
            textButton("Bra Sizing", BraSizing.actionName, {}),
            textButton("Lingerie Sizing", LingerieSizing.actionName, {}),
            textButton("Panties", Panties.actionName, {}),
            urlButton("Learn More!", "https://candyboxx.com/pages/sizing"),
            textButton("Go Back", Welcome.actionName, {} )
          ]
        }
      }
    }
  };
  messenger.callSendAPI(messageData);
};

_9dc‍.d({
  actionName,
  handler
});
