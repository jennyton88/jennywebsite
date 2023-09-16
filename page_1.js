const button1 = document.body.querySelector("#button1");

const input1 = document.body.querySelector("#num1");
const input2 = document.body.querySelector("#num2");

const result = document.body.querySelector("#output");

//var num1_value;
//var num2_value;

if (input1.value != "") {
    var num1_value = Number(input1.value);
}

if (input2.value != "") {
    var num2_value = Number(input2.value);
}

input1.addEventListener("input", () => {
    if (input1.value != "") {
        num1_value = Number(input1.value);
    } else {
        num1_value = 0;
    }
    console.log(num1_value);
});

input2.addEventListener("input", () => {
    if (input2.value != "") {
        num2_value = Number(input2.value);
    } else {
        num2_value = 0;
    }
    console.log(num2_value);
});

button1.addEventListener("click", () => {
    result.textContent = addTogether(num1_value, num2_value); 
    console.log(result.textContent);
});

function addTogether(num1, num2) {
    return num1 + num2;
}