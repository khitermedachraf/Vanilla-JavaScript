var str; // it conatains the all the input of the user

/* Parameter 'e' is the click Event */
function clear(e) {
    /* Get the clicked element's innerHTML */
    document.getElementById('res').innerHTML = "";
}

function add0(e) {
    str = document.getElementById('res').innerHTML + "0";
    document.getElementById('res').innerHTML = str;
}

function add1(e) {
    str = document.getElementById('res').innerHTML + "1";
    document.getElementById('res').innerHTML = str;
}

function displayResult(e) {
    document.getElementById(btn.id).innerHTML++;
}

function addSum(e) {
    str = document.getElementById('res').innerHTML + " + ";
    document.getElementById('res').innerHTML = str;

}

function addSub(e) {
    str = document.getElementById('res').innerHTML + " - ";
    document.getElementById('res').innerHTML = str;
}

function addMul(e) {
    str = document.getElementById('res').innerHTML + " * ";
    document.getElementById('res').innerHTML = str;
}

function addDiv(e) {
    str = document.getElementById('res').innerHTML + " / ";
    document.getElementById('res').innerHTML = str;
}

/* Add a click event listener that calls action(e) when clicked */
document.getElementById('btn0').addEventListener('click', add0);
document.getElementById('btn1').addEventListener('click', add1);
document.getElementById('btnClr').addEventListener('click', clear);
document.getElementById('btnEql').addEventListener('click', displayResult);
document.getElementById('btnSum').addEventListener('click', addSum);
document.getElementById('btnSub').addEventListener('click', addSub);
document.getElementById('btnMul').addEventListener('click', addMul);
document.getElementById('btnDiv').addEventListener('click', addDiv);