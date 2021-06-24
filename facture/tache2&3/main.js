/* Ecrire une fonction qui impose que certains champs de votre formulaire ne soient pas vides. */
/* les input sont : N* TVA, nom , prenom, email, N* telephone, code postal, carte de paiment */

document.getElementById('prenom').required = true;
document.getElementById('nom').required = true;
document.getElementById('email').required = true;
document.getElementById('telephone').required = true;
document.getElementById('TVA').required = true;

document.getElementById('codePostal').required = true;

document.getElementById('cartePaiment').required = true;