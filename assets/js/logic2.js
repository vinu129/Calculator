

function insert(num) {
    document.getElementById("display-input").value = document.getElementById("display-input").value + num;
}
function result() {
    let ans = document.getElementById("display-input").value;
    console.log(ans);
    document.getElementById("display-result").value = eval(ans);
}
function clear() {
    document.getElementById("display").value = " ";
}