let messenger;_9dc‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_9dc‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let Bust;_9dc‍.w("./Bust",[["default",function(v){Bust=v}]]);let Chest;_9dc‍.w("./Chest",[["default",function(v){Chest=v}]]);let Hips;_9dc‍.w("./Hips",[["default",function(v){Hips=v}]]);let FindYourSizeMenu;_9dc‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);







const actionName = "HOW_TO_MEASURE";
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
            textButton("Bust", Bust.actionName, {}),
            textButton("Chest", Chest.actionName, {}),
            textButton("Hips", Hips.actionName, {}),
            textButton("Go Back", FindYourSizeMenu.actionName, {})
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
