///Task
/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

*/
///Solution
//My
export function getVolumeOfCuboid(length: number, width:number, height:number): number {
 return length*width*height;
}
//Codewars recommended
/*
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
var solution = {getVolumeOfCuboid};
//Describe - invariant part
describe("Some testing", function() {
  it("Sample tests", function() {
    assert.equal(solution.getVolumeOfCuboid(1,2,2), 4);    
    assert.equal(solution.getVolumeOfCuboid(6.3,2,5), 63);    
    assert.equal(solution.getVolumeOfCuboid(1,1,1), 1);  
    assert.equal(solution.getVolumeOfCuboid(52,17,5), 4420);  
  });
});