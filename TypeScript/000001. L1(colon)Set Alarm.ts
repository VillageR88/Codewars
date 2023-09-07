///Task
/*
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

*/
///Solution
//My
export function setAlarm(employed: boolean, vacation: boolean) {
  if (employed == true && vacation == true) return false;
  else if (employed == false && vacation == true) return false;
  else if (employed == true && vacation == false) return true;
  else return false;
  }
//Codewars recommended
/*
export function setAlarm(employed: boolean, vacation: boolean) {
return employed && !vacation

}
*/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
//const Test = require('@codewars/test-compat');
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
function describe (opis: any, funkcja: any) {
  funkcja();
};
function it (opis: any, funkcja: any) {
  funkcja();
};
//Describe - invariant part
import { assert } from "chai";
//import { setAlarm } from "./solution";

describe("Tests", function() {
  it("setAlarm(true, true)", () => assert.strictEqual(setAlarm(true, true), false));
  it("setAlarm(false, true)", () => assert.strictEqual(setAlarm(false, true), false));
  it("setAlarm(true, false)", () => assert.strictEqual(setAlarm(true, false), true));
  it("setAlarm(false, false)", () => assert.strictEqual(setAlarm(false, false), false));
});