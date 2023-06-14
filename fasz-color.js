// Retrieve the CSS custom properties and store them in an array
const colors = [];

for (let i = 1; i <= 17; i++) {
  colors.push(getComputedStyle(document.documentElement).getPropertyValue(`--c-${i}`));
}
  
// Generate a random index to select a color from the array
const randomIndex = Math.floor(Math.random() * colors.length);

// Apply the randomly selected color to your <p> tag
const paragraph = document.querySelector('p');
paragraph.style.color = colors[randomIndex];