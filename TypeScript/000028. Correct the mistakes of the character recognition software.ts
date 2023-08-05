///Task
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

*/
///Solution
//My
export function correct(s: string): string{
  return s.replace(/0/g,"O").replace(/1/g,"I").replace(/5/g,"S");
}
//Codewars recommended
/*
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(correct("L0ND0N"),"LONDON");
    assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    assert.strictEqual(correct("PAR15"),"PARIS");
  });
});
