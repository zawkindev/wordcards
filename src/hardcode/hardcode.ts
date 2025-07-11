import { CardProps } from "../components/Card";

export const API_URL = "https://api.words.uz/api";

export const prefixList = [
  { title: "j j", definition: "- j" },
  { title: "j-", definition: "- j-pop" },
  { title: "ja", definition: "jab - jazzy" },
  { title: "je", definition: "jealous - jews" },
  { title: "jf", definition: "jfk - jfk" },
  { title: "jh", definition: "jhansi - jhelum" },
  { title: "ji", definition: "ji - jive" },
  { title: "jl", definition: "jl - jl" },
  { title: "jo", definition: "jo - joysticks" },
  { title: "jp", definition: "jp - jpeg" },
  { title: "jr", definition: "jr - jr" },
  { title: "js", definition: "js - json" },
  { title: "ju", definition: "juan - juxtaposition" },
  { title: "jv", definition: "jvm - jvm" },
  { title: "jy", definition: "jyutping - jyutping" },
];

export const wordsList = [
  "according",
  "age",
  "air",
  "april",
  "are",
  "area",
  "average",
  "being",
  "book",
  "can",
  "census",
  "church",
  "city",
  "control",
  "county",
  "density",
  "due",
  "end",
  "even",
  "family",
  "film",
  "first",
  "following",
  "form",
  "former",
  "four",
  "general",
  "government",
  "great",
  "group",
  "have",
  "high",
  "history",
  "home",
  "house",
  "including",
  "income",
  "international",
  "journal",
  "king",
  "last",
  "life",
  "list",
  "living",
  "local",
  "main",
  "major",
  "may",
  "median",
  "military",
  "modern",
  "most",
  "much",
  "music",
  "name",
  "national",
  "news",
  "now",
  "number",
  "one",
  "order",
  "original",
  "over",
  "own",
  "part",
  "party",
  "place",
  "political",
  "population",
  "public",
  "river",
  "school",
  "second",
  "series",
  "set",
  "several",
  "she",
  "size",
  "small",
  "some",
  "state",
  "such",
  "system",
  "then",
  "there",
  "those",
  "three",
  "time",
  "total",
  "town",
  "two",
  "use",
  "war",
  "web",
  "well",
  "while",
  "will",
  "work",
  "world",
  "year",
];

