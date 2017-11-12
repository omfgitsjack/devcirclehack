let users = {};

export const setUserSettings = (user, settings) => {
  users[user] = {
    ...users[user],
    settings
  };
};

export const getUserSettings = user => {
  users[user];
};
