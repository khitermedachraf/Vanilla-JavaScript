var text = 'Variable globale !';

(function() { // On utilise une IIFE pour « isoler » du code

    var text = 'Variable locale !';

    alert(text); // Forcément, la variable locale prend le dessus

    alert(window.text); // Mais il est toujours possible d'accéder à la variable globale grâce à l'objet « window »

})();
var div = document.getElementById('myDiv');

alert(div);
var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"

alert(queryAll.length); // Affiche : "2"
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"


var link = document.getElementById('myLink');
var href = link.getAttribute('href'); // On récupère l'attribut « href »

alert(href);

link.setAttribute('href', 'http://www.siteduzero.com'); // On édite l'attribut « href »