export const wordDetails = {
  title: "air",
  transcription: "æə",
  definitions: [
    {
      typeEn: "noun",
      typeUz: "ot",
      meaning: "havo",
      plural: "airs",
      others: [
        {
          meaning: "havo",
          examples: [
            {
              phrase: "air conditioning system",
              translation: "havo konditsionerlash tizimi",
            },
            {
              phrase: "relative air humidity",
              translation: "havo namligining nisbati",
            },
            {
              phrase: "ambient air temperature",
              translation: "atrof muhit havo harorati",
            },
            {
              phrase: "atmospheric air pollution",
              translation: "atmosfera havosining ifloslanishi",
            },
            {
              phrase: "compressed air consumption",
              translation: "siqilgan havoni iste'mol qilish",
            },
          ],
        },
        {
          meaning: "shabada",
          examples: [{ phrase: "evening air", translation: "kechki shabada" }],
        },
        {
          meaning: "shamol",
        },
      ],
      synonymList: [
        "atmosphere",
        "aeroplane",
        "aerosphere",
        "aether",
        "aircraft",
        "airwaves",
        "ambiance",
        "aura",
        "aviation",
        "broadcast",
        "craft",
        "ester",
        "ether",
        "jet",
        "midair",
      ],
      examples: [
        {
          phrase: "air conditioning system",
          translation: "havo konditsionerlash tizimi",
        },
        {
          phrase: "relative air humidity",
          translation: "havo namligining nisbati",
        },
        {
          phrase: "ambient air temperature",
          translation: "atrof muhit havo harorati",
        },
        {
          phrase: "atmospheric air pollution",
          translation: "atmosfera havosining ifloslanishi",
        },
        {
          phrase: "compressed air consumption",
          translation: "siqilgan havoni iste'mol qilish",
        },
      ],
    },
    {
      typeEn: "verb",
      typeUz: "fe'l",
      meaning: "efirga uzatmoq, havo berish",
      others: [
        {
          meaning: "efirga uzatmoq",
          examples: [
            {
              phrase: "the show will air tomorrow.",
              translation: "ko'rsatuv ertaga efirga uzatiladi.",
            },
            {
              phrase: "they aired the debate live.",
              translation: "ular munozarani jonli efirda ko'rsatishdi.",
            },
          ],
        },
        {
          meaning: "havo berish, havalandirmoq",
          examples: [
            {
              phrase: "i need to air the room.",
              translation: "xonani havalandirishim kerak.",
            },
            {
              phrase: "the laundry was aired outside.",
              translation: "kirlar tashqarida havalandirildi.",
            },
          ],
        },
      ],
      synonymlist: [
        "broadcast",
        "ventilate",
        "expose",
        "publicize",
        "announce",
        "transmit",
        "disclose",
        "reveal",
        "make public",
      ],
      examples: [
        {
          phrase: "the show will air tomorrow.",
          translation: "ko'rsatuv ertaga efirga uzatiladi.",
        },
        {
          phrase: "i need to air the room.",
          translation: "xonani havalandirishim kerak.",
        },
        {
          phrase: "they aired the debate live.",
          translation: "ular munozarani jonli efirda ko'rsatishdi.",
        },
      ],
    },
  ],
  usageFrequency: 443,
  exampleSentences: [
    {
      sentence: "without air and water, nothing could live.",
      translation: "havo va suvsiz hech narsa yashay olmaydi.",
    },
    {
      sentence: "the air felt a little cold.",
      translation: "havo biroz sovuq edi.",
    },
    {
      sentence: "flowers and trees need clean air and fresh water.",
      translation: "gullar va daraxtlarga toza havo va yangi suv kerak.",
    },
    {
      sentence: "i put on an air of interest.",
      translation: "men qiziqish ko'rsatdim.",
    },
    {
      sentence: "it's very warm. shall i turn on the air conditioner?",
      translation: "juda issiq. konditsionerni yoqaymi?",
    },
    {
      sentence: "the air conditioner doesn't work.",
      translation: "konditsioner ishlamayapti.",
    },
    {
      sentence: "my house doesn't have an air conditioner.",
      translation: "mening uyimda konditsioner yo'q.",
    },
    {
      sentence: "the air here is awful.",
      translation: "bu yerdagi havo dahshatli.",
    },
  ],
  verbforms: [
    {
      tense: "simple",
      content: [
        {
          title: "Present Simple",
          forms: [
            {
              singular: "I air",
              plural: "We air",
            },
            {
              singular: "You air",
              plural: "You air",
            },
            {
              singular: "He/She/It airs",
              plural: "They air",
            },
          ],
        },
        {
          title: "Past Simple",
          forms: [
            {
              singular: "I aired",
              plural: "We aired",
            },
            {
              singular: "You aired",
              plural: "You aired",
            },
            {
              singular: "He/She/It aired",
              plural: "They aired",
            },
          ],
        },
        {
          title: "Future Simple",
          forms: [
            {
              singular: "I will air",
              plural: "We will air",
            },
            {
              singular: "You will air",
              plural: "You will air",
            },
            {
              singular: "He/She/It will air",
              plural: "They will air",
            },
          ],
        },
      ],
    },
    {
      tense: "continuous",
      content: [
        {
          title: "Present Continuous",
          forms: [
            {
              singular: "I am airing",
              plural: "We are airing",
            },
            {
              singular: "You are airing",
              plural: "You are airing",
            },
            {
              singular: "He/She/It is airing",
              plural: "They are airing",
            },
          ],
        },
        {
          title: "Past Continuous",
          forms: [
            {
              singular: "I was airing",
              plural: "We were airing",
            },
            {
              singular: "You were airing",
              plural: "You were airing",
            },
            {
              singular: "He/She/It was airing",
              plural: "They were airing",
            },
          ],
        },
        {
          title: "Future Continuous",
          forms: [
            {
              singular: "I will be airing",
              plural: "We will be airing",
            },
            {
              singular: "You will be airing",
              plural: "You will be airing",
            },
            {
              singular: "He/She/It will be airing",
              plural: "They will be airing",
            },
          ],
        },
      ],
    },
    {
      tense: "perfect",
      content: [
        {
          title: "Present Perfect",
          forms: [
            {
              singular: "I have aired",
              plural: "We have aired",
            },
            {
              singular: "You have aired",
              plural: "You have aired",
            },
            {
              singular: "He/She/It has aired",
              plural: "They have aired",
            },
          ],
        },
        {
          title: "Past Perfect",
          forms: [
            {
              singular: "I had aired",
              plural: "We had aired",
            },
            {
              singular: "You had aired",
              plural: "You had aired",
            },
            {
              singular: "He/She/It had aired",
              plural: "They had aired",
            },
          ],
        },
        {
          title: "Future Perfect",
          forms: [
            {
              singular: "I will have aired",
              plural: "We will have aired",
            },
            {
              singular: "You will have aired",
              plural: "You will have aired",
            },
            {
              singular: "He/She/It will have aired",
              plural: "They will have aired",
            },
          ],
        },
      ],
    },
  ],

  anagrams: ["ira"],
};

