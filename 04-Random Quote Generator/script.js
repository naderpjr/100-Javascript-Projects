const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const apiUrl = `https://api.quotable.io/quotes/random`;

const options = {
    method: "GET"
}

const getQuote = async () => {
    try {
        quoteEl.innerText = "Loading...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        const quote = data[0].content;
        const author = data[0].author;
        console.log(quote, author);
        quoteEl.innerText = `${quote} — ${author}`;
    } catch (error) {
        quoteEl.innerText = "Fetching quotes Failed";
        console.log(error);
    }
};

getQuote();

btnEl.addEventListener("click", getQuote);