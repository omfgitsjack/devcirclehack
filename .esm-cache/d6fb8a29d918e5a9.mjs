_d91‍.d(function(title, action, options) {
  var payload = options | {};
  payload = Object.assign(options, { action: action });
  return {
    content_type: "text",
    title: title,
    payload: JSON.stringify(payload)
  };
});
