/* Riddle 1
There are n coins in a line (assume n is even). Two players take turns to take a coin from one of the ends of the line until there are no more coins left. The player with the larger amount of money wins. Would you rather go first or second? Does it matter? Assume that you go first, describe an algorithm to compute the maximum amount of money you can win. Note that the strategy to pick maximum of two corners may not work. In the following example, first player looses the game when he/she uses strategy to pick maximum of two corners.

18 20 15 30 10 14

First Player picks 18, now row of coins is 20 15 30 10 14. Second player picks 20, now row of coins is 15 30 10 14. First player picks 15, now row of coins is 30 10 14. Second player picks 30, now row of coins is 10 14. First player picks 14, now row of coins is 10. Second player picks 10, game over. The total value collected by second player is more (20 + 30 + 10) compared to first player (18 + 15 + 14). So the second player wins.
*/

var givenArray = [18,20,15,30,10,14];
var choice;
var p1 = 0;
var p2 = 0;
var lastLoc;

var createArray = function (size, variance) {
  var newArray = [];
  for (i=0; i<size; i++) {
    newArray.push(Math.floor((Math.random() * variance)+1));
  }
  console.log(newArray);
  return newArray;
}

var pickingGame = function (array) {
  while (array.length > 0) {

  }
}

var complexChoice = function (array, player) {
  lastLoc = array.length-1;

  if ((array[0]+array[lastLoc-1])>(array[1]+carray[lastLoc])) {
      choice = 0;
  } else choice = lastLoc;

  p1 += array[choice];
  array.splice(choice,1);

};

var simpleChoice = function (array, player) {
  lastLoc = array.length-1;

  if (array[0] > array[lastLoc]) {
    choice = 0;
  } else choice = lastLoc;

  p2 += array[choice];
  array.splice(choice,1);

};


var randArray = createArray(10, 50);
