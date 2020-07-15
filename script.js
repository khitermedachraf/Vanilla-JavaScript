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
