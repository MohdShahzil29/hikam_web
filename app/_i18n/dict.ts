// Every piece of site text, in English and Urdu. Both dictionaries have the same shape.
export type Lang = "en" | "ur";

// "/features" → "/ur/features" for Urdu
export const localHref = (lang: Lang, path: string) => (lang === "ur" ? (path === "/" ? "/ur" : `/ur${path}`) : path);

const en = {
  nav: { features: "Features", about: "About", download: "Download", privacy: "Privacy", other: "اردو", home: "Ilm24x7 home" },
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
      "Ilm24x7 stands on the work of others. Heartfelt thanks to the authors, translators and publishers of these books, and to the API providers and contributors who made this journey possible.",
    thanks: [
      { name: "Kanzul Iman", what: "Imam Ahmad Raza Khan — Urdu translation of the Quran" },
      { name: "Kanz ul Imaan (English)", what: "Translated by Aqib Farid Al Qadri" },
      { name: "Kanzul Iman (Hindi)", what: "With Khazain-ul-Irfan · Maktaba-tul-Madina, Dawat-e-Islami" },
      { name: "Fatawa Razawiya", what: "Imam Ahmad Raza Khan · digital edition by Dawat-e-Islami" },
      { name: "Bahar-e-Shariat", what: "Mufti Amjad Ali Azmi · Maktaba-tul-Madina" },
      { name: "AlQuran Cloud", what: "Quran text and recitation" },
      { name: "Hadith API by Fawaz Ahmed", what: "Hadith collections" },
      { name: "Adhan", what: "Prayer time calculation" },
    ],
    rightsText:
      "All books, translations and recordings belong to their authors and publishers, and are shared in Ilm24x7 for free, with gratitude, to spread knowledge. If you hold the rights to any of them and want it removed, write to support@ilm24x7.in and we will remove it promptly.",
  },
  privacy: {
    meta: {
      title: "Privacy Policy — Ilm24x7",
      description: "What the Ilm24x7 app collects, why, and what it never does with your data.",
    },
    alt: "رازداری کی پالیسی",
    title: "Privacy Policy",
    updated: "Last updated: October 2026",
    intro:
      "Ilm24x7 is an Islamic app for reading the Quran, Hadith and Fatawa, namaz times with azan alarms, the Qibla and more. This policy explains what information the app uses, why, and your choices. In short: there are no accounts, no ads and no tracking, and your location never leaves your phone.",
    sections: [
      {
        title: "Your location",
        points: [
          "With your permission, the app reads your location to calculate namaz times and the Qibla direction.",
          "This calculation happens on your phone. Your location is not sent to our server or to anyone else, and it is only saved on your phone.",
          "Location is used only while the app is open; the app does not track you in the background. You can deny or turn off location at any time.",
        ],
      },
      {
        title: "Questions you ask",
        points: [
          "When you ask a question in Ask Ilm24x7, the text of the question is sent to our server so it can search the books and send back the answer.",
          "We do not ask for your name, email, phone number or any account, so questions are not linked to you. Your past chats are saved only on your phone, and you can delete them in Chat history.",
          "Questions are answered by Ilm24x7's own search engine. They are not sent to any AI company.",
        ],
      },
      {
        title: "Feedback",
        points: [
          "If you tap 👍 or 👎 under an answer, we store that rating with the question, the answer that was shown, the language, and any comment you choose to write.",
          "We use this only to find and fix wrong or weak answers. It contains no name, email or device identifier.",
        ],
      },
      {
        title: "Data kept on your phone",
        points: [
          "Saved chats, bookmarked passages, reading progress, your daily goal and streak, alarm and reminder settings, theme and text size are stored only on your phone.",
          "Clearing the app's data or uninstalling the app deletes them.",
        ],
      },
      {
        title: "Notifications and alarms",
        points: [
          "Namaz alarms and the Friday (Jumma) reminder are scheduled on your phone and work without sending anything to us. You can turn them off in the app or in your phone's settings.",
        ],
      },
      {
        title: "Server logs",
        points: [
          "Like any website, our server keeps short-lived technical logs (such as IP address, time and the request made) to keep the service secure and fix problems. They are not used to identify or profile you.",
        ],
      },
      {
        title: "Content from other services",
        points: [
          "The app downloads book content from these providers: AlQuran Cloud (Quran text and recitation), the Hadith API by Fawaz Ahmed (via jsDelivr), and Cloudflare R2 and Cloudinary (book PDFs). When your phone downloads from them, they receive your IP address as part of the request, under their own privacy policies. We do not share any other information with them.",
          "The app is distributed through Google Play, which has its own privacy policy.",
        ],
      },
      {
        title: "What we never do",
        points: [
          "No accounts or sign-in. No advertising. No analytics or tracking tools. We do not sell, rent or share your information.",
        ],
      },
      {
        title: "Children",
        points: [
          "Ilm24x7 is a general-audience app and is not directed at children under 13. We do not knowingly collect personal information from children.",
        ],
      },
      {
        title: "Security",
        points: ["All communication between the app and our server uses encrypted HTTPS connections."],
      },
      {
        title: "Your choices",
        points: [
          "You can deny the location or notification permission, delete your chat history, or clear the app's data at any time. To ask about or remove feedback you sent, write to us with the question and roughly when you sent it.",
        ],
      },
      {
        title: "Changes to this policy",
        points: [
          "If this policy changes, we will update this page and the date above. Important changes will also be mentioned in the app's update notes.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactText: "Questions about this policy or your data:",
    email: "support@ilm24x7.in",
  },
};

export type Dict = typeof en;

const ur: Dict = {
  nav: { features: "خصوصیات", about: "ہمارے بارے میں", download: "ڈاؤن لوڈ", privacy: "پرائیویسی", other: "English", home: "علم 24x7 ہوم" },
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
      "علم 24x7 دوسروں کی محنت پر کھڑا ہے۔ ان کتابوں کے مصنفین، مترجمین اور ناشرین، اور ان تمام API فراہم کرنے والوں اور معاونین کا دل سے شکریہ جنہوں نے یہ سفر ممکن بنایا۔",
    thanks: [
      { name: "کنز الایمان", what: "امام احمد رضا خان — قرآن کا اردو ترجمہ" },
      { name: "Kanz ul Imaan (English)", what: "ترجمہ: عاقب فرید القادری" },
      { name: "کنز الایمان (ہندی)", what: "خزائن العرفان کے ساتھ · مکتبۃ المدینہ، دعوتِ اسلامی" },
      { name: "فتاویٰ رضویہ", what: "امام احمد رضا خان · ڈیجیٹل ایڈیشن: دعوتِ اسلامی" },
      { name: "بہارِ شریعت", what: "مفتی امجد علی اعظمی · مکتبۃ المدینہ" },
      { name: "AlQuran Cloud", what: "قرآن کا متن اور تلاوت" },
      { name: "Hadith API by Fawaz Ahmed", what: "احادیث کے مجموعے" },
      { name: "Adhan", what: "نماز کے اوقات کا حساب" },
    ],
    rightsText:
      "تمام کتابیں، تراجم اور تلاوتیں ان کے مصنفین اور ناشرین کی ملکیت ہیں، اور علم پھیلانے کے لیے شکریے کے ساتھ علم 24x7 میں مفت پیش کی گئی ہیں۔ اگر آپ ان میں سے کسی کے حقوق رکھتے ہیں اور اسے ہٹوانا چاہتے ہیں تو support@ilm24x7.in پر لکھیں، ہم فوراً ہٹا دیں گے۔",
  },
  privacy: {
    meta: {
      title: "رازداری کی پالیسی — علم 24x7",
      description: "علم 24x7 ایپ کون سی معلومات استعمال کرتی ہے، کیوں، اور آپ کے ڈیٹا کے ساتھ کیا کبھی نہیں کرتی۔",
    },
    alt: "Privacy Policy",
    title: "رازداری کی پالیسی",
    updated: "آخری تبدیلی: اکتوبر 2026",
    intro:
      "علم 24x7 ایک اسلامی ایپ ہے جس میں قرآن، حدیث اور فتاویٰ، اذان کے الارم کے ساتھ اوقاتِ نماز، قبلہ اور بہت کچھ ہے۔ یہ پالیسی بتاتی ہے کہ ایپ کون سی معلومات استعمال کرتی ہے، کیوں، اور آپ کے اختیارات کیا ہیں۔ مختصر یہ کہ: نہ کوئی اکاؤنٹ، نہ اشتہار، نہ ٹریکنگ، اور آپ کی لوکیشن کبھی آپ کے فون سے باہر نہیں جاتی۔",
    sections: [
      {
        title: "آپ کی لوکیشن",
        points: [
          "آپ کی اجازت سے ایپ آپ کی لوکیشن لیتی ہے تاکہ نماز کے اوقات اور قبلہ کی سمت معلوم کی جا سکے۔",
          "یہ حساب آپ کے فون پر ہی ہوتا ہے۔ آپ کی لوکیشن نہ ہمارے سرور کو بھیجی جاتی ہے نہ کسی اور کو، اور صرف آپ کے فون میں محفوظ رہتی ہے۔",
          "لوکیشن صرف اس وقت استعمال ہوتی ہے جب ایپ کھلی ہو؛ ایپ پس منظر میں آپ کو ٹریک نہیں کرتی۔ آپ جب چاہیں لوکیشن کی اجازت نہ دیں یا بند کر دیں۔",
        ],
      },
      {
        title: "آپ کے سوالات",
        points: [
          "جب آپ ”سوال پوچھیں“ میں کوئی سوال لکھتے ہیں تو سوال کا متن ہمارے سرور کو بھیجا جاتا ہے تاکہ وہ کتابوں میں تلاش کر کے جواب واپس بھیج سکے۔",
          "ہم آپ کا نام، ای میل، فون نمبر یا کوئی اکاؤنٹ نہیں مانگتے، اس لیے سوالات آپ سے منسوب نہیں ہوتے۔ آپ کی پچھلی گفتگو صرف آپ کے فون میں محفوظ رہتی ہے اور آپ اسے ”پچھلی گفتگو“ سے مٹا سکتے ہیں۔",
          "سوالات کا جواب علم 24x7 کا اپنا سرچ انجن دیتا ہے۔ یہ کسی AI کمپنی کو نہیں بھیجے جاتے۔",
        ],
      },
      {
        title: "رائے (فیڈبیک)",
        points: [
          "اگر آپ کسی جواب کے نیچے 👍 یا 👎 دبائیں تو ہم یہ رائے، سوال، دکھایا گیا جواب، زبان اور آپ کا لکھا ہوا تبصرہ (اگر لکھیں) محفوظ کرتے ہیں۔",
          "اسے صرف غلط یا کمزور جوابات ڈھونڈنے اور درست کرنے کے لیے استعمال کیا جاتا ہے۔ اس میں کوئی نام، ای میل یا ڈیوائس کی شناخت نہیں ہوتی۔",
        ],
      },
      {
        title: "آپ کے فون میں رہنے والا ڈیٹا",
        points: [
          "محفوظ گفتگو، محفوظ کیے گئے حوالے، پڑھائی کی پیش رفت، روز کا ہدف، الارم اور یاد دہانی کی سیٹنگ، تھیم اور تحریر کا سائز صرف آپ کے فون میں رہتے ہیں۔",
          "ایپ کا ڈیٹا صاف کرنے یا ایپ ہٹانے سے یہ سب مٹ جاتا ہے۔",
        ],
      },
      {
        title: "نوٹیفکیشن اور الارم",
        points: [
          "نماز کے الارم اور جمعہ کی یاد دہانی آپ کے فون پر ہی سیٹ ہوتے ہیں اور ہمیں کچھ بھیجے بغیر چلتے ہیں۔ آپ انہیں ایپ یا فون کی سیٹنگ سے بند کر سکتے ہیں۔",
        ],
      },
      {
        title: "سرور لاگز",
        points: [
          "ہر ویب سائٹ کی طرح ہمارا سرور سکیورٹی اور خرابیاں دور کرنے کے لیے مختصر مدت کے تکنیکی لاگز (جیسے IP ایڈریس، وقت اور درخواست) رکھتا ہے۔ انہیں آپ کو پہچاننے یا آپ کا پروفائل بنانے کے لیے استعمال نہیں کیا جاتا۔",
        ],
      },
      {
        title: "دوسری سروسز سے آنے والا مواد",
        points: [
          "ایپ کتابوں کا مواد ان سروسز سے ڈاؤن لوڈ کرتی ہے: AlQuran Cloud (قرآن کا متن اور تلاوت)، Hadith API by Fawaz Ahmed (jsDelivr کے ذریعے)، اور Cloudflare R2 و Cloudinary (کتابوں کی PDF)۔ ڈاؤن لوڈ کے وقت انہیں آپ کا IP ایڈریس ملتا ہے، جس پر ان کی اپنی پالیسیاں لاگو ہوتی ہیں۔ ہم انہیں اور کوئی معلومات نہیں دیتے۔",
          "ایپ Google Play کے ذریعے فراہم کی جاتی ہے، جس کی اپنی پرائیویسی پالیسی ہے۔",
        ],
      },
      {
        title: "ہم کبھی کیا نہیں کرتے",
        points: [
          "نہ اکاؤنٹ یا لاگ اِن، نہ اشتہار، نہ کوئی اینالیٹکس یا ٹریکنگ ٹول۔ ہم آپ کی معلومات نہ بیچتے ہیں، نہ کرائے پر دیتے ہیں، نہ کسی کو دیتے ہیں۔",
        ],
      },
      {
        title: "بچے",
        points: [
          "علم 24x7 عام لوگوں کے لیے ہے اور 13 سال سے کم عمر بچوں کے لیے نہیں بنائی گئی۔ ہم جان بوجھ کر بچوں کی ذاتی معلومات جمع نہیں کرتے۔",
        ],
      },
      {
        title: "سکیورٹی",
        points: ["ایپ اور ہمارے سرور کے درمیان تمام رابطہ انکرپٹڈ HTTPS کے ذریعے ہوتا ہے۔"],
      },
      {
        title: "آپ کے اختیارات",
        points: [
          "آپ جب چاہیں لوکیشن یا نوٹیفکیشن کی اجازت نہ دیں، اپنی گفتگو مٹا دیں، یا ایپ کا ڈیٹا صاف کر دیں۔ اپنی بھیجی ہوئی رائے کے بارے میں پوچھنے یا اسے ہٹوانے کے لیے سوال اور تقریباً وقت کے ساتھ ہمیں لکھیں۔",
        ],
      },
      {
        title: "اس پالیسی میں تبدیلی",
        points: [
          "اگر یہ پالیسی بدلی تو ہم یہ صفحہ اور اوپر کی تاریخ بدل دیں گے۔ اہم تبدیلیاں ایپ کے اپ ڈیٹ نوٹس میں بھی بتائی جائیں گی۔",
        ],
      },
    ],
    contactTitle: "رابطہ",
    contactText: "اس پالیسی یا اپنے ڈیٹا کے بارے میں سوالات:",
    email: "support@ilm24x7.in",
  },
};

export const dicts: Record<Lang, Dict> = { en, ur };
