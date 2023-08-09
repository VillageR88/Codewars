///Task
/*
The problem

How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.
Scalability

Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn't an efficient way to find just the tail of a factorial. Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, even using efficient Karatsuba algorithm
Your task

is to write a function, which will find the number of zeroes at the end of (number) factorial in arbitrary radix = base for larger numbers.

    base is an integer from 2 to 256
    number is an integer from 1 to 1'000'000

Note Second argument: number is always declared, passed and displayed as a regular decimal number. If you see a test described as 42! in base 20 it's 4210 not 4220 = 8210.

*/
///Solution
//My soloution (Work in Progress)
export const zeroes = (base: number, num: number) => {
  console.log("=======================");
  console.log(Number.parseInt(num.toString(), base));
  console.log("-----------------------");
  console.log(base +"of"+ num);//of
  console.log(Array.from(Array(num).fill(1).map((x, y) => x + y)));//array
  console.log(Array(num).fill(1).map((x, y) => x + y).reduce((x, y) => x * y));//factorial result
  console.log(Array.from(Array(num).fill(1).map((x, y) => x + y).reduce((x, y) => x * y).toString()).
  filter((x)=>x=='0').length);//all 0's
  console.log(Array(num).fill(1).map((x, y) => x + y).reduce((x, y) => x * y).toString().split("0").filter((x: string)=>x=="").length);//0's at the end
  //inner test
  var test_value = 0;
  if (test_value > 0) {
    console.log("inner test")
    for (var i=1; i<=test_value; i++) {
      console.log("For i =", i, "=", Array(i).fill(1).map((x, y) => x + y).reduce((x, y) => x * y).toString().split("0").filter((x: string) => x == "").length);
    }
    console.log("end of inner test");
  }
  return Array(num).fill(1).map((x, y) => x + y).reduce((x, y) => x * y).toString().split("0").filter((x: string) => x == "").length;
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { expect } from "chai";
//Describe - invariant part
  describe("zeroes", () => {
/*
  it("should return 2 when input is (10,10)", () => {
      const expected = 2;
      const actual = zeroes(10, 10);

      expect(actual).to.eql(expected);
  });
  
  it("should return 3 when input is (16,16)", () => {
      const expected = 3;
      const actual = zeroes(16, 16);

      expect(actual).to.eql(expected);
  });

  it("should return 2 when input is (40,10)", () => {
    const expected = 2;
    const actual = zeroes(40, 10);

    expect(actual).to.eql(expected);
  });
*/
  it("should return 0 when input is (17,16)", () => {
    const expected = 0;
    const actual = zeroes(17, 16);
  
    expect(actual).to.eql(expected);
  });

});