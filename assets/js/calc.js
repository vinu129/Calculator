// Array of operators
var operations = ["+", "-", "*", "/"];


// Display for getting values  and showing results
var display = document.createElement("input");
display.setAttribute("type", "text");
display.setAttribute("id", "display");
document.getElementById('cal-body').appendChild(display);

var keypad = document.createElement("tabel");
keypad.setAttribute("id", "keypad");
document.getElementById('cal-body').appendChild(keypad);

var tabel_row = document.createElement("tr");
tabel_row.setAttribute("id", "tabel_row");
document.getElementById('keypad').appendChild(tabel_row);

// for(i=0;i<4;i++){
let val = operations[i];
var tabel_col = document.createElement("td");
tabel_col.setAttribute("class", "box");
document.getElementById('tabel_row').appendChild(tabel_col);

var btn = document.createElement("button");
btn.appendChild(document.createTextNode(val));
btn.setAttribute("id", val);

document.getElementsByClassName('box').appendChild(btn);


// }
