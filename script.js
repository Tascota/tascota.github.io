function generateRandomNumber(list) {
    const randomSelector = Math.floor (Math.random() * list.length);
    return randomSelector;
}

/* random quote */
const madoka = ["奇迹和魔法都是存在的", "「奇跡も、魔法も、あるんだよ」", "美树沙耶香", "《魔法少女小圆》", "ja-jp"]; // anime
const shuumatsu = ["没到最后就不会结束哦", "「終わるまでは終わらないよ」", "千户、尤莉", "《More One Night》", "ja-jp"];
const kininaru = ["我很好奇！", "「私、気になります！」", "千反田爱瑠", "《冰菓》", "ja-jp"];
const nyanpasu = ["喵帕斯", "「にゃんぱすー」", "宫内莲华", "《悠哉日常大王》", "ja-jp"]
const keion = ["不是很精彩呢", "「あんまり上手くないですね」", "平泽唯、中野梓", "《K-ON!》", "ja-jp"]
const tomori = ["因为我的歌就是内心的呐喊", "「だって、私の歌は、心の叫びだから」", "高松灯", "《BanG Dream! It's MyGO!!!!!》", "ja-jp"]
const kimoi = ["你真恶心", "「気持ち悪い」", "惣流·明日香·兰格雷", "《新世纪福音战士剧场版 Air/真心为你》", "ja-jp"]
const aoitori = ["我喜欢霙的双簧管", "「私、みぞれのオーボエが好き」", "伞木希美", "《利兹与青鸟》", "ja-jp"]
const euphonium = ["于是，下一首曲子即将奏响！", "「そして、次の曲が始まるのです！」", "黄前久美子", "《吹响！上低音号》", "ja-jp"];

const hotaru = ["啊啊 苍蓝之色 黎明与萤火", "「ああ 藍の色 夜明けと蛍」", "n-buna", "《黎明与萤火》", "ja-jp"]; // song
const kagerou = ["这个夏天的故事，永远不会结束", "「この夏の物語は、終わらない」", "じん", "阳炎 Project", "ja-jp"];
const henceforth = ["啊啊 夏日如今再度", "「あぁ 夏は今もう一回」", "Orangestar", "《Henceforth》", "ja-jp"];

const quoteList = [
    madoka,
    shuumatsu,
    kininaru,
    nyanpasu,
    keion,
    tomori,
    kimoi,
    aoitori,
    euphonium,
    hotaru,
    kagerou,
    henceforth
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
    "夜明けと蛍 - n-buna", // summer
    "拝啓、夏に溺れる - n-buna",
    "始発とカフカ - n-buna",
    "ウミユリ海底譚 - n-buna",
    "もうじき夏が終わるから - n-buna",
    "着火、カウントダウン - n-buna",
    "ずっと空を見ていた - n-buna",
    "カエルのはなし- n-buna",
    "アスノヨゾラ哨戒班 - Orangestar",
    "DAYBREAK FRONTLINE - Orangestar",
    "Henceforth - Orangestar",
    "サマータイムレコード - じん",
    "群青レイン - じん",
    "アヤノの幸福理論 - じん",
    "コバルトメモリーズ - はなまきごはん",
    "Marine Grey - はるまきごはん",
    "アスター - はるまきごはん",
    "宇宙分解 - はるまきごはん",
    "銀河録 - はるまきごはん",
    "少女レイ - みきとP",
    "猛独が襲う - 一二三", // light
    "月灯りと氷晶核 - 一二三",
    "ヨイヤミ - 一二三",
    "アサヤケ - 一二三",
    "フィクションブルー - Ayase",
    "ヴァイオレッタ - Ayase",
    "ラグタレイン - 稲葉曇",
    "ハレハレヤ - 羽生まゐご",
    "阿吽のビーツ - 羽生まゐご",
    "ケガレの唄 - 羽生まゐご",
    "サイエンス - MIMI",
    "眠り姫 - Guiano",
    "サンセットバスストップ - トーマ",
    "ツギハギスタッカート - とあ",
    "炉心融解 - iroha(sasaki)",
    "深夜徘徊 - シャノン", // dark
    "死別 - シャノン",
    "パノプティコン - r-906",
    "まにまに - r-906",
    "ローリンガール - wowaka",
    "アンノウン・マザーグース - wowaka",
    "ロストワンの号哭 - Neru",
    "potatoになっていく - Neru",
    "熱異常 - いよわ",
    "限りなく灰色へ - すりぃ", // 25
    "ロウワー - ぬゆり",
    "ザムザ - てにをは"
]

function generateRandomSong() {
    const vocaloidSelected = vocaloidList[generateRandomNumber(vocaloidList)];
    document.getElementById("random_vocaloid").textContent = vocaloidSelected;
}

generateRandomSong();
document.getElementById("vocaloid_resetter").addEventListener("click", function() {
    generateRandomSong();
});