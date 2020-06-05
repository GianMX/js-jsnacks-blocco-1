var user = parseInt(prompt('digita un numero'))
for (var i=0; i < user; i++) {
  var randomize = generaNuovoArray();
  console.log(randomize)
}

function generaNuovoArray() {
  var randomize = [];

  for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random()* 100 ) + 1;
    randomize.push(randomNumber)
  }
  return randomize;
}
