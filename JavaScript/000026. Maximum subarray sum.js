/*Zadanie
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/
///Solution
//My
var maxSequence = function(arr){
  var lastN = 0;
  var cSub = [];
  var sum;
  var maxsum = 0;
  var func1 = function(arr){
    for (i = 0; i <= lastN; i++) {
      cSub.push(i);
    }
    for (j = i; j <= arr.length; j++) {
      sum = 0;
      for (x of cSub) {
        sum += arr[x];
      }
      if (sum > maxsum) {
        maxsum = sum;
        sum = 0;
      }
      for (k in cSub) {
        cSub[k]++;
      }
    }
    cSub = [];
    lastN++;
    if (lastN < arr.length) {func1(arr);}
    return maxsum;
  }
  return (func1(arr));
}
//Codewars recommended
/*
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester (JSCSTT) v0.1.0 by VR.
//Deklaracje i definicje - część dostosowana do VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (opis, funkcja) {
  funkcja();
};
function it (opis, funkcja) {
  funkcja();
};
//Describe - część niezmieniana
describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});