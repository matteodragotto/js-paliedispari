const userEvenOdd = prompt('Inserisci Pari o Dispari')
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
let cpuEvenOdd;
let cpuNumber;

const sumNumber = userNumber + randomNumber(cpuNumber)

console.log(userEvenOdd, userNumber, randomNumber(cpuNumber,), sumNumber, evenOrOdd(sumNumber));



function randomNumber(number){
  return Math.ceil(Math.random() * 5)
}

function evenOrOdd(sum){
  let message;

  if (sum % 2 === 0){
    message = 'Il numero è pari'
  } else {
    message = 'Il numero è dispari'
  }
  return message
}