function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.