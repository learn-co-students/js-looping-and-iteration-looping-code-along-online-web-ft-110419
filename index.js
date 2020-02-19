function writeCards(array, word) {
	let messagesArray = [];
	for (let i=0; i < array.length; i++) {
		messagesArray.push(`Thank you, ${array[i]}, for the wonderful ` + word + " gift!");
	}
	return messagesArray;

}

function countDown(int) {
	while (int >= 0) {
		console.log(int);
		int -= 1;
	}
}
// Code your solutions in this file
