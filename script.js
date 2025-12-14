function generateRandomNumber(list) {
    const randomSelector = Math.floor (Math.random() * list.length);
    return randomSelector;
}
let quote_now;
let showingOriginal = true;

/* random quote */
// anime
const madoka = ["奇迹和魔法都是存在的", "「奇跡も、魔法も、あるんだよ」", "美树沙耶香", "美樹さやか", "《魔法少女小圆》", "「魔法少女まどか☆マギカ」", "ja-JP", "1"];
const shuumatsu = ["没到最后就不会结束哦", "「終わるまでは終わらないよ」", "千户、尤莉", "チト、ユーリ", "《More One Night》", "「More One Night」", "ja-JP", "1"];
const kininaru = ["我很好奇！", "「私、気になります！」", "千反田爱瑠", "千反田える", "《冰菓》", "「氷菓」", "ja-JP", "1"];
const nyanpasu = ["喵帕斯", "「にゃんぱすー」", "宫内莲华", "宮内れんげ", "《悠哉日常大王》", "「のんのんびより」", "ja-JP", "1"]
const keion = ["不是很精彩呢", "「あんまり上手くないですね」", "平泽唯、中野梓", "平沢唯、中野梓", "《轻音少女》", "「けいおん！」", "ja-JP", "1"]
const tomori = ["因为我的歌就是内心的呐喊", "「だって、私の歌は、心の叫びだから」", "高松灯", "高松燈", "《BanG Dream! It's MyGO!!!!!》", "「BanG Dream! It’s MyGO!!!!!」", "ja-JP", "1"]
const kimoi = ["你真恶心", "「気持ち悪い」", "惣流·明日香·兰格雷", "惣流・アスカ・ラングレー", "《新世纪福音战士剧场版 Air/真心为你》", "「新世紀エヴァンゲリオン劇場版 Air/まごころを、君に」", "ja-JP", "1"]
const aoitori = ["我喜欢霙的双簧管", "「私、みぞれのオーボエが好き」", "伞木希美", "傘木希美", "《利兹与青鸟》", "「リズと青い鳥」", "ja-JP", "1"]
const euphonium = ["于是，下一首曲子即将奏响！", "「そして、次の曲が始まるのです！」", "黄前久美子", "黄前久美子", "《吹响吧！上低音号》", "「響け！ユーフォニアム」", "ja-JP", "1"];
const mono = ["就算变成大人，类似作业的东西也还是不会消失嘛", "「大人になっても、宿題っぽいのはなくなんないですね」", "雾山杏", "霧山アン", "《mono 女孩》", "「mono」", "ja-JP", "1"];
const yojouhan = ["你必须接受现在的你，明白你不会成为除此以外的任何人", "「今、ここにいる君以外、ほかの何者にもなれない自分を認めなくてはいけない」", "樋口清太郎", "樋口清太郎", "《四叠半神话大系》", "「四畳半神話大系」", "ja-JP", "1"];
const shuumatsu_end = ["但我觉得，活着真好……", "「生きるのは最高だったよね…」", "尤莉", "ユーリ", "《少女终末旅行》", "「少女終末旅行」", "ja-JP", "1"];
const kafu_tomorrow = ["从今天起，我要改变明天的世界", "「今日から明日の世界を変えるよ」", "花谱", "花譜", "《神椿市建设中。》", "「神椿市建設中。」", "ja-JP", "1"];
const ruri = ["如果某一份‘快乐’永不结束，我就不会想要下一份‘快乐’了", "「もし一つの『楽しい』が終わるなかったら、私は次の『楽しい』を必要としなかったと思う」", "谷川琉璃", "谷川瑠璃", "《琉璃的宝石》", "「瑠璃の宝石」", "ja-JP", "1"];
const city = ["让我们在夏季的某处相见。", "“See you in the summer somewhere.”", "", "", "《小城日常》", "「CITY THE ANIMATION」", "ja-JP", "3"];
const katta = ["不要以为这样就赢了！", "「これで勝ったと思うなよ！」", "吉田优子", "吉田優子", "《街角魔族》", "「まちカドまぞく」", "ja-JP", "1"];
const wonderhoy = ["Wonderhoy!☆", "「わんだほーい!☆」", "凤笑梦", "鳳えむ", "《世界计划 彩色舞台 feat. 初音未来》", "「プロジェクトセカイ カラフルステージ！ feat. 初音ミク」", "ja-JP", "1"];
const happy = ["为世界带来笑容！", "「世界を笑顔に！」", "弦卷心", "弦巻こころ", "《BanG Dream!》", "「BanG Dream!」", "ja-JP", "1"];
const itsumodoori = ["像往常一样", "「いつも通り」", "Afterglow", "Afterglow", "《BanG Dream!》", "「BanG Dream!」", "ja-JP", "1"];
const kino = ["这个世界并不美丽，然而，又因此而美丽", "“The world is not beautiful, therefore it is”", "", "", "《奇诺之旅》", "「キノの旅」", "ja-JP", "3"];
// song
const hotaru = ["啊啊 苍蓝之色 黎明与萤火", "「ああ 藍の色 夜明けと蛍」", "n-buna", "n-buna", "《黎明与萤火》", "「夜明けと蛍」", "ja-JP", "2"];
const kagerou = ["这个夏天的故事，永远不会结束", "「この夏の物語は、終わらない」", "", "", "《阳炎 Project》", "「陽炎 Project」", "ja-JP", "3"];
const henceforth = ["啊啊 夏日如今再度", "「あぁ 夏は今もう一回」", "Orangestar", "Orangestar", "《Henceforth》", "「Henceforth」", "ja-JP", "2"];
const diamond = ["拿音乐去赚钱 这样的我们已经没救了吧", "「音楽で金を稼いでいる俺たちは終わりだ」", "神绮一织", "カンザキイオリ", "《钻石》", "「ダイアモンド」", "ja-JP", "2"];
const otona = ["我到底是什么时候‘成为了’大人的呀？", "「僕はいつ大人に『なった』のだろう？」", "椎名もた", "椎名もた", "《诸位再～见》", "「さよーならみなさん」", "ja-JP", "2"];

