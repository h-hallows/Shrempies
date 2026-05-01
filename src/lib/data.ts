export const characters = {
  featured: [
    {
      name: "Pip",
      color: "#E8601C",
      species: "Orange Shrimp",
      personality: "The original Shrempie — the heart of the group. Grumpy on the outside, the whole world on the inside. Short, punchy, classic. A small seed that everything grows from.",
      trait: "Grumpy face, huge heart",
    },
    {
      name: "Zippy",
      color: "#F5C300",
      species: "Golden Yellow Shrimp",
      personality: "Comes from 'zip' — speed, energy, electricity. Zips through the ocean like a bolt of lightning that forgot to slow down. Talks fast, thinks fast, causes a small tornado wherever he goes.",
      trait: "Always mid-bolt somewhere",
    },
    {
      name: "Coral",
      color: "#F2728C",
      species: "Cherry Blossom Pink Shrimp",
      personality: "The smart one who holds the whole group together without making a big deal of it. Like a coral reef — supports thousands of other lives around her. Warm, confident, quietly essential.",
      trait: "Everyone leans on her without realising",
    },
    {
      name: "Bubbles",
      color: "#4AABDB",
      species: "Sky Blue Shrimp",
      personality: "Light, unpredictable, always floating in unexpected directions, and impossible not to smile at. You never quite know where they're going to end up but it's always somehow delightful.",
      trait: "Jokes that pop like bubbles",
    },
    {
      name: "Rara",
      color: "#7B4FBF",
      species: "Deep Purple Shrimp",
      personality: "Short for 'rara avis' — a rare bird. Dreamy, profound, totally unique. Always humming something in their head. Purple is the rarest colour in the shrimp world, and Rara is the rarest kind of soul.",
      trait: "Always humming a private melody",
    },
    {
      name: "Dash",
      color: "#2E9E6B",
      species: "Jade Green Shrimp",
      personality: "A burst of speed, a sprint, a moment of pure explosive energy. Always either about to do something incredible or already halfway through doing it. One syllable, instant energy.",
      trait: "Already halfway done before you blink",
    },
    {
      name: "Mimi",
      color: "#E8E0D0",
      species: "Ghost / Cream White Shrimp",
      personality: "The quietest voice in the group but somehow the one everyone listens to most carefully. Always there, always caring — easy to overlook until suddenly you realise she's the most important one in the room.",
      trait: "Quiet but the one everyone hears",
    },
    {
      name: "Blaze",
      color: "#C0192E",
      species: "Deep Ruby Red Shrimp",
      personality: "Dramatic. Demands attention. Lights up everything around them and never apologises for how bright they are. The most theatrical character in the cast — in their mind, everyone should be following their trail.",
      trait: "Never apologises for the spotlight",
    },
    {
      name: "Sandy",
      color: "#A0724A",
      species: "Warm Brown Shrimp",
      personality: "The ocean floor — the foundation of everything, warm and comfortable and always there. Calm and unbothered. The name works as both a boy and girl name — deliberately left open.",
      trait: "The calmest energy in any room",
    },
    {
      name: "Dot",
      color: "#E8158A",
      species: "Hot Magenta Pink Shrimp",
      personality: "Small but precise. Knows exactly where everything should be and exactly where it currently isn't. The period at the end of a sentence — one dot changes everything around it.",
      trait: "Small but mighty — every time",
    },
    {
      name: "Glimmer",
      color: "#1ABFBF",
      species: "Iridescent Teal Shrimp",
      personality: "Sees that magical moment when light catches something unexpected and suddenly everything is beautiful — in absolutely everything, all the time. The name sounds like it belongs in a fantasy world, which is exactly how Glimmer experiences everyday life.",
      trait: "Finds magic in the mundane",
    },
    {
      name: "Rex",
      color: "#6B8C3A",
      species: "Olive Green Wild-Type Shrimp",
      personality: "Rex means king — but not a sitting-on-a-throne kind. An explorer king. Leads from the front. Always made a decision before you finish your sentence. Wild-type shrimp — survivors, adapters, explorers by nature.",
      trait: "Already decided. Already moving.",
    },
    {
      name: "Noir",
      color: "#1A1A2E",
      species: "Jet Black Rose Shrimp",
      personality: "French for black — and a whole world of meaning. Cool, mysterious, quietly profound. When Noir enters a room everything else becomes background. Slightly cinematic, slightly stylish, slightly more grown-up than the others.",
      trait: "One word, infinite cool",
    },
  ],
  supporting: [],
};

