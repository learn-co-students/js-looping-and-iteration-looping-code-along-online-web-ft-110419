// Code your solutions in this file
//[ 'Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!' ]
//names = [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )



function writeCards(names) {
  let array = []
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return array;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number)
    number--
  }
}