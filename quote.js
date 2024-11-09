const madoka = ["奇迹和魔法都是存在的", "「奇跡も、魔法も、あるんだよ」", "鹿目圆", "《魔法少女小圆》", "ja-jp"];
const shuumatsu = ["没到最后就不会结束哦", "「終わるまでは終わらないよ」", "千户、尤莉", "More One Night", "ja-jp"];
const hotaru = ["啊啊 苍蓝之色 黎明与萤火", "「ああ 藍の色 夜明けと蛍」", "n-buna", "《黎明与萤火》", "ja-jp"];
const kininaru = ["我很好奇！", "「私、気になります！」", "千反田爱瑠", "《冰菓》", "ja-jp"];
const nyanpasu = ["喵帕斯", "「にゃんぱすー」", "宫内莲华", "《悠哉日常大王》", "ja-jp"]

const quoteList = [
    madoka,
    shuumatsu,
    hotaru,
    kininaru,
    nyanpasu
];

const randomSelector = Math.floor (Math.random() * quoteList.length);

const quoteSelected = quoteList[randomSelector];
const quote = quoteSelected[0];
const original_quote = quoteSelected[1];
const author = quoteSelected[2];
const origin = quoteSelected[3];
const language = quoteSelected[4];

document.getElementById("quote").textContent = "“" + quote + "”";
document.getElementById("original_quote").textContent = original_quote;
document.getElementById("quote_author").textContent = author;
document.getElementById("quote_origin").textContent = origin;
document.getElementById("original_quote").setAttribute("lang", language);