function convert() {
    var input = document.getElementById('input').value;
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var result = document.getElementById('result');
  
    if (unit === 'celsius') {
      var fahrenheit = (input * 9/5) + 32;
      result.innerHTML = input + '°C = ' + fahrenheit + '°F';
    } else {
      var celsius = (input - 32) * 5/9;
      result.innerHTML = input + '°F = ' + celsius + '°C';
    }
  }
  