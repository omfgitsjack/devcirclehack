import Welcome from "./Welcome";
import TellJoke from "./TellJoke";
import GetProductCategories from "./GetProductCategories";

export default {
  [Welcome.actionName]: Welcome.handler,
  [TellJoke.actionName]: TellJoke.handler,
  [GetProductCategories.actionName]: GetProductCategories.handler
};
