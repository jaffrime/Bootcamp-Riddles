/* Riddle 1
There are n coins in a line (assume n is even). Two players take turns to take a coin from one of the ends of the line until there are no more coins left. The player with the larger amount of money wins. Would you rather go first or second? Does it matter? Assume that you go first, describe an algorithm to compute the maximum amount of money you can win. Note that the strategy to pick maximum of two corners may not work. In the following example, first player looses the game when he/she uses strategy to pick maximum of two corners.

18 20 15 30 10 14

First Player picks 18, now row of coins is 20 15 30 10 14. Second player picks 20, now row of coins is 15 30 10 14. First player picks 15, now row of coins is 30 10 14. Second player picks 30, now row of coins is 10 14. First player picks 14, now row of coins is 10. Second player picks 10, game over. The total value collected by second player is more (20 + 30 + 10) compared to first player (18 + 15 + 14). So the second player wins.
*/

var coinArray = [18,20,15,30,10,14];
var choice;
var p1 = 0;
var p2 = 0;
var lastLoc;

// while (coinArray.length > 0) {
//
// }

// complex choice
var p1Choice = function () {
  lastLoc = coinArray.length-1;

  if ((coinArray[0]+coinArray[lastLoc-1])>(coinArray[1]+coinArray[lastLoc])) {
      choice = 0;
  } else choice = lastLoc;

  p1 += coinArray[choice];
  coinArray.splice(choice,1);

};

// simple choice
var p2Choice = function () {
  lastLoc = coinArray.length-1;

  if (coinArray[0] > coinArray[lastLoc]) {
    choice = 0;
  } else choice = lastLoc;

  p2 += coinArray[choice];
  coinArray.splice(choice,1);

};

p1Choice();
p2Choice();
p1Choice();
p2Choice();
p1Choice();
p2Choice();

console.log(coinArray);
console.log(p1 + " / " + p2);
