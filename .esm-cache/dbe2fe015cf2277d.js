"use script";module.exports = function(title, phoneNumber) {
  return {
    type: "phone_number",
    title: title,
    payload: phoneNumber
  };
};
