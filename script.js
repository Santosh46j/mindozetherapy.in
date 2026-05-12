const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle mobile navigation menu
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.site-header') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealElements.forEach((el) => observer.observe(el));

// Smooth button click feedback
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 100);
  });
});

// ===== QUIZ FUNCTIONALITY =====
const quizQuestions = [
  {
    question: "What is the primary goal of cognitive behavioral therapy (CBT)?",
    options: [
      "To identify and change negative thought patterns",
      "To rely only on medication",
      "To avoid discussing past experiences",
      "To increase isolation"
    ],
    correct: 0
  },
  {
    question: "Which neurotransmitter is often associated with mood regulation?",
    options: [
      "Serotonin",
      "Insulin",
      "Cortisol",
      "Adrenaline"
    ],
    correct: 0
  },
  {
    question: "What is a common symptom of generalized anxiety disorder?",
    options: [
      "Excessive worry about various aspects of daily life",
      "Complete lack of emotions",
      "Inability to move physically",
      "Loss of sense of smell"
    ],
    correct: 0
  },
  {
    question: "Which of these is NOT a typical symptom of depression?",
    options: [
      "Increased energy and excitement",
      "Persistent sad mood",
      "Loss of interest in activities",
      "Changes in sleep patterns"
    ],
    correct: 0
  },
  {
    question: "What is emotional intelligence?",
    options: [
      "The ability to recognize, understand, and manage emotions",
      "Having a high IQ",
      "Being emotionless",
      "Never feeling sad"
    ],
    correct: 0
  },
  {
    question: "Which coping mechanism is considered healthy?",
    options: [
      "Exercise and talking to trusted friends",
      "Substance abuse",
      "Avoiding problems completely",
      "Aggressive behavior"
    ],
    correct: 0
  },
  {
    question: "What is mindfulness?",
    options: [
      "Present-moment awareness without judgment",
      "Never thinking about anything",
      "Constant worry",
      "Forgetting the past"
    ],
    correct: 0
  },
  {
    question: "Which is a sign of healthy boundaries?",
    options: [
      "Being able to say no respectfully",
      "Never disagreeing with others",
      "Allowing others to take advantage",
      "Isolating from everyone"
    ],
    correct: 0
  },
  {
    question: "What role does sleep play in mental health?",
    options: [
      "It's crucial for mood regulation and cognitive function",
      "It has no impact on mental health",
      "It only matters for physical health",
      "More sleep always means better mental health"
    ],
    correct: 0
  },
  {
    question: "Which is a protective factor against mental health issues?",
    options: [
      "Strong social support and connections",
      "Social isolation",
      "Chronic stress without relief",
      "Avoiding all challenges"
    ],
    correct: 0
  },
  {
    question: "What is the fight-or-flight response?",
    options: [
      "The body's automatic reaction to perceived threats",
      "A choice to be brave",
      "Only experienced by soldiers",
      "A conscious decision"
    ],
    correct: 0
  },
  {
    question: "Which therapy approach focuses on changing behaviors to improve mood?",
    options: [
      "Behavioral Activation Therapy",
      "Avoidance Therapy",
      "Denial Therapy",
      "Procrastination Therapy"
    ],
    correct: 0
  },
  {
    question: "What is empathy in therapy?",
    options: [
      "Understanding and sharing someone's feelings",
      "Judging someone's choices",
      "Giving unsolicited advice",
      "Fixing problems for people"
    ],
    correct: 0
  },
  {
    question: "How does exercise benefit mental health?",
    options: [
      "It reduces stress, improves mood, and increases confidence",
      "It has no mental health benefits",
      "It only benefits physical health",
      "It increases anxiety"
    ],
    correct: 0
  },
  {
    question: "What is a grounding technique used for?",
    options: [
      "To bring awareness back to the present moment during anxiety",
      "To punish children",
      "To increase anxiety",
      "To avoid feelings"
    ],
    correct: 0
  },
  {
    question: "Which is important in the therapeutic relationship?",
    options: [
      "Trust and confidentiality",
      "The therapist having all the answers",
      "The therapist sharing personal problems",
      "The client being judged"
    ],
    correct: 0
  },
  {
    question: "What is resilience in psychology?",
    options: [
      "The ability to recover and adapt after adversity",
      "Never experiencing challenges",
      "Avoiding emotions",
      "Not caring about problems"
    ],
    correct: 0
  },
  {
    question: "How does stress management improve wellbeing?",
    options: [
      "By reducing physical and emotional strain on the body",
      "By ignoring stressors",
      "By increasing worry",
      "By avoiding all responsibilities"
    ],
    correct: 0
  },
  {
    question: "What is self-compassion?",
    options: [
      "Being kind to yourself during difficult times",
      "Being self-centered",
      "Having no standards for yourself",
      "Never holding yourself accountable"
    ],
    correct: 0
  },
  {
    question: "Which factor most influences long-term mental health outcomes?",
    options: [
      "Consistent self-care, professional support, and positive relationships",
      "One therapy session",
      "Medication alone",
      "Avoiding all challenges"
    ],
    correct: 0
  }
];

