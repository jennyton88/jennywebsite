const button1 = document.body.querySelector("#button1");
const button2 = document.body.querySelector("#button2");

const input1 = document.body.querySelector("#num1");
const input2 = document.body.querySelector("#num2");

const result = document.body.querySelector("#output");

var num1_value;
var num2_value;

window.onload = function(){
    input1.value = null;
    input2.value = null;
}

input1.addEventListener("input", () => {
    if (input1.value != "" && input1.value != null) {
        num1_value = Number(input1.value);
    } else {
        num1_value = 0;
    }
});

input2.addEventListener("input", () => {
    if (input2.value != "" && input2.value != null) {
        num2_value = Number(input2.value);
    } else {
        num2_value = 0;
    }
});

button1.addEventListener("click", () => {
    if (num1_value != null && num2_value != null) {
        result.textContent = addTogether(num1_value, num2_value); 
    }
});

button2.addEventListener("click", () => {
    result.textContent = "";
    output_num = null;
    num1_value = null;
    num2_value = null;
    input1.value = null;
    input2.value = null;
});

function addTogether(num1, num2) {
    return num1 + num2;
}