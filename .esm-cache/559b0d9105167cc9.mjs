let messenger;_051‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_051‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let Bust;_051‍.w("./Bust",[["default",function(v){Bust=v}]]);let Chest;_051‍.w("./Chest",[["default",function(v){Chest=v}]]);let Hips;_051‍.w("./Hips",[["default",function(v){Hips=v}]]);let FindYourSizeMenu;_051‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);







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

_051‍.d({
  actionName,
  handler
});
