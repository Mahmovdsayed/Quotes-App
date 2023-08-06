var quotes = [
   {
    "message" : `“Be yourself; everyone else is already taken.”`,
    "author" : '― Oscar Wilde'
},
{
    "message" : `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    "author" : '― Marilyn Monroe'
},
{
    "message" : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    "author" : '― Albert Einstein'
},
{
    "message" : `“So many books, so little time.”`,
    "author" : '― Frank Zappa'
},
{
    "message" : `“A room without books is like a body without a soul.”`,
    "author" : '― Marcus Tullius Cicero'
},
{
    "message" : `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    "author" : '― Bernard M. Baruch'
},
{
    "message" : `“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”`,
    "author" : '― William W. Purkey'
},
{
    "message" : `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    "author" : '― Dr. Seuss'
},
{
    "message" : `“You only live once, but if you do it right, once is enough.”`,
    "author" : '― Mae West'
},
{
    "message" : `“Be the change that you wish to see in the world.”`,
    "author" : '― Mahatma Gandhi'
},
{
    "message" : `“If you tell the truth, you don't have to remember anything.”`,
    "author" : '― Mark Twain'
},
{
    "message" : `“A friend is someone who knows all about you and still loves you.”`,
    "author" : '― Elbert Hubbard'
},
{
    "message" : `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    "author" : '― Oscar Wilde'
},
];
function getQuotes(){
    var message = document.getElementById("quote");
    var user = document.getElementById("author");
    var num = Math.floor( Math.random()*quotes.length) ;
    message.innerHTML = quotes[num].message;
    user.innerHTML = quotes[num].author;
}
