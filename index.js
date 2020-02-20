function writeCards(names, eventName) {
  let thankYouMsgs = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMsgs.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMsgs;
}

function countDown(int) {
  let i = int;
  while (i >= 0) {
    console.log(i--);
  }
}