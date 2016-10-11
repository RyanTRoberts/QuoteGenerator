// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        source: "Buddha"
    },
    {
        quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        source: "Marcus Aurelius"
    },
    {
        quote: "Life is not a problem to be solved, but a reality to be experienced.",
        source: "Soren Kierkegaard"
    },
    {   quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
        source: "Sholom Aleichem"
    },
    {   
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        source: "Mahatma Gandhi"
    },
    {   
        quote: "In order to carry a positive action we must develop here a position vision.",
        source: "Dalai Lama"
    }    
];

function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQuote;
}

function printQuote() {
    var randomQuote = getRandomQuote();
    document.getElementById('quote-box').innerHTML = ('<p class="quote"> ' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="citation"> </span> <span class="year"> </span> </p>');
    
}






