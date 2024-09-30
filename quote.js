const quoteList = [
    "奇迹和魔法都是存在的",
    "没到最后就不会结束哦",
    "啊啊 苍蓝之色 黎明与萤火"
];
const originList = [
    "「奇跡も、魔法も、あるんだよ」",
    "「終わるまでは終わらないよ」",
    "「ああ 藍の色 夜明けと蛍」"
];
const citeList = [
    "鹿目圆，《魔法少女小圆》",
    "千户、尤莉，《More One Night》",
    "n-buna, 《黎明与萤火》"
];

const randomSelector = Math.floor (Math.random() * quoteList.length);

const randomQuote = quoteList[randomSelector];
const randomOrigin = originList[randomSelector];
const randomCite = citeList[randomSelector];

document.getElementById("quote").textContent = "“" + randomQuote + "”";
document.getElementById("quote_original_lang").textContent = randomOrigin;
document.getElementById("quote_cite").textContent = "——" + randomCite;