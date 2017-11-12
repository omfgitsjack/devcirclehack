let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let BraSizing;_051‍.w("./BraSizing",[["default",function(v){BraSizing=v}]]);let HowToMeasure;_051‍.w("./HowToMeasure",[["default",function(v){HowToMeasure=v}]]);let LingerieSizing;_051‍.w("./LingerieSizing",[["default",function(v){LingerieSizing=v}]]);let Panties;_051‍.w("./Panties",[["default",function(v){Panties=v}]]);let Welcome;_051‍.w("../Welcome",[["default",function(v){Welcome=v}]]);









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

_051‍.d({
  actionName,
  handler
});
