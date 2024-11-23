function generateRandomNumber(list) {
    const randomSelector = Math.floor (Math.random() * list.length);
    return randomSelector;
}

/* random quote */
const madoka = ["奇迹和魔法都是存在的", "「奇跡も、魔法も、あるんだよ」", "鹿目圆", "《魔法少女小圆》", "ja-jp"];
const shuumatsu = ["没到最后就不会结束哦", "「終わるまでは終わらないよ」", "千户、尤莉", "《More One Night》", "ja-jp"];
const hotaru = ["啊啊 苍蓝之色 黎明与萤火", "「ああ 藍の色 夜明けと蛍」", "n-buna", "《黎明与萤火》", "ja-jp"];
const kininaru = ["我很好奇！", "「私、気になります！」", "千反田爱瑠", "《冰菓》", "ja-jp"];
const nyanpasu = ["喵帕斯", "「にゃんぱすー」", "宫内莲华", "《悠哉日常大王》", "ja-jp"]
const keion = ["不是很精彩呢", "「あんまり上手くないですね」", "平泽唯、中野梓", "《K-ON!》", "ja-jp"]
const tomori = ["因为我的歌就是内心的呐喊", "「だって、私の歌は、心の叫びだから」", "高松灯", "《BanG Dream! It's MyGO!!!!!》", "ja-jp"]
const kimoi = ["你真恶心", "「気持ち悪い」", "惣流·明日香·兰格雷", "《新世纪福音战士剧场版 Air/真心为你》", "ja-jp"]

const quoteList = [
    madoka,
    shuumatsu,
    hotaru,
    kininaru,
    nyanpasu,
    keion,
    tomori,
    kimoi
];

function generateRandomQuote() {
    const quoteSelected = quoteList[generateRandomNumber(quoteList)];
    const quote = quoteSelected[0];
    const originalQuote = quoteSelected[1];
    const author = quoteSelected[2];
    const origin = quoteSelected[3];
    const language = quoteSelected[4];

    document.getElementById("quote").textContent = "“" + quote + "”";
    document.getElementById("original_quote").textContent = originalQuote;
    document.getElementById("quote_author").textContent = author;
    document.getElementById("quote_origin").textContent = origin;
    document.getElementById("original_quote").setAttribute("lang", language);
}

generateRandomQuote();
document.getElementById("quote_resetter").addEventListener("click", function() {
    generateRandomQuote();
});

/* random song */
const vocaloidList = [
    "夜明けと蛍 - n-buna",
    "拝啓、夏に溺れる - n-buna",
    "始発とカフカ - n-buna",
    "ウミユリ海底譚 - n-buna",
    "着火、カウントダウン - n-buna",
    "DAYBREAK FRONTLINE - Orangestar",
    "真夏と少年の天の川戦争 - Orangestar",
    "Henceforth - Orangestar",
    "ラグタレイン - 稲葉曇",
    "サマータイムレコード - じん",
    "群青レイン - じん",
    "アヤノの幸福理論 - じん",
    "コバルトメモリーズ - はなまきごはん",
    "サリシノハラ - みきとP",
    "少女レイ - みきとP",
    "猛独が襲う - 一二三",
    "僕らの夏がまた巡って - *Luna",
    "フィクションブルー - Ayase",
    "ハレハレヤ - 羽生まゐご",
    "阿吽のビーツ - 羽生まゐご",
    "サンセットバスストップ - トーマ",
    "ツギハギスタッカート - とあ",
    "あの夏が飽和する - カンザキイオリ",
    "パノプティコン - r-906",
    "砂の惑星 - ハチ",
    "ローリンガール - wowaka",
    "アンノウン・マザーグース - wowaka",
    "ロストワンの号哭 - Neru",
    "ホワイトハッピー - MARETU"
]

function generateRandomSong() {
    const vocaloidSelected = vocaloidList[generateRandomNumber(vocaloidList)];
    document.getElementById("random_vocaloid").textContent = vocaloidSelected;
}

generateRandomSong();
document.getElementById("vocaloid_resetter").addEventListener("click", function() {
    generateRandomSong();
});