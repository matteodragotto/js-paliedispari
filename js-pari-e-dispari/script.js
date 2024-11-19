const userEvenOdd = prompt('Inserisci Pari o Dispari')
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
const cpuNumber = randomNumber();
let message;

const sumNumber = userNumber + cpuNumber

console.log(userEvenOdd, userNumber, cpuNumber, sumNumber, evenOrOdd(sumNumber));

if (evenOrOdd(sumNumber) === userEvenOdd){
  message = alert('Hai vinto!')
} else {
  message = alert('Hai perso!')
}

function randomNumber(){
  return Math.ceil(Math.random() * 5)
}

function evenOrOdd(sum) {
  let result;

  if (sum % 2 === 0){
    result = 'pari'
  } else {
    result = 'dispari'
  }
  return result
}