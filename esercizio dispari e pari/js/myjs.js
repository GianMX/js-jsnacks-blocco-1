numeri = [10,13,22,25,32,33,48,49,52,57,66,69];
var bloccoVerde = document.getElementById('verde')
var bloccoRosso = document.getElementById('rosso')

for (var i = 0; i < numeri.length; i++) {
  if(numeri[i] % 2 === 0){
  bloccoVerde.innerHTML += numeri[i]  + '<br>'
}
else {
  bloccoRosso.innerHTML += numeri[i] + '<br>'
}
}
