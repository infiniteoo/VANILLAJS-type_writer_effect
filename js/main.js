const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;

  // Get full text of current word
  const fullTxt = this.words[current];

  // check if deleting
  if (this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  } else {
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  setTimeout(() => {
    this.type();
  }, 500);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}
