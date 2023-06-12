const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fasszociacio.github.io/list.txt");
xhr.onload = function() {
  if (xhr.status === 200) {
    const text = xhr.responseText;
    const words = text.split("\n");

    function getRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    }

    const wordElement = document.getElementById("word");
    wordElement.innerHTML = getRandomWord();
  }
};
xhr.send();
