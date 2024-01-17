// src/lib/words/words.ts
export interface WordType {
  word: string;
  meaning: string;
  genre: "daily" | "slang" | "business" | "formal" | "etc" | "dialect";
  language: "JP" | "EN" | "CH" | "FR" | "ID" | "KR";
  pronunciation?: string;
}

export const languageMap: { [key: string]: string } = {
  JP: "日本語",
  EN: "英語",
  CH: "中国語",
  FR: "フランス語",
  ID: "インドネシア語",
  KR: "韓国語",
};

export const genreMap: { [key: string]: string } = {
  daily: "日常会話",
  formal: "フォーマル",
  business: "ビジネス",
  dialect: "方言",
  slang: "スラング",
  etc: "その他",
};

export const words: WordType[] = [
  // Japanese (JP)

  {
    word: "おはよう",
    meaning: "Good morning",
    genre: "daily",
    language: "JP",
    pronunciation: "ohayou",
  },
  {
    word: "こんにちは",
    meaning: "Hello / Good afternoon",
    genre: "daily",
    language: "JP",
    pronunciation: "konnichiwa",
  },
  {
    word: "こんばんは",
    meaning: "Good evening",
    genre: "daily",
    language: "JP",
    pronunciation: "konbanwa",
  },
  {
    word: "ありがとう",
    meaning: "Thank you",
    genre: "formal",
    language: "JP",
    pronunciation: "arigatou",
  },
  {
    word: "すみません",
    meaning: "Excuse me / I'm sorry",
    genre: "formal",
    language: "JP",
    pronunciation: "sumimasen",
  },
  {
    word: "失礼いたします",
    meaning: "Excuse me (used when leaving)",
    genre: "formal",
    language: "JP",
    pronunciation: "shitsurei itashimasu",
  },
  {
    word: "お疲れ様でした",
    meaning: "Thank you for your hard work (used at the end of the day)",
    genre: "formal",
    language: "JP",
    pronunciation: "otsukaresama deshita",
  },
  {
    word: "ご挨拶申し上げます",
    meaning: "I would like to give my greetings",
    genre: "formal",
    language: "JP",
    pronunciation: "goaisatsu moushiagemasu",
  },
  {
    word: "取引先",
    meaning: "Business partner / Client",
    genre: "business",
    language: "JP",
    pronunciation: "torihikisaki",
  },
  {
    word: "プレゼンテーション",
    meaning: "Presentation",
    genre: "business",
    language: "JP",
    pronunciation: "purezenteeshon",
  },
  {
    word: "会議",
    meaning: "Meeting",
    genre: "business",
    language: "JP",
    pronunciation: "kaigi",
  },
  {
    word: "プロジェクト",
    meaning: "Project",
    genre: "business",
    language: "JP",
    pronunciation: "purojekuto",
  },
  {
    word: "契約書",
    meaning: "Contract document",
    genre: "business",
    language: "JP",
    pronunciation: "keiyakusho",
  },
  {
    word: "商談",
    meaning: "Business negotiation",
    genre: "business",
    language: "JP",
    pronunciation: "shoudan",
  },
  {
    word: "営業電話",
    meaning: "Sales call",
    genre: "business",
    language: "JP",
    pronunciation: "eigyou denwa",
  },
  {
    word: "社員",
    meaning: "Employee",
    genre: "business",
    language: "JP",
    pronunciation: "shain",
  },
  {
    word: "お疲れ様でした",
    meaning: "Thank you for your hard work",
    genre: "business",
    language: "JP",
    pronunciation: "otsukaresama deshita",
  },
  {
    word: "プロフェッショナル",
    meaning: "Professional",
    genre: "business",
    language: "JP",
    pronunciation: "purofesshonaru",
  },
  {
    word: "残業",
    meaning: "Overtime work",
    genre: "business",
    language: "JP",
    pronunciation: "zangyou",
  },

  {
    word: "ヤバい",
    meaning: "Awesome",
    genre: "slang",
    language: "JP",
    pronunciation: "yah-bai",
  },
  {
    word: "わかんねー",
    meaning: "I don't understand",
    genre: "slang",
    language: "JP",
    pronunciation: "wah-kahn-ne",
  },
  {
    word: "ちょっと待って(まって)",
    meaning: "Wait a moment",
    genre: "slang",
    language: "JP",
    pronunciation: "cho-toh-mah-te",
  },
  {
    word: "すごくてえ",
    meaning: "Unbelievable",
    genre: "slang",
    language: "JP",
    pronunciation: "suh-goh-koo-teh",
  },
  {
    word: "おはようございます",
    meaning: "Good morning",
    genre: "formal",
    language: "JP",
    pronunciation: "oh-hah-yoh goh-zahy-mahs",
  },
  {
    word: "お疲れ様でした",
    meaning: "Thank you for your hard work",
    genre: "formal",
    language: "JP",
    pronunciation: "oh-tsu-ka-reh-sah-mah deh-shi-tah",
  },
  {
    word: "仕事",
    meaning: "Work",
    genre: "business",
    language: "JP",
    pronunciation: "shi-goto",
  },
  {
    word: "取引先",
    meaning: "Business partner",
    genre: "business",
    language: "JP",
    pronunciation: "to-ri-hi-ki-sa-ki",
  },
  {
    word: "方言",
    meaning: "Dialect",
    genre: "dialect",
    language: "JP",
    pronunciation: "ho-u-go",
  },
  {
    word: "俺",
    meaning: "I (informal)",
    genre: "slang",
    language: "JP",
    pronunciation: "o-re",
  },
  {
    word: "ヤバい奴",
    meaning: "Dangerous person",
    genre: "slang",
    language: "JP",
    pronunciation: "yah-bai yah-tsu",
  },
  {
    word: "クール",
    meaning: "Cool",
    genre: "slang",
    language: "JP",
    pronunciation: "ku-ru",
  },
  {
    word: "ビビる",
    meaning: "To be scared",
    genre: "slang",
    language: "JP",
    pronunciation: "bi-bi-ru",
  },
  {
    word: "ワクワク",
    meaning: "Excited",
    genre: "slang",
    language: "JP",
    pronunciation: "wa-ku-wa-ku",
  },
  {
    word: "なんでやねん",
    meaning: "What's the matter? (Kansai dialect)",
    genre: "dialect",
    language: "JP",
    pronunciation: "nan-de-ya-nen",
  },
  {
    word: "やばいことになる",
    meaning: "It's going to be a problem",
    genre: "slang",
    language: "JP",
    pronunciation: "yah-bai ko-to-ni-na-ru",
  },
  {
    word: "てんこ盛り",
    meaning: "Heaping serving",
    genre: "slang",
    language: "JP",
    pronunciation: "ten-ko-mo-ri",
  },
  {
    word: "ワンピース",
    meaning: "One-piece dress",
    genre: "etc",
    language: "JP",
    pronunciation: "wan-pi-su",
  },
  {
    word: "マジで？",
    meaning: "Seriously?",
    genre: "slang",
    language: "JP",
    pronunciation: "mah-ji-deh",
  },
  {
    word: "めっちゃ",
    meaning: "Very",
    genre: "slang",
    language: "JP",
    pronunciation: "meh-chah",
  },
  {
    word: "やばいやつ",
    meaning: "Troublemaker",
    genre: "slang",
    language: "JP",
    pronunciation: "yah-bai-yah-tsu",
  },
  {
    word: "ウケる",
    meaning: "Hilarious",
    genre: "slang",
    language: "JP",
    pronunciation: "oo-keh-roo",
  },
  {
    word: "気合入れて",
    meaning: "Put effort into it",
    genre: "slang",
    language: "JP",
    pronunciation: "kee-ah-ee-reh-te",
  },
  {
    word: "マジキチ",
    meaning: "Crazy",
    genre: "slang",
    language: "JP",
    pronunciation: "mah-ji-kee-chi",
  },
  {
    word: "モテ期",
    meaning: "Popular period with the opposite sex",
    genre: "slang",
    language: "JP",
    pronunciation: "moh-teh-ki",
  },
  {
    word: "しんどい",
    meaning: "Tough",
    genre: "slang",
    language: "JP",
    pronunciation: "shin-doh-ee",
  },
  {
    word: "お疲れ様",
    meaning: "Good job",
    genre: "slang",
    language: "JP",
    pronunciation: "oh-tsu-ka-reh-sah-mah",
  },
  {
    word: "キモい",
    meaning: "Creepy",
    genre: "slang",
    language: "JP",
    pronunciation: "kee-moh-ee",
  },
  {
    word: "リア充",
    meaning: "Someone with a fulfilling real-life",
    genre: "slang",
    language: "JP",
    pronunciation: "ree-ah-joo",
  },
  {
    word: "ダメージ",
    meaning: "Negativity",
    genre: "slang",
    language: "JP",
    pronunciation: "dah-meh-ji",
  },
  {
    word: "ワロタ",
    meaning: "I laughed",
    genre: "slang",
    language: "JP",
    pronunciation: "wah-roh-tah",
  },
  {
    word: "ガチ",
    meaning: "For real",
    genre: "slang",
    language: "JP",
    pronunciation: "gah-chi",
  },
  {
    word: "チャラ男",
    meaning: "Playboy",
    genre: "slang",
    language: "JP",
    pronunciation: "chah-rah-oh-toh-koh",
  },
  {
    word: "クズ",
    meaning: "Scum",
    genre: "slang",
    language: "JP",
    pronunciation: "koo-zu",
  },

  //English (EN)
  {
    word: "gourmet",
    meaning: "High-quality food",
    genre: "daily",
    language: "EN",
    pronunciation: "goo(r)-may",
  },
  {
    word: "nap",
    meaning: "Short sleep",
    genre: "daily",
    language: "EN",
    pronunciation: "nap",
  },
  {
    word: "gratitude",
    meaning: "Thankfulness",
    genre: "formal",
    language: "EN",
    pronunciation: "gra-ti-tood",
  },
  {
    word: "eloquent",
    meaning: "Expressive in speech",
    genre: "formal",
    language: "EN",
    pronunciation: "el-uh-kwuhnt",
  },
  {
    word: "correspondence",
    meaning: "Communication through letters or emails",
    genre: "business",
    language: "EN",
    pronunciation: "kor-uh-spon-duhns",
  },
  {
    word: "benchmark",
    meaning: "Standard for comparison",
    genre: "business",
    language: "EN",
    pronunciation: "bench-mark",
  },
  {
    word: "innovation",
    meaning: "Introduction of new ideas",
    genre: "business",
    language: "EN",
    pronunciation: "in-o-vey-shun",
  },
  {
    word: "folk",
    meaning: "People in general",
    genre: "dialect",
    language: "EN",
    pronunciation: "fōk",
  },
  {
    word: "holler",
    meaning: "Shout loudly",
    genre: "dialect",
    language: "EN",
    pronunciation: "hah-ler",
  },
  {
    word: "reckon",
    meaning: "Think or suppose",
    genre: "dialect",
    language: "EN",
    pronunciation: "rek-uhn",
  },
  {
    word: "chillax",
    meaning: "Relax and chill",
    genre: "slang",
    language: "EN",
    pronunciation: "chil-laks",
  },
  {
    word: "hangry",
    meaning: "Hungry and angry",
    genre: "slang",
    language: "EN",
    pronunciation: "hang-gree",
  },
  {
    word: "bae",
    meaning: "Significant other",
    genre: "slang",
    language: "EN",
    pronunciation: "bay",
  },
  {
    word: "lituation",
    meaning: "A lit situation",
    genre: "slang",
    language: "EN",
    pronunciation: "lit-yoo-ey-shun",
  },
  {
    word: "flexin",
    meaning: "Showing off",
    genre: "slang",
    language: "EN",
    pronunciation: "flek-sin",
  },
  {
    word: "savage",
    meaning: "Fierce or ruthless",
    genre: "slang",
    language: "EN",
    pronunciation: "sav-ij",
  },
  {
    word: "vibes",
    meaning: "Atmosphere or feelings",
    genre: "slang",
    language: "EN",
    pronunciation: "vahybz",
  },
  {
    word: "meme",
    meaning: "Internet humor image",
    genre: "slang",
    language: "EN",
    pronunciation: "meem",
  },
  {
    word: "lit",
    meaning: "Exciting or excellent",
    genre: "slang",
    language: "EN",
    pronunciation: "lit",
  },
  {
    word: "bless up",
    meaning: "Wishing someone well",
    genre: "slang",
    language: "EN",
    pronunciation: "bless up",
  },
  {
    word: "shade",
    meaning: "Disrespectful attitude",
    genre: "slang",
    language: "EN",
    pronunciation: "shade",
  },
  {
    word: "woke",
    meaning: "Socially aware",
    genre: "slang",
    language: "EN",
    pronunciation: "woke",
  },
  {
    word: "greetings",
    meaning: "Saying hello",
    genre: "daily",
    language: "EN",
    pronunciation: "gree-tings",
  },
  {
    word: "farewell",
    meaning: "Saying goodbye",
    genre: "daily",
    language: "EN",
    pronunciation: "fare-well",
  },
  {
    word: "morning",
    meaning: "The early part of the day",
    genre: "daily",
    language: "EN",
    pronunciation: "mawr-ning",
  },
  {
    word: "evening",
    meaning: "The later part of the day",
    genre: "daily",
    language: "EN",
    pronunciation: "ee-vuh-ning",
  },
  {
    word: "formalities",
    meaning: "Official procedures",
    genre: "formal",
    language: "EN",
    pronunciation: "for-mal-i-tees",
  },
  {
    word: "protocol",
    meaning: "Set of rules or procedures",
    genre: "formal",
    language: "EN",
    pronunciation: "proh-tuh-kol",
  },
  {
    word: "corporate",
    meaning: "Related to a corporation",
    genre: "business",
    language: "EN",
    pronunciation: "kor-puh-rit",
  },
  {
    word: "stakeholder",
    meaning: "Person with an interest or concern",
    genre: "business",
    language: "EN",
    pronunciation: "steyk-hohl-der",
  },
  {
    word: "memo",
    meaning: "Written message or note",
    genre: "business",
    language: "EN",
    pronunciation: "mem-oh",
  },
  {
    word: "accent",
    meaning: "Distinctive way of pronouncing words",
    genre: "dialect",
    language: "EN",
    pronunciation: "ak-sent",
  },
  {
    word: "drawl",
    meaning: "Slow way of speaking",
    genre: "dialect",
    language: "EN",
    pronunciation: "drawl",
  },
  {
    word: "y'all",
    meaning: "You all",
    genre: "dialect",
    language: "EN",
    pronunciation: "yawl",
  },
  {
    word: "epic",
    meaning: "Impressively great",
    genre: "slang",
    language: "EN",
    pronunciation: "ep-ik",
  },
  {
    word: "lit AF",
    meaning: "Extremely exciting",
    genre: "slang",
    language: "EN",
    pronunciation: "lit ey-eff",
  },
  {
    word: "squad",
    meaning: "Group of friends",
    genre: "slang",
    language: "EN",
    pronunciation: "skwad",
  },
  {
    word: "vibing",
    meaning: "Enjoying the atmosphere",
    genre: "slang",
    language: "EN",
    pronunciation: "vahy-bing",
  },
  {
    word: "hustle",
    meaning: "Hard work and determination",
    genre: "slang",
    language: "EN",
    pronunciation: "huh-suhl",
  },
  {
    word: "woke",
    meaning: "Socially aware",
    genre: "slang",
    language: "EN",
    pronunciation: "wohk",
  },
  {
    word: "boujee",
    meaning: "High-class and stylish",
    genre: "slang",
    language: "EN",
    pronunciation: "boo-jee",
  },
  {
    word: "cap",
    meaning: "Lie",
    genre: "slang",
    language: "EN",
    pronunciation: "kap",
  },

  {
    word: "please",
    meaning: "Polite request",
    genre: "formal",
    language: "EN",
    pronunciation: "pleez",
  },
  {
    word: "thank you",
    meaning: "Expressing gratitude",
    genre: "formal",
    language: "EN",
    pronunciation: "thangk yoo",
  },
  {
    word: "presentation",
    meaning: "A formal talk",
    genre: "business",
    language: "EN",
    pronunciation: "pre-zen-tay-shun",
  },
  {
    word: "negotiation",
    meaning: "Discussion for agreement",
    genre: "business",
    language: "EN",
    pronunciation: "ni-go-shee-ay-shun",
  },
  {
    word: "colleague",
    meaning: "A coworker",
    genre: "business",
    language: "EN",
    pronunciation: "ka-leeg",
  },
  {
    word: "dialect",
    meaning: "Regional language variation",
    genre: "dialect",
    language: "EN",
    pronunciation: "dai-a-lekt",
  },
  {
    word: "gonna",
    meaning: "Going to",
    genre: "slang",
    language: "EN",
    pronunciation: "gah-na",
  },
  {
    word: "chillax",
    meaning: "Relax and chill",
    genre: "slang",
    language: "EN",
    pronunciation: "chil-laks",
  },
  {
    word: "YOLO",
    meaning: "You only live once",
    genre: "slang",
    language: "EN",
    pronunciation: "yo-lo",
  },
  {
    word: "hangry",
    meaning: "Hungry and angry",
    genre: "slang",
    language: "EN",
    pronunciation: "hang-gree",
  },
  {
    word: "lit",
    meaning: "Exciting or excellent",
    genre: "slang",
    language: "EN",
    pronunciation: "lit",
  },
  {
    word: "flex",
    meaning: "Show off",
    genre: "slang",
    language: "EN",
    pronunciation: "fleks",
  },
  {
    word: "vibe",
    meaning: "Mood or atmosphere",
    genre: "slang",
    language: "EN",
    pronunciation: "vahyb",
  },

  //------------------- English (EN) -------------------//

  //Chinese (CH)

  {
    word: "你好",
    meaning: "Hello",
    genre: "formal",
    language: "CH",
    pronunciation: "Nǐ hǎo",
  },
  {
    word: "谢谢",
    meaning: "Thank you",
    genre: "formal",
    language: "CH",
    pronunciation: "Xièxiè",
  },
  {
    word: "食物",
    meaning: "Food",
    genre: "etc",
    language: "CH",
    pronunciation: "Shíwù",
  },
  {
    word: "家",
    meaning: "House",
    genre: "etc",
    language: "CH",
    pronunciation: "Jiā",
  },
  {
    word: "牛逼",
    meaning: "Awesome",
    genre: "slang",
    language: "CH",
    pronunciation: "Niú bī",
  },
  {
    word: "懂了吗",
    meaning: "Got it?",
    genre: "slang",
    language: "CH",
    pronunciation: "Dǒng le ma",
  },
  {
    word: "炸鸡",
    meaning: "Fried chicken",
    genre: "etc",
    language: "CH",
    pronunciation: "Zhá jī",
  },
  {
    word: "搞笑",
    meaning: "Funny",
    genre: "slang",
    language: "CH",
    pronunciation: "Gǎo xiào",
  },
  {
    word: "红烧肉",
    meaning: "Braised pork",
    genre: "etc",
    language: "CH",
    pronunciation: "Hóngshāo ròu",
  },
  {
    word: "一言难尽",
    meaning: "Hard to describe in a few words",
    genre: "etc",
    language: "CH",
    pronunciation: "Yī yán nán jìn",
  },
  {
    word: "稳",
    meaning: "Stable or reliable",
    genre: "slang",
    language: "CH",
    pronunciation: "Wěn",
  },
  {
    word: "加油",
    meaning: "Keep it up",
    genre: "etc",
    language: "CH",
    pronunciation: "Jiā yóu",
  },
  {
    word: "霸道总裁",
    meaning: "Dominant CEO",
    genre: "slang",
    language: "CH",
    pronunciation: "Bàdào zǒngcái",
  },
  {
    word: "吃土",
    meaning: "Eat soil (to be poor)",
    genre: "slang",
    language: "CH",
    pronunciation: "Chī tǔ",
  },
  {
    word: "装逼",
    meaning: "Show off",
    genre: "slang",
    language: "CH",
    pronunciation: "Zhuāng bī",
  },
  {
    word: "求关注",
    meaning: "Seek attention",
    genre: "slang",
    language: "CH",
    pronunciation: "Qiú guānzhù",
  },
  {
    word: "宅男宅女",
    meaning: "Homebody (for males and females)",
    genre: "slang",
    language: "CH",
    pronunciation: "Zháinán zháinǚ",
  },
  {
    word: "土豪",
    meaning: "Local tyrant (wealthy person)",
    genre: "slang",
    language: "CH",
    pronunciation: "Tǔ háo",
  },
  {
    word: "小清新",
    meaning: "Fresh and simple style",
    genre: "slang",
    language: "CH",
    pronunciation: "Xiǎo qīngxīn",
  },
  {
    word: "电影",
    meaning: "Movie",
    genre: "etc",
    language: "CH",
    pronunciation: "Diànyǐng",
  },
  {
    word: "音乐",
    meaning: "Music",
    genre: "etc",
    language: "CH",
    pronunciation: "Yīnyuè",
  },
  {
    word: "喜欢",
    meaning: "Like",
    genre: "etc",
    language: "CH",
    pronunciation: "Xǐhuān",
  },
  {
    word: "星期",
    meaning: "Week",
    genre: "etc",
    language: "CH",
    pronunciation: "Xīngqī",
  },
  {
    word: "漂亮",
    meaning: "Beautiful",
    genre: "etc",
    language: "CH",
    pronunciation: "Piàoliang",
  },
  {
    word: "旅行",
    meaning: "Travel",
    genre: "etc",
    language: "CH",
    pronunciation: "Lǚxíng",
  },
  {
    word: "学习",
    meaning: "Study",
    genre: "etc",
    language: "CH",
    pronunciation: "Xuéxí",
  },
  {
    word: "梦想",
    meaning: "Dream",
    genre: "etc",
    language: "CH",
    pronunciation: "Mèngxiǎng",
  },
  {
    word: "友谊",
    meaning: "Friendship",
    genre: "etc",
    language: "CH",
    pronunciation: "Yǒuyì",
  },
  {
    word: "幸福",
    meaning: "Happiness",
    genre: "etc",
    language: "CH",
    pronunciation: "Xìngfú",
  },

  //------------------- Chinese (CH) -------------------//

  // Indonesian (ID)
  {
    word: "Selamat pagi",
    meaning: "Good morning",
    genre: "formal",
    language: "ID",
    pronunciation: "seh-la-mat pah-gee",
  },
  {
    word: "Selamat sore",
    meaning: "Good afternoon",
    genre: "formal",
    language: "ID",
    pronunciation: "seh-la-mat so-reh",
  },
  {
    word: "Selamat malam",
    meaning: "Good night",
    genre: "formal",
    language: "ID",
    pronunciation: "seh-la-mat ma-lam",
  },
  {
    word: "Terima kasih banyak",
    meaning: "Thank you very much",
    genre: "formal",
    language: "ID",
    pronunciation: "teh-ree-mah kah-see bah-nyahk",
  },
  {
    word: "Pekerjaan",
    meaning: "Job/Work",
    genre: "business",
    language: "ID",
    pronunciation: "peh-kehr-jahn",
  },
  {
    word: "Kerja sama",
    meaning: "Collaboration",
    genre: "business",
    language: "ID",
    pronunciation: "kehr-jah sah-mah",
  },
  {
    word: "Rumah tangga",
    meaning: "Household",
    genre: "business",
    language: "ID",
    pronunciation: "roo-mah tahng-gah",
  },
  {
    word: "Keren abis",
    meaning: "Super cool",
    genre: "slang",
    language: "ID",
    pronunciation: "keh-ren ah-bees",
  },
  {
    word: "Seru banget",
    meaning: "Very exciting/fun",
    genre: "slang",
    language: "ID",
    pronunciation: "seh-roo bahn-get",
  },
  {
    word: "Gak enak badan",
    meaning: "Not feeling well",
    genre: "slang",
    language: "ID",
    pronunciation: "gahk eh-nak bah-dan",
  },
  {
    word: "Jalan-jalan",
    meaning: "Go for a walk",
    genre: "slang",
    language: "ID",
    pronunciation: "jah-lahn jah-lahn",
  },
  {
    word: "Bosen deh",
    meaning: "Bored",
    genre: "slang",
    language: "ID",
    pronunciation: "boh-sen deh",
  },
  {
    word: "Tidur nyenyak",
    meaning: "Sleep soundly",
    genre: "slang",
    language: "ID",
    pronunciation: "tee-door nyan-yak",
  },
  {
    word: "Gila-gilaan",
    meaning: "Crazy/craziness",
    genre: "slang",
    language: "ID",
    pronunciation: "gee-lah gee-lahn",
  },
  {
    word: "Capek banget",
    meaning: "Really tired",
    genre: "slang",
    language: "ID",
    pronunciation: "chah-pek bahn-get",
  },
  {
    word: "Bingung banget",
    meaning: "Really confused",
    genre: "slang",
    language: "ID",
    pronunciation: "bin-goong bahn-get",
  },
  {
    word: "Lucu banget",
    meaning: "Really funny",
    genre: "slang",
    language: "ID",
    pronunciation: "loo-chu bahn-get",
  },
  {
    word: "Jangan begitu",
    meaning: "Don't do that",
    genre: "slang",
    language: "ID",
    pronunciation: "jah-ngahn beh-gee-too",
  },
  {
    word: "Enak banget",
    meaning: "Really delicious",
    genre: "slang",
    language: "ID",
    pronunciation: "eh-nak bahn-get",
  },
  {
    word: "Santai aja",
    meaning: "Take it easy",
    genre: "slang",
    language: "ID",
    pronunciation: "sahn-tai ah-jah",
  },
  {
    word: "Keren parah",
    meaning: "Extremely cool",
    genre: "slang",
    language: "ID",
    pronunciation: "keh-ren pah-rah",
  },
  {
    word: "halo",
    meaning: "Hello",
    genre: "formal",
    language: "ID",
    pronunciation: "hah-lo",
  },
  {
    word: "terima kasih",
    meaning: "Thank you",
    genre: "formal",
    language: "ID",
    pronunciation: "tuh-ree-mah kah-see",
  },
  {
    word: "makanan",
    meaning: "Food",
    genre: "etc",
    language: "ID",
    pronunciation: "mah-kah-nahn",
  },
  {
    word: "rumah",
    meaning: "House",
    genre: "etc",
    language: "ID",
    pronunciation: "roo-mah",
  },
  {
    word: "keren",
    meaning: "Cool",
    genre: "slang",
    language: "ID",
    pronunciation: "keh-ren",
  },
  {
    word: "asyik",
    meaning: "Fun",
    genre: "slang",
    language: "ID",
    pronunciation: "ah-syik",
  },
  {
    word: "gue bosen",
    meaning: "I am bored",
    genre: "slang",
    language: "ID",
    pronunciation: "goo-eh boh-sen",
  },
  {
    word: "mager",
    meaning: "Lazy (Malas Gerak)",
    genre: "slang",
    language: "ID",
    pronunciation: "mah-ger",
  },
  {
    word: "capek",
    meaning: "Tired",
    genre: "slang",
    language: "ID",
    pronunciation: "chah-pek",
  },
  {
    word: "anak alay",
    meaning: "Posh or showy child",
    genre: "slang",
    language: "ID",
    pronunciation: "ah-nak ah-lay",
  },
  {
    word: "gue bingung",
    meaning: "I am confused",
    genre: "slang",
    language: "ID",
    pronunciation: "goo-eh bin-goong",
  },
  {
    word: "lu gila",
    meaning: "You are crazy",
    genre: "slang",
    language: "ID",
    pronunciation: "loo gee-lah",
  },
  {
    word: "woles",
    meaning: "Stay calm",
    genre: "slang",
    language: "ID",
    pronunciation: "woh-les",
  },
  {
    word: "gue bingits",
    meaning: "I am really confused",
    genre: "slang",
    language: "ID",
    pronunciation: "goo-eh bin-geets",
  },
  {
    word: "sih",
    meaning: "Actually",
    genre: "slang",
    language: "ID",
    pronunciation: "see",
  },
  {
    word: "guys",
    meaning: "Friends",
    genre: "slang",
    language: "ID",
    pronunciation: "guys",
  },
  {
    word: "anak indomie",
    meaning: "Instant noodle kid (growing up with instant noodles)",
    genre: "slang",
    language: "ID",
    pronunciation: "ah-nak in-doh-mee",
  },
  {
    word: "gue baper",
    meaning: "I am being emotional",
    genre: "slang",
    language: "ID",
    pronunciation: "goo-eh bah-per",
  },
  {
    word: "kampret",
    meaning: "Damn it",
    genre: "slang",
    language: "ID",
    pronunciation: "kam-preht",
  },
  {
    word: "nangis dalam pelukan",
    meaning: "Crying in someone’s embrace",
    genre: "slang",
    language: "ID",
    pronunciation: "nahn-gees dah-lahm peh-loo-kahn",
  },

  //------------------- Indonesia (ID) -------------------//

  // French (FR) Slang or Dialect
  {
    word: "Bonjour",
    meaning: "Good morning",
    genre: "formal",
    language: "FR",
    pronunciation: "bohn-zhoor",
  },
  {
    word: "Bonsoir",
    meaning: "Good evening",
    genre: "formal",
    language: "FR",
    pronunciation: "bohn-swahr",
  },
  {
    word: "Excusez-moi",
    meaning: "Excuse me",
    genre: "formal",
    language: "FR",
    pronunciation: "ehk-skew-zay mwah",
  },
  {
    word: "Travail",
    meaning: "Work",
    genre: "business",
    language: "FR",
    pronunciation: "tra-vahy",
  },
  {
    word: "Ami",
    meaning: "Friend",
    genre: "formal",
    language: "FR",
    pronunciation: "ah-mee",
  },
  {
    word: "Gars",
    meaning: "Guy",
    genre: "slang",
    language: "FR",
    pronunciation: "gahr",
  },
  {
    word: "Blé",
    meaning: "Money",
    genre: "slang",
    language: "FR",
    pronunciation: "bleh",
  },
  {
    word: "Boulot",
    meaning: "Job/Work",
    genre: "slang",
    language: "FR",
    pronunciation: "boo-lo",
  },
  {
    word: "Ca marche",
    meaning: "It works",
    genre: "slang",
    language: "FR",
    pronunciation: "sa marsh",
  },
  {
    word: "Ça va?",
    meaning: "How are you?",
    genre: "formal",
    language: "FR",
    pronunciation: "sa va",
  },
  {
    word: "Coup de foudre",
    meaning: "Love at first sight",
    genre: "slang",
    language: "FR",
    pronunciation: "koo de foo-druh",
  },
  {
    word: "Avoir la flemme",
    meaning: "To be lazy",
    genre: "slang",
    language: "FR",
    pronunciation: "ah-vwar lah flem",
  },
  {
    word: "Bof",
    meaning: "Meh",
    genre: "slang",
    language: "FR",
    pronunciation: "bohf",
  },
  {
    word: "C'est la vie",
    meaning: "That's life",
    genre: "slang",
    language: "FR",
    pronunciation: "say la vee",
  },
  {
    word: "Faire la grasse matinée",
    meaning: "To sleep in",
    genre: "slang",
    language: "FR",
    pronunciation: "fair lah grahs mah-tee-nay",
  },
  {
    word: "C'est chouette",
    meaning: "It's nice/cool",
    genre: "slang",
    language: "FR",
    pronunciation: "say shwet",
  },
  {
    word: "Oh là là",
    meaning: "Oh dear/Oh my goodness",
    genre: "slang",
    language: "FR",
    pronunciation: "oh lah lah",
  },
  {
    word: "Ras-le-bol",
    meaning: "Fed up",
    genre: "slang",
    language: "FR",
    pronunciation: "rah-le-bol",
  },
  {
    word: "Zut alors",
    meaning: "Darn it",
    genre: "slang",
    language: "FR",
    pronunciation: "zoot ah-lor",
  },
  {
    word: "Ça plane pour moi",
    meaning: "Everything is going well for me",
    genre: "slang",
    language: "FR",
    pronunciation: "sa plan poor mwah",
  },
  {
    word: "Fissa",
    meaning: "Hurry up",
    genre: "slang",
    language: "FR",
    pronunciation: "fee-sah",
  },
  {
    word: "Salut",
    meaning: "Hi/Hello",
    genre: "slang",
    language: "FR",
    pronunciation: "sah-loo",
  },
  {
    word: "Ciao",
    meaning: "Goodbye",
    genre: "slang",
    language: "FR",
    pronunciation: "chow",
  },
  {
    word: "Frangin",
    meaning: "Bretc (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "frahng-an",
  },
  {
    word: "Nana",
    meaning: "Girl (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "nah-nah",
  },
  {
    word: "Bouquin",
    meaning: "Book",
    genre: "slang",
    language: "FR",
    pronunciation: "boo-kan",
  },
  {
    word: "Bagnole",
    meaning: "Car",
    genre: "slang",
    language: "FR",
    pronunciation: "bahn-yol",
  },
  {
    word: "Boulot",
    meaning: "Job/Work",
    genre: "slang",
    language: "FR",
    pronunciation: "boo-lo",
  },
  {
    word: "Bof",
    meaning: "Meh",
    genre: "slang",
    language: "FR",
    pronunciation: "bohf",
  },
  {
    word: "Gamin",
    meaning: "Kid (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "ga-mahn",
  },
  {
    word: "Môme",
    meaning: "Kid (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "mohm",
  },
  {
    word: "Zut",
    meaning: "Darn/Drat",
    genre: "slang",
    language: "FR",
    pronunciation: "zoot",
  },
  {
    word: "Pote",
    meaning: "Friend (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "poht",
  },
  {
    word: "Taf",
    meaning: "Job/Work (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "taf",
  },
  {
    word: "Daron",
    meaning: "Parent (informal)",
    genre: "slang",
    language: "FR",
    pronunciation: "dah-ron",
  },
  {
    word: "Bouffer",
    meaning: "To eat (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "boo-feh",
  },
  {
    word: "Boucler",
    meaning: "To finish (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "boo-klay",
  },
  {
    word: "Barré",
    meaning: "Crazy (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "bah-ray",
  },
  {
    word: "Flingue",
    meaning: "Gun (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "flang",
  },
  {
    word: "Tchatcher",
    meaning: "To chat (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "tcha-shey",
  },
  {
    word: "Bosser",
    meaning: "To work (slang)",
    genre: "slang",
    language: "FR",
    pronunciation: "bos-say",
  },

  //------------------- French (FR) -------------------//

  //Koream (KR)

  {
    word: "안녕하세요",
    meaning: "Hello",
    genre: "formal",
    language: "KR",
    pronunciation: "Annyeonghaseyo",
  },
  {
    word: "짱",
    meaning: "The best",
    genre: "slang",
    language: "KR",
    pronunciation: "Jjang",
  },
  {
    word: "실화냐",
    meaning: "Is it real?",
    genre: "slang",
    language: "KR",
    pronunciation: "Silhwa-nya",
  },
  {
    word: "멋있다",
    meaning: "Awesome",
    genre: "slang",
    language: "KR",
    pronunciation: "Meot-itta",
  },
  {
    word: "우와",
    meaning: "Wow",
    genre: "slang",
    language: "KR",
    pronunciation: "Uwa",
  },
  {
    word: "안녕",
    meaning: "Hi",
    genre: "daily",
    language: "KR",
    pronunciation: "Annyeong",
  },
  {
    word: "일하기 싫어",
    meaning: "I don't want to work",
    genre: "slang",
    language: "KR",
    pronunciation: "Il-ha-gi Shi-reo",
  },
  {
    word: "배고파",
    meaning: "I'm hungry",
    genre: "daily",
    language: "KR",
    pronunciation: "Bae-go-pa",
  },
  {
    word: "좋아",
    meaning: "Good/Okay",
    genre: "daily",
    language: "KR",
    pronunciation: "Jo-a",
  },
  {
    word: "싫어",
    meaning: "Bad/Dislike",
    genre: "daily",
    language: "KR",
    pronunciation: "Shi-reo",
  },
  {
    word: "고마워",
    meaning: "Thank you",
    genre: "daily",
    language: "KR",
    pronunciation: "Go-ma-wo",
  },
  {
    word: "미안해",
    meaning: "Sorry",
    genre: "daily",
    language: "KR",
    pronunciation: "Mi-an-hae",
  },
  {
    word: "행복해",
    meaning: "Happy",
    genre: "daily",
    language: "KR",
    pronunciation: "Haeng-bok-hae",
  },
  {
    word: "바보",
    meaning: "Fool",
    genre: "slang",
    language: "KR",
    pronunciation: "Ba-bo",
  },
  {
    word: "사랑해",
    meaning: "I love you",
    genre: "daily",
    language: "KR",
    pronunciation: "Sa-rang-hae",
  },
  {
    word: "개웃겨",
    meaning: "It is hilarious",
    genre: "slang",
    language: "KR",
    pronunciation: "Gae-utgyeo",
  },
  {
    word: "대박",
    meaning: "Amazing",
    genre: "slang",
    language: "KR",
    pronunciation: "Daebak",
  },
  {
    word: "별로",
    meaning: "Not interested",
    genre: "slang",
    language: "KR",
    pronunciation: "Byeollo",
  },
  {
    word: "존버",
    meaning: "Enduring a difficult situation",
    genre: "slang",
    language: "KR",
    pronunciation: "Jonbeo",
  },
  {
    word: "고민",
    meaning: "Worry or concern",
    genre: "etc",
    language: "KR",
    pronunciation: "Gomin",
  },
  {
    word: "귀찮다",
    meaning: "Annoying",
    genre: "slang",
    language: "KR",
    pronunciation: "Gwi-chan-da",
  },
  {
    word: "참견",
    meaning: "Unwanted advice",
    genre: "slang",
    language: "KR",
    pronunciation: "Chamgyeon",
  },
  {
    word: "허당",
    meaning: "Clumsy person",
    genre: "slang",
    language: "KR",
    pronunciation: "Heodang",
  },
  {
    word: "멘붕",
    meaning: "Mental breakdown",
    genre: "slang",
    language: "KR",
    pronunciation: "Menbung",
  },
  {
    word: "존잘",
    meaning: "Extremely handsome",
    genre: "slang",
    language: "KR",
    pronunciation: "Jonjal",
  },
  {
    word: "센스",
    meaning: "Sense or style",
    genre: "etc",
    language: "KR",
    pronunciation: "Senseu",
  },
  {
    word: "핵노잼",
    meaning: "Not fun at all",
    genre: "slang",
    language: "KR",
    pronunciation: "Haek-nojaem",
  },
  {
    word: "신남",
    meaning: "Excited",
    genre: "slang",
    language: "KR",
    pronunciation: "Sinnam",
  },
  {
    word: "뻔뻔",
    meaning: "Bold or shameless",
    genre: "slang",
    language: "KR",
    pronunciation: "Bbeon-bbeon",
  },
  {
    word: "쌤",
    meaning: "Teacher",
    genre: "slang",
    language: "KR",
    pronunciation: "Ssaem",
  },
  {
    word: "헐",
    meaning: "Oh my gosh",
    genre: "slang",
    language: "KR",
    pronunciation: "Heol",
  },

  //------------------- Korean (KR) -------------------//
];
