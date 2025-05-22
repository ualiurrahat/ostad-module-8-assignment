function appendToDisplay(value) {
  //   console.log(value); to check on browser console if buttons work successfully.
  let display = document.getElementById("display");
  display.value = display.value + value; // preserving the previous value and then adding current value
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    // console.log(result);
    document.getElementById("display").value = result;
  } catch (error) {
    console.log(error);
  }
}
