// Code your solutions in this file

function writeCards(names){
    let thanksYous = [];
    for (let i = 0; i < names.length; i++){
       thanksYous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    };
    return thanksYous;
}

function countDown(i){
    while (i >= 0){
        console.log(i--);
    }
}