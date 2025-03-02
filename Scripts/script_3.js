"use strict";
document.getElementById('RunScript1').addEventListener('click', function() {
    let result;
    let a = parseFloat(prompt('Enter smth', ''));
    let b = parseFloat(prompt('Enter smth', ''));
    if (isNaN(a) || isNaN(b)) {alert('BadData')}
    else {alert('you entered: ' + a + ' and ' + b);
          result = (a+b<4) ? 'little': 'many';
          alert("it's a " + result);}
    alert('The End');
});