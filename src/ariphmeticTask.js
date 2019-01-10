const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];     
const operators = ['-', '+', '*']; 
    function randomOperation(arr, capacity) {
        let number = [];
        for(let i = 0;i<capacity;i++){
        number[i] = arr[Math.floor(Math.random() * arr.length)]; 
        }
        if(parseInt(number[0]))
        return number.join('');
        return number[0];
    } 
    export default function getOperation(capacity) { 
        let firstNumber = randomOperation(numbers,capacity);
        let secondNumber = randomOperation(numbers,capacity);
        let operation = randomOperation(operators,capacity);
        if(firstNumber<secondNumber && operation === '-'){
            let i = firstNumber;
            firstNumber = secondNumber;
            secondNumber = i;
        }
        return `${firstNumber} ${operation} ${secondNumber}`; 
        }