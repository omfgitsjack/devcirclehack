module.exports = function(title, phoneNumber, action) {
    // var payload = options | {};
    payload = Object.assign(options, {action: action});
    return {
      type: 'phone_number',
      title: title,
      payload: phoneNumber,
    };
  }