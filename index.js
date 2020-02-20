// Code your solutions in this file
function writeCards(arr, eventName) {
  const msgs = [];

  for (let i = 0; i < arr.length; i++) {
    msgs.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }

  return msgs;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}
