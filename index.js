function writeCards(names, event) {
  let write = [];
  for (let i = 0; i < names.length; i++) {
    write.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return write;
}

function countDown(num){
  while (num > -1){
    console.log(num);
    num-- ;
  }
}
