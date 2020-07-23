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

// question one 
const input = document.getElementById('name');
const resultName = document.getElementById('res-name');

input.addEventListener('input', function(event) {
    resultName.textContent = event.target.value; 
});
// question two

const gender = document.querySelector('select#gender');
const resultGender= document.getElementById('res-gender');

gender.addEventListener('change', function(event) {
    resultGender.textContent = event.target.value; 
});
// question three

result = document.getElementById('result');

result.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
    const mouseX = document.getElementById('mouse-x');
    mouseX.textContent = x ;
           
    const mouseY = document.getElementById('mouse-y');
    mouseY.textContent = y;
});


/*
    In this chapter you have learned:

    What AJAX is;

    How to use it to make a simple request to a web service;

    What the JSON format is;

    How this format is suitable for APIs and JavaScript;

    How to retrieve data sent by a web service.
 
 */

const ask_Weather = document.getElementById('ask-weather');
ask_Weather.addEventListener('click', askWeather);

function askWeather(){
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response.current_condition.condition);
      const weatherResult = document.getElementById("weather-result");
      weatherResult.textContent = response.current_condition.condition ;
      
    }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
  

}

// Question one &  question tow  : 
/*
Q1 : We first want to validate the Code field of the form. For each letter entered in the field having code ID, we want to check that the value of the field begins with CODE- thanks to a Regex: / ^ CODE- /. If the value does start with CODE- then we display in the element having for ID code-validation: Valid code, otherwise we display in this element Invalid code.

Q2 :Now that we know if our code is valid or not, we would like to gray (thanks to the disabled attribute) the submit button (the input of type submit having the ID submit-btn) when the code is invalid, and to sober it up when the code is valid.

This means that we will have to add a disabled = "true" attribute to the submit button when the code is invalid. And remove this disabled attribute when the code is valid (remember the course on modifying the DOM to define and remove attributes).
*/
function isValid(value) {
    return /^CODE-/.test(value);
}

const textCode = document.getElementById('code');
const codeValidation = document.getElementById('code-validation');
const submitBtn = document.getElementById("submit-btn");

textCode.addEventListener('input', function(e) {
  var value = e.target.value;
  if (isValid(value)){
    codeValidation.textContent = "Code valide";
    submitBtn.removeAttribute("disabled");
  } else {
    codeValidation.textContent = "Code invalide";
    submitBtn.setAttribute("disabled", "true");
  }
    
});




