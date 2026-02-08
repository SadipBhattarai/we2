
/* ---------------- QUESTIONS ---------------- */

const questions = [
  // --- LIFESTYLE & ROUTINE ---
  { q: "What’s your ideal wake-up time?", o: ["Before 6 AM", "7 AM - 9 AM", "10 AM - Noon", "Whenever I feel like it"] },
  { q: "How do you handle household chores?", o: ["Clean as I go", "Weekend deep clean", "When it gets messy", "Hire help"] },
  { q: "Your preferred weekend vibe?", o: ["Productive/Busy", "Pure Relaxation", "Social/Partying", "Outdoor Adventure"] },
  { q: "How do you feel about pets in the house?", o: ["Love them inside", "Only outside", "No pets please", "One or two only"] },
  { q: "What’s your temperature preference?", o: ["Ice cold AC", "Warm and cozy", "Fresh air/Windows open", "I don't mind"] },
  
  // --- COMMUNICATION & EMOTIONS ---
  { q: "When we disagree, you usually...", o: ["Want to fix it now", "Need space to think", "Write my feelings", "Wait for it to pass"] },
  { q: "How do you show appreciation?", o: ["Gifts", "Helping out", "Kind words", "Physical touch"] },
  { q: "Your reaction to a big surprise?", o: ["Love it!", "Kinda nervous", "Prefer to know", "Total panic"] },
  { q: "How much 'me time' do you need?", o: ["A lot", "A healthy balance", "Very little", "Only when stressed"] },
  { q: "How do you handle stress?", o: ["Venting/Talking", "Quiet reflection", "Physical exercise", "Distraction/Movies"] },

  // --- SOCIAL & TRAVEL ---
  { q: "Ideal social gathering size?", o: ["Just us two", "4-6 close friends", "Big lively party", "Meeting new people"] },
  { q: "Travel style?", o: ["Luxury/Relaxed", "Backpacking/Active", "Detailed itinerary", "Go with the flow"] },
  { q: "Public displays of affection?", o: ["Totally fine", "A little is okay", "Keep it private", "Only on holidays"] },
  { q: "How do you feel about social media?", o: ["Post everything", "Post occasionally", "Browse but no post", "Don't use it"] },
  { q: "Phone use at dinner?", o: ["Strictly no phones", "Only for photos", "Quick checks okay", "Always on the table"] },

  // --- FUTURE & VALUES ---
  { q: "Our dream home would be in...", o: ["The busy city", "The quiet suburbs", "Mountains/Nature", "By the beach"] },
  { q: "Money management style?", o: ["Strict budgeter", "Save first, spend later", "Spend for now", "Invest everything"] },
  { q: "Career vs. Personal Life?", o: ["Career is priority", "Life is priority", "Strive for 50/50", "Changes day-to-day"] },
  { q: "How important are traditions?", o: ["Very important", "Nice to have", "Don't care much", "Let's make our own"] },
  { q: "Regarding kids in the future...", o: ["Definitely want them", "Maybe one day", "Not for me", "Let's see what happens"] },

  // --- FUN & QUIRKS ---
  { q: "Movie night genre?", o: ["Horror/Thriller", "Rom-Com", "Action/Sci-Fi", "Documentary"] },
  { q: "Your go-to comfort food?", o: ["Pizza/Burgers", "Home-cooked meal", "Sweets/Dessert", "Spicy food"] },
  { q: "If you won the lottery tomorrow?", o: ["Buy a house", "Travel the world", "Invest/Save it", "Give to family"] },
  { q: "Your superpower of choice?", o: ["Invisibility", "Flight", "Mind Reading", "Time Travel"] },
  { q: "How do you feel about cooking?", o: ["I’m the chef", "I’ll do the dishes", "Let's order in", "We cook together"] },

  // --- DEEPER CONNECTION ---
  { q: "What makes you feel most loved?", o: ["Being listened to", "Being supported", "Shared laughter", "Small surprises"] },
  { q: "Your biggest pet peeve?", o: ["Lateness", "Messiness", "Loud chewing", "Rudeness"] },
  { q: "How do you handle apologies?", o: ["Say it quickly", "Show it with actions", "Need time to cool off", "Hard to say it"] },
  { q: "Morning person or Night owl?", o: ["Early bird", "Productive at night", "Need a nap daily", "Always tired"] },
  { q: "The best way to spend $100?", o: ["Nice dinner", "New clothes", "A concert ticket", "Put it in savings"] },

  // --- ADDING VARIETY ---
  { q: "How do you feel about horror movies?", o: ["Love them!", "Too scared", "They're okay", "Only with lights on"] },
  { q: "Dream vacation destination?", o: ["Paris/Europe", "Tokyo/Japan", "Bali/Island", "NYC/City vibe"] },
  { q: "Preferred way to exercise?", o: ["Gym/Weights", "Walking/Yoga", "Team sports", "Netflix is my cardio"] },
  { q: "How often should we go on dates?", o: ["Weekly", "Twice a month", "Once a month", "Every night is a date"] },
  { q: "Favorite season?", o: ["Summer", "Winter", "Spring", "Autumn"] },
  { q: "Your 'Love Language' at work?", o: ["Getting it done", "Collaborating", "Being recognized", "Quiet focus"] },
  { q: "Coffee or Tea?", o: ["Coffee always", "Tea only", "Both", "Neither"] },
  { q: "Do you believe in soulmates?", o: ["Absolutely", "Maybe", "We make it work", "Not really"] },
  { q: "How do you handle a bad day?", o: ["Talk it out", "I need a nap", "Retail therapy", "Comfort food"] },
  { q: "Best part of a relationship?", o: ["Trust", "Passion", "Friendship", "Growth"] },
  { q: "Favorite type of music?", o: ["Pop/Rock", "Hip Hop/R&B", "Jazz/Classical", "Indie/Folk"] },
  { q: "Working from home vs Office?", o: ["Home forever", "Office vibe", "Hybrid/Mixed", "I hate working"] },
  { q: "Preferred sleeping arrangement?", o: ["Cuddling", "Own side of bed", "Separate blankets", "Starfish mode"] },
  { q: "Are you an overthinker?", o: ["Yes, 24/7", "Only for big things", "Not at all", "I forget things fast"] },
  { q: "How do you view 'honesty'?", o: ["Total transparency", "Selective honesty", "White lies are okay", "Privacy first"] },
  { q: "Biggest fear?", o: ["Failure", "Loneliness", "Being bored", "Loss of control"] },
  { q: "Your style of fashion?", o: ["Trendy/Fashionable", "Comfort first", "Minimalist", "Workwear/Formal"] },
  { q: "If we were in a movie, it’d be...", o: ["A Rom-Com", "An Action Thriller", "A Drama", "A Fantasy"] },
  { q: "What's your 'hidden talent'?", o: ["Cooking", "Singing/Music", "Problem solving", "Making people laugh"] },
  { q: "Final thought on 'Love'?", o: ["It's a choice", "It's a feeling", "It's a journey", "It's everything"] }
];

