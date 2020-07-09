var user = Math.floor(Math.random() * 6 + 1);
var computer = Math.floor(Math.random() * 6 + 1);

document.getElementById('user').innerHTML = "Numero utente: " + user;
document.getElementById('computer').innerHTML = "Numero computer: " + computer;

if (user > computer) {
    document.getElementById('vincitore').innerHTML = "Hai vinto!";
} else if (computer > user) {
    document.getElementById('vincitore').innerHTML = "Il computer ha vinto";
} else {
    document.getElementById('vincitore').innerHTML = "Pareggio";
}

// var emails = ["prova@prova.it", "ciao@ciao.it", "davide@davide.it"];
//
//
// document.getElementById("button").addEventListener("click", check);
//
// function check() {
//     bool = false;
//     var email = document.getElementById("email").value;
//     var i;
//     for (i in emails) {
//         document.getElementById("result").style.display = "none";
//         if (emails[i] == email) {
//             bool = true;
//         }
//     }
//     if (bool) {
//         document.getElementById("result").style.display = "block";
//         document.getElementById("result").style.color = "green";
//         document.getElementById("result").innerHTML = "La tua mail è presente nell'elenco.";
//     } else {
//         document.getElementById("result").style.display = "block";
//         document.getElementById("result").style.color = "red";
//         document.getElementById("result").innerHTML = "La tua mail non è presente nell'elenco.";
//     }
//
// }
//
//
// for (i in emails) {
//     console.log(emails[i]);
//     var p = document.createElement("P");
//     p.innerHTML += (emails[i])
//     document.getElementById("emails").appendChild(p);
// }
