// Code your solutions in this file

// const array = ['Lisa', 'Kaitlin', 'Jan'];
// let event = "surprise";

function writeCards(array, event) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown() {
    let i = 0;
    while (i < 11) {
        console.log(i++);
    }
}