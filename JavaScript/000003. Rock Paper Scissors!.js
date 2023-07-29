/*Zadanie
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/
///Solution
//Moje

const rps = (p1, p2) => {
  if ((p1 == "rock" && p2 == "scissors")||(p1 == "paper" && p2 == "rock")||(p1 == "scissors" && p2 == "paper")) return "Player 1 won!";
  else if ((p1 == "scissors" && p2 == "rock") ||(p1 === "rock" && p2 === "paper")||(p1 === "paper" && p2 === "scissors")) return "Player 2 won!";
  else if (p1 === p2) return "Draw!";
};
//Najlepsze rozwiązanie od Codewars
/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v0.1.0 by VR. - prototyp
const Test = require('@codewars/test-compat');
const getMsg = (n) => `Player ${n} won!`;
Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
Test.assertEquals(rps('paper', 'rock'), getMsg(1));
Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
Test.assertEquals(rps('rock', 'paper'), getMsg(2));
Test.assertEquals(rps('rock', 'rock'), 'Draw!');
Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
Test.assertEquals(rps('paper', 'paper'), 'Draw!');