import cm from "./cm.js";
import feet from "./feet.js";
import miles from "./miles.js";
import meter from "./meter.js";

export function cal(km) {
   return {
       cm: cm(km),
       feet: feet(km),
       miles: miles(km),
       meter: meter(km),
       km: km
   };
}