const quoteList = [
    madoka,// anime
    shuumatsu,
    kininaru,
    nyanpasu,
    keion,
    tomori,
    kimoi,
    aoitori,
    euphonium,
    mono,
    yojouhan,
    shuumatsu_end,
    kafu_tomorrow,
    ruri,
    city,
    katta,
    wonderhoy,
    happy,
    itsumodoori,
    kino.
    hotaru, // songs
    kagerou,
    henceforth,
    diamond,
    otona
];

function writeQuote() {
    document.getElementById("quote").textContent = quote_now[1];
    document.getElementById("quote_author").textContent = quote_now[3];
    const lang = quote_now[6];
    const mode = quote_now[7];

    if (lang == "ja-JP") {
        if (mode == "1") {
            document.getElementById("quote_origin").textContent = "（" + quote_now[5] + "）";
        }
        if (mode == "2") {
            document.getElementById("quote_origin").textContent = "（" + quote_now[5] + "より）";
        }
        if (mode == "3") {
            document.getElementById("quote_origin").textContent = quote_now[5];
        }
    }

    document.getElementById("quote").setAttribute("lang", lang);
    document.getElementById("quote_author").setAttribute("lang", lang);
    document.getElementById("quote_origin").setAttribute("lang", lang);

    console.log("lang:", lang, "mode:", mode, "quote_now:", quote_now);
}

function generateRandomQuote() {
    let quoteSelected = quoteList[generateRandomNumber(quoteList)];
    quote_now = quoteSelected;
    writeQuote();
    return quoteSelected;
}

