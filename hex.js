const buttonHex = document.getElementById('btn-hex')
const colorHexName = document.getElementById('color-hex')

const hexValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
]

buttonHex.addEventListener('click', () => {
  const hexColor = createHexCode()
  document.body.style.backgroundColor = hexColor
  colorHexName.textContent = hexColor
})


// Generate random sequence of letters/numbers to create a hex code 
// hex codes are 6 digits, using 0-9 and a-f
function createHexCode() {
  let hexCode = "#"
  for (let i = 0; i < 6; i++) {
    const hexDigit = Math.floor(Math.random() * hexValues.length)
    hexCode += hexValues[hexDigit]
  }
  return hexCode
}