//importe les annalogies depuis le fichier annalogies.json
fetch("analogies.json").then(function (response) {
  response.json().then(function (data) { //récupère les données du fichier JSON et les stocke dans une variable data
    console.log(data);
    for (let numCase = 0; numCase < data.length; numCase++) {
      const element = data[numCase]; //exécute la fonction analogies avec toutes les valeurs de data
      analogies(element);
    }
  });
});


function analogies(x) {
  document.querySelector(".main").innerHTML +="<section class='slider' id=" + x.id + "><div class='screen'><h1>" + x.image + "</h1>" + "</br></br>" + "<h2>Si j'étais " + x.analogie + " " + "je serais..." + "</h2>" + "<h3>" + x.valeurAnalogie + "</h3>" + "<p>" + x.explication + "</p></div></section>";
}

const envoyer_form = document.getElementById("Envoyerform");
envoyer_form.addEventListener("click", ajouter_analogie);

function ajouter_analogie() {
  const input_analogie = document.getElementById("analogie").value;
  const input_valeurAnalogie = document.getElementById("valeurAnalogie").value;
  const input_explication = document.getElementById("explication").value;

  objet_analogie = {
    analogie: input_analogie,
    valeurAnalogie: input_valeurAnalogie,
    explication: input_explication,
    "image":image_analogie
  };
  analogies(objet_analogie);
}

var loadFile = function(event) {
  image_analogie =  "<img class=Imageclickable src=" + URL.createObjectURL(event.target.files[0]) + ">"
  console.log(image_analogie)
};

// Modale mentions légales

// éléments du DOM
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn1");
const closeBtn = document.querySelector(".close");

// les events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// ouvrir la modale
function openModal() {
  modal.style.display = "block";
}

// fermer la modale
function closeModal() {
  modal.style.display = "none";
}

// API Formulaire
function Envoyerform() {
  const email = document.getElementById("email").value
  const analogie = document.getElementById("nom").value
  const valeurAnalogie = document.getElementById("valeur").value
  const explication = document.getElementById("explication").value
  const image_analogie = document.getElementById("image_link").value

  objet = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&courriel=" + email + "&login=morgan.cavel-benard&message=Si jétais " + analogie + " je serais " + valeurAnalogie + " car" + explication + ". Image:" + image_analogie;

  if (confirm(objet) == true) {
      window.open(objet)
    } else {
      alert ("ERROR")
    }
};