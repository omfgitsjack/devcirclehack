let messenger;_a78‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_a78‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let Bust;_a78‍.w("./Bust",[["default",function(v){Bust=v}]]);let Chest;_a78‍.w("./Chest",[["default",function(v){Chest=v}]]);let Hips;_a78‍.w("./Hips",[["default",function(v){Hips=v}]]);let FindYourSizeMenu;_a78‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);







const actionName = "HOW_TO_MEASURE";
const handler = (recipientId, requestPayload) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: `Please take a look at our bra sizing chart!`,
      quick_replies: [
        textButton("Bust", Bust.actionName, {}),
        textButton("Chest", Chest.actionName, {}),
        textButton("Hips", Hips.actionName, {}),
        textButton("Back", FindYourSizeMenu.actionName, {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_a78‍.d({
  actionName,
  handler
});
