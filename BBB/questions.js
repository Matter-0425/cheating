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
        answer: "DAHFC BJIGE" 
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
        answer: "DGAIC JFBDH" 
    },
    { 
        question: "When visit someone home,", 
        options: { }, 
        answer: "DEAC" 
    },
    { 
        question: "Spain,", 
        options: { }, 
        answer: "DCBC" 
    },
    { 
        question: "International community Radio Taipei...", 
        options: { }, 
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
    answer: "CIFHD GJEAB"
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
            answer: "ACC"
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
        answer: "JBGFA HECID"
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
        answer: "EIJCG AHBFD"
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
        "question": "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies. A triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of '100% Fish,' an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products. Reducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus. The Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        "options": {
            "A": "To advance ocean technology.",
            "B": "To reduce food crises worldwide.",
            "C": "To enhance cross-industry cooperation.",
            "D": "To make the most of marine resources."
        },
        "answer": "DBCC"
    }
];

