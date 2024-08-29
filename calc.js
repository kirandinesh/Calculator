function pressed(value) {
  var display = document.getElementById('display')
  display.value += value
}
function calculate() {
  var display = document.getElementById('display')
  if(display.value=='')
    display.value=0
  else
    display.value = eval(display.value)
}
function clearDisplay() {
  var display = document.getElementById('display')
  display.value = ''
}

function back() {
  var display = document.getElementById('display')
  display.value = display.value.slice(0, -1);

}
