const emojipedia = [
  {
    id: 1,
    emoji: "🤡",
    name: "Clown Face",
    meaning:
      "“Stop fooling around! Made-up clown face from the circus world. Stands for fun and entertainment, but can also trigger fears in certain people - at least since Stephen King's horror movie “It“."
  },
  {
    id: 2,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "Smiley has dollar signs in its eyes, the tongue is a banknote. Could have won something or is sensing a financial chance. Implicates a sense of wealth."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "🥰",
    name: "Smiling face with smiling eyes and three hearts",
    meaning:
      "You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart."
  },
  {
    id: 5,
    emoji: "😎",
    name: "Face With Sunglasses",
    meaning:
      "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach."
  },
  {
    id: 6,
    emoji: "🥳",
    name: "Face with party blower and party hat",
    meaning:
      "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
  },
  {
    id: 7,
    emoji: "😏",
    name: "Smirking/Whimsical Face",
    meaning:
      "Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo."
  },
  {
    id: 8,
    emoji: "😟",
    name: "Confused Face",
    meaning:
      "Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way."
  },
  {
    id: 9,
    emoji: "🥺",
    name: "Face with begging eyes",
    meaning:
      "The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want."
  },
  {
    id: 10,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "Disgusted smiley, which is already green with sickness and nausea. Might mean disgust, reluctance, or aversion, or stand for sickness."
  },
  {
    id: 11,
    emoji: "😤",
    name: "Face With Look of Triumph",
    meaning:
      "White steam clouds are coming out of the smiley's nose. Is snorting contemptuously as a sign of superiority. Is proud and triumphing over someone else."
  },
  {
    id: 12,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "Smiley with red cheeks is stretching out its hands toward you. Wants to hug you. It's an open and cordial gesture and an expression of warmth and friendliness."
  },
  {
    id: 13,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "The pouting face expresses displeasure with a person or situation. Beware, danger of explosion! Furious emoji face. Is annoyed and already sulking with a deep-red face."
  },
  {
    id: 14,
    emoji: "🤯",
    name: "Face With Exploding Head",
    meaning:
      "I cannot believe it. or “That will blow you away.“ Something is very exciting or surprising. The exploding head can also be used to express shock or awe."
  },
  {
    id: 15,
    emoji: "🥶",
    name: "Freezing face",
    meaning:
      "It is so cold, you are about to freeze to death. The smile is almost frozen. Already totally blue in the face from the cold temperature, tortured facial expression. Only a cup of tea, coffee, or the hot tub can help now."
  },
  {
    id: 16,
    emoji: "🤔",
    name: " Thinking Face",
    meaning:
      "The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea."
  },
  {
    id: 17,
    emoji: "🤥",
    name: "Lying Face",
    meaning:
      "As with Pinocchio, the nose becomes longer with each lie, which exposes him as a liar. Symbol of a falsehood, boast, or an unlikely story."
  },
  {
    id: 18,
    emoji: "😬",
    name: "Grimacing Face",
    meaning:
      "This is really embarrassing for me now! Expression of nervousness, awkwardness or embarrassment. Scared and guilty smile: Someone has done something stupid and tries to resolve the tense situation by grimacing."
  },
  {
    id: 19,
    emoji: "🙄",
    name: "Face With Rolling Eyes",
    meaning:
      "Smiley is rolling its eyes. Finds the current situation or a person boring or annoying. Will disregard the message."
  },
  {
    id: 20,
    emoji: "🤤",
    name: "Drooling Face",
    meaning:
      "Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire."
  },
  {
    id: 21,
    emoji: "💩",
    name: "Pile of Poo",
    meaning:
      "Crap, oh no! Such a sh**! The comic version of a pile of feces. Can describe a situation, replace the swear word, or criticize a statement of the chat partner."
  },
  {
    id: 22,
    emoji: "👻",
    name: "Ghost",
    meaning:
      "The funny-smiling ghost is too cute to frighten others or cause harm. Symbol for Halloween or jokingly for creepy things, e.g. movies."
  },
  {
    id: 23,
    emoji: "😈",
    name: "Smiling Face With Horns",
    meaning:
      "Mischievously grinning goblin smiley with small devil horns. Wants to cause trouble, is a real teaser or planning something ugly just now."
  },
  {
    id: 24,
    emoji: "🤠",
    name: "Face With Cowboy Hat",
    meaning:
      "Howdy! Typical American smiley with cowboy hat from the Wild West. Stands for freedom, nature, and hard work."
  },
  {
    id: 25,
    emoji: "🤕",
    name: "Face With Head Bandage",
    meaning:
      "Sad looking face with head bandage: Someone is ill, had an accident, or is in hospital. The bandage symbolizes health problems."
  },
  {
    id: 26,
    emoji: "😷",
    name: "Face With Medical Mask",
    meaning:
      "The mask is for protection. Either to protect yourself or others from infection. Someone is in the hospital, has to go to the doctor or has caught a disease. Wearing the masks is widely spread in Asia."
  },
  {
    id: 27,
    emoji: "🥴",
    name: "Face with unequal eyes and wavy mouth",
    meaning:
      "Eyes half open, half closed, slanted mouth, flushed cheeks. The emoji has a confused facial expression: due to tiredness or the currently confused emotional world. Also known as drunken face."
  },
  {
    id: 28,
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning:
      "Smiley with zipper instead of a mouth is keeping a secret for itself. Lips are closed or chat partner's lips should remain closed. Can also mean silence because you cannot find the right words."
  },
  {
    id: 29,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "I feel dizzy! Smiley with crossed eyes and open mouth is totally dazed. Is confused and so dizzy it doesn't know which side is up. Also symbolizes strong emotions or drunkenness."
  },
  {
    id: 30,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "Good night and sweet dreams! In comics or cartoons, zZz above the head stands for sleeping characters. The emoji is tired, wants to go to bed or is just about to fall asleep from boredom."
  },
  {
    id: 31,
    emoji: "😮",
    name: "Face With Open Mouth",
    meaning:
      "Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled."
  },
  {
    id: 32,
    emoji: "😧",
    name: "Anguished Face",
    meaning:
      "Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises."
  },
  {
    id: 33,
    emoji: "🤩",
    name: "Smirking Face With Starry Eyes",
    meaning:
      "Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars."
  },
  {
    id: 34,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
  },
  {
    id: 35,
    emoji: "🧐",
    name: "Face With Monocle",
    meaning:
      "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley."
  },
  {
    id: 36,
    emoji: "🤪",
    name: "Crazy Face",
    meaning:
      "Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke."
  },
  {
    id: 37,
    emoji: "😝",
    name: "Face With Stuck-Out Tongue & Tightly Closed Eyes",
    meaning:
      "Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee."
  },
  {
    id: 38,
    emoji: "😋",
    name: "Face Savouring Delicious Food",
    meaning:
      "Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around."
  },
  {
    id: 39,
    emoji: "😚",
    name: "Kissing Face With Closed Eyes",
    meaning:
      "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
  },
  {
    id: 40,
    emoji: "😘",
    name: "Face Throwing a Kiss",
    meaning:
      "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
  },
  {
    id: 41,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
  },
  {
    id: 42,
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning:
      "Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke."
  },
  {
    id: 43,
    emoji: "😇",
    name: "Smiling Face With Halo",
    meaning:
      "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id: 44,
    emoji: "😁",
    name: "Grinning Face With Smiling Eyes",
    meaning:
      "Happy face with a mischievous laugh. Represents lightheartedness and exuberance. Full of joy due to an event, excited and agitated or just a bit embarrassed."
  },
  {
    id: 45,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration."
  },
  {
    id: 46,
    emoji: "☹",
    name: "Frowning Face",
    meaning:
      "Face with very sad mouth angle. Emoji seems unhappy and disgruntled. Dissatisfied with the weather, small mistakes or the behavior of a person."
  },
  {
    id: 47,
    emoji: "😣",
    name: "Suffering Face",
    meaning:
      "Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day."
  },
  {
    id: 48,
    emoji: "😫",
    name: "Tired Face",
    meaning:
      "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first."
  },
  {
    id: 49,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "Emoji is both very sad and distraught, or is dying of laughter. Tears are pouring out of the eyes like a waterfall. Represents injury, pain or defeat. Is also used ironically or something is so funny that you die of laughter."
  },
  {
    id: 50,
    emoji: "🤬",
    name: "Face With Symbols Over The Mouth",
    meaning:
      "The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration."
  },
  {
    id: 51,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive."
  },
  {
    id: 52,
    emoji: "🥵",
    name: "Overheated face",
    meaning:
      "It is so hot, I will get a heat stroke right away! Bright red head, the tongue is hanging from the mouth and drops of sweat are on the forehead. The hottest place in the world lies in Iran: In 2005, the highest temperature of 70.7 °C was measured in the Dasht-e Lut desert."
  }
];

export default emojipedia;