export type SongCategory =
  | "All"
  | "Lullabies & Calm"
  | "Dance & Movement"
  | "Adventure & Story"
  | "Educational"
  | "Emotion & Feeling"
  | "Character Intros";

export const categoryColors: Record<string, string> = {
  "Lullabies & Calm": "#3C3489",
  "Dance & Movement": "#854F0B",
  "Adventure & Story": "#085041",
  "Educational": "#185FA5",
  "Emotion & Feeling": "#993556",
  "Character Intros": "#993C1D",
};

export const songs = [
  // Volume 1
  { title: "Floating with the Tide", category: "Lullabies & Calm", hook: "Gentle bedtime drift, ocean as comfort", lyric: "Let the current take you slow,\nwhere the warm deep waters go,\nclose your eyes and float with me,\nsleeping like the sleepy sea." },
  { title: "The Shrempy Hum", category: "Lullabies & Calm", hook: "Wordless bonding song, parent and baby hum together", lyric: "Mmm mmm mmm, my little one,\nmmm mmm mmm, day is done,\nmmm mmm mmm, just us two,\nmmm mmm mmm, I love you." },
  { title: "Little Lights Go Dim", category: "Lullabies & Calm", hook: "The whole ocean says goodnight, one creature at a time", lyric: "Goodnight, little crab on the sandy floor,\ngoodnight, little fish by the coral door,\ngoodnight, little shrimp with your antennae long,\nthe ocean is humming its goodnight song." },
  { title: "Wiggle Like a Shrempy", category: "Dance & Movement", hook: "Full-body shrimp movement as dance", lyric: "Wiggle those antennae, left and right!\nWiggle those little claws with all your might!\nWiggle your tail, wiggle your toes,\nwiggle every single place the ocean flows!" },
  { title: "The Bubble Bounce", category: "Dance & Movement", hook: "Up/down, high/low, fast/slow taught through bubble jumping", lyric: "Bounce up HIGH like a bubble in the sea,\nbounce down LOW, slow as slow can be,\nfast fast fast, then slow slow slow,\nwatch the bubbles everywhere we go!" },
  { title: "Swim Swim Swim", category: "Dance & Movement", hook: "Swimming motions as dance, simple and infinitely repeatable", lyric: "Swim swim swim, kick those little feet,\nswim swim swim, to the ocean beat,\narms out wide, through the water glide,\nswim swim swim, the whole ocean's wide!" },
  { title: "Deep Down Below", category: "Adventure & Story", hook: "Descending into the ocean world, building wonder", lyric: "Deep down below where the big fish play,\ndeep down below at the start of the day,\nthere's a world full of wonder waiting for you,\ndeep down below in the ocean blue." },
  { title: "The Missing Shell", category: "Adventure & Story", hook: "Mini quest song, teaches persistence and problem-solving", lyric: "I looked by the coral, I looked by the reef,\nI looked in the seaweed, I looked underneath,\nI tried and I tried till I finally found —\nmy shell was right here on the ocean ground!" },
  { title: "Across the Coral Reef", category: "Adventure & Story", hook: "Epic journey through the Shrempies universe landmarks", lyric: "Across the coral reef we go, Shrempy leads the way,\nthrough the kelp forest tall, into the light of day,\npast the sandy flats, past the rocky stone,\nacross the coral reef — this ocean is our home." },
  { title: "Ten Little Shrempies", category: "Educational", hook: "Countdown from 10, each Shrempy has a personality", lyric: "Ten little Shrempies swimming in a line,\none went to sleep and then there were nine,\nnine little Shrempies dancing in the deep,\none started bouncing and lost track of the beat..." },
  { title: "What Color Is the Sea?", category: "Educational", hook: "Color learning through ocean layers, introduces color mixing", lyric: "What color is the sea? Blue at the top!\nBlue like the sky where the sunbeams drop.\nDeep down below it turns green, then teal,\nwhat a rainbow of colors the ocean reveals!" },
  { title: "Big, Bigger, Biggest Wave", category: "Educational", hook: "Size comparison, volume, scale concepts", lyric: "A small wave, a medium wave, a BIG wave too,\nbigger than a house, bigger than you!\nbiggest wave of all rolls across the shore —\nand then the ocean makes a bigger one more." },
  { title: "Even Shrempies Get the Grumps", category: "Emotion & Feeling", hook: "Validates bad feelings, ends with gentle regulation tools", lyric: "Even Shrempy gets the grumps sometimes,\nevery feeling's real, every feeling's fine.\nFeel it for a moment, breathe it out slow,\neven grumpy feelings help us grow." },
  { title: "Scared of the Dark Water", category: "Emotion & Feeling", hook: "Fear named and held safely, friendship as solution", lyric: "The dark water scared me, I didn't know why,\nbut Coral held my claw and said 'It's alright'.\nWith a friend beside me I can face the deep —\nfear can't live in places where our friends all sleep." },
  { title: "Happy Feels Like Bubbles", category: "Emotion & Feeling", hook: "Joy described through physical sensation", lyric: "Happy feels like bubbles rising in my chest,\nhappy feels like floating — it feels the best.\nIt tingles in my antennae, it wiggles in my tail,\nhappy is a feeling that always sets full sail." },
  { title: "This Is Shrempy", category: "Character Intros", hook: "The main series theme song", lyric: "This is Shrempy, curious and bright,\nexploring the ocean from morning to night.\nBrave and gentle, sometimes a little shy —\nShrempy always has to ask the why!" },
  { title: "Claws & Antennae", category: "Character Intros", hook: "Ensemble character roll-call", lyric: "Claws and antennae, tails and big bright eyes,\nthirteen Shrempies under ocean skies.\nPip and Zippy, Coral, Dot,\nBubbles and Rara — we love them a lot!" },
  { title: "My Best Friend Pip", category: "Character Intros", hook: "From the child's POV — Pip as their companion", lyric: "My best friend Pip lives under the sea,\nbut every time I visit, Pip's there for me.\nWe explore together, we feel things too —\nmy best friend Pip, and best friend's you." },
  // Volume 2
  { title: "Put the Screen to Sleep", category: "Lullabies & Calm", hook: "A lullaby for the overstimulated generation", lyric: "The screen is going to sleep now, slowly fading out,\nthe light grows soft and gentle, time to put the busy down.\nClose your eyes, the world can wait,\nnothing here can make us late." },
  { title: "I Don't Know and That's Okay", category: "Lullabies & Calm", hook: "For kids raised to expect instant answers. Celebrates uncertainty.", lyric: "I don't know, and that's okay,\nnot every question needs an answer today.\nSome things hide just out of sight —\nwe can wonder all the night." },
  { title: "One More Minute (The Goodbye Song)", category: "Lullabies & Calm", hook: "Transition song for daycare/bedtime. Teaches goodbyes are safe.", lyric: "One more minute, then I'll go,\ngoodbyes are safe, I want you to know.\nYou'll be here when I come back,\ngoodbyes aren't endings — they're a loving act." },
  { title: "Shrempy Shake (The Algorithm Dance)", category: "Dance & Movement", hook: "TikTok-native format. FREEZE moment engineered for viral clips.", lyric: "Shrempy shake, shrempy shake, everybody FREEZE —\nshrempy shake, shrempy shake, do it if you please!\nLeft and right and left and right and STOP —\nshrempy shake until you drop!" },
  { title: "Touch the Sky, Touch the Ground", category: "Dance & Movement", hook: "Physical movement song. Addresses the activity deficit.", lyric: "Touch the sky! (reach up high)\nTouch the ground! (all the way down)\nSpin around! (spin spin spin)\nNow begin again!" },
  { title: "Follow the Leader Shrempy", category: "Dance & Movement", hook: "Interactive mirror game. Kids copy Shrempy's movements.", lyric: "Follow the leader, follow Shrempy's lead,\ncopy every wiggle, copy every deed.\nClap clap clap — now you do it too!\nShrempy's the leader and the leader is you!" },
  { title: "The Bored Shrempy", category: "Adventure & Story", hook: "Adventure starting from doing nothing. Champions boredom.", lyric: "Shrempy was bored, no plan and no game,\nstared at the ceiling, everything seemed the same.\nThen something small caught a wondering eye —\nboredom is just where adventures hide." },
  { title: "Something New Under the Sea", category: "Adventure & Story", hook: "For the generation that thinks everything's already been found.", lyric: "There's always something new under the sea,\na color not discovered, a place yet to be.\nThe ocean is older than anything known —\nand still it has secrets it hasn't yet shown." },
  { title: "Two Shrempies", category: "Adventure & Story", hook: "Friendship anthem. Two-voice duet structure.", lyric: "Two Shrempies, side by side,\ntwo Shrempies, the ocean's wide.\nYou go left, I'll go right —\ntwo Shrempies make everything bright." },
  { title: "Shrempy's Body Song", category: "Educational", hook: "Head Shoulders Knees & Toes energy, mapped to Shrempy anatomy.", lyric: "Antennae, eyes, and claws and tail! (claws and tail!)\nAntennae, eyes, and claws and tail! (claws and tail!)\nShell and legs and little swimmerets,\nantennae, eyes, and claws and tail!" },
  { title: "More and Less and Just Enough", category: "Educational", hook: "Math concepts AND contentment taught simultaneously.", lyric: "More is more, and less is less,\nbut just enough — now that's the best.\nThree bubbles more than one you see,\nbut just enough is two for me." },
  { title: "Ask the Ocean", category: "Educational", hook: "Scientific method through wonder. Questions celebrated.", lyric: "Ask the ocean! Ask it why!\nAsk it how the fish can fly!\nDon't demand an answer now —\nwonder is the when and how." },
  { title: "Too Much (The Overstimulation Song)", category: "Emotion & Feeling", hook: "Music starts chaotic then drops to 60 bpm. The song IS the regulation tool.", lyric: "Too much noise and too much light,\ntoo much everything tonight.\nslow... it... down...\none breath in, one breath out,\nquiet finds us — no more doubt." },
  { title: "I Made a Mistake (And That's How We Grow)", category: "Emotion & Feeling", hook: "For the perfectionism epidemic. Deliberately imperfect recording.", lyric: "I made a mistake — oh no, oh well!\nIt didn't work out the way I tell.\nBut now I know a thing I didn't know before —\nthat's what mistakes are actually for." },
  { title: "Where Did Mum Go? (She's Coming Back)", category: "Emotion & Feeling", hook: "Separation anxiety, named and held. For daycare drop-offs.", lyric: "Where did Mum go? She'll come back.\nWhere did Mum go? She's on track.\nI miss her now, and that's okay —\nshe's coming back at end of day." },
  { title: "Different Shrempies", category: "Character Intros", hook: "Neurodiversity anthem. Each character's difference makes the reef whole.", lyric: "Different Shrempies, all of us,\nsome are quiet, some make fuss.\nEvery different, every real —\nthe reef needs all the ways we feel." },
  { title: "Shrempy in the Future", category: "Character Intros", hook: "For the first generation growing up alongside AI.", lyric: "Shrempy in the future, what will Shrempy see?\nNew things beside the old things, as different as can be.\nBut Shrempy's still Shrempy — curious, brave, and true —\nthe future belongs to Shrempies just like you." },
  { title: "Shrempy Shrempy Shrempy (The Chant)", category: "Character Intros", hook: "The Baby Shark contender. Four-syllable hook, infinite repeat.", lyric: "Shrempy Shrempy Shrempy SHREMPIES!\nShrempy Shrempy Shrempy SHREMPIES!\nUnder the sea! Under the sea!\nShrempy Shrempy Shrempy SHREMPIES!" },
];

