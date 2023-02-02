
function add() {
    firstOperand = Number($("#first-operand").val());
    secondOperand = Number($("#second-operand").val());
    result = firstOperand + secondOperand;
    console.log(result);
    $("#result").html(result);
}

function subtract() {
    firstOperand = Number($("#first-operand").val());
    secondOperand = Number($("#second-operand").val());
    result = firstOperand - secondOperand;
    console.log(result);
    $("#result").html(result);
}

function mulitply() {
    firstOperand = Number($("#first-operand").val());
    secondOperand = Number($("#second-operand").val());
    result = firstOperand * secondOperand;
    console.log(result);
    $("#result").html(result);
}

function divide() {
    firstOperand = Number($("#first-operand").val());
    secondOperand = Number($("#second-operand").val());
    result = firstOperand / secondOperand;
    console.log(result);
    $("#result").html(result);
}


// This is our Main funciton
function setup() {
    // firstOperand = Number($("#first-operand").val());
    // secondOperand = Number($("#second-operand").val());

    $("#add").click(add);
    $("#sub").click(subtract);
    $("#multi").click(mulitply);
    $("#divide").click(divide);
    
}

// Always define this at the bottom so JS can read all other functions
jQuery(document).ready(setup);














// function add(firstOp, secondOp) {
//     result = firstOp + secondOp;
//     console.log(result);
//     $("#result").html(result);
// }

// function subtract(firstOp, secondOp) {
//     subResult = firstOp - secondOp;
//     console.log(subResult);
//     $("#result").html(subResult);
// }

// function mulitply(firstOp, secondOp) {
//     result = firstOp * secondOp;
//     console.log(result);
//     $("#result").html(result);
// }

// function divide(firstOp, secondOp) {
//     result = firstOp / secondOp;
//     console.log(result);
//     $("#result").html(result);

// }