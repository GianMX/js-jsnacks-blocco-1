listaPrima = ['papero','cane','drago','lupo','volpe','nutria','bradipo','scimmia']
listaSeconda = ['comodino','sasso','cassetto','sonno']

while (listaPrima.length != listaSeconda.length){
  if (listaPrima.length < listaSeconda.length){
    listaPrima.push(listaSeconda[Math.floor(Math.random() * listaSeconda.length)])
  } else {
    listaSeconda.push(listaPrima[Math.floor(Math.random() * listaPrima.length)])
  }
}
console.log(listaPrima, listaSeconda)
