const questions = [
    {
        question: "As a famous YouTuber, Selena has to deal with a lot of criticism and negative comments. She now has learned to take them in her ______ and not be affected by them.",
        options: {
            "A": "stride",
            "B": "shadow",
            "C": "stroll",
            "D": "stage"
        },
        answer: "A"
    },
    {
        question: "Thanks to ______ renewal projects, many old buildings in cities can be given a new life.",
        options: {
            "A": "lush",
            "B": "manual",
            "C": "ethnic",
            "D": "urban"
        },
        answer: "D"
    },
    {
        question: "Taiwan ______ a unique culinary tradition, evident in its famous night markets, where you can find dishes such as oyster omelet and coffin bread.",
        options: {
            "A": "classifies",
            "B": "extends",
            "C": "possesses",
            "D": "enforces"
        },
        answer: "C"
    },
    {
        question: "Former US President Donald Trump is a(n) ______ political figure. Many like him because of his \"America First\" policy, while others dislike his arrogance and rudeness.",
        options: {
            "A": "unpredictable",
            "B": "controversial",
            "C": "ambiguous",
            "D": "compulsory"
        },
        answer: "B"
    },
    {
        question: "Vivian was overcome with ______ when her husband suddenly passed away. She missed him so much that she was unable to eat or sleep.",
        options: {
            "A": "dread",
            "B": "sin",
            "C": "hatred",
            "D": "grief"
        },
        answer: "D"
    },
    {
        question: "To rescue its real estate market, China has taken a series of measures to ______ property sales, including lowering mortgage interest rates.",
        options: {
            "A": "stimulate",
            "B": "register",
            "C": "refund",
            "D": "compensate"
        },
        answer: "A"
    },
    {
        question: "The town became ______ because of the discovery of petroleum, and at its peak, the population reached 30,000. Unfortunately, when the oil ran out, it was gradually abandoned.",
        options: {
            "A": "intensive",
            "B": "economical",
            "C": "prosperous",
            "D": "beneficial"
        },
        answer: "C"
    },
    {
        question: "Ensuring that both parties are heard and understood is a key aspect of ______ that helps build a healthy relationship.",
        options: {
            "A": "interpretation",
            "B": "communication",
            "C": "presentation",
            "D": "declaration"
        },
        answer: "B"
    },
    { 
        question: "I invited Samantha to come to my birthday party, but she ______, saying she was otherwise engaged that day.", 
        options: { 
            "A": "disapproved", 
            "B": "declined", 
            "C": "scolded", 
            "D": "contested" 
        }, 
        answer: "B" 
    }, 
    { 
        question: "The two runners reached the finish line almost ______, so the referee had to rely on an instant replay to determine the winner.", 
        options: { 
            "A": "indifferently", 
            "B": "objectively", 
            "C": "ceaselessly", 
            "D": "simultaneously" 
        }, 
        answer: "D" 
    },
    { 
        question: "Using an umbrella on Taiwan's high-speed rail platforms could be dangerous, as suggested by videos circulating on social media. Reportedly, in rainy conditions, individuals holding umbrellas risk electrocution from 11 ______ or the possibility of accidental entanglement. Yet, the Taiwan High-Speed Rail Corporation (THSRC) has 12 ______ these claims, stating that passengers can safely stand behind the yellow warning line on platforms without risking electrocution.", 
        options: { 
          "A": "sudden lightning", 
          "B": "overhead wires", 
          "C": "magnetic attraction", 
          "D": "steel railroads" 
        },
        answer: "BADBC" 
    },

    { 
        question: "A new brain implant has emerged as a source of optimism for millions impacted by neurological disorders such as epilepsy. This pioneering advancement has been 16 ______ the development of state-of-the-art stretchable high-channel electrode grid technology, promising a major leap forward in the study of brain surgery.", 
        options: { 
          "A": "confronted by", 
          "B": "varied with", 
          "C": "redefined as", 
          "D": "achieved through" 
        },
        answer: "DACBA" 
    },
    { 
        question: "", 
        options: { 
          "A": "confronted by", 
          "B": "varied with", 
          "C": "redefined as", 
          "D": "achieved through", 
          "E": "surrounded by", 
          "F": "caused by", 
          "G": "fueled by", 
          "H": "initiated by", 
          "I": "prevented by", 
          "J": "indicated by" 
        },
        answer: "DAHFCBJIGE" 
    },
    { 
        question: "You might have experienced", 
        options: { }, 
        answer: "BAED" 
    },

    { 
        question: "Good-better-best pricing,", 
        options: { }, 
        answer: "DABC" 
    },
      
    { 
        question: "Rice wecvils", 
        options: { }, 
        answer: "BDBA" 
    },

    { 
        question: "Microsoft upcoming Coilot Plus PCs boast anoval AI-driven...", 
        options: { }, 
        answer: "ABBD" 
    },
    { 
        question: "Koalas are frequently observed ___ to trees, and animal experts have now discovered the reason behind this behavior: it helps them stay cool on hot days!", 
        options: { 
        "A": "circling 圍繞", 
        "B": "knotting 打結", 
        "C": "attaching 附加", 
        "D": "clinging 緊抱" 
        },
        answer: "D" 
    },
    { 
        question: "Both fish skin and fish scales have been scientifically proven to have healing ___ and have been used to speed up wound recovery.", 
        options: { 
        "A": "surgeries 外科手術", 
        "B": "properties 特性", 
        "C": "resolutions 決議", 
        "D": "outcomes 結果" 
        },
        answer: "B" 
    },
    { 
        question: "The police released the suspect they had arrested the other day because there was no ___ evidence that could prove he committed the crime.", 
        options: { 
        "A": "solid 堅固的", 
        "B": "scale 尺度", 
        "C": "solemn 嚴肅的", 
        "D": "stubborn 固執的" 
        },
        answer: "D" 
    },
    { 
        question: "The ___ won an award for his in-depth investigation and coverage of a major food safety issue.", 
        options: { 
        "A": "jury 陪審團", 
        "B": "faculty 能力", 
        "C": "journalist 記者", 
        "D": "frontier 邊境" 
        },
        answer: "C" 
    },
    { 
        question: "The speaker used several daily-life examples to ___ Murphy's Law, such as the bus only comes when you give up waiting for it.", 
        options: { 
        "A": "address 發表", 
        "B": "dispute 爭論", 
        "C": "uncover 揭露", 
        "D": "illustrate 說明" 
        },
        answer: "D"  
    },
    { 
        question: "It's vital that all employees follow safety ___ so that they don't get hurt when operating machinery and equipment at work.", 
        options: { 
        "A": "obligations 義務", 
        "B": "procedures 程序", 
        "C": "inspections 檢查", 
        "D": "campaigns 運動" 
        },
        answer: "B" 
    },
    { 
        question: "Since her debut, the actress had faced harsh reviews, but she was ___ to criticism and remained focused on refining her skills, which ultimately led her to win an Oscar.", 
        options: { 
        "A": "adverse 不利的", 
        "B": "habitual 習慣性的", 
        "C": "eligible 合格的", 
        "D": "immune 不受影響的" 
        },
        answer: "D" 
    },
    { 
        question: "A cargo ship stranded off the coast of southern Taiwan during a typhoon became a new ___ for travelers. Many people came to admire the beauty of the ship against the sunset.", 
        options: { 
        "A": "attraction 吸引", 
        "B": "reputation 名聲", 
        "C": "conservation 保護", 
        "D": "orientation 方向" 
        },
        answer: "A" 
    },

    { 
        question: "You need to stop ______ yourself and take responsibility for your actions instead of blaming them on others.", 
        options: { 
        "A": "resisting", 
        "B": "torturing", 
        "C": "deceiving", 
        "D": "provoking" 
        },
        answer: "C" 
    },
    { 
        question: "The sculpture was moved to a(n) ______ position—the entrance of the mansion—so that every guest could see it easily.", 
        options: { 
        "A": "universal", 
        "B": "prominent", 
        "C": "domestic", 
        "D": "indefinite" 
        },
        answer: "B" 
    },
    { 
        question: "After a long day of studying, your eyes may burn and feel dry and itchy. This irritation often signals dry eye syndrome, a condition that is affecting more and more people each year.\n\nEye problems arise when glands around the eyes do not produce enough moisture and dry eye syndrome can stem from various causes, with extended screen time ______ a major contributor. Excessive hours in front of screens reduce blinking frequency, which can make the tear film covering the eye disappear more quickly. This, ______, leads to dryness and irritation. Environmental factors also play a role. Dry air, wind, and smoke can speed up tear evaporation and irritate the eyes. These conditions are often present in air-conditioned or low-humidity settings, and can disturb the natural moisture ______ in the eyes, resulting in discomfort.\n\nFortunately, there are ways to ease the symptoms. Staying hydrated and consuming omega-3 fatty acids can provide great relief. Drinking enough water aids tear production, while omega-3s strengthen the tear film, minimizing eye dryness and irritation. Should the burning sensation ______, avoid rubbing your eyes and consult a doctor before using over-the-counter eye drops.\n\nAs our dependence on digital devices in daily routines grows, we observe a(n) ______ increase in conditions such as dry eye syndrome. But, by identifying and managing their triggers, we can effectively protect our eyes and see to it that we look after them properly.", 
        options: {
            "A": "be", 
            "B": "being", 
            "C": "to be", 
            "D": "to have been"
        },
        answer: "BDCAD" 
    },
    { 
        question: "In 2001, La Paz, Bolivia, introduced the creative Educadores Urbanos Cebras (Zebra Urban Educators) program in response to growing road safety concerns. This unique initiative features individuals dressed in zebra costumes who direct traffic and educate drivers and pedestrians about road safety through humor ______ police enforcement. Thus far, the program has successfully reduced traffic violations, including red light offenses and crosswalk negligence.",
        options: {
          "A": "owing to",
          "B": "rather than",
          "C": "more of",
          "D": "as for"
        },
        answer: "BACDB" 
    },
    {
        question: "According to the recipe, which of the following steps is NOT correct?",
        options: {
          "A": "Remove extra fat after the meat is cooked.",
          "B": "Add frozen peas to the pot after the soup turns warm.",
          "C": "Poke holes in the pie with a fork before baking to help it cool.",
          "D": "Mix all the sauces and seasoning before adding them to the pan."
        },
        answer: "CDAB" 
    },
    { 
        question: "Nymphia Wind,", 
        options: { }, 
        answer: "ACBC" 
    },
    { 
        "question": "Most of us might be familiar with the name chatgpt,", 
        "options": { }, 
        answer: "DBDC" 
    },
    { 
        question: "The politician used to be respected for his integrity, but a recent bribery scandal has ______ his reputation.", 
        options: { 
        "A": "wasted", 
        "B": "messed", 
        "C": "bombed", 
        "D": "ruined" 
        }, 
        answer: "D" 
    },
    { 
        question: "Adam is constantly complaining about having no money, but I have no ______ for him because I know what has caused all this misery—always spending more than he earns.", 
        options: { 
        "A": "poverty", 
        "B": "modesty", 
        "C": "sympathy", 
        "D": "jealousy" 
        }, 
        answer: "C" 
    },
    { 
        question: "The new policy is ______ to fail because it goes against human nature. You can’t expect people to work more for less pay.", 
        options: { 
        "A": "keen", 
        "B": "queer", 
        "C": "bound", 
        "D": "visible" 
        }, 
        answer: "C" 
    },
    { 
        question: "No matter how much knowledge you gain, there’s no ______ for experience. Only by putting what you learn into practice will you have a true understanding of something.", 
        options: { 
        "A": "substitute", 
        "B": "exception", 
        "C": "privilege", 
        "D": "companion" 
        }, 
        answer: "A" 
    },
    { 
        question: "When Liam’s car broke down in the middle of nowhere, ______ smiled on him as a friendly stranger stopped and offered a ride to the nearest town.", 
        options: { 
        "A": "relief", 
        "B": "favor", 
        "C": "reality", 
        "D": "fortune" 
        } , 
        answer: "D" 
    },
    { 
        question: "The company adopted an ______ marketing campaign that included non-stop advertisements and bold strategies to capture customers’ attention.", 
        options: { 
        "A": "approximate", 
        "B": "aggressive", 
        "C": "arrogant", 
        "D": "affectionate" 
        } , 
        answer: "B" 
    },
    { 
        question: "The clothing company is based in London, but most of its products are ______ in Portugal and Spain, where labor costs are lower and high-quality materials are readily available.", 
        options: { 
        "A": "constituted", 
        "B": "collaborated", 
        "C": "manifested", 
        "D": "manufactured" 
        } , 
        answer: "D" 
    },
    { 
        question: "While telling his side of the story, John ______ left out the part where he was at fault, making it seem like everything was someone else’s mistake.", 
        options: { 
        "A": "conveniently", 
        "B": "doubtfully", 
        "C": "individually", 
        "D": "enthusiastically" 
        } , 
        answer: "A" 
    },
    { 
        question: "Asian giant hornets are dangerous creatures. A series of ______ from this flying insect can damage tissues, cause unbearable pain, and even prove fatal for humans!", 
        options: { 
        "A": "pokes", 
        "B": "stings", 
        "C": "punches", 
        "D": "stitches" 
        } , 
        answer: "B" 
    },
    { 
        question: "The novel ______ around a central question—are we born good or evil? Interestingly, no definite answer is given at the end.", 
        options: { 
        "A": "steers", 
        "B": "pursues", 
        "C": "narrates", 
        "D": "revolves" 
        } , 
        answer: "D" 
    },
    { 
        question: "When winter’s chill grips the air, there’s nothing quite like a steaming meal to warm the soul. In Chinese tradition, dishes such as ginger duck, sesame oil chicken, and mutton hot pot are cherished seasonal favorites, each ______ with special warming elements like dang gui, ginger, or ginseng. These magic ingredients are highly valued for their medicinal and health-boosting qualities, as they are thought to ______ one’s overall well-being and vitality.\n\nSuch culinary practices are deeply rooted in the ancient Chinese philosophy of yin and yang, which emphasizes the importance of balancing these two opposing forces. According to this belief, certain foods, such as Chinese cabbage and white radish, are ______ “cold” yin foods, while others, including ginger and goat meat, are considered “hot” yang foods. In winter, the consumption of “hot” foods is thought to counteract the yin influence of the cold weather, thereby helping to keep the body healthy. This winter-specific practice of “tonifying” is known as “Jin-Bu.” ______ most “tonic” foods are “hot,” “Jin-Bu” is less commonly observed during the summer months.\n\nIn Chinese society, tonic foods have long been valued for their use as herbal remedies and nutritional supplements. However, as modern dietary advice increasingly discourages excessive indulgence in certain foods, faith in these customs has gradually begun to ______. Despite this shift, the core principles behind these traditions continue to hold significant sway in many Eastern cultures.",
        "options": { 
        "A": "is prepared", 
        "B": "preparing", 
        "C": "prepared", 
        "D": "to be prepared" 
        } , 
        answer: "CDCBA" 
    },

    { "question": "", "options": { 
        "A": "religious", 
        }, 
        answer:"ADBCB"
    },

    { 
        question: "", 
        options: { 
            "A": "coined",
            "B": "violated",
            "C": "sectors",
            "D": "brand",
            "E": "combat",
            "F": "requirements",
            "G": "convince",
            "H": "superficial",
            "I": "effective",
            "J": "exposed"
        },
        answer: "DGAICJFBDH" 
    },
    { 
        question: "When visit someone home,", 
        options: {         
            "A": "我就懶", 
            "B": "我就懶", 
            "C": "我就懶", 
            "D": "我就懶" 
        }, 
        answer: "DEAC" 
    },
    { 
        question: "Spain,", 
        options: {         
            "A": "我就懶", 
            "B": "我就懶", 
            "C": "我就懶", 
            "D": "我就懶" 
        }, 
        answer: "DCBC" 
    },
    { 
        question: "International community Radio Taipei...", 
        options: {         
            "A": "我就懶", 
            "B": "我就懶", 
            "C": "我就懶", 
            "D": "我就懶" }            , 
        answer: "ACBC" 
    },

    { 
        question: "The director has great ______ in his new movie, believing that it will become a box-office hit when released.", 
        options: { 
        "A": "grace", 
        "B": "faith", 
        "C": "trust", 
        "D": "charm" 
        } , 
        answer: "B" 
    },

{ 
        question: "Unable to fall asleep, Rita ______ and turned in bed for a long time. She regretted drinking so much coffee before bedtime.", 
        options: { 
        "A": "crushed", 
        "B": "twisted", 
        "C": "flipped", 
        "D": "tossed" 
        } , 
        answer: "D" 
    },

{ 
        question: "Logan, who comes from Scotland, speaks English with a strong Scottish ______, which makes it hard for me, a non-native speaker, to understand.", 
        options: { 
        "A": "accent", 
        "B": "idiom", 
        "C": "remark", 
        "D": "slogan" 
        } , 
        answer: "A" 
    },

{ 
        question: "Joanne had gained so much weight that she was frequently mistaken for being ______. It embarrassed her to see people yield their seats to her on the bus.", 
        options: { 
        "A": "massive", 
        "B": "masculine", 
        "C": "pregnant", 
        "D": "premature" 
        } , 
        answer: "C" 
    },

{ 
        question: "There are many ways to ______ calls on your smartphone. For example, you can turn on the 'Silence unknown callers' feature to avoid being disturbed by unidentified callers.", 
        options: { 
        "A": "desert", 
        "B": "cushion", 
        "C": "freeze", 
        "D": "screen" 
        } , 
        answer: "D" 
    },

{ 
        question: "The island country declared a state of ______ after a powerful typhoon swept across it and caused great destruction.", 
        options: { 
        "A": "tension", 
        "B": "highlight", 
        "C": "emergency", 
        "D": "suffering" 
        } , 
        answer: "C" 
    },

{ 
        question: "Norway ______ the world’s highest electric vehicle adoption rate—over 90% of the market share! No wonder it’s called the 'EV capital of the world.'", 
        options: { 
        "A": "boasts", 
        "B": "unlocks", 
        "C": "fetches", 
        "D": "pledges" 
        } , 
        answer: "A" 
    },

{ 
        question: "This place looks familiar ______, but I’m sure this is my first time here. Maybe I’ve seen pictures of it before.", 
        options: { 
        "A": "regardless", 
        "B": "nowhere", 
        "C": "likewise", 
        "D": "somehow" 
        } , 
        answer: "D" 
    },
    { 
        question: "Companies require employees’ ______ before using their photographs in promotional materials.", 
        options: { 
        "A": "loyalty", 
        "B": "consent", 
        "C": "ownership", 
        "D": "gratitude" 
        } , 
        answer: "B" 
    },

{ 
        question: "Legally speaking, ______ family members are one’s close relatives, including parents, children, siblings, and spouse.", 
        options: { 
        "A": "potential", 
        "B": "inherent", 
        "C": "parallel", 
        "D": "immediate" 
        } , 
        answer: "D" 
    },

{ 
        question: "Initially, it was largely ______ royalty, members of the nobility, and others with high social status because of the high cost and limited availability of paper.", 
        options: { 
        "A": "blamed on", 
        "B": "isolated from", 
        "C": "reserved for", 
        "D": "forbidden by" 
        } , 
        answer: "CDBAB" 
    },
{
    question: "", 
    options: { 
    "A": "Domain", 
    } , 
    answer: "CABDC" 
},
{
    question: "A recent study by ", 
    options: {} , 
    answer: "DBCA" 
},
{
question: "In the world of Japanese anime", 
options: {} , 
answer: "BADC" 
},
{
    question: "Italy's competition authority (", 
    options: {} , 
    answer: "BCBD" 
},
{
    question: "Tom is really a naughty boy. He likes to _____ and play jokes on his younger sister when their parents are not around.",
    options: {
        "A": "alert",
        "B": "spare",
        "C": "tease",
        "D": "oppose"
    },
    answer: "C"
},
{
    question: "Elderly shoppers in this store are advised to take the elevator rather than the _____, which may move too fast for them to keep their balance.",
    options: {
        "A": "airway",
        "B": "operator",
        "C": "escalator",
        "D": "instrument"
    },
    answer: "C"
},
{
    question: "Upon hearing its master’s call, the dog wagged its tail, and followed her out of the room _____.",
    options: {
        "A": "obediently",
        "B": "apparently",
        "C": "logically",
        "D": "thoroughly"
    },
    answer: "A"
},
{
    question: "Since many of our house plants are from humid jungle environments, they need _____ air to keep them green and healthy.",
    options: {
        "A": "moist",
        "B": "stale",
        "C": "crisp",
        "D": "fertile"
    },
    answer: "A"
},
{
    question: "The skydiver managed to land safely after jumping out of the aircraft, even though her _____ failed to open in midair.",
    options: {
        "A": "glimpse",
        "B": "latitude",
        "C": "segment",
        "D": "parachute"
    },
    answer: "D"
},
{
    question: "The invention of the steam engine, which was used to power heavy machines, brought about a _____ change in society.",
    options: {
        "A": "persuasive",
        "B": "harmonious",
        "C": "conventional",
        "D": "revolutionary"
    },
    answer: "D"
},
{
    question: "To encourage classroom _____, the teacher divided the class into groups and asked them to solve a problem together with their partners.",
    options: {
        "A": "operation",
        "B": "interaction",
        "C": "adjustment",
        "D": "explanation"
    },
    answer: "B"
},
{
    question: "Lisa _____ onto the ground and injured her ankle while she was playing basketball yesterday.",
    options: {
        "A": "buried",
        "B": "punched",
        "C": "scattered",
        "D": "tumbled"
    },
    answer: "D"
},
{
    question: "Hundreds of residents received free testing _____ from the city government to find out if their water contained any harmful chemicals.",
    options: {
        "A": "kits",
        "B": "trials",
        "C": "zones",
        "D": "proofs"
    },
    answer: "A"
},
{
    question: "The 2011 Nobel Peace Prize was awarded _____ to three women for the efforts they made in fighting for women’s rights.",
    options: {
        "A": "actively",
        "B": "earnestly",
        "C": "jointly",
        "D": "naturally"
    },
    answer: "C"
},
{
    question: "The company is _____ and making great profits under the wise leadership of the chief executive officer.",
    options: {
        "A": "applauding",
        "B": "flourishing",
        "C": "circulating",
        "D": "exceeding"
    },
    answer: "B"
},
{
    question: "It is absolutely _____ to waste your money on an expensive car when you cannot even get a driver’s license.",
    options: {
        "A": "absurd",
        "B": "cautious",
        "C": "vigorous",
        "D": "obstinate"
    },
    answer: "A"
},
{
    question: "The problem of illegal drug use is very complex and cannot be traced to merely one _____ reason.",
    options: {
        "A": "singular",
        "B": "countable",
        "C": "favorable",
        "D": "defensive"
    },
    answer: "A"
},
{
    question: "The non-profit organization has _____ $1 million over five years to finance the construction of the medical center.",
    options: {
        "A": "equipped",
        "B": "resolved",
        "C": "committed",
        "D": "associated"
    },
    answer: "C"
},
{
    question: "One week after the typhoon, some bridges were finally opened and bus service _____ in the country’s most severely damaged areas.",
    options: {
        "A": "departed",
        "B": "resumed",
        "C": "transported",
        "D": "corresponded"
    },
    answer: "B"
},
{
    question: "Street pigeons are a common sight in many European cities. In fact, a visit to a major European city just would not be the same _____ encountering them: bathing in fountains, perching on historic buildings, and flocking in public squares.",
    options: {
        "A": "as",
        "B": "for",
        "C": "though",
        "D": "without"
    },
    answer: "DCBDB"
},
{
    question: "Being hit by lightning is a rare event. Over the course of an 80-year life span, the odds of being hit by lightning are 1 in 3,000, _____ the probability of being struck seven different times.",
    options: {
        "A": "if it isn’t",
        "B": "as you can see",
        "C": "not to mention",
        "D": "with regard to"
    },
    answer: "CCAAD"
},
{
    question: "Glaciers are usually associated with colder climates. But some mountain ranges of South America, Africa, and Indonesia are also _____ glaciers and ice sheets. These tropical glaciers serve as a major source of water supply to one-sixth of the world’s population.",
    options: {
        "A": "home to",
        "B": "covers of",
        "C": "roofs over",
        "D": "room for"
    },
    answer: "ACCAD"
},
{
    question: "If you cannot find ways to fit exercise into your busy daily schedule, don’t worry! Exercise doesn’t always have to be laborious. Research shows that _____ amounts of exercise—even just 15 minutes a day—helps ease depression, enhance self-image, relieve stress, and much more.",
    options: {
        "A": "means",
        "B": "soreness",
        "C": "point to",
        "D": "modest"
    },
    answer: "JGFHD ECBAI"
},
{
    question: "The prickly pear cactus is such a powerful symbol in Mexico that it occupies a prime spot on Mexico’s national flag. The plant was considered sacred by the ancient Aztecs, and modern-day Mexicans eat it, drink it, and even use it in medicines and shampoos. Now scientists have come up with a new use for the bright green plant: producing renewable energy. Known locally as nopal, the prickly pear is farmed on a massive scale in Mexico. Over the years, only the edible soft inner flesh has been used. The cactus’s thick outer layer (i.e., husk), with all those spines, had always been viewed as a waste product until researchers developed a biogas generator to turn the husks into electricity. The pilot project dedicated to developing the cactus biogas generator began in the south of Mexico City. The area produces 200,000 tons a year of prickly pear cactus—up to 10 tons of which ends up as waste on the floor of the cactus market each day. Then, a local green energy startup company got the idea to turn that waste into energy. The generator is now in place at the cactus market, where the vendors are enthusiastic about this new way to utilize the tons of cactus husks that once went directly into the trash. The prickly pear has a number of advantages over other biofuel crops, such as wheat, sugarcane, and soybeans. For one thing, only the husk of the cactus is used for generating biofuel, while its inner flesh is still preserved for food. Therefore, using the plant as a fuel source will not put pressure on food prices. Moreover, the cactus requires minimum water, and thus is not grown on traditional agricultural pasture. This means that no increased competition arises for the water or land presently used for food production. The project in Mexico City has brought new hope to reducing the use of fossil fuels. If it can be expanded, the prickly pear could be the key to Mexico’s energy future.",
    options: {
        "A": "means",
        "B": "soreness",
        "C": "point to",
        "D": "modest"
    },
    answer: "BDDB"
},

    {
        question: "The concept of a travel document, which shows a person is under a ruler’s protection while in a foreign land, has probably existed since rulers and states were first invented. But the earliest mention of an object which we might recognize as a passport appeared in about 450 B.C. The Hebrew Bible states that Nehemiah, an official serving King Artaxerxes of ancient Persia, asked permission to travel to Judah. The King agreed and gave Nehemiah a letter “to the governors of the province beyond the river,” requesting safe passage for him as he travelled through their lands. Later, in the medieval Islamic Caliphate, a form of passport was the bara’a, a receipt for taxes paid. Only people who paid their taxes were permitted to travel to different regions of the Caliphate. In medieval Europe, on the other hand, travel documents were issued by local authorities, and generally contained a list of towns and cities which the document holder was permitted to enter or pass through. On the whole, documents were not required for travel to seaports, which were considered open trading points, but documents were required to travel inland from seaports. King Henry V of England is credited with having invented the first true passport, as a way of helping his subjects prove who they were in foreign lands. The earliest reference to these documents is found in a 15th-century Act of Parliament, while the term “passport” came into use about a century later. Nevertheless, passports were not generally required for international travel until the First World War. It was at this time that passports as we would recognize them today began to be used.",
        options: {
            "A": "means",
            "B": "soreness",
            "C": "point to",
            "D": "modest"
        },
        answer: "ABCD"
    },
    {
        question: "Benjamin Franklin, one of the Founding Fathers of the United States, was not only a great politician but also a highly accomplished scientist and inventor. Of his many achievements, probably the least well known are his accomplishments in music. He invented an instrument for which both Mozart and Beethoven composed music—the glass armonica. In 1761, while living in England, Franklin heard a performer playing musical glasses. Franklin was charmed by the music, but felt that there was a better way to create the same sound. He had a glassmaker create thirty-seven hemispheres made of glass, with each being a different size and thickness to produce different pitches. The glass hemispheres were color coded with paint to identify the notes. Franklin ran an iron rod through a hole in the top of each hemisphere so that they could nest together from largest to smallest. He linked all of this to a device shaped like a spinning wheel, with a foot control that turned the rod, making the glass hemispheres rotate. Franklin moistened his fingers and held them against the rims of the glass hemispheres as they turned, producing a unique sound. He mastered the instrument and took it to parties and gatherings to play for his friends and acquaintances. The instrument became so popular that thousands were built and sold.",
        options: {
            "A": "Water has to be poured into the glass hemispheres.",
            "B": "Colored paint makes it sound better and last longer.",
            "C": "An iron rod is used to strike the thicker glass hemispheres.",
            "D": "The performer’s fingers have to be slightly wet when playing it."
        },
        answer: "DDCB"
    },
    {
        question: "Morgan’s Wonderland, located in San Antonio, Texas, is a theme park geared mainly toward mentally or physically disabled children. The park was built by Gordon Hartman, a former real estate developer. The creation of the park was inspired by his daughter, Morgan, who suffers from severe cognitive delay and physical challenges. The world’s first ultra-accessible family fun park, Morgan’s Wonderland opened in the spring of 2010. Admission for guests with special needs is free, and fees for the general public are set at a much discounted price so that people of all ages and abilities can come together and play in a fun and safe environment. Completely wheelchair-accessible, the park features 25 acres of attractions including rides, playgrounds, a catch-and-release fishing lake, and picnic areas throughout the park. The rides are custom designed to accommodate wheelchair riders so that every family member can enjoy the fun. The adapted rides include the Off-Road Adventure, where guests can test their driving skills in sporty vehicles. Moreover, each visitor is offered the option to wear a GPS Adventure Band, which allows them to keep track of each other while in the park. The band also enables them to take part in electronic activities. For example, when the riders scan the band at the Off-Road Adventure, a photo will be taken and sent to their email. In June 2017, Morgan’s Wonderland celebrated the opening of Morgan’s Inspiration Island. The new expansion is composed of five themed splash pads and a River Boat Adventure Ride. The wheelchair guests can transfer out of their chairs into unique, waterproof chairs and enjoy the splash park without risking damage to their personal wheelchairs.",
        options: {
            "A": "means",
            "B": "soreness",
            "C": "point to",
            "D": "modest"
        },
        answer: "BACD"
    },

    {
        question: "When Jeffery doesn’t feel like cooking, he often orders pizza online and has it ______ to his house.",
        options: {
            "A": "advanced",
            "B": "delivered",
            "C": "offered",
            "D": "stretched"
        },
        answer: "B"
    },
    {
        question: "Jane is the best ______ I have ever had. I cannot imagine running my office without her help.",
        options: {
            "A": "assistant",
            "B": "influence",
            "C": "contribution",
            "D": "politician"
        },
        answer: "A"
    },
    {
        question: "The temple celebrated Mazu Festival by hosting ten days of lion dances, Taiwanese operas, and traditional hand ______ shows.",
        options: {
            "A": "chat",
            "B": "quiz",
            "C": "puppet",
            "D": "variety"
        },
        answer: "C"
    },
    {
        question: "The new vaccine was banned by the Food and Drug Administration due to its ______ fatal side effects.",
        options: {
            "A": "potentially",
            "B": "delicately",
            "C": "ambiguously",
            "D": "optionally"
        },
        answer: "A"
    },
    {
        question: "______ the photos with dates and keywords help you sort them easily in your file.",
        options: {
            "A": "Tagging",
            "B": "Flocking",
            "C": "Rolling",
            "D": "Snapping"
        },
        answer: "A"
    },
    {
        question: "An ______ person is usually pleasant and easy to get along with, but don’t expect that he or she will always say “yes” to everything.",
        options: {
            "A": "enormous",
            "B": "intimate",
            "C": "agreeable",
            "D": "ultimate"
        },
        answer: "C"
    },
    {
        question: "Hidden deep in a small alley among various tiny shops, the entrance of the Michelin star restaurant is barely ______ to passersby.",
        options: {
            "A": "identical",
            "B": "visible",
            "C": "available",
            "D": "remarkable"
        },
        answer: "B"
    },
    {
        question: "The original budget for my round-island trip was NT$5,000, but the ______ cost is likely to be 50 percent higher.",
        options: {
            "A": "moderate",
            "B": "absolute",
            "C": "promising",
            "D": "eventual"
        },
        answer: "D"
    },
    {
        question: "After watching a TV program on natural history, Adam decided to go on a ______ for dinosaur fossils in South Dakota.",
        options: {
            "A": "trial",
            "B": "route",
            "C": "strike",
            "D": "quest"
        },
        answer: "D"
    },
    {
        question: "With pink cherry blossoms blooming everywhere, the valley ______ like a young bride under the bright spring sunshine.",
        options: {
            "A": "bounces",
            "B": "blushes",
            "C": "polishes",
            "D": "transfers"
        },
        answer: "B"
    },
    {
        question: "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was ______ by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961.",
        options: {
            "A": "initiated",
            "B": "represented",
            "C": "acknowledged",
            "D": "manipulated"
        },
        answer: "ADCBD"
    },
    {
        question: "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons ______ aesthetics.",
        options: {
            "A": "contrary to",
            "B": "except for",
            "C": "more of",
            "D": "other than"
        },
        answer: "DADCA"
    },
    {
    question: "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too______for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.",
    options: {
            "A": "possible",
            "B": "sensation",
            "C": "risky",
            "D": "cost",
            "E": "witnessed",
            "F": "professional",
            "G": "called for",
            "H": "tried out",
            "I": "necessity",
            "J": "career"
    },
    answer: "CIFHDGJEAB"
},
        {
        question: "Obon, or the Bon Festival, is a Japanese holiday that honors the spirits of the dead.   ______ The festival usually lasts for four to five days in August. During this period, many people travel back to their hometowns and spend time with loved ones, both past and present.",
        options: {
                "A": "Some people also visit the cemetery to clean up the family graves and pray for their ancestors.",
                "B": "Such festive activities are usually held in parks, temples, and other public places around Japan.",
                "C": "Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.",
                "D": "Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion."
            },
        answer: "DACB"
        } ,
        {
            question: "Standing proud in the savannah with their red blankets and painted shields, the Maasai people are one of the widely known symbols of East Africa. Their unique style, as remarked by Karen Blixen, author of Out of Africa, “has grown from the inside, and is an expression of the race and its history.” The Maasai are a semi-nomadic group in Kenya and northern Tanzania, wandering in bands and living almost entirely on the meat, blood, and milk of their herds. Over the years, the fearless tribesmen have stood strong against slavery, and resisted the urging of the Kenyan and Tanzanian governments to adopt a more modern lifestyle. In fact, they are one of the few tribes that have retained most of their traditions. Up until recently, the only way for a Maasai boy to achieve warrior status was to single-handedly kill a lion with his spear. Maasai clothing varies with age, gender, and place. The most recognizable piece of clothing is the shúkà, a sheet of fabric worn wrapped around the body. Red is a popular color, and women generally opt for checked, striped, or patterned pieces of cloth. Young men wear black for several months after their circumcision, a ritual signifying their coming of age. A Maasai warrior is rarely seen without his spear and shield. In Blixen’s words, “their weapons and finery are as much a part of their being as are a stag’s antlers” (a male deer’s horns). Beadwork is an important part of Maasai culture. Beaded jewelry is made by women, and is famous for its complexity. Natural materials such as clay, shells, and ivory were used before trading with the Europeans in the 19th century. They were then replaced by colorful glass beads, allowing for more detailed beadwork and color patterns. Multicolored beadwork is popular among both men and women. Each color holds a special meaning: White stands for peace, green for land and production, while red—the most favored color among the Maasai—is the symbol of unity and bravery.",
            options: {
                "A": "They have been urged by governments to leave behind their traditions.",
                "B": "They resist foreign influence because they were enslaved in the past.",
                "C": "A boy has to kill a lion by himself before becoming an adult.",
                "D": "A Maasai woman is usually good at beadwork and farming."
            },
            answer: "DACC"
        },
        {
           question: "A hard hat is a helmet used mostly at worksites to protect the head from injuries due to falling objects. Since its introduction in the early 20th century, the headgear has saved countless lives and is considered the number one safety tool for construction workers. The hard hat was invented in 1919 by Edward W. Bullard, who had just returned from World War I. Before the war, workers used to smear their hats with coal tar for protection of their head. Bullard, having witnessed the life-saving power of the metal helmet in the War, decided to produce a head protection device that was affordable for every worker and lightweight enough to be worn all day long. The Hard Boiled Hat was thus born, using steamed canvas and leather, covered with black paint, and featuring a suspension system to reduce impact. Soon, hard hats became widely used. The headgear was later made mandatory at construction sites in major construction projects, such as the Hoover Dam in 1931 and the Golden Gate Bridge in 1933. Over the past century, hard hats have advanced considerably, evolving from canvas and leather to aluminum, fiberglass, and, eventually, to thermoplastic. Recently, new models have been introduced and accessories added to meet the needs of laborers working on various job sites. For instance, a ventilated hard hat was developed to keep wearers cooler, and see-through face shields were attached to better see the hazards lurking above. Today, attachments include radios, sensors, cameras, and a lot more. A common color code has also been developed for recognizing people and their roles on site. Yellow is used for general laborers and contractors, white (or sometimes black) for supervisors and managers, and green for inspectors and new workers. New products continue to expand the market. Global sales of hard hats totaled USD 2.1 billion in 2016, and are expected to reach USD 3.19 billion in 2025.",
           options: {
                "A": "Their functions.",
                "B": "Their appearances.",
                "C": "Their materials."
            },
           answer: "DABB"
        },
    {
       question: "Zebrafish, named for their characteristic stripes, have been a popular test subject for researchers. Only a few centimeters in length, the fish breed easily in captivity, grow quickly, and their transparent body makes it easy to study their organs. Above all, they possess some amazing “self-healing” power. When part of their heart is removed, they can grow it back in a matter of weeks. When blinded, they can quickly regain the ability to see. Recent studies show that humans and zebrafish have the same major organs and share 70 percent of the genes. Moreover, 84 percent of human genes associated with disease find a counterpart in zebrafish. Scientists thus hope that understanding the self-healing mystery of the fish may one day allow humans to regenerate such organs as eyes, hearts, and spines. Researchers at Vanderbilt University are particularly interested in zebrafish retina regeneration. They have learned that damage of retina can cause blindness in zebrafish, yet it only takes about three to four weeks before vision is restored. The structure and cell types of zebrafish retinas are almost identical to those of humans. If the process can be replicated in humans, it may give rise to new treatments for blindness caused by retinal damage. In order to know exactly how zebrafish retina is regenerated, the team looked at the neurotransmitter gamma-aminobutyric acid (GABA), a chemical messenger in the brain that reduces the activity of neurons. They found that lowering GABA levels in zebrafish can trigger retina regeneration, while a high level of GABA concentration will suppress the regeneration process. This suggested that GABA plays an important role in the fish’s ability to regain their sight. The team is beginning to test the GABA theory on mice. If that works, human trials will be next on the agenda. If the research proves successful in humans, some of the nearly 40 million blind people worldwide may one day have a tiny, striped fish to thank.",
       options: {
            "A": "How they should be studied in labs.",
            "B": "Where they derive their regenerative ability.",
            "C": "Why they share humans’ genetic code.",
            "D": "What they may offer in medical advancements."
        },
        answer: "DCAD"
    },
    {
        question: "The bus driver often complains about chewing gum found under passenger seats because it is        and very hard to remove.",
        options: {
            "A": "sticky",
            "B": "greasy",
            "C": "clumsy",
            "D": "mighty"
        },
        answer: "A"
    },
    {
        question: "Jesse is a talented model. He can easily adopt an elegant        for a camera shoot.",
        options: {
            "A": "clap",
            "B": "toss",
            "C": "pose",
            "D": "snap"
        },
        answer: "C"
    },
    {
        question: "In order to draw her family tree, Mary tried to trace her        back to their arrival in North America.",
        options: {
            "A": "siblings",
            "B": "commuters",
            "C": "ancestors",
            "D": "instructors"
        },
        "answer": "C"
    },
    {
        question: "Upon the super typhoon warning, Nancy rushed to the supermarket—only to find the shelves almost ______ and the stock nearly gone.",
        options: {
            "A": "blank",
            "B": "bare",
            "C": "hollow",
            "D": "queer"
        },
        answer: "B"
    },
    {
        question: "Even though Jack said “Sorry!” to me in person, I did not feel any        in his apology.",
        options: {
            "A": "liability",
            "B": "generosity",
            "C": "integrity",
            "D": "sincerity"
        },
        answer: "D"
    },
    {
        question: "My grandfather has astonishing powers of       . He can still vividly describe his first day at school as a child.",
        options: {
            "A": "resolve",
            "B": "fraction",
            "C": "privilege",
            "D": "recall"
        },
        answer: "D"
    },
    {
        question: "Recent research has found lots of evidence to        the drug company’s claims about its “miracle” tablets for curing cancer.",
        options: {
            "A": "provoke",
            "B": "counter",
            "C": "expose",
            "D": "convert"
        },
        answer: "B"
    },
    {
        question: "Corrupt officials and misguided policies have        the country’s economy and burdened its people with enormous foreign debts.",
        options: {
            "A": "crippled",
            "B": "accelerated",
            "C": "rendered",
            "D": "ventured"
        },
        answer: "A"
    },
    {
        question: "As a record number of fans showed up for the baseball final, the highways around the stadium were       with traffic all day.",
        options: {
            "A": "choked",
            "B": "disturbed",
            "C": "enclosed",
            "D": "injected"
        },
        answer: "A"
    },
    {
        question: "Studies show that the        unbiased media are in fact often deeply influenced by political ideology.",
        options: {
            "A": "undoubtedly",
            "B": "roughly",
            "C": "understandably",
            "D": "supposedly"
        },
        answer: "D"
    },
    {
        question: "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost,   11  , touches the neighboring tree. This beautiful phenomenon is called crown shyness.",
        options: {
            "A": "in no time",
            "B": "by all means",
            "C": "but not quite",
            "D": "and pretty much"
        },
        answer: "CDBBC"
    },
    {
        question: "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot   16   Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’   17   condition.",
        options: {
            "A": "back to",
            "B": "free of",
            "C": "long before",
            "D": "straight on"
        },
        answer: "BAACD"
    },
    {
        question: "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can   __  ? Well, it depends on who and where we are, and what we’re doing.",
        options: {
            "A": "absorption",
            "B": "active",
            "C": "alert",
            "D": "combat",
            "E": "option",
            "F": "effective",
            "G": "even",
            "H": "status",
            "I": "pass through",
            "J": "reach for"
        },
        answer: "JBGFAHECID"
    },
    {
        question: "Have you ever thought of “coloring” the names of the days of the week? When you listen to someone speaking, do you see a rainbow of colors? Or perhaps Mozart’s music tastes like an apple pie to you? If so, it is very likely that you have synesthesia.\nSynesthesia is a condition in which people’s senses intermix. In some cases, people with synesthesia may experience colors when they hear, read, or even think of letters and numbers. In others, words can trigger a real sensation of taste on their tongue.",
        options: {
            "A": "This consistency serves as a proof that synesthesia is real.",
            "B": "Meanwhile, environmental influences seem to shape a person’s synesthesia.",
            "C": "People with synesthesia used to be accused of making their experiences up.",
            "D": "Some studies even show that people may all be synesthetic to some degree."
        },
        answer: "CABD"
    },
    {
        question: "When did people first experience the joy of the hula hoop? Although the term did not emerge until the 18th century, toy hoops twirled around the waist, limbs, or neck can be traced back to ancient times. As early as 1000 BC, Egyptian children played with hoop toys of dried grapevine. They threw, jumped, and slung them around their bodies as we do today. They also struck them with sticks to roll them down the road. Hoop rolling was also popular in ancient Greece. Their hoops, often made of metal, were not merely toys for Greek children but served as exercise devices as well. In the 14th century, hoops were popular as a form of recreation in Great Britain. The craze for hoops even resulted in dislocated backs and heart attacks, according to medical records. The term “hula,” however, did not enter the English language until the 1700s, when British sailors first witnessed hula dancing in the Hawaiian Islands. Though no hoops were used, the movements of the ritual dances looked very similar to those in hooping. Thus “hula” and “hoop” came together, resulting in the term “hula hooping.” Hoops spun their way through the cultures of pre-colonial America as well. Often considered as representing the circle of life, hoops featured prominently in the ritual dances of Native Americans. Dancers used small reed hoops as symbolic representations of animals such as eagles or snakes. With very rapid movements, they used the hoops to construct the symbolic forms around their bodies. The hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California’s Wham-O toy company. Twenty-five million plastic hoops were sold in less than four months. The hula hoop “fad” is still going strong today.",
        options: {
            "A": "How was the word “hula-hooping” derived?",
            "B": "Why did Wham-O start making hula hoops?",
            "C": "Where did Hawaiian hula dancing come from?",
            "D": "What was the favorite toy of ancient Egyptian kids?"
        },
        answer: "ACDB"
    },
    {
        question: "When you enjoy your morning cup of tea, you are probably not aware that those tea leaves can mean injury, or even death, for Asian elephants roaming Indian tea gardens. In the Indian state of Assam, growing numbers of tea farms are destroying the Asian elephant’s habitats and endangering their population. Much of the forest land where tea is grown in Assam is flat and thus farmers must dig drainage trenches to prevent water from accumulating and hurting the shrubs. The trenches, however, can be death traps for the elephants. Since the elephants need to use tea plantations as landmarks when navigating forests, they almost inevitably have to move through the farms. Moreover, because there are fewer humans around, pregnant females often use tea-growing areas as safe shelters to give birth. But baby elephants, not used to negotiating rough ground, may easily fall into the trenches and get hurt; and once injured, they might not be able to climb out. When mothers try to dig their babies out, both may be trapped and smothered by thick mud. Furthermore, elephants are known to resist leaving their sick or dying behind, and a herd may linger at a trench with a trapped baby for hours, reluctant to move on until all hope is lost. Is it possible for elephants to coexist with the prosperous tea business? Elephant Friendly Tea is an organization that takes the initiative to make it possible. The organization encourages consumers to choose brands that take precautions to protect elephants and has set up a certification program to reward tea growers who are doing it right. Until now, only smaller tea brands have been certified, but awareness is growing. The organization believes that people may be motivated to buy elephant-friendly brands when they know more about the risk tea can pose to these endangered animals.",
        options: {
            "A": "To protect tea trees.",
            "B": "To trap elephants.",
            "C": "To expand tea farms.",
            "D": "To mark boundaries of tea gardens."
        },
        answer: "ADCD"
    },
    {
        question: "Situated off the coast of Tanzania and washed by the warm, clean waters of the Indian Ocean, Zanzibar is a tropical archipelago comprised of several scattered islands. This popular beach destination is now famous for its white sand beaches, slender palms, and turquoise seas. But few people know that in the past, control of Zanzibar meant access to unimaginable wealth. From ancient times, Zanzibar has been a trading hotspot, thanks to its location on the trade route between Arabia and Africa. Traders from Asia had already visited the islands 900 years before the arrival of its first permanent settlers from the African mainland (around 1000 AD). In the 8th century, Persian merchants built settlements here, which grew over the next four centuries into their trading posts. Between the 12th and 15th centuries, trade increased between Arabia, Persia, and Zanzibar, bringing the archipelago both wealth and power. During the Age of Exploration, commerce in Zanzibar quickly boomed, largely due to the rise of the spice trade. At the close of the 15th century, Europeans’ craze for spices gave rise to the Spice Route, a network of sea lanes joining Europe with the Far East, where most spices came from. In 1498, Portuguese explorer Vasco da Gama made the first sea voyage to India, via the southernmost tip of Africa. In 1499, he arrived at Zanzibar, an archipelago sitting at the crossroads of the Spice Route. The islands soon attracted traders from different lands. Hundreds of ships sailing the Spice Route docked here, bringing spices and goods for transaction, and Zanzibar became one of the biggest trading centers in the world. Since the 16th century, Zanzibar has come under the rule of the Portuguese, the Arabians, and then the British, each leaving a mark on the place. The paths of various religions also crossed here: Muslims have lived peacefully with Christians and Buddhists on the islands for centuries. The unique cultural intersections, scented with the aroma of cloves, vanilla, and cinnamon floating in the air, give these jewels on the Indian Ocean an amazing charm that goes far beyond tropical beach fun.",
        options: {
            "A": "The earliest traders arrived around 900 AD.",
            "B": "Most of the earliest merchants came from Africa.",
            "C": "Asian merchants arrived centuries before the African settlers.",
            "D": "Traders from Persia settled down permanently around 1000 AD."
        },
        answer: "CBBC"
    },
    {
        question: "People who desire a ______ figure should exercise regularly and maintain healthy eating habits.",
        options: {
            "A": "spicy",
            "B": "slender",
            "C": "slight",
            "D": "slippery"
        },
        answer: "B"
    },
    {
        question: "Watching the sun ______ from a sea of clouds is a must-do activity for all visitors to Ali Mountain.",
        options: {
            "A": "emerging",
            "B": "flashing",
            "C": "rushing",
            "D": "floating"
        },
        answer: "A"
    },
    {
        question: "Do you know what time the next bus is ______? I’ve been waiting here for more than 30 minutes.",
        options: {
            "A": "apt",
            "B": "due",
            "C": "bound",
            "D": "docked"
        },
        answer: "B"
    },
    {
        question: "The roasting heat and high ______ made me feel hot and sticky, no matter what I did to cool off.",
        options: {
            "A": "density",
            "B": "humidity",
            "C": "circulation",
            "D": "atmosphere"
        },
        answer: "B"
    },
    {
        question: "Artwork created by truly great artists such as Picasso and Monet will no doubt ______ the test of time.",
        options: {
            "A": "stay",
            "B": "take",
            "C": "serve",
            "D": "stand"
        },
        answer: "D"
    },
    {
        question: "In some countries, military service is ______ for men only; women do not have to serve in the military.",
        options: {
            "A": "forceful",
            "B": "realistic",
            "C": "compulsory",
            "D": "distinctive"
        },
        answer: "C"
    },
    {
        question: "The team complained that its leader always took the ______ for all the hard work done by the team members.",
        options: {
            "A": "advantage",
            "B": "revenge",
            "C": "remedy",
            "D": "credit"
        },
        answer: "D"
    },
    {
        question: "Located at the center of the city, the business hotel ______ not only good service but also convenient public transport.",
        options: {
            "A": "proposes",
            "B": "contains",
            "C": "promises",
            "D": "confirms"
        },
        answer: "C"
    },
    {
        question: "As blood supplies have fallen to a critically low level, many hospitals are making an ______ for the public to donate blood.",
        options: {
            "A": "appeal",
            "B": "approach",
            "C": "operation",
            "D": "observation"
        },
        answer: "A"
    },
    {
        question: "David felt disappointed when he found out that he could not choose his study partners, but would be ______ placed in a study group.",
        options: {
            "A": "eligibly",
            "B": "randomly",
            "C": "apparently",
            "D": "consequently"
        },
        answer: "B"
    },
    {
        question: "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers ___ regular customers to purchase items, eat in restaurants, make inquiries, or return items.",
        options: {
            "A": "call for",
            "B": "pose as",
            "C": "attend to",
            "D": "engage in"
        },
        answer: "BDDAC"
    },
    {
        question: "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used? During the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They ___ alarm clocks because adjustable alarms had been invented by the mid-19th century.",
        options: {
            "A": "must be using",
            "B": "could have used",
            "C": "had hardly used",
            "D": "were mostly using"
        },
        answer: "BCADC"
    },
    {
        question: "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their ___ loved ones who died in the tsunami that claimed 18,000 lives.",
        options: {
            "A": "passed on",
            "B": "bridge",
            "C": "sorrow",
            "D": "hope",
            "E": "departed",
            "F": "mechanism",
            "G": "housed",
            "H": "manageable",
            "I": "fateful",
            "J": "brought forth"
        },
        answer: "EIJCGAHBFD"
    },
    {
        question: "While Dr. Weinstein, a surgeon at Dartmouth College, was trying to lift a heavy box, he twisted his back. The pain was agonizing. The surgeon could not sit, and when he lay down he could barely get up. So he decided to go out for a run. He took an aspirin, iced the injured area, and off he went. When he returned, he felt “pretty good.”\n\nWhen people have sprained a muscle or tendon, they are usually advised not to go right back to exercising until the pain goes away. But Dr. Weinstein says that approach is outdated and counterproductive. In fact, when active people consult him, he usually tells them to just keep exercising. Dr. Weinstein is not alone in his treatment of sports injury, but the specific advice can differ from specialist to specialist. ___\nThey nevertheless caution that a cutback may be necessary, such as running shorter distances or going more slowly. Others say the patients may need to engage in sports outside of their usual, main sport (that is, to cross-train), at least some of the time. Still others say the safest thing to do is cross-train all the time until the pain is gone. ___ Their consensus, however, is that unless the injury involves something as serious as a broken bone or a ripped muscle, moderate exercise can actually speed healing.\nThus, more and more patients are now advised to keep moving despite the pain. The rule of thumb, however, is to see a doctor first and get an accurate diagnosis. If a serious injury is ruled out and the pain is not getting worse after exercising, then the exercise “makes a lot of sense.”",
        options: {
            "A": "For example, an injured runner might end up cycling and swimming instead of running.",
            "B": "Over time, researchers have come to realize the importance of exercising when injured.",
            "C": "Many suggest that most patients can continue with the sport they love.",
            "D": "This seems to run counter to the common practice."
        },
        answer: "DCAB"
    },
    {
        question: "One fine morning in 1941, Swiss engineer George de Mestral went for a walk in the woods with his dog. Upon their return home, he found a lot of burrs (from plants) stuck to the dog’s fur and his pants. He immediately rushed to his microscope and examined the burrs attached on his pants—feeling a lightbulb moment coming on.\nUpon closer examination, de Mestral observed that the burrs, which appeared straight to the naked eye, actually contained many small hooks that clung firmly to the loops in the fabric of his pants. He determined that if he could recreate the same thing, making hooks-and-loops that bind to each other firmly, he could produce a strong fastener with many uses.\nDe Mestral’s first challenge was finding a fabric for a strong bonding system. He first tried cotton, but it proved too soft and could not withstand repeated openings and closures. After years of research and testing, he learned that synthetics worked best and eventually settled on heat-treated nylon, a strong and durable substance. By 1955, he had completed an improved version of the product, with each square inch of material containing 300 hooks, which made it stay fastened and yet easy enough to pull apart when needed. Named “Velcro,” from the French words velours (velvet) and crochet (hook), the new product received a patent from the Swiss government in 1955. De Mestral thus began mass-producing Velcro, opening plants in Europe and eventually into Canada and the United States.\nInitially Velcro did not fare well. As most fashion critics considered it ugly and cheap-looking, the use of Velcro was limited to athletic equipment. In the early 1960s, the product received a huge boost in popularity when NASA began using it in a lot of equipment that went into space along with astronauts. Today, de Mestral’s design is found almost everywhere: clothing and footwear, toys, airline seat cushions, blood pressure cuffs and surgeons’ gowns. Most impressively, the magical fastener was used in the first human artificial heart transplantation to hold together parts of the device.",
        options: {
            "A": "A blessing in disguise.",
            "B": "A happy ending.",
            "C": "An unpredictable future.",
            "D": "A sudden inspiration."
        },
        answer: "BDBA"
    },
    {
        question: "Thomas Moran, a famous painter in the 19th century, played an important role in the establishment of American national parks. His vivid paintings brought the splendor of the extraordinary landscapes before the eyes of American people, thus setting the stage for the regions to be widely recognized and officially established as national parks.\nMoran came to the United States at age 7 with his family and settled in Philadelphia. They came from northwest England, the blackened heart of the Industrial Revolution: Its main street was “a dark, unattractive hole” and the river running through it was a string of dirty water. That was all the nature that Moran knew.\nMoran began painting by age 15, inspired by the landscape paintings of the British master J.M.W. Turner. There was plenty of landscape for him to paint in America, much different from his hometown. Showing great talent in painting, Moran was soon hired as an illustrator at Scribner’s Monthly, and later appointed chief illustrator by age 34. In 1871, he was appointed to illustrate The Wonders of Yellowstone, a story by Nathaniel P. Langford, who had participated in an expedition to Yellowstone. Captivated by the utterly fantastic sights Langford described, Moran became eager to see this odd territory for himself.\nIn 1871 Moran joined the first US government survey of the Yellowstone region with photographer William Henry Jackson. For two weeks he filled his sketchbook with the landscape’s most stunning sights. Moran’s watercolors—the first color renderings of the area—as well as Jackson’s photos and the survey results were presented to the Congress. His powerful images of Yellowstone fired the imagination of Congress members. In March 1872, lawmakers officially made Yellowstone a national park, the world’s first.\nBefore Moran arrived, Yellowstone in the popular imagination was a harsh, wild place with hot water and steam coming out of hellish holes in the ground. Since the painter’s work appeared, Yellowstone National Park has come to be known as a picturesque wonderland. By the time Moran died, he had painted a dozen other areas that would become national parks or monuments.",
        options: {
            "A": "How national parks around the world were established.",
            "B": "How Yellowstone’s natural features were formed.",
            "C": "Why Moran’s family moved to the United States.",
            "D": "Why Moran started painting Yellowstone."
        },
        answer: "DABC"
    },
    {
        question: "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies. A triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of '100% Fish,' an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products. Reducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus. The Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        options: {
            "A": "To advance ocean technology.",
            "B": "To reduce food crises worldwide.",
            "C": "To enhance cross-industry cooperation.",
            "D": "To make the most of marine resources."
        },
        answer: "DBCC"
    },
    {
        question: "下列各組文句「　」內的字，前後意義相同的是：",
        options: {
            "A": "「技」蓋至此乎／「技」經肯綮之未嘗",
            "B": "嘻，「善」哉，技蓋至此乎／「善」刀而藏之",
            "C": "「族」庖月更刀，折也／每至於「族」，吾見其難為",
            "D": "奏刀騞然，莫不「中」音／合於〈桑林〉之舞，乃「中」〈經首〉之會"
        },
        answer: "D"
    },
    {
        question: "下列有關《史記》的評價與地位，敘述最不適當的是：",
        options: {
            "A": "紀事本末體之祖",
            "B": "通史之祖",
            "C": "正史之首",
            "D": "有「史家之絕唱，無韻之〈離騷〉」之譽"
        },
        "answer": "A"
    },
    {
        question: "《史記．項羽本紀》：「吾翁即若翁，必欲烹而翁，則幸分我一杯羹」的「幸」字，字義與下列相同的是：",
        options: {
            "A": "財物無所取，婦女無所「幸」",
            "B": "今日「幸」逢一妹",
            "C": "計之詳矣，「幸」無疑焉",
            "D": "隋煬帝之「幸」江都"
        },
        answer: "C"
    },
    {
        question: "下列有關《老子》一書寫作特色，敘述正確的是：",
        options: {
            "A": "一般歸類為古代散文或稱之為「歷史散文」",
            "B": "句式大致整齊，押韻工整",
            "C": "善用排比、對偶、回文等手法，文句靈活多變",
            "D": "可以配合音樂演唱"
        },
        answer: "C"
    },
    {
        question: "司馬遷寫人物，栩栩如生，以下有關〈鴻門宴〉一文的人物言語、行為所透露的特質，敘述最適當的是：",
        options: {
            "A": "樊噲曰：「大行不顧細謹，大禮不辭小讓。如今人方為刀俎，我為魚肉，何辭為？」—凸顯樊噲之粗魯無文",
            "B": "良問曰：「大王來何操？」—顯現張良的細心周延",
            "C": "沛公則置車騎，脫身獨騎—表現劉邦的自私陰毒",
            "D": "沛公謂張良曰：「從此道至吾軍，不過二十里耳。度我至軍中，公乃入。」—顯現劉邦的貪生怕死"
        },
        answer: "B"
    },
    {
        question: "下列有關史書的敘述，最適當的是：",
        options: {
            "A": "《左傳》為編年史之祖，為孔子據魯史編纂而成，以微言大義的筆法寓褒貶、別善惡",
            "B": "《新五代史》為歐陽脩所撰，採編年紀事的體例，是唐代設館修史以後唯一的私修正史",
            "C": "《戰國策》為劉向所著，以紀事本末體裁記載戰國策士、謀臣縱橫捭闔的談說與活動，同時也反映各國的成敗與興亡",
            "D": "司馬遷的《史記》首創以人為主的紀傳體，是中國第一部正史，書中常藉「太史公曰」以抒發作者的感想或議論"
        },
        answer: "D"
    },
    {
        question: "「他是黑夜中／陡然／迸發起來的／一團天火／從江東熊熊焚燒到阿房宮／最後自火中提煉出／一個霸氣磅礴的／名字」下列與此歌詠對象相同的是：",
        options: {
            "A": "道若江河，隨地可成洙泗；聖如日月，普天皆有春秋",
            "B": "有志者，事竟成，破釜沉舟，百二秦關終屬楚",
            "C": "三字蒙冤，千秋湛血；一生忠勇，萬古綱常",
            "D": "出師未捷身先死，長使英雄淚滿襟"
        },
        answer: "B"
    },
    {
        question: "夫秦失其政，陳涉首難，豪傑蠭起，相與並爭，不可勝數。然羽非有尺寸，乘勢起隴畝之中，三年，遂將五諸侯滅秦，分裂天下而封王侯，政由羽出，號為『霸王』。位雖不終，近古以來，未嘗有也。及羽背關懷楚，放逐義帝而自立，怨王侯叛己，難矣！自矜功伐，奮其私智而不師古，謂霸王之業，欲以力征經營天下，五年卒亡其國。身死東城，尚不覺寤而不自責，過矣！乃引『天亡我，非用兵之罪也』，豈不謬哉？」（《史記．項羽本紀》）根據本文，下列對項羽敘述最適當的是：",
        options: {
            "A": "因「放逐義帝而自立」，故被列為〈本紀〉",
            "B": "認為「奮其私智而不師古」，故能成就霸業",
            "C": "引「天亡我，非用兵之罪也」的說詞證其至死不悟",
            "D": "以「豪傑蠭起，相與並爭，不可勝數」說明其位不終的原因"
        },
        answer: "C"
    },
    {
        question: "關於〈鴻門宴〉中樊噲闖帳護主一段，下列解讀最適當的是：",
        options: {
            "A": "以「帶劍擁盾入軍門」、「側其盾以撞，衛士仆地」的舉止，暗示樊噲恣意妄為的作風",
            "B": "項羽面對樊噲闖帳，卻連呼「壯士」，又賜之卮酒、彘肩，可看出他對樊噲的欣賞",
            "C": "藉「覆其盾於地，加彘肩上，拔劍切而啗之」的熟練技巧，表現樊噲葷腥不忌的不羈本性",
            "D": "樊噲指責項羽「欲誅有功之人」乃「亡秦之續」，而項羽「未有以應」，可見他心胸寬大"
        },
        answer: "B"
    },
    {
        question: "關於先秦寓言的說明，正確的是：",
        options: {
            "A": "多為諸子寓言，以故事情節闡述不同學派的思想",
            "B": "莊子將寓言獨立、擴大成為單篇文章",
            "C": "《論語》、《孟子》、《老子》、《莊子》等書皆有大量的寓言",
            "D": "是中國寓言創作的唯一高峰，此後便再無優秀作家從事寓言的創作"
        },
        answer: "A"
    },
 {
    question: "下列詩歌對聯所詠的人物，可在《史記》中找到的是：",
    options: {
      "A": "下客常才不足珍，誰為狗盜脫強秦？秦關若待雞鳴出，笑殺臨淄土偶人",
      "B": "萬里飄零獨此身，詩魂終戀浣花村。寧貧寧凍寧餓死，一飯何曾忘至尊",
      "C": "瀝膽披肝，六經以來二表；託孤寄命，三代而下一人",
      "D": "傾耳共清談，老去秋郎，別有幽懷人不識；極峰尊小品，久湮雅舍，卻因彩筆史長存"
    },
    answer: "A"
  },
  {
    question: "中國文人的生活態度，常受道家哲理的影響，從山水間探索出「超然物外，安時處順」的人生觀。下列文意，何者近似此種情懷：",
    options: {
      "A": "使其中不自得，將何往而非病？使其中坦然，不以物傷性，將何適而非快",
      "B": "滔滔者，天下皆是也，而誰以易之？且而與其從辟人之士也，豈若從辟世之士哉",
      "C": "安得廣廈千萬間，大庇天下寒士俱歡顏，風雨不動安如山。嗚呼！何時眼前突兀見此屋，吾廬獨破受凍死亦足",
      "D": "安能以身之察察，受物之汶汶者乎？寧赴湘流，葬於江魚之腹中"
    },
    answer: "A"
  },
  {
    question: "蘇軾〈赤壁賦〉：「蓋將自其變者而觀之，則天地曾不能以一瞬；自其不變者而觀之，則物與我皆無盡也。」文中觀點乃是受到《莊子》影響，而最可能直接影響的篇章是：",
    options: {
      "A": "〈養生主〉：養生原則就是順應自然，方能保養身心，不致傷物損己",
      "B": "〈齊物論〉：萬物都具備各自的獨特意義，一切價值都是相對而非絕對",
      "C": "〈逍遙遊〉：萬物各任其性，不受外物所累，即可到達神人逍遙自在的境界",
      "D": "〈應帝王〉：能夠順乎民情、行不言之教、無為而治的人，才能做帝王"
    },
    answer: "B"
  },
  {
    question : "有關〈庖丁解牛〉的文句闡述，正確的是：甲、「因其固然」意謂事情總會遇上盤根錯節之處 乙、「以無厚入有間」比喻養生當放下主觀成見、掌握自然之理 丙、「三年之後，未嘗見全牛也」敘述牛已悉數解盡，從此不再解牛 丁、「技經肯綮之未嘗」描寫解牛之時游刃有餘、技術高超 戊、「官知止而神欲行」說明物質享受有所節制，解牛的技術才能提升",
    options: {
      "A": "乙戊",
      "B": "甲丙",
      "C": "丁戊",
      "D": "乙丁"
    },
    answer: "D"
  },
  {
    question: "小國寡民，使有什伯之器而不用，甲、無所乘之 乙、雖有舟輿 丙、雖有甲兵 丁、使民重死而不遠徙 無所陳之。使民復結繩而用之。（《老子》第八十章）依據文意，排列順序最適當的是：",
    options: {
      "A": "甲乙丁丙",
      "B": "甲丁丙乙",
      "C": "丁甲丙乙",
      "D": "丁乙甲丙"
    },
    answer: "D"
  },
  {
    question: "古人為文，有時會使用反詰語氣，增加文句變化，這類文句通常是無疑而問的，只是用問句的形式表示肯定或否定，並不一定要求回答。下列文句屬於反詰語氣的是：",
    options: {
      "A": "君安與項伯有故",
      "B": "沛公不先破關中，公豈敢入乎",
      "C": "壯士！能復飲乎",
      "D": "誰為大王為此計者"
    },
    answer: "B"
  },
  {
    question: "下列詩詞中引用的歷史人物，與其他三者相異的是：",
    options: {
      "A": "劍舞鴻門失此機，重瞳成敗可前知。猜嫌只待捐金後，決意東歸去已遲",
      "B": "漢業存亡俯仰中，留侯當此每從容。固陵始義韓彭地，復道方圖雍齒封",
      "C": "圯橋進履氣恬然，胯下王孫事亦傳。一作神仙一功狗，論人須到蓋棺年",
      "D": "石過橋下書曾受，星降人間夢已傳。謫吏何能沐風化，空將歌頌拜車前"
    },
    answer: "A"
  },
  {
    question: "下引一首現代詩，依文意排序最適當的順序是：我自起兵八載以來，身歷七十餘戰，未嘗敗北，遂霸有天下／甲、如此，誰又會了解／乙、關中土地肥饒，山河屏障，自可成其霸業，／丙、何嘗不知實利勝於名分／丁、可是我朝夕思念的，卻是我東方的故鄉／戊、那片撫我育我／讓我成長及發現我自己的土地 這點小小的浪漫—富貴不歸故鄉，如衣繡夜行。（張錯〈霸王〉）",
    options: {
      "A": "甲丙乙丁戊",
      "B": "丙乙甲丁戊",
      "C": "丙乙丁戊甲",
      "D": "甲戊丁乙丙"
    },
    answer: "C"
  },
  {
    question: "下列文句「　」內的修辭法，前後敘述最不適當的是：",
    options: {
      "A": "不勝「桮杓」／「缾」之罄矣，維「罍」之恥—同為借代",
      "B": "「若入前為壽，壽畢」／「醉則更相枕以臥，臥而夢」—同為頂真",
      "C": "「毫毛不敢有所近」／竭誠則胡越為一體，傲物則「骨肉為行路」—同為誇飾",
      "D": "數「目」項王／不衫不履，「裼」裘而來—同為轉品"
    },
    answer: "A"
  },
  {
    question: "莊子文章想像豐富，語言生動活潑，留下許多膾炙人口的成語，下列運用不正確的是：",
    options: {
      "A": "他三天兩頭就換工作，這種「朝三暮四」的態度，如何讓長官信任",
      "B": "老王功成名就之後，竟「得魚忘筌」，對過去的恩人見死不救",
      "C": "意外發生得太突然，只見她「呆若木雞」，癱坐在路中央",
      "D": "家豪負笈到日本求學後「沉魚落雁」，沒有人知道他的近況"
    },
    answer: "D"
  },
  {
    "question": "下列文句皆出自〈鴻門宴〉，關於主要角色的敘述，最適當的是：",
    "options": {
      "A": "「范增數目項王，舉所佩玉玦以示之者三」：范增性格殘忍好殺",
      "B": "「豎子不足與謀，奪項王天下者，必沛公也，吾屬今為之虜矣」：范增莽撞而不能顧全大局",
      "C": "「此沛公左司馬曹無傷言之，不然，籍何以至此」：項羽顯露內心的慚愧與婦人之仁",
      "D": "「沛公默然，曰：『固不如也，且為之奈何？』」：劉邦猜忌心強，質問張良該如何負責"
    },
    "answer": "C"
  },
  {
    "question": "下列「　」內的字，讀音完全相同的是：",
    "options": {
      "A": "「鯫」生／諮「諏」／荒「陬」",
      "B": "樊「噲」／「膾」炙人口／大雜「燴」",
      "C": "玉「玦」／「訣」別／「缺」漏",
      "D": "「驪」姬／黃「鸝」／「酈」山"
    },
    "answer": "A"
  },
  {
    "question": "道家主張一切作為皆應順隨自然，不加主觀妄作，代表人物有老子、莊子、列子、楊朱。請判斷下列哪一個選項的文句並非出自道家者流：",
    "options": {
      "A": "流水之為物也，不盈科不行。君子之志於道也，不成章不達",
      "B": "牛馬四足是謂天，落馬首，穿牛鼻，是謂人，故曰無以人滅天",
      "C": "聖人不凝滯於物，而能與世推移。世人皆濁，何不淈其泥而揚其波",
      "D": "飄風不終朝，驟雨不終日，孰為此者？天地。天地尚不能久，而況人乎"
    },
    "answer": "A"
  },
  {
    "question": "〈庖丁解牛〉運用大量生動的摹寫技巧。下列文句皆是透過各種感官知覺互相轉化而寫成的作品，其中「以嗅覺描寫視覺」的是：",
    "options": {
      "A": "書頁的潑剌聲，濺溼了／木質的小樓",
      "B": "那天我看見一個少婦／雕像般站在十字路口／她把笑聲斜插在髮間",
      "C": "我將如何進入秋天／在這個城市的盡頭，我聽到南方的雨水／一次比一次更寒涼",
      "D": "樹隨著風搖動，她抬起頭吸著四周空氣，似乎看見枝葉間塗抹著薄荷的氣息"
    },
    "answer": "D"
  },
  {
    "question": "太史公曰：「余讀《孟子》書，至梁惠王問『何以利吾國？』，未嘗不廢書而嘆也。曰：嗟乎，利誠亂之始也！夫子罕言利者，常防其原也。故曰『放於利而行，多怨。』自天子至於庶人，好利之弊何以異哉！」（《史記．孟子荀卿列傳》）關於以上這段敘述，說明最不適當的是：",
    "options": {
      "A": "文中「利誠亂之始也」是太史公引用《孟子》之言",
      "B": "「常防其原也」的「原」字指的就是利",
      "C": "「夫子罕言利者」的「夫子」指的是孔子",
      "D": "太史公認為上至天子下至百姓，都可能蒙受逐利之弊"
    },
    "answer": "A"
  },
  {
    "question": "下列「　」內的字，字義前後相同的是：",
    "options": {
      "A": "甲、「會」其怒，不敢獻／「會」於會稽山陰之蘭亭",
      "B": "乙、交戟之衛士欲止不「內」／卻客而不「內」",
      "C": "丙、張良出，「要」項伯／便「要」還家",
      "D": "丁、具言臣之不敢「倍」德也／每逢佳節「倍」思親"
    },
    "answer": "D"
  },
  {
    "question": "下列文句用字完全正確的是：",
    "options": {
      "A": "《硫磺島的英雄們》這部電影中驚心動魄的戰爭場面，讓觀眾看了直呼過癮",
      "B": "《哈利波特》敘事緊湊，情節波瀾跌起，對話傳神，是一部精彩的小說",
      "C": "索馬利亞好戰團體所發起的恐怖暴行，令全世界的民眾義奮填膺",
      "D": "巴基斯坦、以色列兩國各在邊境上部暑重兵，形勢箭拔努張，戰爭一觸即發"
    },
    "answer": "A"
  },
  {
    "question": "下列是〈鴻門宴〉中敘述范增見劉邦伺機回營的反應，請判斷畫雙線處所描寫范增的心情是：項王則受璧，置之坐上。亞父受玉斗，置之地，拔劍撞而破之，曰：「唉！豎子不足與謀，奪項王天下者，必沛公也，吾屬今為之虜矣！」",
    "options": {
      "A": "陶醉在虛假的勝利之中",
      "B": "縱虎歸山的憤怒失望",
      "C": "感到危機四伏的恐懼",
      "D": "愧對江東父老的悔恨"
    },
    "answer": "B"
  },
  {
    "question": "下列「　」內的詞語，意義前後相同的是：",
    "options": {
      "A": "萬物作焉而「不辭」／大禮「不辭」小讓",
      "B": "所以遣將守關者，備他盜之出入與「非常」也／古者富貴而名磨滅，不可勝記，唯倜儻「非常」之人稱焉",
      "C": "鮮不「拂然」而怒，何今分類至於此極耶／留之不可，「拂然」逕去",
      "D": "沛公「不勝」桮杓，不能辭／此人既出大言，必有勇略；試教出馬，如其「不勝」，責之未遲"
    },
    "answer": "C"
  },
  {
    "question": "下列各組「　」中的字，讀音兩兩相同的是：",
    "options": {
      "A": "「砉」然／「騞」然",
      "B": "「謋」然／「磔」刑",
      "C": "「躊」躇／《「檮」杌》",
      "D": "大「軱」／「瓠」瓜"
    },
    "answer": "A"
  },
  {
    "question": "「怎麼了，虞姬？有人來劫營了麼？」「沒有，沒有。可是有比這個更可怕的。大王，你聽。」他們立在帳篷的門邊。〈羅敷姐〉已經成了尾聲，然而合唱的兵士更多了，那悲哀的，簡單的節拍從四面山腳下悠悠揚揚地傳過來。「是江東的俘虜在懷念著家鄉？」在一陣沉默之後，項王說。「大王，這歌聲是從四面傳來的。」「啊，漢軍中的楚人這樣—這樣多麼？」在一陣死一般的沉寂裡，只有遠遠的幾聲馬嘶。「難道—難道劉邦已經盡得楚地了？」虞姬的心在絞痛，當她看見項王倔強的嘴唇轉成了白色，他的眼珠發出冷冷的玻璃一樣的光輝，那雙眼睛向前瞪著的神氣是那樣的可怕，使她忍不住用她寬大的袖子去掩住它。她能夠覺得他的睫毛在她的掌心急促地翼翼扇動，她又覺得一串冰涼的淚珠從她手裡一直滾到她的臂彎裡，這是她第一次知道那英雄的叛徒也是會流淚的動物。（張愛玲〈霸王別姬〉）有關上文敘述，最適當的是：",
    "options": {
      "A": "文中的主角是三國時代的重要人物",
      "B": "本文從虞姬的女性角度透視項羽的內心世界",
      "C": "本文的項羽頑強抗敵、英氣勃發",
      "D": "本段情節即為後代常見成語「破釜沉舟」的由來"
    },
    "answer": "B"
  },
  {
    "question": "〈鴻門宴〉中，楚漢兩派人馬各有其支持對象，下列語句所呈現的立場，與其他三者不同的是：",
    "options": {
      "A": "沛公左司馬曹無傷使人言於項羽曰：「沛公欲王關中，使子嬰為相，珍寶盡有之。」",
      "B": "（沛公）曰：「吾入關，秋毫不敢有所近，籍吏民、封府庫而待將軍。所以遣將守關者，備他盜之出入與非常也。」",
      "C": "（樊噲）曰：「今沛公先破秦，入咸陽，毫毛不敢有所近，封閉宮室，還軍霸上，以待大王來。故遣將守關者，備他盜出入與非常也。」",
      "D": "（項伯）因言曰：「沛公不先破關中，公豈敢入乎？今人有大功而擊之，不義也，不如因善遇之。」"
    },
    "answer": "A"
  },
  {
    "question": "〈項羽本紀〉選取項羽一生三件大事作詳細的描寫，下列說明最不適當的是：",
    "options": {
      "A": "「鉅鹿之戰」寫項羽叱吒風雲、所向無敵的勇武",
      "B": "「鴻門宴」寫出項羽成敗既定、不可抗逆之天命",
      "C": "「垓下之圍」寫出他的英雄氣概、磊落胸懷和悲劇結局",
      "D": "由此可見《史記》善於通過具體的事件，表現人物的性格"
    },
    "answer": "B"
  },
  {
    "question": "在並列式合義複詞中，若詞義偏向某一詞素，稱為「偏義複詞」。其偏向哪一義，須視「語境」（文句脈絡）而定。下列對「　」內詞語的解說，最適當的是：",
    "options": {
      "A": "人情同於懷土兮，豈「窮達」而異心：偏向「達」之義",
      "B": "陟罰臧否，不宜「異同」：偏向「同」之義",
      "C": "所以遣將守關者，備他盜之「出入」與非常也：偏向「入」之義",
      "D": "今天下三分，益州疲弊，此誠「危急」之秋也：偏向「危」之義"
    },
    "answer": "C"
  },
  {
    "question": "下列「　」中的成語，運用錯誤的是：",
    "options": {
      "A": "小華一直敢於直言急諫，實話實說，「突梯滑稽」的膽識深受上級賞識",
      "B": "陳教授在世時崇高的風範和品格，實無愧於輓聯上「高山仰止」這四個字",
      "C": "三十年來，受過他獎助的學子「不可勝數」。許多學生畢業後，還親自回來向他致謝",
      "D": "小明向來沉靜寡言，沒想到第一次在公聽會上發言便「一鳴驚人」，犀利的評論令全場折服"
    },
    "answer": "A"
  },
  {
    "question": "〈庖丁解牛〉：「庖丁為文惠君解牛。手之所觸，肩之所倚，足之所履，膝之所踦，砉然響然，奏刀騞然，莫不中音：合於〈桑林〉之舞，乃中〈經首〉之會。」關於上列文字，敘述正確的是：",
    "options": {
      "A": "從視覺、聽覺兩方面，形容解牛的技藝純熟高超",
      "B": "「砉然」、「騞然」以玉、石碰擊的清脆形容牛體肢解時的聲響",
      "C": "以寫實手法記述血腥複雜的解牛動作",
      "D": "為展現庖丁解牛的高超技術，文惠君特別命人奏樂伴舞以助興"
    },
    "answer": "A"
  },
  {
    "question": "下列各組「　」內的文字，意義前後相同的是：",
    "options": {
      "A": "諮諏「善」道，察納雅言／楚左尹項伯者，項羽季父也，素「善」留侯張良",
      "B": "「去」國懷鄉，憂讒畏譏／欲呼張良與俱「去」",
      "C": "願伯具言臣之不敢「倍」德也／故事半古之人，功必「倍」之",
      "D": "大行不「顧」細謹，大禮不辭小讓／乘驢而去，其行若飛，回「顧」已失"
    },
    "answer": "B"
  },
  {
    "question": "下列文句，用字完全正確的是：",
    "options": {
      "A": "日本自明治維新之後，由於不斷向外開疆擴土，與臨近國家產生不少衝突",
      "B": "韓國的明星個個能歌善演，衣著打扮具有品味，真是令人嚮往的時尚指標",
      "C": "這部電影情節緊湊、高潮疊起，成為賣座冠軍將指日可待",
      "D": "許多大樓用玻璃圍幕做外牆，彩光良好，但隔熱效果差，其實並不環保"
    },
    "answer": "B"
  },
  {
    "question": "下列「　」內的字，字形前後相同的是：",
    "options": {
      "A": "按劍而「ㄐㄧˋ」／餘「ㄐㄧˋ」猶存",
      "B": "折「ㄐㄧˇ」沉沙／方天畫「ㄐㄧˇ」",
      "C": "「ㄔㄣ」目切齒／薄面含「ㄔㄣ」",
      "D": "人為刀「ㄗㄨˇ」／光宗耀「ㄗㄨˇ」"
    },
    "answer": "B"
  },
  {
    "question": "有關〈庖丁解牛〉的文句，說明正確的是：",
    "options": {
      "A": "「臣之所好者，道也，進乎技矣」：庖丁自言解牛之技乃依正道而行",
      "B": "「官知止而神欲行」：物質享受有所節制，解牛的技術才能提升",
      "C": "「三年之後，未嘗見全牛也」：牛已悉數解盡，從此不再解牛",
      "D": "「技經肯綮之未嘗」：解牛之時游刃有餘，技術高超"
    },
    "answer": "D"
  },
   {
        "question": "《史記》是重要史籍，有關下列史書的作者或編者，以及其體例、歸類之說明，正確的是：",
        "options": {
            "A": "《春秋》：孔子，紀傳體，正史",
            "B": "《水經注》：柳宗元，國別史，正史",
            "C": "《資治通鑑》：司馬光，編年體，正史",
            "D": "《戰國策》：劉向，國別史，非正史"
        },
        "answer": "D"
    },
    {
        "question": "下列「　」內的詞語運用最適當的是：",
        "options": {
            "A": "如今我們淪為敵人的俘虜，只能接受「人為刀俎，我為魚肉」的命運了",
            "B": "王先生為人恭謹謙和，在公司處處表現「虎狼之心」，深受老闆的器重",
            "C": "鴻門宴上，范增、張良彼此「肝膽相照」展開一場驚心動魄的謀略戰",
            "D": "革命軍在彈盡糧絕的情況下已成「城狐社鼠」，不久勢必棄械投降"
        },
        "answer": "A"
    },
    {
        "question": "下列「　」內詞語並非指酒器的是：",
        "options": {
            "A": "沛公不勝「桮杓」",
            "B": "沛公奉「卮酒」為壽，約為婚姻",
            "C": "「玉斗」一雙，欲與亞父",
            "D": "范增數目項王，舉所佩「玉玦」以示之者三"
        },
        "answer": "D"
    },
    {
        "question": "下列有關先秦諸子的學說重點，敘述正確的是：",
        "options": {
            "A": "墨家主張不別親疏，不殊貴賤，一斷於法，則親親尊尊之恩絕矣",
            "B": "荀子研究人性，認為人性本惡，必須靠後天人為力量改變，與弟子李斯、韓非都是法家重要人物",
            "C": "莊子是道家的學者，主張放任無為，反璞歸真",
            "D": "《呂氏春秋》由呂不韋獨力完成，是兼容各家思想的雜家鉅作"
        },
        "answer": "C"
    },
    {
        "question": "關於下文的寫作用意，下列敘述最切合的選項是：",
        "options": {
            "A": "外在條件無可改變，應自我充實以提升地位",
            "B": "價值標準並非絕對，應以豁達之心看待一切",
            "C": "世間事物皆非永恆，保持平靜才能無往不利",
            "D": "面對他人主觀批評，不宜過度執著以免受傷"
        },
        "answer": "B"
    },
    {
        "question": "閱讀下列二段文字，敘述正確的是：",
        "options": {
            "A": "甲的理想是安民，乙的理想是得民心",
            "B": "甲乙都強調滿足人民對養生與送死的需求",
            "C": "甲乙都主張行王道，但對於如何達成則看法不同",
            "D": "甲乙的養民之道雖異，但對國與國關係的看法則無不同"
        },
        "answer": "A"
    },
    {
        "question": "齊威王曰：「此鳥不飛則已，一飛沖天；不鳴則已，一鳴驚人。」他最有可能領悟的道理是：",
        "options": {
            "A": "當我活著，我要作生命的主宰，而不作他的奴隸",
            "B": "用狡計去害朋友的人，自己將陷於危險埋伏之中",
            "C": "容易發怒，是品格上最為顯著的弱點",
            "D": "尊重人不應該勝於尊重真理"
        },
        "answer": "A"
    },
    {
        "question": "曹丕在《典論．論文》中強調文學是不朽之盛事。司馬遷遭受宮刑，不以隱約而弗務，發憤著史，完成《史記》，被推為文史典範。下列敘述中的創作背景不屬於相同境況的是：",
        "options": {
            "A": "袁宏道在杭州寫下十六篇〈西湖雜記〉，成為晚明山水小品的佳作",
            "B": "柳宗元在永州寫下〈始得西山宴遊記〉，成為中國山水遊記的代表作",
            "C": "蘇轍在筠州寫下〈黃州快哉亭記〉，成為臺閣名勝記典範",
            "D": "屈原在漢北寫下〈離騷〉，為中國辭賦體名篇"
        },
        "answer": "A"
    },
    {
        "question": "下列有關樊噲於鴻門宴上言辭的闡述，說明最適當的是：",
        "options": {
            "A": "「故遣將守關者，備他盜出入與非常也」：所以派遣將士守關，是為了防備別處盜賊的入侵和突如其來的變故",
            "B": "「而聽細說，欲誅有功之人」：聽信後宮的言論而打算誅殺有功的人",
            "C": "「此亡秦之續耳」：這是延續先前消滅秦朝的作法",
            "D": "「竊為大王不取也」：我私自替大王您處理了棘手的事"
        },
        "answer": "A"
    },
    {
        "question": "老子主張人處世間若要逍遙自在，應當採取「無為」的態度，不妄加作為。下列不屬於此種順其自然的態度的是：",
        "options": {
            "A": "甲戊",
            "B": "丙戊",
            "C": "乙丁",
            "D": "乙丙"
        },
        "answer": "B"
    },
    {
        "question": "「淳于髡者，齊之贅婿也。長不滿七尺，滑稽多辯，數使諸侯，未嘗屈辱。齊威王之時喜隱，好為淫樂長夜之飲，沉湎不治，委政卿大夫。百官荒亂，諸侯並侵，國且危亡，在於旦暮，左右莫敢諫。淳于髡說之以隱，曰：「國中有大鳥，止王之庭，三年不蜚，又不鳴。王知此鳥何也？」王曰：「此鳥不飛則已，一飛沖天；不鳴則已，一鳴驚人。」於是乃朝諸縣令長七十二人，賞一人，誅一人，奮兵而出。諸侯振驚，皆還齊侵地。威行三十六年。語在〈田完世家〉中。」關於上述引文的敘述，最不適當的是：",
        "options": {
            "A": "用先抑後揚筆法來寫淳于髡，先敘其出身微賤，再述其為齊國立功",
            "B": "淳于髡說之以隱，正是投齊威王所好，掌握遊說對象的好惡需求",
            "C": "齊威王領悟淳于髡的隱喻，於是重賞明罰，振奮國政",
            "D": "旨在說明君王聽取人臣言論時，應慎思明辨，避免受到巧言的迷惑"
        },
        "answer": "D"
    },
    {
        "question": "〈鴻門宴〉：「當是時，項羽兵四十萬，在新豐鴻門；沛公兵十萬，在霸上。」意謂：",
        "options": {
        "A": "楚河漢界，勢不兩立",
        "B": "兵力懸殊，一觸即發",
        "C": "分據兩處，互為犄角",
        "D": "進退兩難，僵持不下"
        },
        "answer": "B"
    },
    {
        "question": "下列文字出自司馬遷〈項羽本紀〉，文意排列順序最適當的是：夫秦失其政，陳涉首難，豪傑蠭起，甲、然羽非有尺寸，乘勢起隴畝之中， 乙、分裂天下而封王侯， 丙、政由羽出，號為『霸王』 丁、三年，遂將五諸侯滅秦， 戊、相與並爭，不可勝數。位雖不終，近古以來，未嘗有也。（《史記．項羽本紀贊》）",
        "options": {
        "A": "乙戊丙甲丁",
        "B": "戊丁丙甲乙",
        "C": "戊甲丁乙丙",
        "D": "乙丁丙戊甲"
        },
        "answer": "C"
    },
    {
        "question": "依據文意，甲、乙、丙、丁排列順序最適當的是：漢有善騎射者樓煩，楚挑戰三合，樓煩輒射殺之。項王大怒，甲、樓煩目不敢視，手不敢發 乙、項王瞋目叱之 丙、乃自被甲持戟挑戰。樓煩欲射之 丁、遂走還入壁，不敢復出（《史記．項羽本紀》）",
        "options": {
        "A": "丙乙甲丁",
        "B": "甲丙丁乙",
        "C": "乙甲丙丁",
        "D": "丁丙甲乙"
        },
        "answer": "A"
    },
    {
        "question": "下列文句「　」內的成語使用最適當的是：",
        "options": {
        "A": "立委選舉日接近中，每位候選人皆展現「虎狼之心」，欲爭奪一席之地",
        "B": "他雖說得冠冕堂皇，我們卻仍聽出這是「項莊舞劍」，別有用心",
        "C": "我方軍隊在力克敵軍之後，仍然「按劍而跽」，持續追擊",
        "D": "想起凶手的殘暴，不禁令人「唾面自乾」"
        },
        "answer": "B"
    },
    {
        "question": "〈鴻門宴〉一文中將人物的性格刻劃得絲絲入扣，下面這段文字則點出了各人的才幹，請仔細閱讀後回答問題：高祖置酒雒陽南宮。高祖曰：「列侯諸將無敢隱朕，皆言其情。吾所以有天下者何？項氏之所以失天下者何？」高起、王陵對曰：「陛下慢而侮人，項羽仁而愛人。然陛下使人攻城略地，所降下者因以予之，與天下同利也。項羽妒賢嫉能，有功者害之，賢者疑之，戰勝而不予人功，得地而不予人利，此所以失天下也。」高祖曰：「公知其一，未知其二。夫運籌策帷帳之中，決勝於千里之外，吾不如子房；鎮國家，撫百姓，給餽饟，不絕糧道，吾不如蕭何；連百萬之軍，戰必勝，攻必取，吾不如韓信。此三者，皆人傑也，吾能用之，此吾所以取天下也。項羽有一范增而不能用，此其所以為我擒也。」（《史記．高祖本紀》）根據文中所述，下列人物的特質，說明正確的是：",
        "options": {
        "A": "張良：細密周到，擅長後勤補給，提供資源",
        "B": "蕭何：衝鋒陷陣，是傑出的軍事將領",
        "C": "韓信：機智能謀，善於擘劃謀略",
        "D": "劉邦：知人善任"
        },
        "answer": "D"
    },
    {
        "question": "關於下文，敘述最適當的是：項王曰：「賜之彘肩。」則與一生彘肩。樊噲覆其盾於地，加彘肩上，拔劍切而啗之。項王曰：「壯士！能復飲乎？」樊噲曰：「臣死且不避，卮酒安足辭！夫秦王有虎狼之心，殺人如不能舉，刑人如恐不勝，天下皆叛之。懷王與諸將約曰：『先破秦入咸陽者王之。』今沛公先破秦，入咸陽，毫毛不敢有所近，封閉宮室，還軍霸上，以待大王來。故遣將守關者，備他盜出入與非常也。勞苦而功高如此，未有封侯之賞，而聽細說，欲誅有功之人，此亡秦之續耳！竊為大王不取也。」項王未有以應，曰：「坐！」樊噲從良坐。（司馬遷〈鴻門宴〉）",
        "options": {
        "A": "從項羽賜生彘肩、酒及賜座，可知項羽雖為霸王，但社交禮節極佳",
        "B": "樊噲喝酒吃肉的豪邁，讓自詡為英雄的項羽甘拜下風",
        "C": "樊噲怒斥項羽恩將仇報，不懂劉邦的苦心，淪於暴秦之流",
        "D": "項王未有以應可知項羽心態的自負，對於無理的提問不予回應"
        },
        "answer": "C"
    },
    {
        "question": "人或說項王曰：「關中阻山河四塞，地肥饒，可都以霸。」項王見秦宮皆以燒殘破，又心懷思欲東歸，曰：「富貴不歸故鄉，如衣繡夜行，誰知之者！」說者曰：「人言楚人沐猴而冠耳，果然。」項王聞之，烹說者。（《史記．項羽本紀》）",
        "options": {
        "A": "項羽考慮關中物產豐隆，適合定都；而其部屬則思鄉情切，希望項羽返鄉",
        "B": "項羽認為江東父老等待他回去拯救，為了故鄉人民屬意定都江東",
        "C": "說者諷刺項羽個性急躁目光短淺，成不了大事，而激怒項羽最後被殺",
        "D": "項羽為了衣錦還鄉炫耀而在外拚搏，故燒了秦國關中故土，有破釜沉舟之意"
        },
        "answer": "C"
    },
    {
        "question": "請閱讀下面這篇選自《莊子》的文章後，回答問題：朝菌不知晦朔，蟪蛄不知春秋：此小年也。楚之南有冥靈者，以五百歲為春，五百歲為秋；上古有大椿者，以八千歲為春，以八千歲為秋：此大年也。而彭祖乃今以久特聞，眾人匹之，不亦悲乎！（《莊子．逍遙遊》）下列關於本文內容的說明，正確的是：",
        "options": {
        "A": "現在常引「蟪蛄不知春秋」一語，意近於「管窺蠡測」",
        "B": "莊子慨嘆生命有限，應把握光陰，充實自己",
        "C": "人們認為彭祖壽命太短",
        "D": "「眾人匹之」的「匹」義同於「一生一旦，天然佳匹」的「匹」"
        },
        "answer": "A"
    },
    {
        "question": "《史記．酷吏列傳》：「張湯者，杜人也。其父為長安丞，出，湯為兒守舍。還而鼠盜肉，其父怒，笞湯。湯掘窟得盜鼠及餘肉，劾鼠掠治，傳爰書，訊鞫論報，并取鼠與肉，具獄磔堂下。其父見之，視其文辭如老獄吏，大驚，遂使書獄。」張湯父親之所以大驚，乃因：",
        "options": {
        "A": "張湯肢解老鼠極為凶殘",
        "B": "張湯寫的審囚文書非常老練",
        "C": "張湯向官府舉發父親的暴行",
        "D": "張湯與老鼠爭奪餘肉"
        },
        "answer": "B"
    },
    {
        "question": "「激問」雖採問句形式，但實則無疑而問、明知故問，意在強調預設的觀點，故答案都在問題的反面，如〈鴻門宴〉：「臣死且不避，卮酒安足辭」。下列同樣屬於激問句的是：",
        "options": {
        "A": "誰為大王為此計者",
        "B": "若是者何也？快意當前，適觀而已矣",
        "C": "壯士！能復飲乎",
        "D": "然則臺灣無史，豈非臺人之痛歟"
        },
        "answer": "D"
    },
    {
        "question": "《史記．滑稽列傳》中的人物，遊說君王多用□□□□，□□□□的方式，故名之為「滑稽」。缺空處適合填入的是：",
        "options": {
        "A": "詼諧有趣，善用諷諭",
        "B": "慷慨激昂，以理勝人",
        "C": "卑言屈詞，戰戰兢兢",
        "D": "逢迎奉承，阿諛取容"
        },
        "answer": "A"
    },
    {
        "question": "下文摘錄自陳鼓應先生〈養生主—精神生命的闡揚〉一文，文中缺空部分填入莊子原文。填入錯誤的是：　「從宰牛之方喻養生之理，由養生之理喻處世之道。莊子以牛的筋骨盤結比喻處世之繁複；以庖丁在實踐中領悟宰牛（(Ａ)進乎技矣）的道理，啟迪我們處世不能強行妄為，要遵循客觀規律；以庖丁遇到筋骨盤結的難為之處所採取的（(Ｂ)怵然為戒），凝神專注的心態，告誡我們遇到困難，行為更應戒惕、專注；又以庖丁成功後（(Ｃ)躊躇滿志）的喜悅和（(Ｄ)善刀而藏）的謹慎，教導我們凡事應內斂，不宜過於張揚。」",
        "options": {
        "Ａ": "進乎技矣",
        "Ｂ": "怵然為戒",
        "Ｃ": "躊躇滿志",
        "Ｄ": "善刀而藏"
    },
        "answer": "Ａ"
    },
    {
        "question": "下列有關〈庖丁解牛〉一文的說明，正確的是：",
        "options": {
        "Ａ": "莊子藉庖丁解牛之神乎其技，闡釋「技進乎道」之理",
        "Ｂ": "「始臣之解牛之時，所見無非牛者；三年之後，未嘗見全牛也」可見庖丁解牛的技巧需要時間、經驗的累積",
        "Ｃ": "庖丁以刀喻處世之道，以牛體喻人，認為須依乎天理才可養生",
        "Ｄ": "庖丁的刀刃「無厚」，且解牛後必「善刀而藏」，故知其技神妙在於「工欲善其事，必先利其器」"
        },
        "answer": "Ｂ"
    },
    {
        "question": "〈庖丁解牛〉：「依乎天理，批大郤，導大窾，因其固然。」意謂：",
        "options": {
        "Ａ": "凡事靠經驗，從大處著手",
        "Ｂ": "處事要掌握規律，順應自然",
        "Ｃ": "依牛隻大小的順序解牛",
        "Ｄ": "遇到艱難之處，必須固守師法，小心行事"
        },
        "answer": "Ｂ"
    },
    {
        "question": "以下各組「　」內的字，讀音相同的是：甲、「瞋」目／「滇」池 乙、「要」項伯／全「要」領 丙、「數」目項王／會「數」而禮勤 丁、「砧」板／「玷」汙 戊、玉「玦」／連「袂」。",
        "options": {
        "Ａ": "甲乙",
        "Ｂ": "乙丙",
        "Ｃ": "丙丁",
        "Ｄ": "丁戊"
        },
        "answer": "Ｂ"
    },
    {
        "question": "下列關於〈鴻門宴〉的文意說明，最適當的是：",
        "options": {
        "Ａ": "「今入關，財物無所取，婦女無所幸」意謂秦法苛刻，使劉邦即使入關，也不敢輕舉妄動",
        "Ｂ": "「『今者有小人之言，令將軍與臣有郤。』項王曰：『此沛公左司馬曹無傷言之，不然，籍何以至此？』」可知項羽性格直率，缺乏謀略",
        "Ｃ": "「夫秦王有虎狼之心，殺人如不能舉，刑人如恐不勝」意謂秦王治國，賞罰分明，故百姓樂於守法而天下無事",
        "Ｄ": "「今者項莊拔劍舞，其意常在沛公也」可知項莊舞劍的目的在於吸引劉邦注意，為日後投靠埋下伏筆"
        },
        "answer": "Ｂ"
    },
    {
        "question": "下列敘述所吟詠的人物，最適當的是：",
        "options": {
        "Ａ": "「五世報韓終有恨，一時興漢本無心」描寫劉邦",
        "Ｂ": "「不握兵權只坐籌，苦其萬戶乞討留。縱令不早尋仙去，天子終無賜脯醢」描寫伍子胥",
        "Ｃ": "「寫鬼寫妖高人一等，刺貪刺虐入骨三分」描寫吳敬梓",
        "Ｄ": "「英傑那堪屈下僚，便栽門柳事蕭條。鳳凰不共雞爭食，莫怪先生懶折腰」描寫陶淵明"
        },
        "answer": "Ｄ"
    },
    {
        "question": "庖丁解牛最後到達「游刃有餘」的境界，所經歷的階段依次為何：",
        "options": {
        "Ａ": "未嘗見全牛所見無非牛官止神行",
        "Ｂ": "官止神行未嘗見全牛所見無非牛",
        "Ｃ": "官止神行所見無非牛未嘗見全牛",
        "Ｄ": "所見無非牛未嘗見全牛官止神行"
        },
        "answer": "Ｄ"
    },
    {
        "question": "有關〈庖丁解牛〉一文的敘述，正確的是：",
        "options": {
        "Ａ": "以「牛」比喻社會，以「刀」喻人，「技經肯綮」比喻世情之繁複",
        "Ｂ": "文惠君從庖丁解牛中領悟了「見可而進，知難而退」的養生之道",
        "Ｃ": "以「顧盼自得，如土委地」強調技藝雖神奇，也要小心謹慎，一絲不苟",
        "Ｄ": "「以神遇而不以目視，官知止而神欲行」是運用感官摹寫來具體說明解牛時的美妙境界"
        },
        "answer": "Ａ"
    },
    {
        "question": "「柔弱勝剛強」是《老子》中的名句，其深刻意涵不僅是抽象哲理，也具有現實運用效能。下列選項皆出自《孫子兵法》，其所表達的思想，與老子相同的是：",
        "options": {
        "Ａ": "知可以戰與不可以戰者勝",
        "Ｂ": "不知三軍之事，而同三軍之政者，則軍士惑矣",
        "Ｃ": "善用兵者，屈人之兵，而非戰也；拔人之城，而非攻也；毀人之國，而非久也",
        "Ｄ": "水因地而制流，兵因敵而制勝。故兵無常勢，水無常形；能因敵變化而取勝，謂之神"
        },
        "answer": "Ｃ"
    },
    {
        "question": "項王乃與范增急圍滎陽。漢王患之，乃用陳平計間項王。項王使者來，為太牢具，舉欲進之。見使者，佯驚愕曰：『吾以為亞父使者，乃反項王使者。』更持去，以惡食食項王使者。使者歸報項王。項王乃疑范增與漢有私，稍奪之權。范增大怒，曰：『天下事大定矣，君王自為之，願賜骸骨歸卒伍！』項王許之。行未至彭城，疽發背而死。」（《史記．項羽本紀》）有關此文的敘述，最適當的是：",
        "options": {
        "Ａ": "「漢王患之」：意謂漢王是項羽的心腹大患",
        "Ｂ": "「乃用陳平計間項王」：意謂採用陳平的計策離間項王與范增之間的關係",
        "Ｃ": "「以惡食食項王使者」，句中二「食」字詞性相同",
        "Ｄ": "「願賜骸骨歸卒伍」：意謂願為君王效死盡忠，馬革裹屍"
        },
        "answer": "Ｂ"
    },
    {
        "question": "下列「　」內的詞，其詞性與「范增數『目』項王」相同的是：甲、沛公「軍」霸上，未得與項羽相見 乙、君子不「齒」，今其智乃反不能及 丙、「蠶」食諸侯，使秦成帝業 丁、常以身「翼」蔽沛公 戊、「苗」而不秀者，有矣夫！秀而不實者，有矣夫",
        "options": {
            "A": "甲乙戊",
            "B": "甲乙丁",
            "C": "丙丁戊",
            "D": "乙丙丁"
        },
        "answer": "A"
    },
    {
        "question": "「孔子明王道，干七十餘君，莫能用，故西觀周室，論史記舊聞，興於魯而次《春秋》。上記隱（公），下至哀（公）之獲麟。……七十子之徒，口受其傳指，為有所刺譏褒諱挹損之文辭，不可以書見也。魯君子左丘明，懼弟子人人異端，各安其意，失其真，故因孔子史記，具論其語，成《左氏春秋》。」（《史記．十二諸侯年表．序》）根據上述《史記》文字，下列敘述最適當的是：",
        "options": {
            "A": "本文主旨在陳述《左氏春秋》的由來，表彰左丘明對史學的貢獻",
            "B": "文中表示孔子在《春秋》大量寫下當時人物的過失、責備或讚揚",
            "C": "左丘明是孔門弟子，因而能忠於孔子本意對《春秋》進行補充闡述",
            "D": "「故因孔子史記」的「史記」指的是《春秋》"
        },
        "answer": "D"
    },
    {
        "question": "有關〈江海所以能為百谷王〉的釋義，正確的是：",
        "options": {
            "A": "聖人欲上民，必以言下之：想要占有優勢地位，必須懂得以言論控制百姓",
            "B": "欲先民，必以身後之：想要率領人民，必須先成為人民的榜樣",
            "C": "聖人處上而民不重：聖人雖位高權重，人民卻願意遵從領導",
            "D": "處前而民不害：身居萬民之前，而人民不覺得受到妨害"
        },
        "answer": "D"
    },
    {
        "question": "〈庖丁解牛〉：「方今之時，臣以神遇而不以目視，官知止而神欲行。」意謂庖丁解牛時：",
        "options": {
            "A": "精神第一，物質其次",
            "B": "偶爾沒全神貫注，也能夠解牛",
            "C": "全神貫注，所見無非牛",
            "D": "依乎天理，順應自然，已得心應手"
        },
        "answer": "D"
    },
    {
        "question": "下列各組「　」內的字，讀音前後相同的是：",
        "options": {
            "A": "然後知吾「嚮」之未始遊，遊於是乎始／旦日「饗」士卒",
            "B": "范增「數」目項王／忽逢桃花林，夾岸「數」百步",
            "C": "交「戟」之衛士／按劍而「跽」",
            "D": "諮「諏」善道，察納雅言／入荒「陬」之地"
        },
        "answer": "D"
    },
    {
        "question": "下列贈禮場合與題辭意涵的配合，最恰當的是：",
        "options": {
            "A": "國師贈送刻有「壞崖破巖之水，源自涓涓」的鏡匣，提醒君王不可忽視細微民意",
            "B": "員工贈送書有「上善若水，水利萬物而不爭」的匾額，期盼公司業績蒸蒸日上，一路長紅",
            "C": "老師贈送繡有「曾經滄海難為水，除卻巫山不是雲」的紳帶，勉勵學生學習",
            "D": "好友贈送題有「同是天涯淪落人，相逢何必曾相識」的筆座，祝福畢業同學鵬程萬里"
        },
        "answer": "A"
    },
    {
        "question": "〈鴻門宴〉：「范增說項羽曰：『沛公居山東時，貪於財貨，好美姬。今入關，財物無所取，婦女無所幸，此其志不在小。』」促使劉邦轉變的哲理最可能是：",
        "options": {
            "A": "大人者，言不必信，行不必果",
            "B": "欲速，則不達；見小利，則大事不成",
            "C": "君子之德，風；小人之德，草，草上之風，必偃",
            "D": "流水之為物也，不盈科不行。君子之志於道也，不成章不達"
        },
        "answer": "B"
    },
    {
        "question": "〈鴻門宴〉：「若屬皆且為所虜」；〈晚遊六橋待月記〉：「余時為桃花所戀」。有關這兩句的分析，最適當的是：",
        "options": {
            "A": "都運用致使動詞",
            "B": "兩句語法截然不同，前者為被動句，後者為主動句",
            "C": "兩句的「為」都指「對、向」",
            "D": "由後者可推知「若屬皆且為所虜」的「為」字之後省略了「之」字"
        },
        "answer": "D"
    },
    {
        "question": "甲、伯夷死名於首陽山下，盜跖死利於東陵之上，二人者，所死不同，其於殘生傷性均也。\n乙、古有伯夷、叔齊者，武王讓以天下而弗受，二人餓死首陽之陵。若此臣者，不畏重誅，不利厚賞，不可以罰禁也，不可以賞使也，此之謂無益之臣也。\n丙、伯夷，目不視惡色，耳不聽惡聲。非其君不事，非其民不使。治則進，亂則退。橫政之所出，橫民之所止，不忍居也。……故聞伯夷之風者，頑夫廉，懦夫有立志。」\n先秦各家對於伯夷的看法，可以反映其學說立場。閱讀上列甲、乙、丙三家的言論後，推斷他們分別屬於：",
        "options": {
            "A": "甲是道家，乙是法家，丙是儒家",
            "B": "甲是道家，乙是儒家，丙是法家",
            "C": "甲是法家，乙是道家，丙是儒家",
            "D": "甲是法家，乙是儒家，丙是道家"
        },
        "answer": "A"
    },
    {
        "question": "有關莊子「死生如一」的齊物觀，下列敘述錯誤的是：",
        "options": {
            "A": "莊子認為宇宙一切事物的自然現象都是絕對的關係",
            "B": "宇宙有白天必有黑暗，不斷地循環，這都是自然的現象",
            "C": "莊子認為人類的生命有如宇宙，生與死就像是日夜的變化一樣，所以生不足以喜，死也不足以悲",
            "D": "「萬物一齊，孰短孰長」正是以齊物的觀點超越事物的相對"
        },
        "answer": "A"
    },
    {
        "question": "下列各組「　」內的字，意義前後相同的是：",
        "options": {
          "A": "樊噲「從」良坐／沛公旦日「從」百餘騎來見",
          "B": "沛公不「勝」桮杓／刑人如恐不「勝」",
          "C": "今者出，未「辭」也／大禮不「辭」小讓",
          "D": "「會」其怒，不敢獻／「會」丞相與王有隙，格其事不下"
        },
        "answer": "D"
      },
      {
        "question": "下列關於〈鴻門宴〉一文「　」內文意的闡釋，最適當的是：",
        "options": {
          "A": "「吾入關，秋毫不敢有所近，籍吏民、封府庫而待將軍」：軍紀嚴明，關中治安良好",
          "B": "「沛公大驚曰：『為之奈何？』……沛公默然，曰：『固不如也，且為之奈何？』」：由驚慌無助轉為冷靜的心理狀態",
          "C": "「行略定秦地，函谷關有兵守關，不得入。又聞沛公已破咸陽，項羽大怒」：項羽與劉邦同為義軍將領，見劉邦技高一籌而不滿",
          "D": "「項王曰：『壯士！賜之卮酒。』則與斗卮酒。噲拜謝，起，立而飲之。項王曰：『賜之彘肩。』則與一生彘肩。樊噲覆其盾於地，加彘肩上，拔劍切而啗之。」：表現樊噲貪杯好酒，粗魯無文。"
        },
        "answer": "B"
      },
      {
        "question": "《老子》是道家的經典，試從下列各段文字的意涵判斷，「不屬於」道家思想的是：",
        "options": {
          "A": "失道而後德，失德而後仁，失仁而後義，失義而後禮",
          "B": "罪莫大於可欲，禍莫大於不知足，咎莫大於欲得",
          "C": "道常無為而無不為，侯王若能守之，萬物將自化",
          "D": "馬者，所以命形也；白者，所以命色也。命色者非命形也。故曰白馬非馬。"
        },
        "answer": "D"
      },
      {
        "question": "老子與莊子均為道家代表人物。下列有關二人的比較，正確的是：",
        "options": {
          "A": "老子曾任蒙邑漆園吏；莊子做過守藏室之史",
          "B": "孔子曾向老子問過禮；莊子則與孟子往來，時相論辯",
          "C": "老子思想以道為核心，認為道是萬物的本源；莊子主張順應自然，認為萬物齊一",
          "D": "戰國以後，雜家結合老子學說形成「黃老治術」；莊子追求精神自由，對魏晉玄學產生不少影響。"
        },
        "answer": "C"
      },
      {
        "question": "下列關於史書的相關知識，最適當的是：",
        "options": {
          "A": "紀傳體必定為正史，正史必定為紀傳體",
          "B": "第一部編年體通史為《臺灣通史》",
          "C": "十三經的《尚書》亦是史書",
          "D": "國別史之祖為《國語》，又稱《春秋內傳》"
        },
        "answer": "C"
      },
      {
        "question": "請閱讀下列各段先秦諸子的文字，從思想內涵、寫作手法等角度判斷，並選出對應正確的選項：\n甲、夫使民有功與無功俱賞者，此亂之道也。夫發五苑而亂，不如棄棗蔬而治\n乙、老吾老，以及人之老；幼吾幼，以及人之幼。天下可運於掌\n丙、若使天下兼相愛，愛人者若愛其身，猶有不孝者乎？視父、兄與君若其身，惡施不孝？猶有不慈者乎\n丁、馬者，所以命形也；白者，所以命色也。命色者非命形也。故曰白馬非馬。\n戊、既以為人，己愈有；既以與人，己愈多。天之道，利而不害。聖人之道，為而不爭。",
        "options": {
          "A": "法家／儒家／墨家／道家／儒家",
          "B": "法家／儒家／墨家／名家／道家",
          "C": "道家／法家／儒家／名家／墨家",
          "D": "道家／儒家／墨家／名家／法家"
        },
        "answer": "B"
      },
      {
        "question": "下列各組「　」內的字，讀音前後相同的是：",
        "options": {
          "A": "不勝「桮」杓／「掊」擊",
          "B": "切而「啗」之／菡「萏」",
          "C": "交「戟」衛士／桂「棹」",
          "D": "「饗」士卒／「嚮」往"
        },
        "answer": "B"
      },
      {
        "question": "在閱讀以下雨弦〈喝下午茶去〉一詩後，選出相關敘述錯誤的選項：「喝下午茶去／聽閻王講生死學／輕鬆有趣／有時老莊來插一腳。／耶穌也來，釋迦牟尼也來／我享受著／人生的下午茶」：",
        "options": {
          "A": "聽閻王講「生死學」—將令人窒息畏懼的死亡問題，變成人生要學習的課題，意謂要轉換心情，調整心境，並以學習的態度來面對，才能增長智慧，提升生命境界",
          "B": "「老莊」、「耶穌」、「釋迦牟尼」都來一同享用下午茶—意謂死亡真正的意義不容易領略，即使是中西古代的智者或得道者也未必真懂，反映出身為人必須謙虛學習生命的意義",
          "C": "「插一腳」—藉著口語化的詞句反映出詩中主角的心情是輕鬆自在的，此與「輕鬆有趣」呼應，也與「喝下午茶」的心情呼應",
          "D": "「我享受著／人生的下午茶」—詩中的主角是某位不知名的亡靈，所以他的「人生」是說死後沒有恐怖與痛苦，是陽世之後的解脫，是另一種更灑脫自在而開闊自由的「人生」。"
        },
        "answer": "D"
      },
      {
        "question": "「激問」雖採問句形式，卻屬無疑而問、明知故問，意在強調預設的觀點。下列屬於激問句的是：",
        "options": {
          "A": "壯士！能復飲乎",
          "B": "誰習計會，能為文收責於薛者乎",
          "C": "沛公曰：君安與項伯有故",
          "D": "臣死且不避，卮酒安足辭。"
        },
        "answer": "D"
      },
      {
        "question": "閱讀下文，下列分析正確的是：\n這是一種很難醫治的病。老子說過幾句現代中國人大多聽不懂的話：「夫唯病病，是以不病」……現代中國人最大的病，就是已經失去了解自己、了解自己的病在哪裡的智慧。這種病，有個名稱叫做「妄」。\n「妄」者非但不曾真正地了解自己，同時也不曾真正了解別人。相反過來看，他之所以不真正了解自己，就是因為他不肯真正去了解別人。因為，只有真正去了解別人，才會真正知道自己的健康在哪裡而病在哪裡。\n我的朋友袁保新說過一句很有智慧的話：「一個人的人格是不是成熟，就看他除了知道自己之外，還知不知道別人。」當然，所謂「知道」，不是知道他做了什麼官，家裡有多少錢這麼表面的事，而是知道別人的感受和思想，知道別人生命人格。一個人只有通過對各個生命人格的感通與了解，才能照見自己生命人格的貧瘠，因而讓自己豐富起來。（節錄自顏崑陽〈他們的智慧就是太陽〉）",
        "options": {
          "A": "作者引用老子的話來說明古人比現代人更能感通別人生命",
          "B": "妄者既不了解自己也不了解別人的感受、思想和生命人格",
          "C": "只有真正了解別人，自己才能身體健康起來",
          "D": "袁保新強調要真正了解別人，要從其身分地位開始。"
        },
        "answer": "B"
      },
      {
        "question": "關於莊子的思想，下列敘述錯誤的是：",
        "options": {
          "A": "處世哲學：認為在混亂的人世，應順天而任自然，破除「我執」以待人接物，才能遊世遠害",
          "B": "政治主張：法令、權術、權力三位一體，才能發揮整體功能，而全面鞏固政權",
          "C": "齊物思想：破除對待、消解時間與空間的觀念，達到天地、物我合一的境界",
          "D": "養生觀：明白死生有如循環，乃自然之理，不必執著"
        },
        "answer": "B"
      },
      {
        "question": "甲、及刻者為之，則無教化，去仁愛，專任刑法而欲以致治，至於殘害至親，傷恩薄厚 乙、以六藝為法，六藝經傳以千萬數，累世不能通其學，當年不能究其禮，故曰「博而寡要，勞而少功。」 丙、與時遷移，應物變化，立俗施事，無所不宜，指約而易操，事少而功多 以上是司馬談〈論六家要旨〉中對各家學說主張的評論，請選出與評論相符的學說派別：",
        "options": {
          "A": "墨家／法家／墨家",
          "B": "法家／儒家／道家",
          "C": "墨家／儒家／法家",
          "D": "道家／法家／儒家"
        },
        "answer": "B"
      },
      {
        "question": "唐諾〈英雄〉文中所謂「人在其間不見得需要特殊的英勇，尤其無須主動的英勇，你可以像個英雄選擇情熱的對抗，也可以不像個英雄選擇睿智的逃走（比齊魯的孔孟更處於殺戮亂世之地的老莊便勸我們這樣）」是指老莊思想中的：",
        "options": {
          "A": "順其自然，無為而治",
          "B": "清靜自守，齊物逍遙",
          "C": "煉丹成仙，抱殘守缺",
          "D": "與時遷移，佯狂避世"
        },
        "answer": "D"
      },
      {
        "question": "〈庖丁解牛〉：「每至於族，吾見其難為，怵然為戒，視為止，行為遲。」下列與此段文意最接近的是：",
        "options": {
          "A": "鷦鷯巢於深林，不過一枝；偃鼠飲河，不過滿腹",
          "B": "舉世而譽之而不加勸，舉世而非之而不加沮",
          "C": "雖天地之大，萬物之多，而唯蜩翼之知",
          "D": "竹心空，空以體道。君子見其心則思應用虛受者。"
        },
        "answer": "C"
      },
      {
        "question": "小班整理有關《史記》的說明，最適當的是：",
        "options": {
          "A": "《史記》首開「紀傳體」寫法，是正史之祖，同時也是斷代史之祖",
          "B": "「史記」一詞本為史書通稱，在漢代即成為《太史公書》之專名",
          "C": "分為〈本紀〉、〈世家〉、〈表〉、〈書〉、〈列傳〉五種體例，但書中有許多特殊之處，如項羽列入〈本紀〉，因為項羽雖未成帝業，但在秦亡漢興之際，曾一時號令天下；孔子列入〈世家〉是肯定孔子在教育文化的地位",
          "D": "《史記》文末的「太史公曰」，是延續《左傳》而來，主要是說明材料的來源，最重要的是對傳中人的評論"
        },
        "answer": "C"
      },
      {
        "question": "某書店舉辦心靈勵志類叢書特展，某生若想從書名挑選可能與道家理念較接近的書籍，你會建議的選單是：",
        "options": {
          "A": "甲乙丙戊",
          "B": "乙丙戊己",
          "C": "甲丁戊己",
          "D": "乙丙丁己"
        },
        "answer": "B"
      },
      {
        "question": "關於下文的解釋，最適當的是：\n酈食其為監門，曰：「諸將過此者多，吾視沛公大人長者。」乃求見說沛公。沛公方踞床，使兩女子洗足。酈生不拜，長揖，曰：「足下必欲誅無道秦，不宜踞見長者。」於是沛公起，攝衣謝之，延上坐。食其說沛公襲陳留，得秦積粟。乃以酈食其為廣野君，酈商為將，將陳留兵，與偕攻開封，開封未拔。西與秦將楊熊戰白馬，又戰曲遇東，大破之。（《史記．高祖本紀》）",
        "options": {
          "A": "沛公特意命兩女替酈食其洗腳，頗有表達其尊重賢才之意",
          "B": "酈食其閱人無數，故特意不拜以試沛公是否為明主",
          "C": "酈食其為沛公提供謀略，並且大破秦軍",
          "D": "沛公能得酈食其之幫助，是由於沛公能大方封賞，故酈食其知恩圖報"
        },
        "answer": "C"
      },
      {
        "question": "請閱讀以下引文，並回答問題：\n吾生也有涯，而知也無涯。以有涯隨無涯，殆已；已而為知者，殆而已矣！為善無近名，為惡無近刑。緣督以為經，可以保身，可以全生，可以養親，可以盡年。（《莊子．養生主》）\n下列關於本文內容的說明，正確的是：",
        "options": {
          "A": "本文的旨意為「生命有限，學海無涯，故人應努力向學」",
          "B": "莊子強調要「與人為善」",
          "C": "「緣督以為經」是這段文字的重要意旨",
          "D": "「養親」是指奉養父母"
        },
        "answer": "C"
      },
      {
        "question": "《老子》一書中多用「江」、「海」為喻，以闡述「謙遜」、「居下」的人生哲理。下列詩文中與江河相關的詞彙，並非用以指稱「自然界水道或水域」的是：",
        "options": {
          "A": "江海所以能為百谷王者，以其善下之",
          "B": "泰山不讓土壤，故能成其大；河海不擇細流，故能就其深；王者不卻眾庶，故能明其德",
          "C": "居廟堂之高，則憂其民；處江湖之遠，則憂其君",
          "D": "再要刑法加重，於心不忍，然而人心因此江河日下"
        },
        "answer": "C"
      },
      {
        "question": "先秦諸子的思想與文章各有其特色，請推斷下列甲乙丙丁的敘述分別出自：\n甲、夫堯、舜生而在上位，雖有十桀、紂不能亂者，則勢治也；桀、紂亦生而在上位，雖有十堯、舜而亦不能治者，則勢亂也。故曰︰「勢治者則不可亂，而勢亂者則不可治也。」\n乙、我無為，而民自化；我好靜，而民自正；我無事，而民自富；我無欲，而民自樸。\n丙、古者聖王以人之性惡，以為偏險而不正，悖亂而不治，是以為之起禮義，制法度，以矯飾人之情性而正之，以擾化人之情性而導之也。\n丁、棺三寸，足以朽體；衣衾三領，足以覆惡。以及其葬也，下毋及泉，上毋通臭，壟若參耕之畝，則止矣。死者既以葬矣，生者必無久哭，而疾而從事，人為其所能，以交相利也。",
        "options": {
          "A": "(a)　(b)　(c)　(d)",
          "B": "(a)　(c)　(b)　(d)",
          "C": "(b)　(d)　(a)　(c)",
          "D": "(d)　(c)　(b)　(a)"
        },
        "answer": "D"
      },
      {
    "question": "下列「　」內的詞語，詞義前後相同的是：",
    "options": {
      "A": "備他盜之出入與「非常」也／蓋世必有「非常」之人，然後有非常之事",
      "B": "而聽「細說」，欲誅有功之人／老殘便將一路所聞「細說」一遍",
      "C": "「旦日」饗士卒，為擊破沛公軍／「旦日」，客從外來，與坐談",
      "D": "備他盜之「出入」與非常也／每銀錢「出入」，俱是婁老伯做主，先君並不曾問"
    },
    "answer": "C"
  },
  {
    "question": "閱讀下列《史記．游俠列傳序》中的文字後，甲、乙、丙、丁中敘述適當的是：「韓子曰：『甲、□以文亂法，乙、而△以武犯禁。』二者皆譏，而學士多稱於世云。丙、至如以術取宰相、卿、大夫，輔翼其世主，功名俱著於春秋，固無可言者。丁、及若季次、原憲，閭巷人也，讀書懷獨行君子之德，義不苟合當世，當世亦笑之。」",
    "options": {
      "A": "甲、□中宜填入「儒」",
      "B": "乙、△中宜填入「墨」",
      "C": "丙、說明以權術取得高官的人，輔佐國君，左丘明已將他們的功名記載在《春秋》書上",
      "D": "丁、說明季次、原憲等游俠出身閭巷，能特立獨行，不同流合汙"
    },
    "answer": "B"
  },
  {
    "question": "下列「　」內的詞語運用最適當的是：",
    "options": {
      "A": "公司為了獎勳業績長紅，特地舉辦了「鴻門宴」，讓主管與員工賓主盡歡",
      "B": "戰國時期國與國之間波譎雲詭，許多外交上的周旋不過是「項莊舞劍」，背後另有籌謀",
      "C": "司法機關要審視被告的動機是否符合「人為刀俎，我為魚肉」，才能判決",
      "D": "老陳在服務業上班總是不修邊幅，令消費者有「大行不顧細謹」的感覺"
    },
    "answer": "A"
  },
  {
    "question": "以下各詞均出自〈庖丁解牛〉：甲、「庖」丁解牛：ㄅㄠ 乙、技經肯「綮」：ㄑㄧㄥˋ 丙、奏刀「騞」然：ㄏㄨㄛˋ 丁、「怵」然為戒：ㄕㄨˋ 戊、新發於「硎」：ㄒㄧㄥˊ 己、大「軱」：ㄍㄨㄚ 以上「　」中的字，讀音錯誤的是：",
    "options": {
      "A": "甲丁己",
      "B": "乙戊己",
      "C": "丙丁戊",
      "D": "丙戊己"
    },
    "answer": "A"
  },
  {
    "question": "《莊子．庖丁解牛》：「奏刀騞然，莫不中音：合於〈桑林〉之舞，乃中〈經首〉之會。」",
    "options": {
      "A": "庖丁從音樂的曲調領悟到用刀的要領",
      "B": "庖丁解牛時動作迅速",
      "C": "庖丁享受解牛之樂，若聞仙樂妙舞",
      "D": "庖丁的刀法熟練，動作有節奏感"
    },
    "answer": "D"
  },
  {
    "question": "下列各組「　」內的字，字義前後相同的是：",
    "options": {
      "A": "沛公起「如」廁／縱一葦之所「如」",
      "B": "沛公「軍」霸上，未得與項羽相見／度我至「軍」中，公乃入",
      "C": "「行」略定秦地／臣少多疾病，九歲不「行」",
      "D": "「素」善留侯張良／巧拙有「素」"
    },
    "answer": "A"
  },
  {
    "question": "〈鴻門宴〉一文中，可從許多細節的描繪窺見人物的個性，下列文句中，最能展現樊噲性格有勇有謀的形象的是：",
    "options": {
      "A": "帶劍擁盾入軍門，交戟之衛士欲止不內，樊噲側其盾以撞，衛士仆地",
      "B": "瞋目視項王，頭髮上指，目眥盡裂",
      "C": "覆其盾於地，加彘肩上，拔劍切而啗之",
      "D": "曰：大行不顧細謹，大禮不辭小讓。如今人方為刀俎，我為魚肉，何辭為"
    },
    "answer": "D"
  },
  {
    "question": "下列關於〈庖丁解牛〉的詮釋，正確的是：",
    "options": {
      "A": "「臣之解牛之時，所見無非牛者」：象徵臻至化境的解牛技藝",
      "B": "「每至於族，吾見其難為，怵然為戒，視為止，行為遲」：敘述不疾不徐的觀察過程",
      "C": "「以無厚入有間，恢恢乎其於游刃必有餘地矣」：譬喻積極進取的處世態度",
      "D": "「合於〈桑林〉之舞，乃中〈經首〉之會」：描繪優雅從容的解牛場面"
    },
    "answer": "D"
  },
  {
    "question": "下列各組文句「　」內的用字，前後相同的是：",
    "options": {
      "A": "人不為己，天「ㄓㄨ」地滅／「ㄓㄨ」連九族",
      "B": "羞與「ㄎㄨㄞˋ」伍／「ㄎㄨㄞˋ」炙人口",
      "C": "從酈山下，道芷陽「ㄐㄧㄢˋ」行／沛公已去，「ㄐㄧㄢˋ」至軍中",
      "D": "令將軍與臣有「ㄒㄧˋ」／而聽「ㄒㄧˋ」說，欲誅有功之人"
    },
    "answer": "C"
  },
  {
    "question": "下列歷史人物及其情懷自述，配對最適當的是：",
    "options": {
      "A": "力拔山兮氣蓋世，時不利兮騅不逝。騅不逝兮可奈何，虞兮虞兮奈若何：樊噲",
      "B": "登彼西山兮，采其薇矣。以暴易暴兮，不知其非矣：伯夷",
      "C": "《詩》有之：「高山仰止，景行行止。」雖不能至，然心鄉往之：孟子",
      "D": "大風起兮雲飛揚，威加海內兮歸故鄉，安得猛士兮守四方：項羽"
    },
    "answer": "B"
  },
  {
    "question": "「（沛公）乃以秦王屬吏，遂西入咸陽。欲止宮休舍，樊噲、張良諫，乃封秦重寶財物府庫，還軍霸上。召諸縣父老豪傑曰：『父老苦秦苛法久矣，誹謗者族，偶語者棄市。吾與諸侯約，先入關者王之，吾當王關中。與父老□□□□耳：殺人者死，傷人及盜抵罪。餘悉除去秦法。諸吏人皆案堵如故。凡吾所以來，為父老除害，非有所侵暴，無恐！且吾所以還軍霸上，待諸侯至而定約束耳。』乃使人與秦吏行縣鄉邑，告諭之。秦人大喜，爭持牛羊酒食獻饗軍士。沛公又讓不受，曰：『倉粟多，非乏，不欲費人。』人又益喜，唯恐沛公不為秦王。」（《史記．高祖□□）",
    "options": {
      "A": "第一處□□□□應為「約法三章」",
      "B": "第二處□□中應填入「本紀」",
      "C": "「封秦重寶財物府庫，還軍霸上」可與〈鴻門宴〉中「吾入關，秋毫不敢有所近，籍吏民、封府庫而待將軍」的說詞相印證",
      "D": "沛公宣布廢除苛刻的秦法，乃因純良無私，故而深得民心"
    },
    "answer": "D"
  },
  {
    "question": "某生想用壓歲錢買一隻最新的智慧型手機，跑去徵詢甲、乙、丙、丁四位老師的意見，這四位老師各自受到先秦九流十家中某學派影響。試由老師的回答，判斷他們喜愛哪一思想流派，並依該學派的思想特色，選出適宜的選項：甲師：「有電話可以用就好，智慧型手機實在太浪費金錢了！妥善投資或是資助窮人還比較務實。」乙師：「智慧型手機有太多APP可以玩遊戲、看漫畫、看韓劇……會讓你眼花撩亂，心定不下來。」丙師：「你有沒有跟爸媽討論過呢？雖然是你自己出錢，但為人子女的，凡事應尊重父母的意見。」丁師：「如果你在上課時玩手機，我一定會依校規懲處，即使你找議員關說、打1999抱怨也一樣。」",
    "options": {
      "A": "甲師對政治的批評可能會是：「臣自愛，不愛君，故虧君而自利；此所謂亂世」",
      "B": "乙師可能喜歡討論：「馬者，所以命形也；白者，所以命色也」",
      "C": "丙師對政治的批評可能會是：「人主之患，在於信人，信人則制於人」",
      "D": "丁師可能喜歡討論：「道可道，非常道；名可名，非常名」"
    },
    "answer": "A"
  },
  {
    "question": "下列各組「　」內的字，字義兩兩相同的是：",
    "options": {
      "A": "「族」庖月更刀／每至於「族」，吾見其難為",
      "B": "江海所以能為百谷王者，以其善「下」之／早晚「下」三巴，欲將書報家",
      "C": "〈經首〉之「會」／遷客騷人，多「會」於此",
      "D": "「因」其固然／「因」任而授官，循名而責實"
    },
    "answer": "D"
  },
  {
    "question": "依據下文，最符合太史公想法的是：太史公曰：「陳丞相平少時，本好黃帝、老子之術。方其割肉俎上之時，其意固已遠矣。傾側擾攘楚魏之間，卒歸高帝。常出奇計，救紛糾之難，振國家之患。及呂后時，事多故矣，然平竟自脫，定宗廟，以榮名終，稱賢相，豈不善始善終哉！非知謀孰能當此者乎？」（《史記．陳丞相世家》）",
    "options": {
      "A": "太史公認為陳平智能超群，在官場上縱橫捭闔，是一代賢相",
      "B": "太史公認為陳平最後死在高祖及呂后手上，是由於其弄權之故",
      "C": "太史公認為陳平能善始善終，是由於其頗好黃老之術的緣故",
      "D": "太史公認為在高祖及呂后的挾持之下，陳平的處境如我為魚肉"
    },
    "answer": "A"
  },
  {
    "question": "關於儒、道二家的比較，正確的是：",
    "options": {
      "A": "儒、道二家並稱戰國時期二大顯學",
      "B": "儒家經典代表是《論語》、《孟子》，道家則是《老子》、《莊子》",
      "C": "儒家主張禮樂教化，道家則主張博施濟眾",
      "D": "儒家的思維以自然為內涵，道家的思維則以仁義為內涵"
    },
    "answer": "B"
  },
  {
    "question": "「《莊子》的散文已經形成完整的篇章結構，特別是　甲　的作品，每篇都有明確的中心思想。莊子行文信筆揮灑，不拘一格，常常連綴多則　乙　與對話，結構富於跳躍性。《莊子》直接影響了後世作家的創作風格，如　丙　超拔的想像力，豪放飄逸、意象奇特，大膽誇張的詩風，與《莊子》有一脈相承的關係；清初學者　丁　評為『六才子書』之首，尤見推重。」上列文字缺空處依序應填入的內容，正確的是：",
    "options": {
      "A": "甲應填入「雜篇」",
      "B": "乙應填入「寓言」",
      "C": "丙應填入「杜甫」",
      "D": "丁應填入「紀曉嵐」"
    },
    "answer": "B"
  },
  {
    "question": "〈庖丁解牛〉：「始臣之解牛之時，所見無非牛者；三年之後，未嘗見全牛也。方今之時，臣以神遇而不以目視，官知止而神欲行。」關於各句文意的說明，正確的是：",
    "options": {
      "A": "「始臣之解牛之時」中，二個「之」字意思相同",
      "B": "「所見無非牛」指所見是各式各樣的牛，令人眼花撩亂",
      "C": "「未嘗見全牛」指不曾見過活生生的牛",
      "D": "「官知止而神欲行」指解牛時，不必使用感官，只依靠心神來運作"
    },
    "answer": "D"
  },
  {
    "question": "〈鴻門宴〉：「（沛公）謝曰：『臣與將軍戮力而攻秦，將軍戰河北，臣戰河南，然不自意能先入關破秦，得復見將軍於此。今者有小人之言，令將軍與臣有郤。』項王曰：『此沛公左司馬曹無傷言之，不然，籍何以至此？』」依據這段對話，下列解讀最適當的是：",
    "options": {
      "A": "劉邦以「不自意」強調入關破秦輕而易舉",
      "B": "劉邦故意讓曹無傷放話，可見其居心叵測",
      "C": "項羽把暗線曹無傷曝光，可見其胸無城府",
      "D": "項羽對劉邦「得復見將軍」之說不以為然"
    },
    "answer": "C"
  },
  {
    "question": "伊琳前往高雄市總圖參加臺大中文系蔡璧名教授的專題演講，講題為「庖丁解牛之道與處世哲學」，根據伊琳的筆記內容，請判斷抄寫錯誤的是：",
    "options": {
      "A": "在〈庖丁解牛〉的故事中，庖丁手上的刀不只是刀，還是庖丁心力所及的表徵。每一個行業都有它應該掌握的「道」，每一種技藝都有其登峰造極、爐火純青之境。例如：小提琴可以演奏出恍如身歷熊熊烈火、噼啪聲響之境",
      "B": "當庖丁說「三年之後，未嘗見全牛也」，三年之後不再像初學殺牛時，見到一頭完整的牛了，這是因為庖丁最後技術純熟了，對牛的組織結構和筋骨分布了解透澈",
      "C": "儒家有儒家之「道」，莊子有莊子之道。「道」表示能遍及任何事物的道理，庖丁說，可別看我只是個殺牛的人，我熱衷追求的是「道」！對於道的體悟，我希望能不斷、不斷地進展，追溯到儒家的孔子之道",
      "D": "選擇一個能長養身心能力的技藝、專業，並掌握那項技藝所需的專業能力、所蘊含之「道」，進而在所掌握「技」中之「道」的漫長進程中，持恆地愛養「道」中之「心」，讓自我生命偕同專業能力一路同步成長"
    },
    "answer": "C"
  },
  {
    "question": "項王患之，為高俎，置太公其上，告漢王曰：「今不急下，吾烹太公。」漢王曰：「吾與項羽俱北面受命懷王，曰『約為兄弟』，吾翁即若翁；必欲烹而翁，則幸分我一桮羹。」關於本文內容的說明，正確的是：",
    "options": {
      "A": "項王置高俎，是要跪拜太公，以示禮遇",
      "B": "文中的「太公」是指劉邦的祖父",
      "C": "「若翁」和「而翁」同義",
      "D": "「幸分我一桮羹」的「幸」，意同於「話說賈元春自那日幸大觀園回宮去後」的「幸」"
    },
    "answer": "C"
  },
  {
    "question": "文文在準備期末報告時，提到了關於道家的相關資料，請根據以下他的報告內容，判斷何者是不正確的：",
    "options": {
      "A": "道家思想代表人物有老子、莊子、楊朱等人，莊子較系統地表展了老子的思想",
      "B": "老子以為宇宙的本源是道，道的本質是無，因此他們又認為天下萬物生於有，有生於無",
      "C": "道家的基本政治主張是無為而治，「處無為之事，行不言之教」治理國家，一切順乎自然，對百姓採取不干涉和少干涉的政策，以「無為」為手段達到無不為的目的。其政治理想是「小國寡民」的社會",
      "D": "引用自《紅樓夢》的〈好了歌〉：「世人都曉神仙好，惟有功名忘不了。古今將相在何方？荒塚一堆草沒了！」即顛覆了道家思想的極致表現"
    },
    "answer": "D"
  },
  {
    "question": "以下文句為先秦各家有關爭戰的論述，依內容判斷，出自《老子》的是：",
    "options": {
      "A": "今小為非，則知而非之；大為非攻國，則不知非，從而譽之，謂之義，此可謂知義與不義之辯乎",
      "B": "善人教民七年，亦可以即戎矣。以不教民戰，是謂棄之",
      "C": "善為士者，不武；善戰者，不怒；善勝敵者，不與；善用人者，為之下。是謂不爭之德，是謂用人之力，是謂配天古之極",
      "D": "善用兵者，屈人之兵而非戰也，拔之城而非攻也，毀人之國而非久也，必以全爭於天下"
    },
    "answer": "C"
  },
  {
    "question": "下列詩作所詠人物，與其他三者不同的是：",
    "options": {
      "A": "勝敗兵家事不期，包羞忍恥是男兒。江東子弟多才俊，捲土重來未可知",
      "B": "大風起兮雲飛揚，威加海兮歸故鄉，安得猛士兮守四方",
      "C": "八尺將軍千里騅，拔山扛鼎不妨奇。范增力盡無施處，路到烏江君自知",
      "D": "喑嗚獨滅虎狼秦，絕世英雄自有真。俎上肯貽天下笑，座中維覺沛公親。等閒割地分強敵，慷慨將頭贈故人。如此殺身猶灑落，憐他功狗與功臣"
    },
    "answer": "B"
  }  
];

