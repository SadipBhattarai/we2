
/* ---------------- QUESTIONS ---------------- */

const questions = [

  {
    q: "How do you prefer to spend time together?",
    o: ["Watching movies", "Going out", "Talking", "Just sitting"]
  },
  {
    q: "When upset, you usually?",
    o: ["Talk", "Stay quiet", "Need space", "Get emotional"]
  },
  {
    q: "Ideal date?",
    o: ["Cafe", "Movie", "Trip", "Surprise"]
  },
  {
    q: "How often should we talk?",
    o: ["All day", "Daily", "Sometimes", "Rarely"]
  },
  {
    q: "Your love language?",
    o: ["Time", "Words", "Gifts", "Touch"]
  }

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
