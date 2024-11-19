const userEvenOdd = prompt('Inserisci Pari o Dispari')
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
const cpuNumber = randomNumber();
let message;

const sumNumber = userNumber + cpuNumber

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

console.log('Per te la somma sarà:', userEvenOdd);
console.log('Il tuo numero è:', userNumber);
console.log('Il numero della CPU è:', cpuNumber);
console.log('La somma dei numeri è:', sumNumber);
console.log('La somma è:', evenOrOdd(sumNumber));