// Duplicate to make 50
while (questions.length < 50) {
  questions.push({ ...questions[questions.length % 5] });
}


/* ---------------- SYSTEM ---------------- */

const app = document.getElementById("app");

const url = new URL(window.location.href);

let testId = url.searchParams.get("id");
let player = url.searchParams.get("p");
let name = url.searchParams.get("n");

if (!testId) {
  testId = Math.random().toString(36).substr(2, 9);
  location = "?id=" + testId + "&p=1";
}

if (!player) player = "1";

const key = "love_" + testId;

let data = JSON.parse(localStorage.getItem(key)) || {
  p1: [],
  p2: [],
  n1: "",
  n2: "",
  d1: false,
  d2: false
};

let current = 0;


/* ---------------- START ---------------- */

if (!name) {
  showName();
} else {

  if (player === "1") data.n1 = name;
  if (player === "2") data.n2 = name;

  save();

  if (!data["d" + player]) {
    showQuiz();
  } else {
    waiting();
  }
}


/* ---------------- NAME ---------------- */

function showName() {
  app.innerHTML = `
    <div class="center-content">
      <div class="header">
        <span>Compatibility Test</span>
        <h1>Enter your name</h1>
      </div>

      <div class="input-container">
        <input id="nm" class="input-box-light" placeholder="e.g. John Doe" autocomplete="off">
        
        <button class="btn-primary-wide" onclick="start()">
          Start Analysis
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  `;
}
function start() {

  const n = document.getElementById("nm").value.trim();

  if (!n) return alert("Enter name");

  location = "?id=" + testId + "&p=" + player + "&n=" + encodeURIComponent(n);

}


