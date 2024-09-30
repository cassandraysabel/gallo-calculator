const display = document.getElementById('display');

display.disabled = true;
display.value = '';

function updateDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  turnOnCalculator(); 
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function sayHello() {
  const languages = ['Hello', 'Hola', 'Kumusta', 'Bonjour', 'Hallo', 'Ciao', 'こんにちは', '안녕', '你好', 'สวัสดี' ];
  const randomIndex = Math.floor(Math.random() * languages.length);
  display.value = languages[randomIndex];
  setTimeout(() => {
    clearDisplay();
    turnOnCalculator();
  }, 2000); 
}

function sayGoodbye() {
  display.value = 'Goodbye';
  setTimeout(() => {
    turnOffCalculator();
  }, 2000); 
}

function turnOnCalculator() {
  display.disabled = false;
}


function turnOffCalculator() {
  display.disabled = true;
  display.value = '';
}


document.querySelectorAll('.btns button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    switch (value) {
      case 'AC':
        clearDisplay();
        break;
      case 'DEL':
        deleteLastChar();
        break;
      case '=':
        calculate();
        break;
      case 'HI':
        sayHello();
        break;
      case 'BYE':
        sayGoodbye();
        break;
      default:
        if (!display.disabled) {
          updateDisplay(value);
        }
    }
  });
});