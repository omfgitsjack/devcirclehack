_040‍.e([["setUserSettings",()=>setUserSettings],["getUserSettings",()=>getUserSettings]]);let users = {};

const setUserSettings = (user, settings) => {
  users[user] = {
    ...users[user],
    settings
  };
};

const getUserSettings = user => {
  users[user];
};
