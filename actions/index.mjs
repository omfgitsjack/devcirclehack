import Welcome from "./Welcome";
import TellJoke from "./TellJoke";
import GetProductCategories from "./GetProductCategories";
import GetMenOrFemaleProducts from "./GetMenOrFemaleProducts";
import GetProductType from "./GetProductType";

export default {
  [Welcome.actionName]: Welcome.handler,
  [TellJoke.actionName]: TellJoke.handler,
  [GetProductCategories.actionName]: GetProductCategories.handler,
  [GetMenOrFemaleProducts.actionName]: GetMenOrFemaleProducts.handler,
  [GetProductType.actionName]: GetProductType.handler
};
