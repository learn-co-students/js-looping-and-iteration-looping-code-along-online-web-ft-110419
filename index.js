// Code your solutions in this file
function writeCards(name, event) {
  let array = []
  for (let i = 0; i <= writeCards.length; i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }

  return array ;
}

// writeCards();

function countDown(number) {
  let count = number;
  while (count >= 0){
    console.log(count--);
  }
}
