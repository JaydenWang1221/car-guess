const carDB = [
    { name: "鴨寶超人", color: "黃", brand: "雷諾", series: "無", tags: ["極速", "起步"], difficulty: 1 },
    { name: "雲逍", color: "白", brand: "極星", series: "無", tags: ["極速", "實戰", "道具", "七噴", "變形"], difficulty: 2 },
    { name: "墨影青龍", color: "藍", brand: "阿爾法", series: "無", tags: ["極速", "騰空", "道具", "七噴", "變形"], difficulty: 3},
    { name: "哈雷特", color: "紅", brand: "特洛伊", series: "無", tags: ["極速", "起步", "七噴", "變形"], difficulty: 2 },
    { name: "序列未來LYR", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "集氣", "七噴", "變形"], difficulty: 2 },
    { name: "源極之星EXA", color: "紫", brand: "極星", series: "無", tags: ["極速", "集氣", "道具", "七噴", "變形"], difficulty: 2 },
    { name: "孫悟空", color: "黃", brand: "特洛伊", series: "無", tags: ["極速", "實戰", "七噴", "變形"], difficulty: 2 },
    { name: "奧莉娜", color: "綠", brand: "雷諾", series: "無", tags: ["極速", "實戰", "道具", "七噴", "變形"], difficulty: 2 },
    { name: "赤焰騎士", color: "黑", brand: "特洛伊", series: "無", tags: ["極速", "集氣"], difficulty: 2 },
    { name: "閃耀之星", color: "藍", brand: "極星", series: "無", tags: ["無"], difficulty: 2 },
    { name: "晶鑽星爵", color: "藍", brand: "阿爾法", series: "無", tags: ["集氣", "起步", "實戰", "成就限定"], difficulty: 2 },
    { name: "甜心雷諾", color: "粉", brand: "特洛伊", series: "無", tags: ["實戰", "道具", "轉向", "五噴", "變形"], difficulty: 2 },
    { name: "S-幻星", color: "白", brand: "雷諾", series: "季度賽車", tags: ["極速", "集氣", "六噴", "變形"], difficulty: 2 },
    { name: "魅影紅爵", color: "紅", brand: "雷諾", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "玉落雲煙", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "絲路盛宴", color: "白", brand: "雷諾", series: "無", tags: ["極速","集氣", "五噴"], difficulty: 2 },
    { name: "Aston Martin Valkyrie", color: "綠", brand: "無", series: "無", tags: ["集氣","實戰", "五噴"], difficulty: 2 },
    { name: "S-霆光", color: "白", brand: "雷諾", series: "季度賽車", tags: ["極速", "騰空", "六噴", "變形"], difficulty: 2 },
    { name: "燃脂神器", color: "白", brand: "雷諾", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "天外之星", color: "白", brand: "極星", series: "無", tags: ["極速", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "星河逐影", color: "白", brand: "極星", series: "無", tags: ["極速","集氣", "五噴"], difficulty: 2 },
    { name: "繽紛童夢號", color: "粉", brand: "特洛伊", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "科技先鋒", color: "紫", brand: "極星", series: "無", tags: ["騰空", "五噴"], difficulty: 2 },
    { name: "奇喵巫巫", color: "黑", brand: "極星", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "拼拼樂", color: "紅", brand: "無", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "封印之杖", color: "粉", brand: "極星", series: "無", tags: ["起步", "五噴"], difficulty: 2 },
    { name: "龍珏雷諾", color: "白", brand: "雷諾", series: "無", tags: ["騰空", "五噴"], difficulty: 2 },
    { name: "Bugatti BOLIDE", color: "藍", brand: "阿爾法", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "羊羊得意", color: "粉", brand: "雷諾", series: "無", tags: ["極速", "實戰", "五噴"], difficulty: 2 },
    { name: "AE86", color: "黑", brand: "無", series: "無", tags: ["飄移", "極速", "五噴"], difficulty: 2 },
    { name: "S-月影", color: "白", brand: "極星", series: "季度賽車", tags: ["極速", "集氣", "加速帶", "六噴", "變形"], difficulty: 2 },
    { name: "墨染青花", color: "藍", brand: "阿爾法", series: "無", tags: ["飄移", "集氣", "五噴"], difficulty: 2 },
    { name: "山海.陛犴", color: "白", brand: "雷諾", series: "無", tags: ["極速", "五噴"], difficulty: 2 },
    { name: "夜王", color: "黑", brand: "阿爾法", series: "無", tags: ["騰空", "五噴"], difficulty: 2 },
    { name: "瑪莎拉蒂MC20 Cielo", color: "藍", brand: "無", series: "無", tags: ["飄移", "極速"], difficulty: 2 },
    { name: "大福蘆", color: "白", brand: "極星", series: "無", tags: ["道具"], difficulty: 2 },
    { name: "審判之矛", color: "黑", brand: "特洛伊", series: "無", tags: ["集氣", "極速"], difficulty: 2 },
    { name: "山海.文鰩", color: "橘", brand: "特洛伊", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "山海.霸下", color: "黑", brand: "阿爾法", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "仿生.暗夜戰梟", color: "黑", brand: "阿爾法", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "玉兔雷諾", color: "綠", brand: "雷諾", series: "無", tags: ["道具"], difficulty: 2 },
    { name: "仿生.暗海潛鯊", color: "黑", brand: "阿爾法", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "黃河守衛", color: "綠", brand: "雷諾", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "穹音星鯨", color: "藍", brand: "雷諾", series: "無", tags: ["起步", "五噴變形"], difficulty: 2 },
    { name: "筋斗雲", color: "白", brand: "無", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "星河戰刃", color: "白", brand: "阿爾法", series: "無", tags: ["起步", "五噴"], difficulty: 2 },
    { name: "破曉晨星", color: "黃", brand: "無", series: "無", tags: ["極速", "實戰", "五噴變形"], difficulty: 2 },
    { name: "神影", color: "紅", brand: "特洛伊", series: "無", tags: ["騰空", "五噴"], difficulty: 2 },
    { name: "冥霄", color: "黑", brand: "特洛伊", series: "無", tags: ["騰空", "五噴", "變形"], difficulty: 2 },
    { name: "S-冰魄", color: "白", brand: "極星", series: "無", tags: ["極速", "騰空", "集氣", "六噴", "變形"], difficulty: 2 },
    { name: "R3AL戰神", color: "黃", brand: "阿爾法", series: "無", tags: ["集氣", "六噴"], difficulty: 2 },
    { name: "赤焰天啟", color: "紅", brand: "特洛伊", series: "無", tags: ["轉向", "五噴", "變形"], difficulty: 2 },
    { name: "蔚藍迷夢", color: "白", brand: "阿爾法", series: "無", tags: ["集氣", "極速", "五噴"], difficulty: 2 },
    { name: "無鋒凌刃", color: "白", brand: "阿爾法", series: "無", tags: ["實戰", "五噴"], difficulty: 2 },
    { name: "紫焰鎧甲", color: "紫", brand: "極星", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "霹靂戰驅", color: "藍", brand: "阿爾法", series: "無", tags: ["道具","極速", "五噴"], difficulty: 2 },
    { name: "夜影星爵", color: "黑", brand: "特洛伊", series: "無", tags: ["飄移","PBR", "五噴"], difficulty: 2 },
    { name: "噬天饕餮", color: "白", brand: "阿爾法", series: "神獸系列", tags: ["起步", "五噴", "變形"], difficulty: 2 },
    { name: "尖兵阿爾法", color: "紅", brand: "阿爾法", series: "無", tags: ["極速", "五噴", "變形"], difficulty: 2 },
    { name: "凌天", color: "藍", brand: "無", series: "無", tags: ["極速", "改裝回退"], difficulty: 2 },
    { name: "幻天流影", color: "紫", brand: "阿爾法", series: "無", tags: ["飄移"], difficulty: 2 },
    { name: "瘋狂二哈", color: "白", brand: "極星", series: "無", tags: ["極速", "局內動作", "五噴變形"], difficulty: 2 },
    { name: "雷諾", color: "藍", brand: "雷諾", series: "無", tags: ["極速", "實戰"], difficulty: 2 },
    { name: "犀甲獸", color: "灰", brand: "雷諾", series: "無", tags: ["轉向"], difficulty: 2 },
    { name: "俠影傳說", color: "白", brand: "阿爾法", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "極夜幽冥", color: "紫", brand: "特洛伊", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "天創武士", color: "白", brand: "阿爾法", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "賽博戰士", color: "灰", brand: "阿爾法", series: "無", tags: ["轉向", "道具", "五噴", "變形", "可開車門"], difficulty: 2 },
    { name: "沙漠領主", color: "黃", brand: "雷諾", series: "無", tags: ["轉向", "實戰"], difficulty: 2 },
    { name: "雙生戰神", color: "灰", brand: "極星", series: "無", tags: ["騰空", "變色", "五噴"], difficulty: 2 },
    { name: "火線追擊", color: "黑", brand: "特洛伊", series: "無", tags: ["集氣", "極速"], difficulty: 2 },
    { name: "柯基出擊", color: "白", brand: "阿爾法", series: "無", tags: ["集氣", "極速", "局內動作"], difficulty: 2 },
    { name: "狂獅", color: "黃", brand: "雷諾", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "超能橘喵", color: "黃", brand: "極星", series: "無", tags: ["飄移", "局內動作", "變形"], difficulty: 2 },
    { name: "裂空", color: "藍", brand: "極星", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "風暴剃刀", color: "藍", brand: "特洛伊", series: "無", tags: ["轉向", "實戰"], difficulty: 2 },
    { name: "動感熊貓", color: "白", brand: "極星", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "魅影王爵", color: "黑", brand: "特洛伊", series: "無", tags: ["極速", "集氣"], difficulty: 2 },
    { name: "晶耀之星", color: "紫", brand: "極星", series: "無", tags: ["集氣", "鑽石材質"], difficulty: 2 },
    { name: "極音戰歌", color: "藍", brand: "極星", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "騎士精神", color: "白", brand: "極星", series: "無", tags: ["極速", "道具"], difficulty: 2 },
    { name: "雷霆風暴", color: "灰", brand: "阿爾法", series: "無", tags: ["極速", "道具"], difficulty: 2 },
    { name: "極地戰甲", color: "藍", brand: "雷諾", series: "無", tags: ["轉向", "實戰"], difficulty: 2 },
    { name: "魔王", color: "黑", brand: "特洛伊", series: "無", tags: ["極速", "道具"], difficulty: 2 },
    { name: "黑金", color: "黑", brand: "阿爾法", series: "無", tags: ["極速", "轉向", "道具"], difficulty: 2 },
    { name: "玄武", color: "黑", brand: "雷諾", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "聖殿騎士", color: "白", brand: "極星", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "凌霜風暴", color: "白", brand: "阿爾法", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "藍影主宰", color: "藍", brand: "阿爾法", series: "無", tags: ["轉向"], difficulty: 2 },
    { name: "飛躍", color: "紅", brand: "阿爾法", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "針尖", color: "藍", brand: "特洛伊", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "天啟", color: "紫", brand: "極星", series: "無", tags: ["轉向"], difficulty: 2 },
    { name: "光電遊俠", color: "白", brand: "雷諾", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "月光女神", color: "白", brand: "極星", series: "無", tags: ["飄移"], difficulty: 2 },
    { name: "銀河戰艦", color: "白", brand: "雷諾", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "帝王", color: "紅", brand: "雷諾", series: "無", tags: ["極速", "集氣"], difficulty: 2 },
    { name: "聖光使者", color: "白", brand: "極星", series: "無", tags: ["轉向"], difficulty: 2 },
    { name: "L-風神", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "加速帶", "六噴", "亞洲盃"], difficulty: 2 },
    { name: "S-裁決者", color: "紅", brand: "特洛伊", series: "無", tags: ["極速", "騰空", "五噴", "變形"], difficulty: 2 },
    { name: "S-霆光典藏版", color: "粉", brand: "雷諾", series: "無", tags: ["極速", "騰空", "六噴", "變形"], difficulty: 2 },
    { name: "劍芯.曳影", color: "白", brand: "無", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "清夢悠然", color: "白", brand: "雷諾", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "幽夜迷途", color: "白", brand: "特洛伊", series: "無", tags: ["極速", "騰空", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "破曉者.榮耀", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "起步", "六噴", "變形"], difficulty: 2 },
    { name: "星渚.星燁", color: "黃", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "夜宴", color: "黑", brand: "阿爾法", series: "無", tags: ["極速", "實戰", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "龍行墨韻", color: "黃", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "碧焰天啟", color: "綠", brand: "雷諾", series: "無", tags: ["轉向","騰空", "六噴"], difficulty: 2 },
    { name: "鵲橋仙", color: "藍", brand: "阿爾法", series: "無", tags: ["極速", "長圖", "六噴"], difficulty: 2 },
    { name: "今生不渝.不渝至愛", color: "白", brand: "極星", series: "無", tags: ["起步", "六噴"], difficulty: 2 },
    { name: "浣離梟火", color: "黃", brand: "無", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "愚樂製造機", color: "紫", brand: "極星", series: "無", tags: ["實戰", "五噴"], difficulty: 2 },
    { name: "童繪森嶼.輝熠", color: "紫", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "L-狼影", color: "灰", brand: "極星", series: "無", tags: ["道具", "六噴"], difficulty: 2 },
    { name: "羅小黑", color: "黑", brand: "雷諾", series: "無", tags: ["起步", "榮耀勳章"], difficulty: 2 },
    { name: "光冥頌詩.暗芒", color: "黑", brand: "雷諾", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "粉喵雷諾", color: "粉", brand: "雷諾", series: "無", tags: ["實戰", "道具", "轉向", "六噴", "變形"], difficulty: 2 },
    { name: "庫洛之星", color: "粉", brand: "無", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "奇奇國王", color: "白", brand: "阿爾法", series: "無", tags: ["騰空", "五噴", "榮耀勳章"], difficulty: 2 },
    { name: "狼王傳說", color: "灰", brand: "無", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "飛天劍閣", color: "白", brand: "特洛伊", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "北極萌主", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "龍騰獅舞", color: "紅", brand: "阿爾法", series: "無", tags: ["騰空", "五噴", "榮耀勳章"], difficulty: 2 },
    { name: "幻金龍影", color: "黃", brand: "特洛伊", series: "無", tags: ["極速", "六噴", "年度限定"], difficulty: 2 },
    { name: "穹夢韶宇.辰曜", color: "白", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "飛劍太白", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "星黛迷夢.浮隅", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "鋒刃RX-7", color: "黃", brand: "無", series: "無", tags: ["轉向", "極速", "六噴"], difficulty: 2 },
    { name: "酷喵雷諾", color: "白", brand: "雷諾", series: "無", tags: ["極速", "實戰", "榮耀勳章"], difficulty: 2 },
    { name: "星航雷諾", color: "白", brand: "雷諾", series: "無", tags: ["實戰", "極速"], difficulty: 2 },
    { name: "L-清", color: "藍", brand: "極星", series: "無", tags: ["實戰", "集氣", "六噴", "亞洲盃"], difficulty: 2 },
    { name: "青瓷碧染", color: "白", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "灼冰之舞.天霜", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "霹靂針尖", color: "粉", brand: "極星", series: "無", tags: ["騰空", "五噴"], difficulty: 2 },
    { name: "七彩仙葫", color: "粉", brand: "極星", series: "無", tags: ["起步", "六噴"], difficulty: 2 },
    { name: "星河蝶舞", color: "白", brand: "極星", series: "無", tags: ["實戰", "五噴", "榮耀勳章"], difficulty: 2 },
    { name: "永夜之吻.暗爵", color: "黑", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "霓虹", color: "粉", brand: "阿爾法", series: "無", tags: ["實戰", "六噴"], difficulty: 2 },
    { name: "魔幻奇緣", color: "粉", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "幽藍薔葳", color: "藍", brand: "特洛伊", series: "無", tags: ["起步", "五噴", "榮耀勳章"], difficulty: 2 },
    { name: "熔焰王座.赤翼", color: "紅", brand: "特洛伊", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "S-流火", color: "白", brand: "特洛伊", series: "無", tags: ["騰空", "六噴", "變形"], difficulty: 2 },
    { name: "L-白狼", color: "灰", brand: "阿爾法", series: "無", tags: ["道具", "六噴"], difficulty: 2 },
    { name: "玄月", color: "紫", brand: "極星", series: "無", tags: ["極速", "六噴","年度限定"], difficulty: 2 },
    { name: "幻海之王", color: "白", brand: "極星", series: "無", tags: ["極速", "實戰", "五噴", "榮耀勳章"], difficulty: 2 },
    { name: "S-時序使者", color: "藍", brand: "阿爾法", series: "無", tags: ["起步", "六噴", "變形"], difficulty: 2 },
    { name: "傾世之禮.萬世", color: "白", brand: "極星", series: "無", tags: ["騰空", "六噴"], difficulty: 2 },
    { name: "桃粉戀歌", color: "粉", brand: "極星", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "星軌來信.天幕", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "童謠序曲", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "前世今生", color: "紫", brand: "極星", series: "無", tags: ["極速", "集氣", "六噴"], difficulty: 2 },
    { name: "噬夜獄使", color: "黑", brand: "阿爾法", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "極夜辰星", color: "黑", brand: "特洛伊", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "紫魅冰爵", color: "紫", brand: "極星", series: "無", tags: ["極速", "集氣", "六噴"], difficulty: 2 },
    { name: "皓雪天翼", color: "白", brand: "阿爾法", series: "無", tags: ["騰空", "六噴"], difficulty: 2 },
    { name: "神聖天使獸", color: "白", brand: "極星", series: "無", tags: ["極速", "榮耀勳章"], difficulty: 2 },
    { name: "夜染天國", color: "黑", brand: "特洛伊", series: "無", tags: ["極速", "六噴"], difficulty: 2 },
    { name: "零狐.御魂", color: "白", brand: "極星", series: "神獸系列", tags: ["飄移", "飄移", "極速", "六噴", "變形"], difficulty: 2 },
    { name: "馭龍雷諾", color: "藍", brand: "雷諾", series: "無", tags: ["極速", "實戰", "榮耀勳章", "變形"], difficulty: 2 },
    { name: "幻夜霓虹", color: "紫", brand: "極星", series: "無", tags: ["飄移", "五噴"], difficulty: 2 },
    { name: "盛夏甜心", color: "黃", brand: "雷諾", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "鋒狼影武", color: "黑", brand: "阿爾法", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "柯尼賽格", color: "灰", brand: "無", series: "無", tags: ["極速", "轉向", "六噴", "亞洲盃", "可開車門"], difficulty: 2 },
    { name: "鸞羽.鳳鳴", color: "藍", brand: "阿爾法", series: "神獸系列", tags: ["道具", "六噴", "變形"], difficulty: 2 },
    { name: "熾耀曙光", color: "橘", brand: "無", series: "無", tags: ["極速", "集氣", "五噴變形"], difficulty: 2 },
    { name: "S-星煌", color: "紫", brand: "極星", series: "無", tags: ["極速", "集氣", "實戰", "六噴", "變形"], difficulty: 2 },
    { name: "L-戰耀雙生", color: "白", brand: "極星", series: "無", tags: ["騰空", "六噴"], difficulty: 2 },
    { name: "暗墟魔主", color: "灰", brand: "特洛伊", series: "神獸系列", tags: ["極速", "六噴", "變形"], difficulty: 2 },
    { name: "絕影剃刀", color: "黑", brand: "特洛伊", series: "無", tags: ["實戰", "六噴", "變形", "變色"], difficulty: 2 },
    { name: "赤韻流音", color: "紅", brand: "特洛伊", series: "無", tags: ["實戰", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "凰呀", color: "白", brand: "雷諾", series: "無", tags: ["轉向", "飄移", "五噴變形"], difficulty: 2 },
    { name: "阿斯拉達AFK-0", color: "白", brand: "阿爾法", series: "無", tags: ["轉向", "集氣", "榮耀勳章", "五噴變形"], difficulty: 2 },
    { name: "炎君", color: "橘", brand: "特洛伊", series: "無", tags: ["起步", "年度限定", "六噴"], difficulty: 2 },
    { name: "滄瑞", color: "藍", brand: "極星", series: "無", tags: ["道具", "年度限定", "六噴"], difficulty: 2 },
    { name: "貂蟬.閉月", color: "粉", brand: "極星", series: "三國系列", tags: ["道具", "六噴"], difficulty: 2 },
    { name: "甜心狸想", color: "粉", brand: "特洛伊", series: "無", tags: ["實戰", "五噴", "變形"], difficulty: 2 },
    { name: "小橘子專屬a車", color: "橘", brand: "阿爾法", series: "無", tags: ["飄移", "五噴"], difficulty: 2 },
    { name: "天蜀仙劍", color: "藍", brand: "無", series: "無", tags: ["騰空", "變形"], difficulty: 2 },
    { name: "呂布.奉先", color: "黃", brand: "特洛伊", series: "三國系列", tags: ["極速", "六噴", "變形"], difficulty: 2 },
    { name: "繽紛神駒", color: "紫", brand: "極星", series: "無", tags: ["極速", "集氣", "榮耀勳章", "五噴", "變形"], difficulty: 2 },
    { name: "創世噬神", color: "黑", brand: "極星", series: "無", tags: ["起步", "騰空", "六噴", "變形變色"], difficulty: 2 },
    { name: "S-天行者", color: "灰", brand: "阿爾法", series: "神獸系列", tags: ["起步", "集氣", "六噴", "變形"], difficulty: 2 },
    { name: "亞洲奔騰", color: "灰", brand: "阿爾法", series: "現實車廠", tags: ["極速", "飄移", "轉向"], difficulty: 2 },
    { name: "永耀紀元", color: "黃", brand: "阿爾法", series: "無", tags: ["極速", "榮耀勳章", "五噴", "變形"], difficulty: 2 },
    { name: "冥王哈迪斯", color: "黑", brand: "極星", series: "無", tags: ["實戰", "五噴", "變形"], difficulty: 2 },
    { name: "黃金射手座", color: "黃", brand: "極星", series: "無", tags: ["飄移", "PBR", "五噴", "變形"], difficulty: 2 },
    { name: "智慧女神", color: "紫", brand: "極星", series: "無", tags: ["實戰", "五噴", "變形"], difficulty: 2 },
    { name: "星夢薔葳", color: "粉", brand: "極星", series: "無", tags: ["起步", "榮耀勳章", "五噴", "變形"], difficulty: 2 },
    { name: "星海幻翼", color: "黃", brand: "極星", series: "無", tags: ["道具", "年度限定", "六噴", "變形"], difficulty: 2 },
    { name: "裂地玄甲", color: "綠", brand: "雷諾", series: "年度限定", tags: ["實戰", "年度限定", "六噴", "變形"], difficulty: 2 },
    { name: "奔雷聖衛", color: "藍", brand: "阿爾法", series: "年度限定", tags: ["飄移", "集氣", "年度限定", "六噴", "變形"], difficulty: 2 },
    { name: "御炎神兵", color: "紅", brand: "特洛伊", series: "無", tags: ["極速", "起步", "年度限定", "六噴", "變形"], difficulty: 2 },
    { name: "銀河之光", color: "橘", brand: "阿爾法", series: "無", tags: ["實戰", "變色", "變形", "五噴"], difficulty: 2 },
    { name: "McLaren600LT", color: "橘", brand: "無", series: "現實車廠", tags: ["起步", "亞洲盃", "PBR", "五噴", "可開車門"], difficulty: 2 },
    { name: "重甲神兵", color: "綠", brand: "雷諾", series: "無", tags: ["轉向", "實戰", "榮耀勳章", "五噴", "變形", "可開車門"], difficulty: 2 },
    { name: "噬火", color: "紅", brand: "特洛伊", series: "無", tags: ["集氣", "榮耀勳章", "五噴變形"], difficulty: 2 },
    { name: "深藍耀世", color: "黑", brand: "阿爾法", series: "無", tags: ["轉向", "PBR", "變形"], difficulty: 2 },
    { name: "天狼星", color: "黑", brand: "阿爾法", series: "無", tags: ["轉向", "極速", "五噴", "變形", "可開車門"], difficulty: 2 },
    { name: "夜雷戰神", color: "黑", brand: "極星", series: "無", tags: ["極速", "集氣", "道具", "五噴", "變形"], difficulty: 2 },
    { name: "永夜君主", color: "紅", brand: "特洛伊", series: "無", tags: ["極速", "集氣", "鑽石材質", "五噴", "變形"], difficulty: 2 },
    { name: "S-逐星者", color: "白", brand: "極星", series: "季度賽車", tags: ["極速", "集氣", "五噴", "變形"], difficulty: 2 },
    { name: "日曜", color: "紅", brand: "特洛伊", series: "無", tags: ["極速", "榮耀勳章", "五噴"], difficulty: 2 },
    { name: "神風玉堂", color: "白", brand: "極星", series: "年度限定", tags: ["起步", "出場動畫", "年度限定", "PBR", "五噴變形"], difficulty: 2 },
    { name: "時之夭", color: "白", brand: "極星", series: "無", tags: ["飄移", "榮耀勳章", "PBR", "五噴", "變形"], difficulty: 2 },
    { name: "指揮官SPX", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "集氣", "五噴", "變形"], difficulty: 2 },
    { name: "暗耀武神", color: "藍", brand: "極星", series: "無", tags: ["極速", "PBR", "五噴變形", "可開車門"], difficulty: 2 },
    { name: "破風", color: "白", brand: "阿爾法", series: "無", tags: ["轉向", "道具", "五噴", "變形"], difficulty: 2 },
    { name: "星空獵手", color: "藍", brand: "阿爾法", series: "無", tags: ["騰空", "極速", "集氣", "PBR", "可開車門"], difficulty: 2 },
    { name: "S-晴天雷諾", color: "灰", brand: "雷諾", series: "季度賽車", tags: ["實戰", "集氣", "變形", "五噴"], difficulty: 2 },
    { name: "金刃黃蜂", color: "黃", brand: "極星", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "驚鴻", color: "白", brand: "特洛伊", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "冰皇", color: "藍", brand: "極星", series: "無", tags: ["長圖", "特效"], difficulty: 2 },
    { name: "地域天啟", color: "黑", brand: "雷諾", series: "無", tags: ["轉向", "五噴"], difficulty: 2 },
    { name: "聖金獅王", color: "黃", brand: "極星", series: "無", tags: ["極速", "榮耀勳章", "PBR", "可開車門"], difficulty: 2 },
    { name: "亞洲榮耀", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "道具", "亞洲盃"], difficulty: 2 },
    { name: "星舞者", color: "紫", brand: "極星", series: "無", tags: ["飄移", "PBR"], difficulty: 2 },
    { name: "S-追光者", color: "白", brand: "極星", series: "無", tags: ["極速", "集氣", "道具", "五噴", "變形"], difficulty: 2 },
    { name: "勁霸", color: "黑", brand: "雷諾", series: "無", tags: ["轉向", "極速", "道具", "五噴", "變形"], difficulty: 2 },
    { name: "蒼穹絕影", color: "白", brand: "雷諾", series: "無", tags: ["集氣", "極速", "五噴", "變形"], difficulty: 2 },
    { name: "滄海", color: "白", brand: "極星", series: "無", tags: ["轉向", "榮耀勳章"], difficulty: 2 },
    { name: "紫鏡之巔", color: "紫", brand: "極星", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "幻影戰神", color: "灰", brand: "雷諾", series: "榮耀勳章", tags: ["極速", "騰空", "榮耀勳章"], difficulty: 2 },
    { name: "天篷", color: "黑", brand: "特洛伊", series: "年度限定", tags: ["轉向", "年度限定", "五噴"], difficulty: 2 },
    { name: "赤橙夢魘", color: "橘", brand: "特洛伊", series: "無", tags: ["極速", "集氣"], difficulty: 2 },
    { name: "迅捷流星", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "道具"], difficulty: 2},
    { name: "火神", color: "橘", brand: "極星", series: "無", tags: ["起步", "特效"], difficulty: 2 },
    { name: "海神", color: "藍", brand: "極星", series: "無", tags: ["實戰", "特效"], difficulty: 2 },
    { name: "赤色屠戮", color: "紅", brand: "雷諾", series: "無", tags: ["無"], difficulty: 2 },
    { name: "燃魂針尖", color: "橘", brand: "特洛伊", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "S-獵魂者", color: "白", brand: "雷諾", series: "季度賽車", tags: ["極速", "五噴", "變形"], difficulty: 2 },
    { name: "極光", color: "白", brand: "極星", series: "無", tags: ["轉向"], difficulty: 2 },
    { name: "聖光雪狐", color: "白", brand: "極星", series: "榮耀勳章", tags: ["極速", "集氣", "道具", "榮耀勳章"], difficulty: 2 },
    { name: "黑耀閃電", color: "黑", brand: "雷諾", series: "無", tags: ["極速", "集氣"], difficulty: 2 },
    { name: "時空之翼", color: "粉", brand: "極星", series: "無", tags: ["騰空"], difficulty: 2 },
    { name: "S-破曉者", color: "白", brand: "阿爾法", series: "季度賽車", tags: ["極速", "集氣", "變形"], difficulty: 2 },
    { name: "駭客", color: "黑", brand: "阿爾法", series: "無", tags: ["飄移"], difficulty: 2 },
    { name: "白玉神駒", color: "白", brand: "極星", series: "無", tags: ["極速", "道具"], difficulty: 2 },
    { name: "恆星", color: "黑", brand: "阿爾法", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "穿梭者", color: "紅", brand: "雷諾", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "榮耀之光", color: "橘", brand: "阿爾法", series: "無", tags: ["極速", "道具"], difficulty: 2 },
    { name: "風之痕", color: "白", brand: "阿爾法", series: "無", tags: ["極速", "騰空"], difficulty: 2 },
    { name: "暗刃", color: "黑", brand: "特洛伊", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "獄火哮天", color: "灰", brand: "特洛伊", series: "年度限定", tags: ["極速", "年度限定"], difficulty: 2 },
    { name: "璀璨之星", color: "紫", brand: "極星", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "猩紅公爵", color: "紅", brand: "特洛伊", series: "無", tags: ["起步"], difficulty: 2 },
    { name: "暗夜伯爵", color: "灰", brand: "特洛伊", series: "無", tags: ["集氣"], difficulty: 2 },
    { name: "超級烈焰", color: "紅", brand: "阿爾法", series: "無", tags: ["無"], difficulty: 2 },
    { name: "黑夜傳說", color: "黑", brand: "雷諾", series: "無", tags: ["實戰"], difficulty: 2 },
    { name: "赤魂幽靈", color: "紅", brand: "特洛伊", series: "無", tags: ["實戰", "PBR", "五噴", "可開車門"], difficulty: 2 },
    { name: "黑色閃電", color: "黑", brand: "雷諾", series: "無", tags: ["極速"], difficulty: 2 },
    { name: "獵影", color: "藍", brand: "極星", series: "無", tags: ["實戰"], difficulty: 2 }
];

