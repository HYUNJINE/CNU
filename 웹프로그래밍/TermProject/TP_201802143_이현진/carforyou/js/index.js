// line 1~52 제가 구현하지 않은 부분입니다. 
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setTimeout(changeWord,4000);

const text = document.getElementsByClassName("text");
text[0].style.position="absoulte"
text[0].style.left="300px"
text[0].style.top="100px"
// setInterval(changeWord, 4000);

const tesla = document.getElementById("tesla");
const porsche = document.getElementById("porsche");
const ferrari = document.getElementById("ferrari");
tesla.addEventListener('click',()=>{
    window.location="..\\tesla\\tesla.html"
})
porsche.addEventListener('click',()=>{
    window.location="..\\porsche\\porsche.html"
})
ferrari.addEventListener('click',()=>{
    window.location="..\\ferrari\\ferrari.html"
})