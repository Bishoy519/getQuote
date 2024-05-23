

var quotes = [
 `<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
 <p class="text-muted fs-5" id="qoute-place">“Be yourself; everyone else is already taken.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
 <img class="images-all" src="./Images/1.png" class="m-auto d-block " alt="">
</div>
<mark>― Oscar Wilde</mark>
</div>`,

`<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/2.png" class="m-auto d-block " alt="">
</div>
<mark>― Marilyn Monroe</mark>
</div>`,

`<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">So many books, so little time.</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/3.png" class="m-auto d-block " alt="">
</div>
<mark>― Frank Zappa</mark>
</div>`,

`<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/4.png" class="m-auto d-block " alt="">
</div>
<mark>― Albert Einstein</mark>
</div>`,

`<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“A room without books is like a body without a soul.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/5.png" class="m-auto d-block " alt="">
</div>
<mark>― Marcus Tullius Cicero</mark>
</div>`,

`<div class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/6.png" class="m-auto d-block " alt="">
</div>
<mark>― Bernard M. Baruch</mark>
</div>`,


`<div
class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/7.png" class="m-auto d-block " alt="">
</div>
<mark>― William W. Purkey </mark>
</div>`,

`<div
class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/8.png" class="m-auto d-block " alt="">
</div>
<mark>― Dr. Seuss</mark>
</div>`,


`<div
class="random-qoutes bg-success-subtle rounded-3 d-flex flex-column justify-content-center align-items-center w-auto p-3 ">
<p class="text-muted fs-5" id="qoute-place">“You only live once, but if you do it right, once is
    enough.” </p>
</div>
<div class="img d-flex justify-content-center align-items-center mt-3">
<img class="images-all" src="./Images/9.png" class="m-auto d-block " alt="">
</div>
<mark>― Mae West </mark>
</div>`,

];

var usedQuotes = [];

function getRandomQuote(){
var randomIndex = Math.floor(Math.random() * quotes.length );
var selectedQuotes = quotes[randomIndex];
usedQuotes.push(selectedQuotes);
document.getElementById("place-holder").innerHTML = selectedQuotes
}






