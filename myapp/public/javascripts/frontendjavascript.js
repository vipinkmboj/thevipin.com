// Display date...
function showDateandTime() {
    document.getElementById('show-date').innerHTML = Date();
}

//Display some text by id...
document.getElementById('sometext').innerHTML = 'Some text';

// show twitter and show facebook on button click
function showtwitter() {
    document.getElementById('myImage').src = 'frontendjavascriptimages/twitter.png';
}
function showfacebook() {
    document.getElementById('myImage').src = 'frontendjavascriptimages/fb.png';
}

//Display and hide image on button click
function showscreenshot() {
    document.getElementById('screenshot').style.display = 'block';
}
function hidescreenshot() {
    document.getElementById('screenshot').style.display = 'none';
}

//change font size using javascript and getting document by class name

function changefontsize() {
    document.getElementsByClassName('lorem-class')[0].style.fontSize = '30px'
}

//Calculator



// calculator 2 javascript
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computaion
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computaion = prev + current
                break
            case '-':
                computaion = prev - current
                break
            case '*':
                computaion = prev * current
                break
            case '/':
                computaion = prev / current
                break
            default:
                return
        }
        this.currentOperand = computaion
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }else {
            return integerDisplay
        }
        /*const floatNumber = parseFloat(number)
        if(isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
        */
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand) 
        if(this.operation != null) {
            this.previousOperandTextElement.innerHTML = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}` 
        }else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const outputButton = document.querySelector('[data-output]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => { 
        //calculator.appendNumber(button.innerText)       
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});  

outputButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()

})

//piano javascript 
/*
const black_keys = ['s', 'd', 'g', 'h', 'j']
const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm',',']


const keys = document.querySelectorAll('.key');
const blackKeys = document.querySelectorAll('.key.black-key')
const whiteKeys = document.querySelectorAll('.key.white-key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', e => {
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = white_keys.indexOf(key)
    const blackKeyIndex = black_keys.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}
*/