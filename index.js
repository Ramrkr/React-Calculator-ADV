
const res=document.getElementById("result");


function insert(value){
  if (!res.value){
    res.value="";
  }
  res.value+=value;
  console.log(res.value)
}
function calc(value){
  const calculate=eval(value||null);
  if (isNaN(calculate)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculate;
  }

}
function erase() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

// Example usage:
// Call handleButtonClick('+') when the '+' button is clicked
// Call handleButtonClick('5') when the '5' button is clicked
