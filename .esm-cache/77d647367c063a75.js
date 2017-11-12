"use script";module.exports = function(title, action, options) {
    var payload = options | {};
    payload = Object.assign(options, {action: action});
    return {
      type: 'postback',
      title: title,
      payload: JSON.stringify(payload)
    };
  }