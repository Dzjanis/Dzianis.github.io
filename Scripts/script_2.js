"use strict";
document.getElementById('RunScript1').addEventListener('click', function() {
    let value = parseFloat(prompt('введите число', ''));
    alert("вы ввели " + value);
    if (value === null || isNaN(value)){
        alert("неверные данные");
    } else {
        if (value != 0){ 
            if (value > 0){ alert("1"); }
            else{
                alert("-1");
            }
        }
        else{
            alert("0");
        }
    }
});