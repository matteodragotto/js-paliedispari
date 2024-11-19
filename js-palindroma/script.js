const parolaUtente = prompt('Inserisci la parola per verificare che sia palindroma')
let message

console.log(parolaUtente)

console.log(palindroma(parolaUtente))

function palindroma(parola){
  
  const parolaReverse = parola.split("").reverse().join('')

  console.log(parolaReverse)

  if (parola === parolaReverse) {
    message = alert('La parola è palindroma')
  } else {
    message = alert('La parola non è palindroma')
  }
  
}