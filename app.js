"use strict";

// Clears input on load
window.onload = function () {
    document.querySelector(".display").value = null;
};

// Get all the buttons elements
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const clear = document.querySelector(".clear");
const remove = document.querySelector(".delete");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");


// Showing on display
// Adding numbers to the operands
const showOnDisplay = function (e) {
    document.querySelector(".display").value += e.target.innerText;

}

// Clearing the display
const clearDisplay = function (e) {
    document.querySelector(".display").value = "";
}

// Delete last character
const removeFromDisplay = function (e) {
    let indexOfLastElement = document.querySelector(".display").value.length - 1;
    document.querySelector(".display").value = document.querySelector(".display").value.substr(0, indexOfLastElement);
}

// Making the operations
const addFunction = function (e) {
    document.querySelector(".display").value += "+";
}

const subtractFunction = function (e) {
    document.querySelector(".display").value += "-";

}

const multiplyFunction = function (e) {
    document.querySelector(".display").value += "*";

}

const divideFunction = function (e) {
    document.querySelector(".display").value += "/";

}

const giveResult = function (e) {
    try {
        if (document.querySelector(".display").value) {
            document.querySelector(".display").value = eval(document.querySelector(".display").value);
        } else {
            document.querySelector(".error-message").classList.add("displayed");
            setTimeout(() => {
                document.querySelector(".error-message").classList.remove("displayed");
            }, 3000);
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.querySelector(".error-message").classList.add("displayed");
            setTimeout(() => {
                document.querySelector(".error-message").classList.remove("displayed");
            }, 3000);
        } else {
            throw e;
        }
    }

}


// Event listeners for the buttons
one.addEventListener("click", showOnDisplay);
two.addEventListener("click", showOnDisplay);
three.addEventListener("click", showOnDisplay);
four.addEventListener("click", showOnDisplay);
five.addEventListener("click", showOnDisplay);
six.addEventListener("click", showOnDisplay);
seven.addEventListener("click", showOnDisplay);
eight.addEventListener("click", showOnDisplay);
nine.addEventListener("click", showOnDisplay);
remove.addEventListener("click", removeFromDisplay);
clear.addEventListener("click", clearDisplay);
add.addEventListener("click", addFunction)
subtract.addEventListener("click", subtractFunction)
multiply.addEventListener("click", multiplyFunction)
divide.addEventListener("click", divideFunction)
equals.addEventListener("click", giveResult);