export const episodes = [
  { number: 1, title: "The Shell That Wasn't There", lesson: "Persistence, problem-solving", description: "Pip searches the whole reef for a special shell — and learns that looking is as important as finding.", characters: ["Pip", "Coral"] },
  { number: 2, title: "Rex Speaks", lesson: "Every voice matters, waiting is worth it", description: "The crew learns to slow down and listen when Rex has something very important to say.", characters: ["Rex", "Pip", "Zippy"] },
  { number: 3, title: "Bubbles' Big Bubble", lesson: "Unique traits are gifts", description: "Bubbles' bubbles cause trouble — until one saves the day in the most unexpected way.", characters: ["Bubbles", "Pip"] },
  { number: 4, title: "Too Many Bubbles", lesson: "Overstimulation, finding quiet", description: "The ocean gets very loud and very bright. Pip and Mimi find a quiet spot together.", characters: ["Pip", "Mimi"] },
  { number: 5, title: "Dot's Perfect Morning", lesson: "Routine, and what happens when it changes", description: "Dot's morning routine is disrupted. Everything feels wrong — until something unexpectedly wonderful happens.", characters: ["Dot", "Coral"] },
  { number: 6, title: "The Dark Part of the Reef", lesson: "Facing fear with a friend", description: "Something is in the dark part of the reef. Pip is scared — but not alone.", characters: ["Pip", "Coral", "Rex"] },
  { number: 7, title: "Pip Tries and Tries", lesson: "Failure as learning", description: "Pip tries to do something very hard. Again and again and again.", characters: ["Pip", "Zippy"] },
  { number: 8, title: "The New Face at the Reef", lesson: "New friendships, belonging", description: "A new face appears at the reef. Nobody knows quite what to do — except Dot, who knows exactly how it feels to be new.", characters: ["Dot", "Pip", "Sandy"] },
  { number: 9, title: "Zippy's Big Dance", lesson: "Trying something new, being seen", description: "Zippy wants to dance on the Big Stage. It's thrilling. It's terrifying. It's both.", characters: ["Zippy", "Blaze", "Pip"] },
  { number: 10, title: "What's On the Other Side?", lesson: "Curiosity, exploring the unknown", description: "Beyond the reef is a place no Shrempy has ever gone. Pip is going.", characters: ["Pip", "Bubbles"] },
  { number: 11, title: "Mimi's Important Dream", lesson: "Rest matters, inner voice", description: "Mimi keeps falling asleep. The crew wonders why. The answer is in the dream.", characters: ["Mimi", "Pip"] },
  { number: 12, title: "The Colour Nobody Knew", lesson: "Discovery, there's always more", description: "A colour appears that nobody has a name for. Who gets to name it?", characters: ["Glimmer", "Dot", "Pip"] },
  { number: 13, title: "Coral Needs Help", lesson: "Asking for help is brave", description: "Coral is the one everyone leans on. But today Coral needs help — and doesn't know how to ask.", characters: ["Coral", "Pip", "Rex"] },
  { number: 14, title: "Pip's Goodbye", lesson: "Transitions, endings are okay", description: "Something is changing. Pip isn't sure how to feel about it. Goodbye and hello live side by side.", characters: ["Pip", "Coral", "Zippy", "Dot"] },
  { number: 15, title: "The Biggest Storm", lesson: "Fear, safety, being held", description: "The storm is very big. The reef shakes. The whole crew holds together.", characters: ["Pip", "Rex", "Mimi", "Bubbles", "Zippy"] },
  { number: 16, title: "Home", lesson: "Where you belong", description: "After a long adventure, Pip finds the way back. Home was never lost.", characters: ["Pip", "Coral", "Zippy", "Dot", "Rex", "Bubbles", "Mimi", "Sandy"] },
];

