// Problem 2 - Calculate Change

function calculateChange(cost, money) {
  cost *= 100;
  money *= 100;
  var changeNames = ['20s','10s','5s','1s','quarters','dimes','nickels','pennies'];
  var changeTypes = [2000,1000,500,100,25,10,5,1];
  var change = money - cost;
  var changeCounts = {};
  for(var i = 0; i < changeTypes.length; i++) {
    changeCounts[changeNames[i]] = Math.floor(change/changeTypes[i]);
    change -= changeCounts[changeNames[i]] * changeTypes[i];
  }

  return changeCounts;
}

console.log(calculateChange(9.35, 10));
console.log(calculateChange(9.35, 30));
console.log(calculateChange(9.35, 55));
