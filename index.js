// Code your solutions in this file
function writeCards(names) {
    let thankYous = []
    for ( let count = 0; count < names.length; count++) {
        thankYous.push(`Thank you, ${names[count]}, for the wonderful surprise gift!`)
    }
    return thankYous
}

function countDown(number) {
    let count = number
    while ( count >= 0 ) {
        console.log(count--)
    }
}