var emails = ["prova@prova.it", "ciao@ciao.it", "davide@davide.it"];


document.getElementById("button").addEventListener("click", check); 

function check() {
    bool = false;
    var email = document.getElementById("email").value;
    for (i in emails) {
        document.getElementById("result").style.display = "none";
        if (emails[i] == email) {
            bool = true;
        }
    }
    if (bool) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "La tua mail è presente nell'elenco.";
    } else {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "La tua mail non è presente nell'elenco.";
    }

}


for (i in emails) {
    console.log(emails[i]);
    var p = document.createElement("P");
    // p.appendChild(emails[i]);
    p.innerHTML += (emails[i])
    document.getElementById("emails").appendChild(p);
}
