// Every piece of site text, in English and Urdu. Both dictionaries have the same shape.
export type Lang = "en" | "ur";

// "/features" → "/ur/features" for Urdu
export const localHref = (lang: Lang, path: string) => (lang === "ur" ? (path === "/" ? "/ur" : `/ur${path}`) : path);

const en = {
  nav: { features: "Features", about: "About", download: "Download", other: "اردو", home: "Ilm24x7 home" },
  download: {
    title: "Download Ilm24x7",
    text: "Free on Android and iOS.",
    play: "Download for",
    apple: "Download on the",
  },
  home: {
    meta: {
      title: "Ilm24x7 — Quran, Hadith, Fatawa & Namaz Times",
      description:
        "Ilm24x7 is an Islamic app with Quran, Hadith, Fatawa Razawiya, Bahar-e-Shariat, prayer times with azan alarms and Qibla. Ask anything and get answers with real references.",
    },
    hero: {
      title: "Every answer, ",
      highlight: "with its source",
      alt: "ہر سوال کا جواب، دلیل کے ساتھ",
      text: "Ask in Roman Urdu, Urdu or English. Ilm24x7 answers from the Quran, Hadith and Fatawa Razawiya, and shows you the exact ayah, hadith or page it comes from.",
      chips: ["Namaz & Azan", "Quran", "Hadith", "Fatawa", "Qibla"],
      free: "Free · Android & iOS",
    },
    features: {
      title: "Everything in one place",
      all: "See all features →",
      items: [
        { title: "Namaz Times", alt: "اوقاتِ نماز", text: "Accurate times for your location, a live countdown and azan alarms." },
        { title: "Quran", alt: "قرآنِ مجید", text: "Arabic text with Urdu tarjuma, tafseer and recitation audio." },
        { title: "Hadith", alt: "احادیث", text: "Authentic hadith collections in Urdu and English." },
        { title: "Fatawa", alt: "فتاویٰ", text: "Fatawa Razawiya and Bahar-e-Shariat, readable right in the app." },
        { title: "Qibla", alt: "قبلہ", text: "A compass that points you to the Kaaba wherever you are." },
        { title: "Ramzan & Hajj", alt: "رمضان و حج", text: "Guides for the month of fasting and the pilgrimage." },
        { title: "99 Names", alt: "اسماء الحسنیٰ", text: "The beautiful names of Allah with meanings." },
        { title: "Tasbih", alt: "تسبیح", text: "A simple counter for your daily dhikr." },
      ],
    },
    ask: {
      tag: "ASK ILM24X7",
      title: "Ask the way you speak",
      text: "Type in Roman Urdu, Urdu or English. Ilm24x7 searches the Quran, Hadith, Fatawa Razawiya and Bahar-e-Shariat and shows you the exact ayah, hadith or page it comes from. Try it right here.",
      stats: [
        ["114", "Surahs"],
        ["30", "Jild Fatawa"],
        ["6", "Bahar-e-Shariat"],
      ],
    },
  },
  demo: {
    placeholder: "Ask anything… e.g. roza kis par farz hai",
    ask: "Ask",
    samples: ["Roza kis par farz hai?", "Namaz ki fazilat", "Zakat kis par farz hai"],
    searching: "Searching the books…",
    waking: "The server is waking up. The first answer can take up to a minute.",
    error: "Couldn't reach the server. Please try again.",
    more: "See the full answer in the app",
    next: "Ask next:",
    quran: "Quran",
    hadith: "Hadith",
    fatawa: "Fatawa",
    jild: "Jild",
    page: "Page",
    open: "Open page",
  },
  features: {
    meta: {
      title: "Features — Ilm24x7",
      description:
        "Namaz times with azan alarms, Quran with Kanz ul Imaan tarjuma and tafseer, seven hadith books, Fatawa Razawiya, Bahar-e-Shariat, Ask Ilm24x7, Qibla and more.",
    },
    tag: "FEATURES",
    title: "Everything Ilm24x7 can do",
    text: "From Fajr to Isha, from the Quran to the fatwa you were looking for, all in one app.",
    main: [
      {
        tag: "NAMAZ",
        alt: "اوقاتِ نماز",
        title: "Never miss a namaz",
        text: "Prayer times worked out for exactly where you are, with a live countdown to the next one.",
        points: ["Azan, chime or beep alarm for each prayer", "A week of alarms set ahead automatically", "Hijri date on the home screen"],
      },
      {
        tag: "QURAN",
        alt: "قرآنِ مجید",
        title: "Read, understand, listen",
        text: "The full Quran in Arabic with the Kanz ul Imaan tarjuma, and tafseer when you want to go deeper.",
        points: ["Urdu, English and Hindi tarjuma", "Tafseer volumes to read in the app", "Recitation by Mishary Alafasy"],
      },
      {
        tag: "HADITH",
        alt: "احادیث",
        title: "Seven hadith books",
        text: "The six major collections and Muwatta Malik, in Urdu and English.",
        points: ["Bukhari, Muslim, Tirmidhi, Abu Dawud", "Nasai, Ibn Majah and Muwatta Malik", "Hadith number with every narration"],
      },
      {
        tag: "FATAWA",
        alt: "فتاویٰ",
        title: "A fiqh library in your pocket",
        text: "Fatawa Razawiya and Bahar-e-Shariat, page by page, on a shelf that remembers where you stopped.",
        points: ["All 30 jild of Fatawa Razawiya", "Bahar-e-Shariat, every hissa", "Continue reading from the home screen"],
      },
      {
        tag: "ASK ILM24X7",
        alt: "سوال کریں",
        title: "Ask a question, get the source",
        text: "Type the way you speak. Ilm24x7 finds the ayah, hadith or fatwa page that answers it, and shows you where it comes from.",
        points: ["Roman Urdu, Urdu or English", "Every answer comes with its reference", "Related topics to ask about next"],
      },
      {
        tag: "QIBLA",
        alt: "قبلہ",
        title: "Qibla, wherever you are",
        text: "A compass that turns with your phone and points to the Kaaba, at home or travelling.",
        points: ["Turns with your phone's compass", "Shows the exact angle to the Kaaba", "Handy when travelling"],
      },
    ],
    moreTitle: "And there's more",
    more: [
      { title: "Tasbih", alt: "تسبیح", text: "A counter with SubhanAllah, Alhamdulillah, Allahu Akbar and more." },
      { title: "99 Names", alt: "اسماء الحسنیٰ", text: "The beautiful names of Allah with their meanings." },
      { title: "Ramzan", alt: "رمضان", text: "Everything about the month of fasting in one place." },
      { title: "Hajj", alt: "حج", text: "A guide to the pilgrimage, step by step." },
      { title: "Pillars of Islam", alt: "ارکانِ اسلام", text: "The five pillars, explained simply." },
      { title: "Light & Dark", alt: "روشنی", text: "Easy on the eyes, day or night." },
    ],
  },
  about: {
    meta: {
      title: "About — Ilm24x7",
      description: "Why Ilm24x7 was built, what it stands for, and the person behind it.",
    },
    alt: "علم 24x7 کے بارے میں",
    title: "About Ilm24x7",
    text: "A companion for your deen: the Quran, Hadith and Fatawa in your pocket, with answers you can trust.",
    storyTag: "OUR STORY",
    storyTitle: "Why Ilm24x7",
    story: [
      "When a question about deen comes up, most of us search online and land on a dozen different answers, often with no reference at all. The real answers are already in the Quran, the Hadith and books like Fatawa Razawiya and Bahar-e-Shariat, but those books are thousands of pages long and hard to search.",
      "Ilm24x7 brings them together in one app. You can read them, listen to them, and simply ask. It also keeps the everyday things close: namaz times with azan alarms, the Qibla, tasbih and the 99 Names of Allah.",
    ],
    name: ["The name says it all. ", " (ilm) means knowledge, and 24x7 means it is there for you at any hour, whenever a question comes to mind."],
    valuesTitle: "What we stand for",
    values: [
      {
        alt: "دلیل",
        title: "Every answer has a source",
        text: "Ilm24x7 never makes things up. Every answer points to the ayah, hadith or fatwa page it comes from, so you can read it yourself.",
      },
      {
        alt: "اردو",
        title: "Made for Urdu speakers",
        text: "Ask in Roman Urdu, Urdu or English, and read the Quran, Hadith and Fatawa in the language you think in.",
      },
      {
        alt: "امانت",
        title: "No outside AI",
        text: "Answers come from Ilm24x7's own search over trusted books, not from a chatbot. Your questions are not sent to any AI company.",
      },
    ],
    founderTag: "THE FOUNDER",
    role: "Founder & Developer",
    founder: [
      "Ilm24x7 is a one-person mission. Shahzil designed and built every part of it, from the app in your hand to the server that answers your questions, with a single goal: anyone who speaks Urdu should be able to reach authentic Islamic knowledge in seconds.",
      "The hardest part was the books. Fatawa Razawiya's PDFs looked fine but were full of scrambled letters underneath, and Bahar-e-Shariat was only scanned images. So Shahzil taught a computer to read them: OCR that reads the Nastaleeq print page by page, and a program that learned, volume by volume, how to fix the broken letters by checking them against the Urdu of the Quran and Hadith.",
      "Then came the brain of Ilm24x7: its own search engine, built from scratch. It understands that roza, روزہ and fasting mean the same thing, searches over 67,000 passages in an instant, and always shows the book and page an answer came from. No borrowed chatbot, nothing guessed.",
    ],
    stats: [
      ["67,000+", "passages"],
      ["36,000+", "hadith"],
      ["25,000+", "fatwa pages"],
    ],
    thanksTitle: "With thanks",
    thanksText:
      "Ilm24x7 stands on the work of others. Heartfelt thanks to the API providers and contributors who made this journey possible.",
    thanks: [
      { name: "AlQuran Cloud", what: "Quran text and recitation" },
      { name: "Hadith API by Fawaz Ahmed", what: "Hadith collections" },
      { name: "Adhan", what: "Prayer time calculation" },
    ],
  },
};