const maxAttempts = 10;
let answer = null;
let attempt = 1;
let score = 0;
let mode = localStorage.getItem("game_mode") || "normal";
let round = 1;
let difficulty = localStorage.getItem("game_difficulty") || "medium";

function chooseDifficultyPool() {
  let pool = [];
  for (const car of carDB) {
    const rand = Math.random();
    if (difficulty === "easy") {
      if (car.difficulty === 1 && rand < 0.65) pool.push(car);
      else if (car.difficulty === 2 && rand < 0.95) pool.push(car);
      else if (car.difficulty === 3 && rand < 1.0) pool.push(car);
    } else if (difficulty === "medium") {
      if (car.difficulty === 1 && rand < 0.45) pool.push(car);
      else if (car.difficulty === 2 && rand < 0.85) pool.push(car);
      else if (car.difficulty === 3 && rand < 1.0) pool.push(car);
    } else if (difficulty === "hard") {
      if (car.difficulty === 1 && rand < 0.30) pool.push(car);
      else if (car.difficulty === 2 && rand < 0.80) pool.push(car);
      else if (car.difficulty === 3 && rand < 1.0) pool.push(car);
    }
  }
  return pool;
}

function updateGameInfoDisplay() {
  document.getElementById("modeInfo").innerText = `🎮 模式：${translateMode(mode)}｜難度：${translateDifficulty(difficulty)}`;
  
  if (mode === "accuracy") {
    document.getElementById("roundInfo").innerText = `🎯 第 ${round}/5 輪｜命中：${score}`;
    document.getElementById("streakInfo").innerText = "";
  } else if (mode === "streak") {
    document.getElementById("streakInfo").innerText = `🔥 目前連勝：${score}`;
    document.getElementById("roundInfo").innerText = "";
  } else {
    document.getElementById("roundInfo").innerText = "";
    document.getElementById("streakInfo").innerText = "";
  }
}


