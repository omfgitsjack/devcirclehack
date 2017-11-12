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

import FindYourSizeMenu from "./FindYourSize/FindYourSizeMenu";
import BraSizing from "./FindYourSize/BraSizing";
import Bust from "./FindYourSize/Bust";
import Chest from "./FindYourSize/Chest";
import CurvyFit from "./FindYourSize/CurvyFit";
import Hips from "./FindYourSize/Hips";
import HowToMeasure from "./FindYourSize/HowToMeasure";
import LingerieSizing from "./FindYourSize/LingerieSizing";
import Panties from "./FindYourSize/Panties";
import SlimFit from "./FindYourSize/SlimFit";

import ContactUs from "./ContactUsMenu";
import CallUs from "./CallUs";
import LeaveMessage from "./LeaveMessage";


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
  [ReturnProcess.actionName]: ReturnProcess.handler,

  [BraSizing.actionName]: BraSizing.handler,
  [Bust.actionName]: Bust.handler,
  [Chest.actionName]: Chest.handler,
  [CurvyFit.actionName]: CurvyFit.handler,
  [FindYourSizeMenu.actionName]: FindYourSizeMenu.handler,
  [Hips.actionName]: Hips.handler,
  [HowToMeasure.actionName]: HowToMeasure.handler,
  [LingerieSizing.actionName]: LingerieSizing.handler,
  [Panties.actionName]: Panties.handler,
  [SlimFit.actionName]: SlimFit.handler,

  [CallUs.actionName]: CallUs.handler,
  [ContactUsMenu.actionName]: ContactUsMenu.handler,
  [LeaveMessage.actionName]: LeaveMessage.handler,
};