export const irregularVerbs = [
  {
    baseForm: "arise",
    pastSimple: "arose",
    pastParticiple: "arisen",
    meaning: "paydo bo'lmoq",
  },
  {
    baseForm: "awake",
    pastSimple: "awoke",
    pastParticiple: "awoken",
    meaning: "uyg'onmoq",
  },
  {
    baseForm: "beat",
    pastSimple: "beat",
    pastParticiple: "beaten",
    meaning: "urmoq",
  },
  {
    baseForm: "become",
    pastSimple: "became",
    pastParticiple: "become",
    meaning: "bo'lmoq",
  },
  {
    baseForm: "befall",
    pastSimple: "befell",
    pastParticiple: "befallen",
    meaning: "sodir bo'lmoq",
  },
  {
    baseForm: "begin",
    pastSimple: "began",
    pastParticiple: "begun",
    meaning: "boshlamoq",
  },
  {
    baseForm: "behold",
    pastSimple: "beheld",
    pastParticiple: "beheld",
    meaning: "ko'rmoq, kuzatmoq",
  },
  {
    baseForm: "beset",
    pastSimple: "beset",
    pastParticiple: "beset",
    meaning: "qamalmoq, o'rab olmoq",
  },
  {
    baseForm: "bind",
    pastSimple: "bound",
    pastParticiple: "bound",
    meaning: "bog'lamoq",
  },
  {
    baseForm: "bleed",
    pastSimple: "bled",
    pastParticiple: "bled",
    meaning: "qonamoq",
  },
  {
    baseForm: "blow",
    pastSimple: "blew",
    pastParticiple: "blown",
    meaning: "puflamoq, esmoq",
  },
  {
    baseForm: "break",
    pastSimple: "broke",
    pastParticiple: "broken",
    meaning: "sindirmoq",
  },
  {
    baseForm: "breed",
    pastSimple: "bred",
    pastParticiple: "bred",
    meaning: "ko'paytirmoq",
  },
  {
    baseForm: "bring",
    pastSimple: "brought",
    pastParticiple: "brought",
    meaning: "olib kelmoq",
  },
  {
    baseForm: "broadcast",
    pastSimple: "broadcast",
    pastParticiple: "broadcast",
    meaning: "efirga uzatmoq",
  },
];

export const comments = [
  {
    date: "30.08.2022",
    time: "22:19",
    user: "Olimjon",
    text: "Ajoyib ro'yxat, fe'llarni o'rganishda katta yordam beradi!",
  },
  {
    date: "01.09.2022",
    time: "14:35",
    user: "Dilnoza",
    text: "Bu ro'yxat juda foydali ekan, minnatdorchilik bildiraman!",
  },
  {
    date: "05.09.2022",
    time: "09:45",
    user: "Shahzoda",
    text: "Rahmat, ushbu ro'yxat fe'llarni mustahkamlashga yordam beradi.",
  },
  {
    date: "10.09.2022",
    time: "17:20",
    user: "Azizbek",
    text: "Fe'llarni o'rganishda eng yaxshi resurslardan biri!",
  },
  {
    date: "12.09.2022",
    time: "11:15",
    user: "Madinabonu",
    text: "O'qituvchilar uchun ham, o'quvchilar uchun ham foydali manba.",
  },
  {
    date: "15.09.2022",
    time: "16:00",
    user: "Sardor",
    text: "Men uchun juda foydali ro'yxat, rahmat!",
  },
  {
    date: "18.09.2022",
    time: "10:30",
    user: "Malika",
    text: "Yangi fe'llarni tezroq o'rganish uchun juda yaxshi usul!",
  },
];