function translateMode(mode) {
  switch (mode) {
    case "normal": return "一般";
    case "accuracy": return "正確率";
    case "streak": return "連勝";
    default: return "未知";
  }
}

function translateDifficulty(diff) {
  switch (diff) {
    case "easy": return "簡單";
    case "medium": return "普通";
    case "hard": return "困難";
    default: return "未知";
  }
}

function startGame() {
  difficulty = localStorage.getItem("game_difficulty") || "medium";
  mode = localStorage.getItem("game_mode") || "normal";

  attempt = 1;
  if (mode === "accuracy") round++;
  document.getElementById("guessTable").innerHTML = "";
  document.getElementById("result").innerText = "";

  updateGameInfoDisplay();

  const pool = chooseDifficultyPool();
  if (pool.length === 0) {
    alert("❗ 沒有符合條件的車，請確認資料或難度設定");
    return;
  }

  answer = pool[Math.floor(Math.random() * pool.length)];
}

function countNameLength(name) {
  let length = 0;
  for (let char of name) {
    const code = char.charCodeAt(0);
    if (/[A-Za-z0-9]/.test(char)) {
      length += 1;
    } else if (code >= 0x4E00 && code <= 0x9FFF) {
      length += 1;
    }
  }
  return length;
}

function submitGuess() {
  if (attempt > maxAttempts) return;

const input = document.getElementById("carName").value.trim();
const resultEl = document.getElementById("result");

// Clear any previous message *first*
resultEl.innerText = "";

// Check if input is a valid car in carDB
const guess = carDB.find(car => car.name === input);

// If not found, show warning
if (!guess) {
  resultEl.innerText = "❗ 沒有這台車，請再試一次！";
  setTimeout(() => {
    // Only clear if no new message has been written
    if (resultEl.innerText === "❗ 沒有這台車，請再試一次！") {
      resultEl.innerText = "";
    }
  }, 5000);
  return;
}






  const guessRow = document.createElement("tr");
  guessRow.className = "guess-row";
  const isCorrect = guess.name === answer.name;

  const guessLength = countNameLength(guess.name);
  const answerLength = countNameLength(answer.name);

  function createCell(value, correct) {
    const td = document.createElement("td");
    td.textContent = value;
    if (correct === "correct") td.classList.add("correct");
    else if (correct === "partial") td.classList.add("partial");
    return td;
  }

  guessRow.appendChild(createCell(attempt));
  guessRow.appendChild(createCell(guess.name, isCorrect ? "correct" : null));
  guessRow.appendChild(createCell(guessLength, guessLength === answerLength ? "correct" : null));
  guessRow.appendChild(createCell(guess.color, guess.color === answer.color ? "correct" : null));
  guessRow.appendChild(createCell(guess.brand, guess.brand === answer.brand ? "correct" : null));
  guessRow.appendChild(createCell(guess.series, guess.series === answer.series ? "correct" : null));

  const tagsInCommon = guess.tags.filter(t => answer.tags.includes(t));
  const tagCell = document.createElement("td");
  tagCell.textContent = guess.tags.join(" ");
  if (tagsInCommon.length === answer.tags.length && tagsInCommon.length === guess.tags.length) {
    tagCell.classList.add("correct");
  } else if (tagsInCommon.length > 0) {
    tagCell.classList.add("partial");
  }
  guessRow.appendChild(tagCell);

  document.getElementById("guessTable").appendChild(guessRow);
  document.getElementById("carName").value = "";
  document.getElementById("carName").focus();
  attempt++;

  if (isCorrect || attempt > maxAttempts) {
    if (isCorrect && (mode === "streak" || mode === "accuracy")) score++;
    if (!isCorrect && mode === "streak") score = 0;

    let resultText = isCorrect ? `🎉 答對了！答案是 ${answer.name}` : `❌ 答錯了！正確答案是 ${answer.name}`;

    if (mode === "normal") {
      document.getElementById("result").innerText = resultText;
      setTimeout(() => {
        if (confirm("再玩一次？")) startGame();
      }, 1200);
    } else if (mode === "accuracy") {
      document.getElementById("result").innerText = `${resultText}（第 ${round}/5 輪）`;
      if (round >= 5) {
        setTimeout(() => {
          document.getElementById("endTitle").innerText = "遊戲結束";
          document.getElementById("endSummary").innerText = `共答對 ${score}/5 題！`;
          document.getElementById("endPopup").style.display = "block";
        }, 1200);
      } else {
        setTimeout(startGame, 1200);
      }
    } else if (mode === "streak") {
      document.getElementById("result").innerText = `${resultText}（目前連勝：${score}）`;
      setTimeout(() => {
        document.getElementById("endTitle").innerText = isCorrect ? "答對囉！" : "答錯囉！";
        document.getElementById("endSummary").innerText = `目前連勝紀錄：${score}`;
        document.getElementById("endPopup").style.display = "block";
      }, 1200);
    }
  }
}
