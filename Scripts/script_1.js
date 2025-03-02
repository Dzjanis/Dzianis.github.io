"use strict";
document.getElementById('RunScript1').addEventListener('click', function() {
    let a = Number(prompt("1st number", 1));
    let b = Number(prompt('2nd number', 2));
    alert('Result = ' + (a + b));
    // alert('Executed');
});