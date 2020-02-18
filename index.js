function writeCards(names, occasion)
{
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++)
  {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return thankYouMessages;
}

function countDown(i)
{
  while (i >= 0)
  {
    console.log(i--);
  }
}