export const irregularNouns = [
  {
    en: { singular: "basis", plural: "bases" },
    translation: { singular: "baza", plural: "bazalar" },
  },
  {
    en: { singular: "cactus", plural: "cacti" },
    translation: { singular: "kaktus", plural: "kaktuslar" },
  },
  {
    en: { singular: "child", plural: "children" },
    translation: { singular: "bola", plural: "bolalar" },
  },
  {
    en: { singular: "crisis", plural: "crises" },
    translation: { singular: "inqiroz", plural: "inqirozlar" },
  },
  {
    en: { singular: "datum", plural: "data" },
    translation: { singular: "ma'lumot", plural: "ma'lumotlar" },
  },
  {
    en: { singular: "foot", plural: "feet" },
    translation: { singular: "oyoq", plural: "oyoqlar" },
  },
  {
    en: { singular: "formula", plural: "formulae" },
    translation: { singular: "formula", plural: "formulalar" },
  },
  {
    en: { singular: "goose", plural: "geese" },
    translation: { singular: "g'oz", plural: "g'ozlar" },
  },
  {
    en: { singular: "index", plural: "indices" },
    translation: { singular: "indeks", plural: "indekslar" },
  },
  {
    en: { singular: "leaf", plural: "leaves" },
    translation: { singular: "barg", plural: "barglar" },
  },
  {
    en: { singular: "louse", plural: "lice" },
    translation: { singular: "bit", plural: "bitlar" },
  },
  {
    en: { singular: "man", plural: "men" },
    translation: { singular: "erkak", plural: "erkaklar" },
  },
  {
    en: { singular: "mouse", plural: "mice" },
    translation: { singular: "sichqon", plural: "sichqonlar" },
  },
  {
    en: { singular: "ox", plural: "oxen" },
    translation: { singular: "ho'kiz", plural: "ho'kizlar" },
  },
  {
    en: { singular: "person", plural: "people" },
    translation: { singular: "inson", plural: "odamlar" },
  },
];

export const palindromeList = [
  { word: "racecar", translation: "poyga mashinasi" },
  { word: "madam", translation: "xonim" },
  { word: "level", translation: "daraja" },
  { word: "radar", translation: "radar" },
  { word: "civic", translation: "fuqarolik" },
  { word: "rotor", translation: "rotor" },
  { word: "refer", translation: "yo'naltirmoq" },
  { word: "deified", translation: "ilohiylashtirilgan" },
  { word: "reviver", translation: "jonlantiruvchi" },
  { word: "noon", translation: "tush" },
  { word: "stats", translation: "statistika" },
  { word: "tenet", translation: "asosiy e'tiqod" },
  { word: "wow", translation: "qoyil" },
  { word: "level", translation: "daraja" },
];

export const uzPalindromeList = [
  "alla",
  "ikki",
  "ko'k",
  "non",
  "ikki",
  "quduq",
  "arra",
  "qochoq",
  "qulluq",
];

