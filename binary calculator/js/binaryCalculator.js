var number1, number2;

/* Parameter 'e' is the click Event */
function clear(e) {
    /* Get the clicked element's innerHTML */
    document.getElementById('res').innerHTML = "";
}

function add0(e) {
    let str = document.getElementById('res').innerHTML + "0";
    document.getElementById('res').innerHTML = str;
}

function add1(e) {
    let str = document.getElementById(btn.id).innerHTML + "1";
    document.getElementById(btn.id).innerHTML = str;
}

function displayResult(e) {
    document.getElementById(btn.id).innerHTML++;
}

function addSum(e) {
    document.getElementById(btn.id).innerHTML++;
}

function addSub(e) {
    document.getElementById(btn.id).innerHTML++;
}

function addMul(e) {
    document.getElementById(btn.id).innerHTML++;
}

function addDiv(e) {
    document.getElementById(btn.id).innerHTML++;
}

/* Add a click event listener that calls action(e) when clicked */
document.getElementById('btn0').addEventListener('click', add0);
document.getElementById('btn1').addEventListener('click', add1);
document.getElementById('btnClr').addEventListener('click', clear);
document.getElementById('btn4').addEventListener('click', action);
document.getElementById('btn1').addEventListener('click', action);
document.getElementById('btn2').addEventListener('click', action);
document.getElementById('btn3').addEventListener('click', action);
document.getElementById('btn4').addEventListener('click', action);