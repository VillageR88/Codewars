/*Zadanie
Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/
///Solution
//Moje
var countBits = function(n) {
  console.log("Co to za wymyslna liczba", n)
  var result = [0];
  console.log("poczatkowe", result)
  var length = 1; //wartosc poczatkowa dlugosci calej liczby
  if (n == 0) { 
    console.log("wynik dla 0");
    result.pop();
    result.push(0);
    console.log("result", result);
    return 0;
  } //jeżeli na starcie = 0 to zwraca 0
  else { //inaczej jedziemy z koksem -> do pierwszej funkcji
      var funk_length = function(n) { //definicja pierwsza funkcja
        if (n == 1) {
          console.log("to pierwsze");
          console.log(result);
          result.pop();
          result.push(1);
          console.log("result", result);
          return result;
        }
        else{
          length = [1]
          for (i = 1; i < n; i=i*2) {
            console.log("for i =", i)
            console.log("n =", n)
            if (i*2<n) {
              length.push(0);
              console.log("zwiekszam length do", length);} //zwiekszam dlugosc x10
            else if (i*2==n) { //zwiekszam dlugosc x10 i koniec
              console.log("Wariant i*2==n");
              length.push(0);
              console.log("debug Result1", result);
              for (i in length) result.pop();
              console.log("debug Result2", result);
              for (i of length) result.push(i);
              console.log("debug Result3", result);
              console.log("result", result);
              return result;
            }
            else if (i*2>n) { //nie zwiekszam dlugosci
              console.log("juz nie zwiekszam dlugosci")
              console.log("w pamieci Result1", result);
              console.log("w pamieci length", length);
              for (j in length) result.pop();
              console.log("debug Result2", result);
              for (j of length) result.push(j);
              //for (i of length) result.push(i);
              console.log("debug Result3", result);
              console.log("w pamieci length", length);
              //result = length; //aktualizuje wynik
              console.log("result = length", result);
              console.log("nowa nka", n-i);
              //result += inner_countBits(n-i, result);
              result = funk_length(n-i);
              return result;
            }
          } //koniec pętli for
        }
      } //koniec funkcja pierwsza
      var result = funk_length(n); //wywołanie pierwszej funkcji dla 'n'
      var find1 = function(x) { //definicja funkcja druga (liczenie wystąpień "1" w kodzie binarnym)
        var counter = 0;
        var lastarray = x;
        console.log("dbg")
        for (i of (lastarray)) {
          if (i == "1") {
            console.log("TOI", i);
            counter += 1;
            console.log("before counter", counter);
          }
        }
        console.log("ost counter", counter);
        return counter;
      }//koniec funkcja druga

    console.log("ost res", result);
    return find1(result); //zwraca ostateczną wartość wywołania drugiej funkcji, 
    //a druga funkcja wywoływana jest z argumentem, którym jest wynik pierwszej funkcji
    }
  }
//Najlepsze rozwiązanie od Codewars
/*
countBits = n => n.toString(2).split('0').join('').length;
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
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    //assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
    })
  })