// ─── Printables ───────────────────────────────────────────────────────────────
// To add a printable:
//   1. Add an entry below with comingSoon: false
//   2. Drop the PDF into /public/printables/files/{id}.pdf
//   3. Drop a thumbnail (600×800 JPG) into /public/printables/thumbnails/{id}.jpg

export type PrintableType = "Coloring Page" | "Lesson Sheet" | "Activity Card" | "Sing-Along" | "Poster";
export type PrintableTheme = "Feelings" | "Movement" | "Characters" | "Learning" | "Ocean";

export interface Printable {
  id: string;
  title: string;
  type: PrintableType;
  theme: PrintableTheme;
  description?: string;
  character?: string;   // character name if character-specific
  ageRange?: string;    // e.g. "0–3" | "2–5" | "3–6"
  comingSoon: boolean;  // set false + add files to activate download
  color: string;        // accent color for placeholder
}

export const printableTypeColors: Record<PrintableType, string> = {
  "Coloring Page":  "#F2728C",
  "Lesson Sheet":   "#185FA5",
  "Activity Card":  "#085041",
  "Sing-Along":     "#3C3489",
  "Poster":         "#854F0B",
};

export const printables: Printable[] = [
  // ── Coloring Pages ─────────────────────────────
  { id: "pip-coloring",     title: "Pip the Shrimp",         type: "Coloring Page",  theme: "Characters", character: "Pip",     ageRange: "2–6", comingSoon: true,  color: "#E8601C" },
  { id: "zippy-coloring",   title: "Zippy in Motion",        type: "Coloring Page",  theme: "Characters", character: "Zippy",   ageRange: "2–6", comingSoon: true,  color: "#F5C300" },
  { id: "coral-coloring",   title: "Coral at the Reef",      type: "Coloring Page",  theme: "Characters", character: "Coral",   ageRange: "2–6", comingSoon: true,  color: "#F2728C" },
  { id: "bubbles-coloring", title: "Bubbles Floating Free",  type: "Coloring Page",  theme: "Characters", character: "Bubbles", ageRange: "2–6", comingSoon: true,  color: "#4AABDB" },
  { id: "ocean-scene",      title: "The Coral Reef",         type: "Coloring Page",  theme: "Ocean",                            ageRange: "3–7", comingSoon: true,  color: "#085041" },
  { id: "all-shrempies",    title: "All the Shrempies",      type: "Coloring Page",  theme: "Characters",                       ageRange: "2–6", comingSoon: true,  color: "#7B4FBF" },

  // ── Lesson Sheets ──────────────────────────────
  { id: "feelings-wheel",   title: "How Are You Feeling?",   type: "Lesson Sheet",   theme: "Feelings",                         ageRange: "2–5", comingSoon: true,  color: "#993556" },
  { id: "emotions-match",   title: "Emotions Match-Up",      type: "Lesson Sheet",   theme: "Feelings",                         ageRange: "3–6", comingSoon: true,  color: "#C0192E" },
  { id: "breathing-card",   title: "Bubble Breathing Guide", type: "Lesson Sheet",   theme: "Feelings",                         ageRange: "2–5", comingSoon: true,  color: "#4AABDB" },
  { id: "count-shrempies",  title: "Count the Shrempies",    type: "Lesson Sheet",   theme: "Learning",                         ageRange: "2–4", comingSoon: true,  color: "#185FA5" },
  { id: "color-the-ocean",  title: "Ocean Colours",          type: "Lesson Sheet",   theme: "Learning",                         ageRange: "2–5", comingSoon: true,  color: "#085041" },

  // ── Activity Cards ─────────────────────────────
  { id: "character-cards",  title: "Shrempies Character Cards", type: "Activity Card", theme: "Characters",                     ageRange: "2–6", comingSoon: true,  color: "#E8601C" },
  { id: "feeling-cards",    title: "Feeling Cards — Cut Out",   type: "Activity Card", theme: "Feelings",                       ageRange: "2–5", comingSoon: true,  color: "#993556" },
  { id: "movement-cards",   title: "Move Like a Shrempy",       type: "Activity Card", theme: "Movement",                       ageRange: "1–4", comingSoon: true,  color: "#854F0B" },

  // ── Sing-Along Sheets ──────────────────────────
  { id: "wiggle-lyrics",    title: "Wiggle Like a Shrempy",  type: "Sing-Along",     theme: "Movement",                         ageRange: "1–4", comingSoon: true,  color: "#3C3489" },
  { id: "floating-lyrics",  title: "Floating with the Tide", type: "Sing-Along",     theme: "Feelings",                         ageRange: "0–3", comingSoon: true,  color: "#3C3489" },

  // ── Posters ────────────────────────────────────
  { id: "feelings-poster",  title: "Feelings Are Welcome Here", type: "Poster",       theme: "Feelings",                        ageRange: "0–6", comingSoon: true,  color: "#993556" },
  { id: "cast-poster",      title: "Meet the Shrempies — Poster", type: "Poster",     theme: "Characters",                      ageRange: "0–6", comingSoon: true,  color: "#061E3A" },
];
