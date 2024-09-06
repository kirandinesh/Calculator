function clearDisplay() {
  document.getElementById('result').value = '';
}

function back() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function pressed(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  let expression = document.getElementById('result').value;
  try {
    let result = eval(expression);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      throw new Error();
    }
    document.getElementById('result').value = result;
  } catch (e) {
    document.getElementById('result').value = ''; 
  }
}


function toggleMode() {
  const body = document.body;
  const modeButton = document.querySelector('.mode-button');
  var mode = document.getElementById('mode-button')

  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    modeButton.innerHTML = 'Light<br>Mode';
    document.getElementById('result').style.color='white'
  } else {
    modeButton.innerHTML = 'Dark<br>Mode';
    document.getElementById('result').style.color='black'
  }
}
