import cm from "./cm.js";
import feet from "./feet.js";
import miles from "./miles.js";
export function cal(a){
   var a = feet(a);
   var b = cm(a);
   var c = miles(a);

   return [a, b, c];
}