function translateQuote() {
    if (!quote_now) 
        return;
    const mode = quote_now[7];

    document.getElementById("quote").textContent = "“" + quote_now[0] + "”";
    document.getElementById("quote_author").textContent = quote_now[2];

    if (mode == "1") {
        document.getElementById("quote_origin").textContent = "，" + quote_now[4];
    }
    if (mode == "2") {
        document.getElementById("quote_origin").textContent = "，" + quote_now[4] + "中";
    }
    if (mode == "3") {
        document.getElementById("quote_origin").textContent = quote_now[4];
    }

    document.getElementById("quote").setAttribute("lang", "zh-CN");
    document.getElementById("quote_author").setAttribute("lang", "zh-CN");
    document.getElementById("quote_origin").setAttribute("lang", "zh-CN");

    console.log("mode:", mode, "quote_now:", quote_now);
}

generateRandomQuote();

document.getElementById("quote_resetter").addEventListener("click", function() {
    generateRandomQuote();
    showingOriginal = true;
});

document.getElementById("quote_translator").addEventListener("click", function() {
    if (showingOriginal) {
        translateQuote();
    }
    else {
        writeQuote();
    }

    showingOriginal = !showingOriginal;
});

/* random song */
const vocaloidList = [
    // summer
    "夜明けと蛍 - n-buna",
    "拝啓、夏に溺れる - n-buna",
    "始発とカフカ - n-buna",
    "ウミユリ海底譚 - n-buna",
    "もうじき夏が終わるから - n-buna",
    "着火、カウントダウン - n-buna",
    "ずっと空を見ていた - n-buna",
    "カエルのはなし - n-buna",
    "アスノヨゾラ哨戒班 - Orangestar",
    "DAYBREAK FRONTLINE - Orangestar",
    "Alice in 冷凍庫 - Orangestar",
    "Henceforth - Orangestar",
    "サマータイムレコード - じん",
    "群青レイン - じん",
    "アヤノの幸福理論 - じん",
    "ロスタイムメモリー - じん",
    "アウターサイエンス - じん",
    "コバルトメモリーズ - はなまきごはん",
    "メルティランドナイトメア - はるまきごはん",
    "Marine Grey - はるまきごはん",
    "アスター - はるまきごはん",
    "宇宙分解 - はるまきごはん",
    "銀河録 - はるまきごはん",
    "あの夏が飽和する - カンザキイオリ",
    "僕らの夏はまた巡って - *Luna",
    "少女レイ - みきとP",
    // light
    "猛独が襲う - 一二三",
    "月灯りと氷晶核 - 一二三",
    "フィクションブルー - Ayase",
    "ヴァイオレッタ - Ayase",
    "帝国少女 - R Sound Design",
    "ラグタレイン - 稲葉曇",
    "ハレハレヤ - 羽生まゐご",
    "阿吽のビーツ - 羽生まゐご",
    "ケガレの唄 - 羽生まゐご",
    "サイエンス - MIMI",
    "フォニイ - ツミキ",
    "花となれ - 雄之助",
    "シャルル - バルーン",
    "雨とペトラ - バルーン",
    "メーベル - バルーン",
    "カフネ - 有機酸",
    "krank - 有機酸",
    "カトラリー - 有機酸",
    "サンセットバスストップ - トーマ",
    "ツギハギスタッカート - とあ",
    "炉心融解 - iroha(sasaki)",
    // dark
    "少女A - 椎名もた",
    "深夜徘徊 - シャノン",
    "死別 - シャノン",
    "パノプティコン - r-906",
    "まにまに - r-906",
    "ローリンガール - wowaka",
    "アンノウン・マザーグース - wowaka",
    "ロストワンの号哭 - Neru",
    "potatoになっていく - Neru",
    "ホワイトハッピー - MARETU",
    "マエガミスト - MARETU",
    "熱異常 - いよわ",
    // 25
    "アイディスマイル - とあ",
    "限りなく灰色へ - すりぃ",
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