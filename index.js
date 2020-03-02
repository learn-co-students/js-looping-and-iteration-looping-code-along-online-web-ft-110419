
  const array = [];
function writeCards(arry, bird) {
  for (let i = 0; i < arry.length; i++) {
    array.push(`Thank you, ${arry[i]}, for the wonderful ${bird} gift!`);
  }
  return array;
}

function countDown(num) {
  let i = 0
  while( i <= num) {
    console.log(i)
    i++
  }

}