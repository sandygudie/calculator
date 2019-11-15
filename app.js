// MYCALCULATOR TODO
//HAVE A BACK UNDO

let inputbox= document.getElementById("display")
// to display value
function displayValue(val){
    inputbox.value += val
}

// to evaluate the digit and return result
function solve(){
    let x = inputbox.value
    let y =eval(x)
 inputbox.value = y
}

// to clear the display
function clr(){
  inputbox.value = " "
}
// to backspace
function backspace(){
    inputbox.value =  inputbox.value.substring(0, inputbox.value.length - 1);
}