/* ---------------- QUIZ ---------------- */

function showQuiz() {
  render();
}

function render() {

  const q = questions[current];
  const a = data["p" + player];

  const prog = ((current + 1) / 50) * 100;

  app.innerHTML = `

    <div class="header">

      <h1>Hello ${name} 💙</h1>
      <p>Answer honestly</p>

    </div>

    <div class="progress-area">

      <div class="progress-text">
        Question ${current + 1} / 50
      </div>

      <div class="progress-box">
        <div class="progress" style="width:${prog}%"></div>
      </div>

    </div>

    <div class="question">${q.q}</div>

    <div class="options">

      ${q.o.map((x, i) => `
        <div class="option ${a[current] === i ? 'active' : ''}"
        onclick="select(${i})">
          ${x}
        </div>
      `).join("")}

    </div>

    <div class="controls">

      <button onclick="prev()" ${current === 0 ? 'disabled' : ''}>
        Previous
      </button>

      <button onclick="next()">
        ${current === 49 ? 'Finish' : 'Next'}
      </button>

    </div>

  `;

}


/* ---------------- SELECTION ---------------- */

function select(i) {

  data["p" + player][current] = i;
  save();
  render();

  // Auto move after select
  if (current < 49) {

    setTimeout(() => {
      current++;
      render();
    }, 300);

  }

}


/* ---------------- NAVIGATION ---------------- */

function next() {

  if (data["p" + player][current] === undefined) {
    alert("Select an option");
    return;
  }

  if (current < 49) {
    current++;
    render();
  } else {
    finish();
  }

}

function prev() {

  if (current > 0) {
    current--;
    render();
  }

}


/* ---------------- FINISH ---------------- */

function finish() {

  data["d" + player] = true;
  save();
  waiting();

}

// Add this helper function
function copyLink() {
  const linkText = document.querySelector('.link-box').innerText;
  navigator.clipboard.writeText(linkText);
  alert("Link copied to clipboard!");
}

// Update your waiting() template to include:
// <button onclick="copyLink()">Copy Link</button>

function waiting() {

  const link =
    location.origin +
    location.pathname +
    "?id=" + testId +
    "&p=" + (player === "1" ? 2 : 1);

  if (data.d1 && data.d2) {
    result();
    return;
  }

  app.innerHTML = `

    <div class="center">

      <h1>Done ✅</h1>

      <p>Share link:</p>

      <div class="link-box">${link}</div>
      <button onclick="copyLink()">Copy Link</button>   

      <p>Waiting for partner...</p>

      <button onclick="location.reload()">Refresh</button>

    </div>

  `;

}


/* ---------------- RESULT ---------------- */

function result() {

  let match = 0;

  for (let i = 0; i < 50; i++) {
    if (data.p1[i] === data.p2[i]) match++;
  }

  const percent = Math.round((match / 50) * 100);

  let msg =
    percent >= 85 ? "Soulmates 💖" :
    percent >= 70 ? "Strong bond ❤️" :
    percent >= 50 ? "Good match 🙂" :
    "Needs effort 💬";

  app.innerHTML = `

    <div class="center">

      <h1>${data.n1} ❤️ ${data.n2}</h1>

      <h2>${percent}% Match</h2>

      <p>${msg}</p>

      <p>${match}/50 Matched</p>

      <br>

      <button onclick="reset()">
        New Test
      </button>

    </div>

  `;

}


/* ---------------- STORAGE ---------------- */

function save() {
  localStorage.setItem(key, JSON.stringify(data));
}

function reset() {
  localStorage.removeItem(key);
  location = location.pathname;
}
