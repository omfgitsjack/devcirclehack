import Welcome from "./Welcome";
import TellJoke from "./TellJoke";
import GetProductCategories from "./GetProductCategories";
import GetMenOrFemaleProducts from "./GetMenOrFemaleProducts";
import GetProductType from "./GetProductType";

import GetShipping from "./Shipping/GetShipping";
import CanadianRates from "./Shipping/CanadianRates";
import AmericanRates from "./Shipping/AmericanRates";

import GetReturns from "./Returns/GetReturns";
import Refunds from "./Returns/Refunds";
import ReturnProcess from "./Returns/ReturnProcess";

export default {
  [Welcome.actionName]: Welcome.handler,
  [TellJoke.actionName]: TellJoke.handler,
  [GetProductCategories.actionName]: GetProductCategories.handler,
  [GetMenOrFemaleProducts.actionName]: GetMenOrFemaleProducts.handler,
  [GetProductType.actionName]: GetProductType.handler,
  [GetShipping.actionName]: GetShipping.handler,
  [GetReturns.actionName]: GetReturns.handler,
  [CanadianRates.actionName]: CanadianRates.handler,
  [AmericanRates.actionName]: AmericanRates.handler,
  [Refunds.actionName]: Refunds.handler,
  [ReturnProcess.actionName]: ReturnProcess.handler
};
