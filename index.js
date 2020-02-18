const newArray = [];


function writeCards(array, event) {

    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
      }
      return newArray;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
    console.log(i--);
    }
}

writeCards(array, event);
countDown(number)