export const englishNumbers = [
  { number: 0, numeral: "zero", translation: "nol" },
  { number: 1, numeral: "one", translation: "bir" },
  { number: 2, numeral: "two", translation: "ikki" },
  { number: 3, numeral: "three", translation: "uch" },
  { number: 4, numeral: "four", translation: "to'rt" },
  { number: 5, numeral: "five", translation: "besh" },
  { number: 6, numeral: "six", translation: "olti" },
  { number: 7, numeral: "seven", translation: "etti" },
  { number: 8, numeral: "eight", translation: "sakkiz" },
  { number: 9, numeral: "nine", translation: "to'qqiz" },
  { number: 10, numeral: "ten", translation: "o'n" },
  { number: 11, numeral: "eleven", translation: "o'n bir" },
  { number: 12, numeral: "twelve", translation: "o'n ikki" },
  { number: 13, numeral: "thirteen", translation: "o'n uch" },
  { number: 14, numeral: "fourteen", translation: "o'n to'rt" },
  { number: 15, numeral: "fifteen", translation: "o'n besh" },
  { number: 16, numeral: "sixteen", translation: "o'n olti" },
  { number: 17, numeral: "seventeen", translation: "o'n etti" },
  { number: 18, numeral: "eighteen", translation: "o'n sakkiz" },
  { number: 19, numeral: "nineteen", translation: "o'n to'qqiz" },
  { number: 20, numeral: "twenty", translation: "yigirma" },
  { number: 30, numeral: "thirty", translation: "o'ttiz" },
  { number: 40, numeral: "forty", translation: "qirq" },
  { number: 50, numeral: "fifty", translation: "ellik" },
  { number: 60, numeral: "sixty", translation: "olmosh" },
  { number: 70, numeral: "seventy", translation: "yetmish" },
  { number: 80, numeral: "eighty", translation: "sakson" },
  { number: 90, numeral: "ninety", translation: "to'qson" },
  { number: 100, numeral: "hundred", translation: "yuz" },
  { number: 1000, numeral: "thousand", translation: "ming" },
  { number: 1000000, numeral: "million", translation: "million" },
  { number: 1000000000, numeral: "billion", translation: "milliard" },
];

export const mostUsedWords = [
  { word: "the", frequency: 83622, translation: "bu" },
  { word: "of", frequency: 45836, translation: "ning" },
  { word: "and", frequency: 34617, translation: "va" },
  { word: "in", frequency: 30863, translation: "ichida" },
  { word: "to", frequency: 23341, translation: "ga" },
  { word: "was", frequency: 12123, translation: "edi" },
  { word: "is", frequency: 10458, translation: "bu" },
  { word: "for", frequency: 9747, translation: "uchun" },
  { word: "as", frequency: 9460, translation: "sifatida" },
  { word: "by", frequency: 8459, translation: "tomonidan" },
  { word: "on", frequency: 8181, translation: "ustida" },
  { word: "with", frequency: 8090, translation: "bilan" },
  { word: "that", frequency: 6798, translation: "bu" },
  { word: "from", frequency: 6427, translation: "dan" },
  { word: "at", frequency: 5391, translation: "da" },
  { word: "were", frequency: 5099, translation: "edi" },
];

export const bookmarks = [
  { word: "word", translation: "so'z", part_of_speech: "ot", level: 1, status: "o'rganilmoqda" },
  { word: "eat", translation: "yemoq", part_of_speech: "fe'l", level: 1, status: "o'rganilmoqda" },
  { word: "book", translation: "kitob", part_of_speech: "ot", level: 1, status: "o'rganilmoqda" },
  { word: "house", translation: "uy", part_of_speech: "ot", level: 1, status: "o'rganilmoqda" },
  { word: "run", translation: "yugurmoq", part_of_speech: "fe'l", level: 1, status: "o'rganilmoqda" },
  { word: "eat", translation: "yemoq", part_of_speech: "fe'l", level: 1, status: "o'rganilmoqda" },
  { word: "happy", translation: "xursand", part_of_speech: "sifat", level: 1, status: "o'rganilmoqda" }
]

export const cards: CardProps[] = [
  {
    title: "Express test",
    description: "Sizga tarjima qilish uchun 10 ta tasodifiy so'z taklif etiladi. Mashq oxirida o'rganish uchun noto'g'ri tarjimalar qo'shilishi mumkin.",
    buttonTitle: "Boshlash",
    wordCount: "50dan ortiq",
    buttonColor: "green",
    link: "/express"
  },
  {
    title: "Eng-Uzb",
    description: "Sizga ingliz tilidan o'zbek tiliga tarjima qilish uchun xatcho'plaringizdan so'zlar taklif etiladi. Bitta mashqda 10 dan ortiq so'z bo'lmaydi.",
    buttonTitle: "Boshlash",
    wordCount: "2",
    buttonColor: "green",
    link: "/eng-uzb"
  },
  {
    title: "Xatcho'plar",
    description: "Bu yerda siz qaysi so'zlarni belgilab qo'yganingizni ko'rishingiz mumkin. Bu so'zlar o'rganish uchun mavjud.",
    buttonTitle: "Ko'rish",
    wordCount: "2",
    buttonColor: "blue",
    link: "/bookmarks"
  }
]
