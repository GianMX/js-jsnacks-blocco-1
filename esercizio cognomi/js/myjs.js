nameList = ['Master','Doom','Deacon','Cloud','Squall','Sekiro','Crescenzo','Hannibal'];
surnameList = ['Lecter','Guy','Trololololo','Strife','Leonhart','Bushido','Bond','Chief'];
fakeList = [];

for (var i = 0; i < 8; i++) {
  random1 = Math.floor(Math.random() * 8);
  random2 = Math.floor(Math.random() * 8);
  document.getElementById('fakerandom').innerHTML += nameList[random1] + " " + surnameList[random2] + "<br>";
}
