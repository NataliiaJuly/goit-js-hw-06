const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.