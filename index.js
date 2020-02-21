// Code your solutions in this file

function writeCards(nameArray, eventName) {
    let thankArray = []
    for (let i = 0; i < nameArray.length; i++) {
        thankArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankArray
}

function countDown(chosenNum) {
    let countNum = chosenNum
    while (countNum > -1) {
        console.log(countNum)
        countNum--        
    }
}