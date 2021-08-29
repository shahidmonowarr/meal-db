const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data))
}


const displayQuote = quote => {
    console.log(quote);
    const quoteElement = document.getElementById('quote');
    // quote is object and another quote is the property of that object.
    quoteElement.innerText = quote.quote;
}