let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
document.getElementById('retake-quiz-btn').addEventListener('click', () => {
  currentQuizQuestion = 0;
  quizScore = 0;
  quizAnswers = [];
  startQuiz();
});

function startQuiz() {
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-content').style.display = 'block';
  currentQuizQuestion = 0;
  displayQuizQuestion();
}

function displayQuizQuestion() {
  const question = quizQuestions[currentQuizQuestion];
  const container = document.getElementById('quiz-questions');
  
  const progress = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  
  let html = `
    <div class="quiz-question">
      <h3>Question ${currentQuizQuestion + 1} of ${quizQuestions.length}</h3>
      <p style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0;">${question.question}</p>
  `;
  
  question.options.forEach((option, index) => {
    html += `
      <label>
        <input type="radio" name="answer" value="${index}" onchange="answerQuestion(${index})">
        ${option}
      </label>
    `;
  });
  
  container.innerHTML = html;
}

function answerQuestion(selectedIndex) {
  quizAnswers[currentQuizQuestion] = selectedIndex;
  const question = quizQuestions[currentQuizQuestion];
  
  if (selectedIndex === question.correct) {
    quizScore++;
  }
  
  if (currentQuizQuestion < quizQuestions.length - 1) {
    currentQuizQuestion++;
    setTimeout(displayQuizQuestion, 500);
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quiz-content').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';
  
  const percentage = (quizScore / quizQuestions.length) * 100;
  let interpretation = '';
  
  if (percentage >= 80) {
    interpretation = `<p style="font-size: 1.1rem; color: var(--success); font-weight: 600;">Excellent! You demonstrate strong psychological knowledge.</p>`;
  } else if (percentage >= 60) {
    interpretation = `<p style="font-size: 1.1rem; color: var(--primary); font-weight: 600;">Good understanding! You have solid mental health knowledge.</p>`;
  } else if (percentage >= 40) {
    interpretation = `<p style="font-size: 1.1rem; color: var(--accent-warm); font-weight: 600;">You're learning! Consider exploring more resources on psychology.</p>`;
  } else {
    interpretation = `<p style="font-size: 1.1rem; color: var(--text-muted); font-weight: 600;">Keep learning! Mental health education is an ongoing journey.</p>`;
  }
  
  document.getElementById('results-content').innerHTML = `
    <div style="background: rgba(95, 168, 201, 0.1); padding: 2rem; border-radius: 16px; margin-bottom: 1.5rem;">
      <h2 style="font-size: 3rem; color: var(--primary); margin: 0;">${quizScore}/${quizQuestions.length}</h2>
      <p style="font-size: 1.2rem; color: var(--text); margin: 0.5rem 0 0;">Score: ${percentage.toFixed(1)}%</p>
    </div>
    ${interpretation}
    <p style="margin-top: 1.5rem; color: var(--text-muted);">Thank you for completing the psychological self-assessment. If you'd like personalized guidance, consider booking a session with one of our counselors.</p>
  `;
}

// ===== FAQ FUNCTIONALITY =====
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  faqItem.classList.toggle('active');
}

// ===== COUNSELOR BOOKING =====
function bookCounselor(counselorName) {
  const message = `You're about to book a session with ${counselorName}. You will be redirected to our scheduling form.`;
  if (confirm(message)) {
    window.location.href = 'https://forms.gle/YrDP7aSDu5qTWmwu6?counselor=' + encodeURIComponent(counselorName);
  }
}


