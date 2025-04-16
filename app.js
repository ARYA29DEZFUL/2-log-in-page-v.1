let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let massege = document.getElementById("Alert")
let container = document.querySelector(".container")
let button = document.getElementById("button")




let buttonFunk = function () {
    if (input1.value.length < 12 || input1.value.length < 8) {
        massege.style.display = "block"
        container.style.boxShadow = "0px 0px 50px red";
        button.style.backgroundColor = "red"
    } else {
        massege.style.display = "none"
        container.style.boxShadow = "0px 0px 50px 0px green";
        button.style.backgroundColor = "#50a84d"
    }
}






