// Code your solutions in this file

function writeCards(names, event) {
  let arry = [];
  for (let i = 0; i <= writeCards.length; i++) {
  arry.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 
  return arry;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
  let count = num;
  while (count >= 0) {
    console.log(count--);
  }
}
 countDown(num)