const userText = prompt('Введите текст')
console.log(String(userText.trim()))

const wordFromText = prompt('Введите слово из текста')
console.log(String(wordFromText.trim()))

let indexOfWorld
console.log(userText.indexOf(wordFromText))
const zero = 0
console.log(zero)

console.log(userText.slice(zero, indexOfWorld))
// alert(`Результат: ${userText.slice(1, 5)}`)
