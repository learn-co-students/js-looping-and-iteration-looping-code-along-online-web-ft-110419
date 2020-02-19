// Code your solutions in this file

function writeCards(names, type){
    const thankYous = [];
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return thankYous;
}

function countDown(int){
    while (int >= 0){
        console.log(int--);
    }
}