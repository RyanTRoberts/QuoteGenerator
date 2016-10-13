// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//quotes array
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
        source: "Chip Conley",
        citation:"Ted Talk: Measuring what makes life worthwhile",
        year:"2010"
        
    },
    {   
        quote: "What one thing can you start counting today that will actually be meaningful in your life?",
        source: "Dalai Lama"
    }    
];

//Return a randomly selected a quote from the quotes array
function getRandomQuote() {
    
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    
    return randomQuote;
}







function printQuote() {
    
    var randomQuote = getRandomQuote();
    
//If object contains year & citation properties
if(randomQuote.hasOwnProperty('citation') == true && randomQuote.hasOwnProperty('year') == true) {
        
    //Create <span>$ for the properties
        document.getElementById('quote-box').innerHTML = ('<p class="quote"> ' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span> <span class="year">' + randomQuote.year + '</span> </p>');
    
    //else If object contains year property
    } else if(randomQuote.hasOwnProperty('year') == true) {
       
        //Create <span> for citation property
        document.getElementById('quote-box').innerHTML = ('<p class="quote"> ' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="year">' + randomQuote.year + '</span></p>');
    
    //else create spans for quote and source properties only
    } else if(randomQuote.hasOwnProperty('citation') == true){
       
        document.getElementById('quote-box').innerHTML = ('<p class="quote"> ' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span></p>');  
    
    } else {
        document.getElementById('quote-box').innerHTML = ('<p class="quote"> ' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '</p>');
    }
}