export type Dict = typeof en;

const ur: Dict = {
  nav: { features: "خصوصیات", about: "ہمارے بارے میں", download: "ڈاؤن لوڈ", other: "English", home: "علم 24x7 ہوم" },
  download: {
    title: "علم 24x7 ڈاؤن لوڈ کریں",
    text: "اینڈرائیڈ اور آئی فون پر بالکل مفت۔",
    play: "Download for",
    apple: "Download on the",
  },
  home: {
    meta: {
      title: "علم 24x7 — قرآن، حدیث، فتاویٰ اور اوقاتِ نماز",
      description:
        "علم 24x7 ایک اسلامی ایپ ہے جس میں قرآن، حدیث، فتاویٰ رضویہ، بہارِ شریعت، اذان کے الارم کے ساتھ نماز کے اوقات اور قبلہ موجود ہیں۔ کوئی بھی سوال پوچھیں اور حوالے کے ساتھ جواب پائیں۔",
    },
    hero: {
      title: "ہر سوال کا جواب، ",
      highlight: "دلیل کے ساتھ",
      alt: "Every answer, with its source",
      text: "رومن اردو، اردو یا انگریزی میں سوال پوچھیں۔ علم 24x7 قرآن، حدیث اور فتاویٰ رضویہ سے جواب دیتا ہے، اور بتاتا ہے کہ وہ کس آیت، حدیث یا صفحے سے لیا گیا ہے۔",
      chips: ["نماز اور اذان", "قرآن", "حدیث", "فتاویٰ", "قبلہ"],
      free: "مفت · اینڈرائیڈ اور آئی فون",
    },
    features: {
      title: "سب کچھ ایک جگہ",
      all: "تمام خصوصیات دیکھیں ←",
      items: [
        { title: "اوقاتِ نماز", alt: "Namaz Times", text: "آپ کے مقام کے مطابق درست اوقات، اگلی نماز تک الٹی گنتی اور اذان کے الارم۔" },
        { title: "قرآنِ مجید", alt: "Quran", text: "عربی متن کے ساتھ اردو ترجمہ، تفسیر اور تلاوت۔" },
        { title: "احادیث", alt: "Hadith", text: "مستند احادیث کے مجموعے، اردو اور انگریزی میں۔" },
        { title: "فتاویٰ", alt: "Fatawa", text: "فتاویٰ رضویہ اور بہارِ شریعت، ایپ ہی میں پڑھیں۔" },
        { title: "قبلہ", alt: "Qibla", text: "ایسا کمپاس جو ہر جگہ آپ کو کعبہ کی سمت دکھائے۔" },
        { title: "رمضان و حج", alt: "Ramzan & Hajj", text: "روزوں کے مہینے اور حج کے لیے رہنمائی۔" },
        { title: "اسماء الحسنیٰ", alt: "99 Names", text: "اللہ تعالیٰ کے خوبصورت نام اور ان کے معانی۔" },
        { title: "تسبیح", alt: "Tasbih", text: "روزانہ کے ذکر کے لیے آسان کاؤنٹر۔" },
      ],
    },
    ask: {
      tag: "علم 24x7 سے پوچھیں",
      title: "جیسے بولتے ہیں، ویسے پوچھیں",
      text: "رومن اردو، اردو یا انگریزی میں لکھیں۔ علم 24x7 قرآن، حدیث، فتاویٰ رضویہ اور بہارِ شریعت میں تلاش کر کے وہ آیت، حدیث یا صفحہ دکھاتا ہے جہاں سے جواب لیا گیا ہے۔ یہیں آزما کر دیکھیں۔",
      stats: [
        ["114", "سورتیں"],
        ["30", "جلدیں فتاویٰ"],
        ["6", "حصے بہارِ شریعت"],
      ],
    },
  },
  demo: {
    placeholder: "اپنا سوال لکھیں… جیسے روزہ کس پر فرض ہے",
    ask: "پوچھیں",
    samples: ["روزہ کس پر فرض ہے؟", "نماز کی فضیلت", "زکوٰۃ کس پر فرض ہے"],
    searching: "کتابوں میں تلاش ہو رہی ہے…",
    waking: "سرور جاگ رہا ہے۔ پہلے جواب میں ایک منٹ تک لگ سکتا ہے۔",
    error: "سرور سے رابطہ نہیں ہو سکا، دوبارہ کوشش کریں۔",
    more: "پورا جواب ایپ میں دیکھیں",
    next: "مزید پوچھیں:",
    quran: "قرآن",
    hadith: "حدیث",
    fatawa: "فتاویٰ",
    jild: "جلد",
    page: "صفحہ",
    open: "صفحہ کھولیں",
  },
  features: {
    meta: {
      title: "خصوصیات — علم 24x7",
      description:
        "اذان کے الارم کے ساتھ نماز کے اوقات، کنز الایمان کے ترجمے اور تفسیر کے ساتھ قرآن، حدیث کی سات کتابیں، فتاویٰ رضویہ، بہارِ شریعت، قبلہ اور بہت کچھ۔",
    },
    tag: "خصوصیات",
    title: "علم 24x7 کیا کیا کر سکتا ہے",
    text: "فجر سے عشاء تک، قرآن سے لے کر اس فتوے تک جس کی آپ کو تلاش تھی، سب کچھ ایک ایپ میں۔",
    main: [
      {
        tag: "نماز",
        alt: "NAMAZ",
        title: "کوئی نماز نہ چھوٹے",
        text: "آپ کے بالکل درست مقام کے مطابق نماز کے اوقات، اور اگلی نماز تک لائیو الٹی گنتی۔",
        points: ["ہر نماز کے لیے اذان، چائم یا بیپ کا الارم", "ایک ہفتے کے الارم خود بخود سیٹ", "ہوم اسکرین پر ہجری تاریخ"],
      },
      {
        tag: "قرآن",
        alt: "QURAN",
        title: "پڑھیں، سمجھیں، سنیں",
        text: "مکمل قرآنِ مجید عربی میں کنز الایمان کے ترجمے کے ساتھ، اور گہرائی میں جانے کے لیے تفسیر۔",
        points: ["اردو، انگریزی اور ہندی ترجمہ", "تفسیر کی جلدیں ایپ میں پڑھیں", "شیخ مشاری العفاسی کی تلاوت"],
      },
      {
        tag: "حدیث",
        alt: "HADITH",
        title: "حدیث کی سات کتابیں",
        text: "صحاحِ ستہ اور مؤطا امام مالک، اردو اور انگریزی میں۔",
        points: ["بخاری، مسلم، ترمذی، ابو داؤد", "نسائی، ابنِ ماجہ اور مؤطا امام مالک", "ہر روایت کے ساتھ حدیث نمبر"],
      },
      {
        tag: "فتاویٰ",
        alt: "FATAWA",
        title: "جیب میں فقہ کی لائبریری",
        text: "فتاویٰ رضویہ اور بہارِ شریعت صفحہ بہ صفحہ، ایسی شیلف پر جو یاد رکھتی ہے کہ آپ نے کہاں چھوڑا تھا۔",
        points: ["فتاویٰ رضویہ کی تمام 30 جلدیں", "بہارِ شریعت کے تمام حصے", "ہوم اسکرین سے وہیں سے پڑھنا جاری رکھیں"],
      },
      {
        tag: "سوال کریں",
        alt: "ASK ILM24X7",
        title: "سوال کریں، حوالہ پائیں",
        text: "جیسے بولتے ہیں ویسے لکھیں۔ علم 24x7 وہ آیت، حدیث یا فتوے کا صفحہ ڈھونڈتا ہے جس میں جواب ہے، اور بتاتا ہے کہ وہ کہاں سے ہے۔",
        points: ["رومن اردو، اردو یا انگریزی", "ہر جواب کے ساتھ اس کا حوالہ", "آگے پوچھنے کے لیے متعلقہ موضوعات"],
      },
      {
        tag: "قبلہ",
        alt: "QIBLA",
        title: "جہاں بھی ہوں، قبلہ رخ",
        text: "ایسا کمپاس جو فون کے ساتھ گھومتا ہے اور کعبہ کی سمت بتاتا ہے، گھر ہو یا سفر۔",
        points: ["فون کے کمپاس سے کام کرتا ہے", "کعبہ کی بالکل درست سمت", "سفر میں بہت کام کا"],
      },
    ],
    moreTitle: "اور بھی بہت کچھ",
    more: [
      { title: "تسبیح", alt: "Tasbih", text: "سبحان اللہ، الحمد للہ، اللہ اکبر اور مزید اذکار کے ساتھ کاؤنٹر۔" },
      { title: "اسماء الحسنیٰ", alt: "99 Names", text: "اللہ تعالیٰ کے خوبصورت نام اور ان کے معانی۔" },
      { title: "رمضان", alt: "Ramzan", text: "روزوں کے مہینے کے بارے میں سب کچھ ایک جگہ۔" },
      { title: "حج", alt: "Hajj", text: "حج کی رہنمائی، قدم بہ قدم۔" },
      { title: "ارکانِ اسلام", alt: "Pillars of Islam", text: "اسلام کے پانچ ارکان، آسان انداز میں۔" },
      { title: "لائٹ اور ڈارک موڈ", alt: "Light & Dark", text: "دن ہو یا رات، آنکھوں کو آرام۔" },
    ],
  },
  about: {
    meta: {
      title: "ہمارے بارے میں — علم 24x7",
      description: "علم 24x7 کیوں بنایا گیا، یہ کس بات پر قائم ہے، اور اس کے پیچھے کون ہے۔",
    },
    alt: "About Ilm24x7",
    title: "علم 24x7 کے بارے میں",
    text: "آپ کے دین کا ساتھی: قرآن، حدیث اور فتاویٰ آپ کی جیب میں، ایسے جوابات کے ساتھ جن پر بھروسہ کیا جا سکے۔",
    storyTag: "ہماری کہانی",
    storyTitle: "علم 24x7 کیوں؟",
    story: [
      "جب دین کے بارے میں کوئی سوال ذہن میں آتا ہے تو ہم میں سے اکثر انٹرنیٹ پر تلاش کرتے ہیں اور درجنوں مختلف جوابات ملتے ہیں، اکثر بغیر کسی حوالے کے۔ اصل جوابات تو قرآن، حدیث اور فتاویٰ رضویہ و بہارِ شریعت جیسی کتابوں میں موجود ہیں، مگر یہ کتابیں ہزاروں صفحات پر مشتمل ہیں اور ان میں تلاش کرنا مشکل ہے۔",
      "علم 24x7 ان سب کو ایک ایپ میں جمع کرتا ہے۔ آپ انہیں پڑھ سکتے ہیں، سن سکتے ہیں، اور بس سوال پوچھ سکتے ہیں۔ روزمرہ کی ضرورتیں بھی ساتھ ہیں: اذان کے الارم کے ساتھ نماز کے اوقات، قبلہ، تسبیح اور اللہ تعالیٰ کے ننانوے نام۔",
    ],
    name: ["نام ہی سب کچھ بتا دیتا ہے۔ ", " کا مطلب ہے جاننا، اور 24x7 کا مطلب ہے کہ یہ ہر گھڑی آپ کے پاس ہے، جب بھی ذہن میں کوئی سوال آئے۔"],
    valuesTitle: "ہم کس بات پر قائم ہیں",
    values: [
      {
        alt: "Every answer has a source",
        title: "ہر جواب کا حوالہ",
        text: "علم 24x7 اپنی طرف سے کچھ نہیں گھڑتا۔ ہر جواب اس آیت، حدیث یا فتوے کے صفحے کی طرف لے جاتا ہے جہاں سے وہ لیا گیا ہے، تاکہ آپ خود پڑھ سکیں۔",
      },
      {
        alt: "Made for Urdu speakers",
        title: "اردو بولنے والوں کے لیے",
        text: "رومن اردو، اردو یا انگریزی میں پوچھیں، اور قرآن، حدیث اور فتاویٰ اسی زبان میں پڑھیں جس میں آپ سوچتے ہیں۔",
      },
      {
        alt: "No outside AI",
        title: "کوئی باہر کی اے آئی نہیں",
        text: "جوابات علم 24x7 کے اپنے سرچ انجن سے آتے ہیں جو معتبر کتابوں میں تلاش کرتا ہے، کسی چیٹ بوٹ سے نہیں۔ آپ کے سوالات کسی اے آئی کمپنی کو نہیں بھیجے جاتے۔",
      },
    ],
    founderTag: "بانی",
    role: "بانی اور ڈویلپر",
    founder: [
      "علم 24x7 ایک شخص کا مشن ہے۔ شہزل نے اس کا ہر حصہ خود ڈیزائن کیا اور بنایا، آپ کے ہاتھ میں موجود ایپ سے لے کر اس سرور تک جو آپ کے سوالوں کا جواب دیتا ہے۔ مقصد ایک ہی تھا: اردو بولنے والا ہر شخص چند سیکنڈ میں مستند اسلامی علم تک پہنچ سکے۔",
      "سب سے مشکل کام کتابیں تھیں۔ فتاویٰ رضویہ کی PDF دیکھنے میں ٹھیک تھیں مگر اندر سے حروف بگڑے ہوئے تھے، اور بہارِ شریعت صرف اسکین شدہ تصویروں کی شکل میں تھی۔ اس لیے شہزل نے کمپیوٹر کو انہیں پڑھنا سکھایا: OCR جو نستعلیق چھپائی کو صفحہ بہ صفحہ پڑھتا ہے، اور ایک پروگرام جس نے جلد بہ جلد سیکھا کہ بگڑے ہوئے حروف کو قرآن و حدیث کی اردو سے ملا کر کیسے درست کیا جائے۔",
      "پھر بنا علم 24x7 کا دماغ: اس کا اپنا سرچ انجن، بالکل شروع سے۔ یہ سمجھتا ہے کہ roza، روزہ اور fasting ایک ہی چیز ہیں، 67,000 سے زیادہ عبارتوں میں پل بھر میں تلاش کرتا ہے، اور ہمیشہ بتاتا ہے کہ جواب کس کتاب اور کس صفحے سے ہے۔ نہ کوئی ادھار کا چیٹ بوٹ، نہ کوئی اندازہ۔",
    ],
    stats: [
      ["67,000+", "عبارتیں"],
      ["36,000+", "احادیث"],
      ["25,000+", "فتاویٰ کے صفحات"],
    ],
    thanksTitle: "شکریہ",
    thanksText:
      "علم 24x7 دوسروں کی محنت پر کھڑا ہے۔ ان تمام API فراہم کرنے والوں اور معاونین کا دل سے شکریہ جنہوں نے یہ سفر ممکن بنایا۔",
    thanks: [
      { name: "AlQuran Cloud", what: "قرآن کا متن اور تلاوت" },
      { name: "Hadith API by Fawaz Ahmed", what: "احادیث کے مجموعے" },
      { name: "Adhan", what: "نماز کے اوقات کا حساب" },
    ],
  },
};

export const dicts: Record<Lang, Dict> = { en, ur };
