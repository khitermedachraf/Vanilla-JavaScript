let newP = document.createElement("p");
const mainDiv = document.getElementById("main");

mainDiv.appendChild(newP);
newP.innerHTML ="Mon <strong>grand</strong> contenu";
newP.classList.add("important");
newP.style.color = "green";
