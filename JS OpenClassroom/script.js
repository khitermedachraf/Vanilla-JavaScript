let newP = document.createElement("p");
const mainDiv = document.getElementById("main");

mainDiv.appendChild(newP);
newP.innerHTML ="Mon <strong>grand</strong> contenu";
newP.classList.add("important");
newP.style.color = "green";



const listeEl = document.querySelector("article > ul.important > li")

console.log(listeEl.nextElementSibling);

const mainContent = document.getElementById('main-content');
console.log(mainContent) ;

const elt_important = document.getElementsByClassName ('important');
console.log(elt_important[2]) ;

const articles = document.getElementsByTagName('article');
console.log(articles[2]);

const eltLiImportant = document.querySelectorAll('article > ul.important > li') ; 
console.log(eltLiImportant[0]);
console.log(eltLiImportant[1]);
console.log(eltLiImportant[2]);

const firstParent = eltLiImportant[2].parentElement ; 
const secondParent = firstParent.parentElement ; 
const nextElt = secondParent.nextElementSibling ; 
const li7 = nextElt.querySelector('ul > li');
console.log(li7);
 // parte three of JavaScript

 const eltParent = document.getElementById('parent');    // On récupère l'élément sur lequel on veut détecter le clic

const eltChild = document.getElementById('child');

let counter1 = 0;
let counter2 = 0 ; 
eltParent.addEventListener('click', function() {          // On écoute l'événement click
    counter1++;
 let nbrClickParent = document.getElementById('parent-count') ; 
  nbrClickParent.textContent = counter1 ; 
  // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

eltChild.addEventListener('click', function(event) {          // On écoute l'événement click
    counter2++;
    let nbrClickChild = document.getElementById('child-count') ; 
    nbrClickChild.textContent = counter2 ; 
    event.preventDefault();   
    // On utilise la fonction preventDefault de notre objet event pour empêcher le        comportement par défaut de cet élément lors du clic de la souris
    event.stopPropagation();
    
});