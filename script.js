let input = ''
let history = ''
let operator = ''

function rerender () {
  const slider = document.getElementById('myRange')
  const slideValue = document.getElementById('slideValue')
  slideValue.innerHTML = slider.value

  const outputValue = document.getElementById('outputValue')
  outputValue.innerHTML = input

  const historyValue = document.getElementById('historyValue')
  historyValue.innerHTML = history
}

rerender()

function input_button () {
  const slider = document.getElementById('myRange')
  input = input + slider.value
  rerender()
}

function resetOutput () {
  history = input
  input = ''
  rerender()
}

function clear_button () {
  console.log('cleared')
  history = ''
  input = ''
  operator = ''
  rerender()
}
function operate (symbol) {
  if ((history !== '') && (input !== '')) calculate()

  switch (symbol) {
    case '+':
      operator = '+'
      break
    case '-':
      operator = '-'
      break
    case '*':
      operator = '*'
      break
    case '/':
      operator = '/'
      break
    default:
      break
  }
  resetOutput()
}
function calculate () {
  if (operator !== '' && input !== '') {
    switch (operator) {
      case '+':
        input = (parseInt(history) + parseInt(input)).toString()
        break
      case '-':
        input = (parseInt(history) - parseInt(input)).toString()
        break
      case '*':
        input = (parseInt(history) * parseInt(input)).toString()
        break
      case '/':
        input = (parseInt(history) / parseInt(input)).toString()
        break
      default:
        console.log('error')
    }
  }
  history = ''
  rerender()
}
