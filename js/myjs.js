
// // SNACK 1
// var firstNumber = parseInt(prompt("Inserisci il un numero?"));
// var secondNumber = parseInt(prompt("Inserisci il un numero?"));
//
// if (firstNumber > secondNumber) {
//   alert(firstNumber);
// }
// else if (secondNumber > firstNumber){
//   alert(secondNumber);
// }
// else {
//   alert('Sono lo stesso numero!')
// }



// // SNACK 2
// var firstWord = prompt("Prego, inserire parola");
// var secondWord = prompt("Inserisci una seconda parola");
//
// if (firstWord.length > secondWord.length) {
//   // console.log(firstWord);
//   alert(secondWord + ' ' + firstWord);
// }
// else if (firstWord.length < secondWord.length){
//   // console.log(secondWord);
//   alert(firstWord + ' ' + secondWord);
// }
//  else {
//   alert ('Le parole hanno la stessa lunghezza')
//  }


// // SNACK 3
// // WHILE OPTION
// tot = 0;
// var i = 1;
// while (i <= 5) {
//   i++
//   var numbers = parseInt(prompt("inserisci un numero da sommare"));
//   tot += numbers;
// }
// alert(tot);
// // console.log(tot)
// if (isNaN(tot)) {
//   alert ('errore, inserisci solo numeri')
// }
//
// // FOR OPTION
// var tot = 0;
// for (var i = 0; i < 5; i++) {
//   var numbers = parseInt(prompt("inserisci un numero da sommare"));
//   tot += numbers;
// }
// alert(tot);
// // console.log(tot)
// // ERROR MESSAGE
// if (isNaN(tot)) {
//   alert ('errore, inserisci solo numeri')
// }


// // SNACK 4
// // VAR
// var guestName = prompt("Inserisci il tuo nome");
// var guestList = ["Don", "Vito", "MasterChief", "Dante", "Simone"];
// var join = false;
//
// for (var i = 0; i < guestList.length; i++) {
//   guestList[i]
//   if (guestName == guestList[i]) {
//     join = true;
//   }
// }
//
// if (join == true) {
//  alert(guestName + " benvenuto! Goditi la festa!");
// }
//
// else {
//   alert(guestName + " spiacente, il tuo nome non è sulla lista...");
// }


// // SNACK 5
// var userNumber = prompt('Ciao, inserisci un numero composto da quattro cifre ');
// var tot = 0;
// var i = 0;
//
// while (userNumber.length != 4 || isNaN(userNumber)) {
//   userNumber = prompt('Rilevato un errore, inserisci SOLO numeri composti da quattro cifre ');
// }
//
// for (i = 0; i < userNumber.length; i++) {
//   tot += parseInt(userNumber[i]);
// }
//
// alert(tot);
