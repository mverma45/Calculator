// alert('works');
class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }

    // Different functions the Calculator needs to do
    clear() {
        // this is the number in the currentOperand
        this.cOperand = ''
         // this is the number in the previousOperand
        this.pOperand = ''
        // no operations selected since everything was cleared
        this.operation = undefined
    }

    delete() {
    
    }

    //we have to make this strings so javascript doesn't try to add the numbers. This will make sure that numbers are added if we push 1 and 2 we will get 12 in the display not 1 then 2.  The if statement will check to see if a . is added if it is already added it will stop the function. It will not let the user the period (.) more than one time.
    appendNum(number) {
        if(number === '.' && this.cOperand.includes('.')) return
        this.cOperand = this.cOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        // this sets the operation, it sets the operation to the operation that was passed in.
        this.operation = operation
        //the previous operand eqauls to the current operand
        this.pOperand = this.cOperand
        // this clears out the current operand
        this.cOperand = ''
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperand.innerText = this.cOperand
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')

// defines a calculator class and passes everything from the constructor in to it. The previousOperand and the currentOperand text

const calculator = new Calculator(previousOperand, currentOperand)

// we want to loop over all the different buttons, so we can use a forEach loop, we can add an event listener when we click the button we want it to add the number to the display hence we are calling updateDisplay to add the button to the display

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})