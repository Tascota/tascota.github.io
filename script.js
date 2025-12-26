/* random quote */
let quote = null;
let isShowingOriginalQuote = true;

let quotes = [];
const FIELDS_PER_QUOTE = 9;

fetch('quotes.txt')
    .then(res => res.text())
    .then(text => {
        const lines = text.split('\n').map(l => l.trim());
        let current = [];
        quotes = [];

        for (const line of lines) {
            current.push(line);
            if (current.length === FIELDS_PER_QUOTE) {
                const quoteObject = {
                    cn: {
                        text: current[0],
                        author: current[2],
                        origin: current[4]
                    },
                    org: {
                        text: current[1],
                        author: current[3],
                        origin: current[5]
                    },
                    lang: current[6],
                    mode: current[7]
                };
            
                quotes.push(quoteObject);
                current = [];
            }
        }

        console.log("Quotes loaded:", quotes);

        generateRandomQuote();
    }
);

function writeQuote() {
    if (!quote)
        return;

    document.getElementById("quote").textContent = quote.org.text;
    document.getElementById("quote_author").textContent = quote.org.author;

    const lang = quote.lang;
    const mode = quote.mode;

    let originText = "";
    if (lang === "ja-JP") {
        if (mode === "quote") 
            originText = "（" + quote.org.origin + "）";
        if (mode === "excerpt") 
            originText = "（" + quote.org.origin + "より）";
    } else {
        if (mode === "quote") 
            originText = ", " + quote.org.origin;
        if (mode === "excerpt") 
            originText = ", " + quote.org.origin;
    }
    if (mode === "quoteTitleOnly") 
        originText = quote.org.origin;

    document.getElementById("quote_origin").textContent = originText;

    setLang(lang);
}

function generateRandomQuote() {
    if (quotes.length === 0) 
        return;

    const i = Math.floor(Math.random() * quotes.length);
    quote = quotes[i];

    writeQuote();
}

function translateQuote() {
    if (!quote) 
        return;

    const mode = quote.mode;

    document.getElementById("quote").textContent = "“" + quote.cn.text + "”";
    document.getElementById("quote_author").textContent = quote.cn.author;

    let originText = "";
    if (mode === "quote")
        originText = "，" + quote.cn.origin;
    if (mode === "excerpt")
        originText = "，" + quote.cn.origin + "中";
    if (mode === "quoteTitleOnly")
        originText = quote.cn.origin;

    document.getElementById("quote_origin").textContent = originText;

    setLang("zh-CN");

    console.log("translate:", { mode, quote });
}

function setLang(lang) {
    document.getElementById("quote").setAttribute("lang", lang);
    document.getElementById("quote_author").setAttribute("lang", lang);
    document.getElementById("quote_origin").setAttribute("lang", lang);
}

document.getElementById("quote_resetter").addEventListener("click", () => {
    generateRandomQuote();
    isShowingOriginalQuote = true;
});

document.getElementById("quote_translator").addEventListener("click", () => {
    if (isShowingOriginalQuote) {
        translateQuote();
    } else {
        writeQuote();
    }
    isShowingOriginalQuote = !isShowingOriginalQuote;
});

/* random song */
let song = null;
let songs = [];

fetch('songs.txt')
    .then(res => res.text())
    .then(text => {
        const lines = text.split('\n').map(l => l.trim());
        for (const line of lines) {
            songs.push(line);
        }

        console.log("Songs loaded:", songs);

        generateRandomSong();
    }
);

function generateRandomSong() {
    const i = Math.floor(Math.random() * songs.length);
    song = songs[i];
    document.getElementById("random_song").textContent = song;
}

document.getElementById("song_resetter").addEventListener("click", function() {
    generateRandomSong();
});