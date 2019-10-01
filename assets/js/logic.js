var flag = 0;
// Array of operators
var operations = ["+", "-", "*", "/"];

// Display for getting values  and showing results
var display = document.createElement("div");
display.setAttribute("id", "display");
document.getElementById('cal-body').appendChild(display);

// Display input
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "display-input");
input.setAttribute("class", "box");
input.setAttribute("disabled", "disabled");
document.getElementById('display').appendChild(input);

// Display result
var result = document.createElement("input");
result.setAttribute("type", "text");
result.setAttribute("placeholder","0");
result.setAttribute("id", "display-result");
result.setAttribute("class", "box");
result.setAttribute("disabled","disabled");
document.getElementById('display').appendChild(result);


// Keypad for operators
var operators = document.createElement("div");
operators.setAttribute("id", "operators-keypad");
document.getElementById('cal-body').appendChild(operators);

// Setting  Keys for operators
for (i = 0; i < operations.length; i++) {
    let element = document.createElement("button");
    let operation = operations[i];
    element.appendChild(document.createTextNode(operations[i]));
    element.setAttribute("class", "btn");
    element.onclick = function () {
        if (flag == 0) {
            document.getElementById("display-input").value += operation;
            flag = 1;
        }
    }
    document.getElementById('operators-keypad').appendChild(element);
}
// Keypad for numbers
var keypad = document.createElement("div");
keypad.setAttribute("id", "keypad");
document.getElementById('cal-body').appendChild(keypad);

var container1 = document.createElement("div");
container1.setAttribute("id", "container1");
document.getElementById('keypad').appendChild(container1);
// Setting keys from 0 to 9 in keypad
for (i = 9; i >= 0; i--) {
    let element = document.createElement("button");
    element.appendChild(document.createTextNode(i));
    element.setAttribute("class", "btn");
    let value = i;
    element.onclick = function () {
        document.getElementById("display-input").value = document.getElementById("display-input").value + value;
    }
    document.getElementById('container1').appendChild(element);
}

let element = document.createElement("button");
element.appendChild(document.createTextNode("."));
element.setAttribute("class", "btn");
document.getElementById('container1').appendChild(element);
element.onclick = function () {
    document.getElementById("display-input").value = document.getElementById("display-input").value + ".";
}

var container2 = document.createElement("div");
container2.setAttribute("id", "container2");
document.getElementById('keypad').appendChild(container2);

var reset = document.createElement("button");
reset.setAttribute("id", "reset");
reset.innerHTML = "CA";
reset.onclick = function () {
    var val = " ";
    var val2 = "0"
    document.getElementById("display-input").value = val;
    document.getElementById("display-result").value = val2;
    flag = 0;

}
document.getElementById('container2').appendChild(reset);

let mod = document.createElement("button");
mod.appendChild(document.createTextNode("%"));
mod.setAttribute("class", "btn");
document.getElementById('container2').appendChild(mod);
mod.onclick = function () {
    document.getElementById("display-input").value = document.getElementById("display-input").value +"%";
}
// Enter key
var Enter = document.createElement("button");
Enter.setAttribute("id", "Enter");
Enter.innerHTML = "=";
document.getElementById('container2').appendChild(Enter);
Enter.onclick = function () {
    let exp = document.getElementById("display-input").value;
    console.log(exp);
    let result = eval(exp);
    document.getElementById("display-result").value = result;
    flag = 0;
}


