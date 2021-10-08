// Create a simple colour randomizer using pre-determined colours
// Create an array for colours 
const colors = [
  "white",
  "yellow",
  "orange",
  "orangered",
  "red",
  "maroon",
  "purple",
  "navy",
  "blue",
  "teal",
  "green",
  "yellowgreen",
  "black"
]

const button = document.getElementById('btn')
const colorName = document.getElementById('color-name')

// When the button is clicked, a random colour gets applied to the body
button.addEventListener('click', () => {
  // Get color from array
  const randomNumber = randomNum()
  // Change background colour
  document.body.style.backgroundColor = colors[randomNumber]
  // Change the text to match colour
  colorName.textContent = colors[randomNumber]
})

// Generate random Number
function randomNum() {
  return Math.trunc(Math.random() * colors.length)
}