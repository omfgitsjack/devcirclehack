let messenger;_135‍.w("../../services/messenger",[["default",function(v){messenger=v}]]);let textButton;_135‍.w("../../replyTemplates/textButton",[["default",function(v){textButton=v}]]);let Bust;_135‍.w("./Bust",[["default",function(v){Bust=v}]]);let Chest;_135‍.w("./Chest",[["default",function(v){Chest=v}]]);let Hips;_135‍.w("./Hips",[["default",function(v){Hips=v}]]);let FindYourSizeMenu;_135‍.w("./FindYourSizeMenu",[["default",function(v){FindYourSizeMenu=v}]]);







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
        textButton("Go Back", FindYourSizeMenu.actionName, {}) //FIX
      ]
    }
  };
  messenger.callSendAPI(messageData);
};

_135‍.d({
  actionName,
  handler
});
