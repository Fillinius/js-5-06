const userText = prompt('Введите текст')
console.log(String(userText.trim()))

const wordFromText = prompt('Введите слово из текста')
console.log(String(wordFromText.trim()))

let indexOfWorld = userText.indexOf(wordFromText)

let resultString = userText.slice(0, indexOfWorld)

alert(resultString)
