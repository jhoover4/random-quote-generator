/******************************************
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/

/**
 * @typedef Quote
 * @type {Object}
 *
 * @property {string} quote - The text of a quote.
 * @property {string} source - The origin or source of the quote.
 * @property {string} citation - (optional) The identifying venue of the quote. For example, a speech, publication, movie.
 * @property {string} year - (optional) A number identifying the year of the quote.
 * @property {string[]} tags - (optional) The categories of each quote.
 */
let quotes = [
    {
        quote: 'Talk is cheap. Show me the code.',
        source: 'Linus Torvalds',
        citation: '',
        year: '',
        tags: ['progamming']
    },
    {
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        source: 'Martin Fowler',
        citation: '',
        year: '',
        tags: ['refactoring']
    },
    {
        quote: 'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
        source: 'Niklaus Wirth',
        citation: 'Twitter',
        year: '',
        tags: ['users', 'design']
    },
    {
        quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
        source: 'John Woods',
        citation: '',
        year: '',
        tags: ['code', 'progamming']
    },
    {
        quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
        source: 'Rick Cook',
        citation: 'The Wizardry Compiled',
        year: '1990',
        tags: ['programming', 'books']
    },
    {
        quote: 'Truth can only be found in one place: the code.',
        source: 'Robert C. Martin',
        citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        year: '2008',
        tags: ['code', 'books']
    },
];

/**
 * Return a random quote object from the quotes array.
 *
 * @returns {Quote}
 */
const getRandomQuote = () => {
    return quotes[getRandomNumber(quotes.length)];
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

/**
 * Creates quote html and places in quote box.
 */
const printQuote = () => {
    let randomQuote = getRandomQuote();
    let html = '';

    html += `<p class="quote">${randomQuote.quote}</p>`;
    html += `<p class="source">${randomQuote.source}`;

    if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }

    if (randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }
    html += '</p>';

    if (randomQuote.tags) {
        html += `<p class="tags">Tags: ${randomQuote.tags.join(', ')}</p>`;
    }

    document.getElementById('quote-box').innerHTML = html;
    updateBackgroundColor();
};

const updateBackgroundColor = () => {
    const colors = ['blue', 'tomato', 'violet', 'evergreen', 'orange'];

    let newColor = colors[getRandomNumber(colors.length)];

    let prevColor = document.body.style.background;

    while (prevColor === newColor) {
        newColor = colors[getRandomNumber(colors.length)];
    }

    document.body.style.backgroundColor = newColor;
};

/***
 When the "Show another quote" button is clicked, the event listener
 below will be triggered, and it will call, or "invoke", the `printQuote`
 function. So do not make any changes to the line of code below this
 comment.
 ***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// 30 seconds
const intervalTime = 30000;

setInterval(
    function () {
        printQuote();
    },
    intervalTime
);
