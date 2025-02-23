const touches = [...document.querySelectorAll(".bouton")];
const listeKeycodes = touches.map((touche) => touche.dataset.key);
const screen = document.querySelector("#screen");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculator(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculator(valeur);
});

const calculator = (valeur) => {
  if (listeKeycodes.includes(valeur)) {
    switch (valeur) {
      case "8":
        screen.textContent = "";
        break;

      case "61":
        const calcul = eval(screen.textContent);
        screen.textContent = calcul;
        break;

      default:
        const indexKeycode = listeKeycodes.indexOf(valeur);
        const touche = touches[indexKeycode];
        screen.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue l'ors de votre calcucle :" + e.message);
});
