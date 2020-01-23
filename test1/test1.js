    var test = 'noir'; // On crée une variable « test » contenant le mot « noir »

    (function() { // Début de la zone isolée

        var test = 'blanc'; // On crée une variable du même nom avec le contenu « blanc » dans la zone isolée

        alert('Dans la zone isolée, la couleur est : ' + test);

    })(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

    alert('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « noir » vu que la « zone isolée » n'a aucune influence sur le reste du code

    function askNumber() {
        var nbrEntree = parseInt(prompt('Entrez un nombre SVP : '));
        while (isNaN(nbrEntree)) {
            nbrEntree = parseInt(prompt('Entrez un nombre SVP : '));
        }
        return nbrEntree;
    }

    alert('Le nombre est : ' + askNumber());
    ///////////////////////////////////////  les Propriete . 
    var myString = 'Test';
    alert(myString.length); // Affiche : « 4 »

    myString = 'Test 2';
    alert(myString.length); // Affiche : « 6 » (l'espace est aussi un caractère)

    var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

    myArray.shift(); // Retire « Sébastien »
    myArray.pop(); // Retire « Guillaume »

    alert(myArray); // Affiche « Laurence,Ludovic,Pauline »
    ////////////////////////// 
    var cousinsString = 'Pauline Guillaume Clarisse',
        cousinsArray = cousinsString.split(' ');
    alert(cousinsString);
    alert(cousinsArray);

    var cousinsString_2 = cousinsArray.join('-');

    alert(cousinsString_2);
    var family = {
        self: 'Achraf',
        sister: 'Achwak',
        brother: 'Amine',
        cousin_1: 'Aymene',
        cousin_2: 'Akram'
    };

    for (var id in family) { // On stocke l'identifiant dans "id" pour parcourir l'objet "family".

        alert(family[id]);

    }
    ///    petit Exo *****************************************
    var nicks = [], // Création du tableau vide
        nick;

    while (nick = prompt('Entrez un prénom :')) { // Si la valeur assignée à la variable « nick » est valide (différente de « null ») alors la boucle s'exécute
        nicks.push(nick); // Ajoute le nouveau prénom au tableau
    }

    if (nicks.length > 0) { // On regarde le nombre d'items
        alert(nicks.join(' ')); // Affiche les prénoms à la suite
    } else {
        alert('Il n\'y a aucun prénom en mémoire !');
    }
    /// Aficcher les elements d un  tableau ****
    var array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    for (var i = 0, c = array.length; i < c; i++) {
        alert(array[i]);

    }