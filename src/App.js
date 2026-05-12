import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

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

  const counselors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Clinical Therapist, PhD",
      specialization: "Depression, Anxiety, Life Transitions",
      bio: "With 8+ years of experience, Dr. Mitchell specializes in evidence-based CBT and trauma-informed care. She creates a safe, nurturing environment for clients seeking lasting change.",
      gradient: "linear-gradient(135deg, #5fa8c9, #4ba8a8)"
    },
    {
      name: "Michael Chen",
      title: "Relationship Counselor, LMFT",
      specialization: "Couples Therapy, Communication, Family Dynamics",
      bio: "Michael brings 6+ years of expertise in relationship dynamics and communication skills. He helps couples and families navigate conflicts and build stronger connections.",
      gradient: "linear-gradient(135deg, #d8825c, #e8a957)"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Mindfulness & Wellness Coach",
      specialization: "Mindfulness, Stress Management, Burnout Prevention",
      bio: "Dr. Rodriguez combines mindfulness practices with modern psychology to help clients achieve emotional balance and sustained well-being. Ideal for stress and burnout.",
      gradient: "linear-gradient(135deg, #7fb898, #6fa878)"
    },
    {
      name: "Mr. Aryan Harit",
      title: "Licensed Counselor, MA",
      specialization: "Youth Counseling, Career Guidance, Personal Development",
      bio: "Mr. Harit specializes in working with young adults and professionals navigating career transitions and personal growth. With a compassionate approach, he helps clients build confidence and achieve their life goals.",
      gradient: "linear-gradient(135deg, #4ba8a8, #5fa8c9)"
    }
  ];

  const blogPosts = [
    {
      title: "Understanding Anxiety: Causes and Coping Strategies",
      date: "May 10, 2026",
      excerpt: "Learn about the physiological responses to anxiety and discover practical, evidence-based techniques to manage anxious thoughts and feelings effectively.",
      gradient: "linear-gradient(135deg, #5fa8c9, #4ba8a8)"
    },
    {
      title: "Building Healthy Relationships: Communication Guide",
      date: "May 8, 2026",
      excerpt: "Explore the foundations of healthy communication and learn how to navigate conflicts with compassion, clarity, and mutual respect.",
      gradient: "linear-gradient(135deg, #d8825c, #e8a957)"
    },
    {
      title: "Mindfulness Meditation: A Beginner's Guide",
      date: "May 5, 2026",
      excerpt: "Discover how mindfulness can reduce stress and improve emotional resilience. Includes step-by-step meditation techniques for beginners.",
      gradient: "linear-gradient(135deg, #7fb898, #6fa878)"
    },
    {
      title: "Sleep Quality and Mental Health Connection",
      date: "May 1, 2026",
      excerpt: "Understand how sleep impacts your mental health and learn proven strategies for better sleep hygiene and emotional well-being.",
      gradient: "linear-gradient(135deg, #4ba8a8, #5fa8c9)"
    },
    {
      title: "Stress Management Techniques for Busy Professionals",
      date: "April 28, 2026",
      excerpt: "Practical stress management strategies tailored for professionals managing work, family, and personal responsibilities.",
      gradient: "linear-gradient(135deg, #e8a957, #d8825c)"
    },
    {
      title: "Breaking the Cycle: Understanding Depression",
      date: "April 25, 2026",
      excerpt: "A comprehensive guide to recognizing depression symptoms and exploring treatment options with professional support.",
      gradient: "linear-gradient(135deg, #6fa878, #7fb898)"
    }
  ];

  const faqs = [
    {
      question: "What is therapy and how can it help me?",
      answer: "Therapy is a collaborative process between you and a trained mental health professional. It provides a safe space to explore your thoughts, feelings, and behaviors. Through evidence-based techniques, therapy helps you develop coping strategies, gain insights, and create positive changes in your life."
    },
    {
      question: "How long does therapy typically last?",
      answer: "The duration varies based on your needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer ongoing support. We assess your situation together and create a personalized plan that works for you."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, your privacy is protected by therapist-client confidentiality laws. Everything discussed in therapy is kept strictly confidential, with few legal exceptions. We maintain the highest standards of professional ethics and privacy protection."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, we offer secure telehealth sessions through encrypted video conferencing. Online therapy is just as effective as in-person sessions and provides flexibility for busy schedules."
    },
    {
      question: "What if I'm in crisis or having thoughts of self-harm?",
      answer: "If you're in immediate danger, please call 911 or go to the nearest emergency room. You can also contact the National Suicide Prevention Lifeline at 988 (US) for 24/7 support and crisis intervention."
    },
    {
      question: "How much does therapy cost?",
      answer: "Pricing varies based on the type of service and session length. We offer flexible payment options and can discuss rates during your initial consultation. Many insurance plans cover therapy services."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('reveal-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setQuizScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const answerQuestion = (selectedIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedIndex;
    setAnswers(newAnswers);

    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(prev => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 500);
    } else {
      setQuizCompleted(true);
    }
  };

  const retakeQuiz = () => {
    startQuiz();
  };

  const bookCounselor = (counselorName) => {
    const message = `You're about to book a session with ${counselorName}. You will be redirected to our scheduling form.`;
    if (window.confirm(message)) {
      window.location.href = 'https://forms.gle/YrDP7aSDu5qTWmwu6?counselor=' + encodeURIComponent(counselorName);
    }
  };

  const toggleFAQ = (index) => {
    const faqItem = document.querySelectorAll('.faq-item')[index];
    faqItem.classList.toggle('active');
  };

  const getQuizResults = () => {
    const percentage = (quizScore / quizQuestions.length) * 100;
    let interpretation = '';

    if (percentage >= 80) {
      interpretation = 'Excellent! You demonstrate strong psychological knowledge.';
    } else if (percentage >= 60) {
      interpretation = 'Good understanding! You have solid mental health knowledge.';
    } else if (percentage >= 40) {
      interpretation = 'You\'re learning! Consider exploring more resources on psychology.';
    } else {
      interpretation = 'Keep learning! Mental health education is an ongoing journey.';
    }

    return { percentage, interpretation };
  };

  return (
    <div className="App">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">Mindoze Therapy</a>
          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-links">
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#quiz" onClick={closeMobileMenu}>Self-Assessment</a>
            <a href="#blog" onClick={closeMobileMenu}>Blog</a>
            <a href="#faqs" onClick={closeMobileMenu}>FAQs</a>
            <a href="#counselors" onClick={closeMobileMenu}>Counselors</a>
            <a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>
          <button className="nav-toggle" id="nav-toggle" onClick={toggleMobileMenu} aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <span className="eyebrow">Professional Therapy That Works</span>
              <h1>Transform Your Life with Compassionate Counseling</h1>
              <p>Mindoze Therapy provides personalized one-on-one therapy, expert coaching, and emotional support to help you find clarity, build resilience, and achieve lasting balance in your life.</p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Book a Session</a>
                <a href="#services" className="btn btn-secondary">Explore Services</a>
              </div>
            </div>
            <div className="hero-image reveal-right">
              <div className="image-card">
                <div className="card-wave"></div>
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="Professional therapy session at Mindoze Therapy" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="container section-header reveal-up">
            <p className="section-label">Our Services</p>
            <h2>Evidence-Based Therapy & Counseling Services</h2>
          </div>
          <div className="container services-grid">
            <article className="service-card reveal-up delay-1">
              <h3>Individual Counseling</h3>
              <p>Comprehensive, personalized therapy addressing anxiety, depression, stress management, and life transitions. Evidence-based techniques tailored to your unique needs.</p>
            </article>
            <article className="service-card reveal-up delay-2">
              <h3>Relationship Support</h3>
              <p>Create a safe therapeutic environment to explore communication patterns, rebuild trust, establish healthy boundaries, and strengthen connections.</p>
            </article>
            <article className="service-card reveal-up delay-3">
              <h3>Mindfulness Coaching</h3>
              <p>Learn practical mindfulness and stress-reduction techniques to increase self-awareness, build emotional resilience, and achieve sustainable balance.</p>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-copy reveal-left">
              <p className="section-label">About Mindoze Therapy</p>
              <h2>Expert Care Built on Empathy, Insight & Trust</h2>
              <p>Mindoze Therapy is dedicated to providing compassionate, evidence-based mental health support. With years of experience helping clients navigate life's challenges, our licensed therapist creates a safe, supportive environment where meaningful transformation and healing naturally occur.</p>
              <ul className="about-list">
                <li>✓ Licensed therapist with specialized trauma-informed care training</li>
                <li>✓ Evidence-based therapy methods proven to create lasting change</li>
                <li>✓ Flexible scheduling with secure online and in-person sessions</li>
                <li>✓ Confidential, judgment-free therapeutic relationship</li>
              </ul>
            </div>
            <div className="about-stats reveal-right">
              <div className="stat-card">
                <span>8+</span>
                <p>Years of practice</p>
              </div>
              <div className="stat-card">
                <span>1500+</span>
                <p>Client sessions</p>
              </div>
              <div className="stat-card">
                <span>4.9/5</span>
                <p>Client satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="quiz-section" id="quiz">
          <div className="container section-header reveal-up">
            <p className="section-label">Mental Health Check-in</p>
            <h2>Take Our Psychological Self-Assessment Quiz</h2>
            <p>Understand your mental wellness with our evidence-based 10-question assessment</p>
          </div>
          <div className="container quiz-container reveal-up">
            {!quizStarted && !quizCompleted && (
              <div className="quiz-start">
                <p>This quiz helps you gain insight into your current emotional state and mental wellness. Your responses are private and will help guide you toward appropriate support.</p>
                <button id="start-quiz-btn" className="btn btn-primary" onClick={startQuiz}>Start Quiz</button>
              </div>
            )}

            {quizStarted && !quizCompleted && (
              <div className="quiz-content">
                <div className="quiz-progress">
                  <div className="progress-bar" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}></div>
                </div>
                <div className="quiz-question">
                  <h3>Question {currentQuestion + 1} of {quizQuestions.length}</h3>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '1rem 0' }}>{quizQuestions[currentQuestion].question}</p>
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="answer"
                        value={index}
                        onChange={() => answerQuestion(index)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {quizCompleted && (
              <div className="quiz-results">
                <h3>Your Assessment Results</h3>
                <div id="results-content">
                  <div style={{ background: 'rgba(95, 168, 201, 0.1)', padding: '2rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--primary)', margin: '0' }}>{quizScore}/{quizQuestions.length}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text)', margin: '0.5rem 0 0' }}>Score: {getQuizResults().percentage.toFixed(1)}%</p>
                  </div>
                  <p style={{ fontSize: '1.1rem', color: 'var(--success)', fontWeight: '600' }}>{getQuizResults().interpretation}</p>
                  <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>Thank you for completing the psychological self-assessment. If you'd like personalized guidance, consider booking a session with one of our counselors.</p>
                </div>
                <button id="retake-quiz-btn" className="btn btn-primary" onClick={retakeQuiz}>Retake Quiz</button>
              </div>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog-section" id="blog">
          <div className="container section-header reveal-up">
            <p className="section-label">Mental Wellness Resources</p>
            <h2>Articles & Insights for Better Mental Health</h2>
          </div>
          <div className="container blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className={`blog-card reveal-up delay-${(index % 3) + 1}`}>
                <div className="blog-image" style={{ background: post.gradient }}></div>
                <h3>{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">Read Article →</a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="faqs-section" id="faqs">
          <div className="container section-header reveal-up">
            <p className="section-label">Questions & Answers</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="container faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item reveal-up">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Counselors Section */}
        <section className="counselors-section" id="counselors">
          <div className="container section-header reveal-up">
            <p className="section-label">Our Team</p>
            <h2>Meet Our Licensed Counselors & Therapists</h2>
          </div>
          <div className="container counselors-grid">
            {counselors.map((counselor, index) => (
              <div key={index} className={`counselor-card reveal-up delay-${(index % 3) + 1}`}>
                <div className="counselor-image" style={{ background: counselor.gradient }}></div>
                <h3>{counselor.name}</h3>
                <p className="counselor-title">{counselor.title}</p>
                <p className="counselor-specialization">Specialization: {counselor.specialization}</p>
                <p className="counselor-bio">{counselor.bio}</p>
                <button className="btn btn-secondary" onClick={() => bookCounselor(counselor.name)}>Book Session</button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section" id="testimonials">
          <div className="container section-header reveal-up">
            <p className="section-label">Client Success Stories</p>
            <h2>Real Transformations From People Who Found Their Path</h2>
          </div>
          <div className="container testimonials-grid">
            <article className="testimonial-card reveal-up delay-1">
              <p>"Mindoze Therapy's counselor helped me feel safer and more confident in my decisions. After just a few sessions, I finally feel like I'm moving forward with purpose and clarity."</p>
              <strong>— Maya R., Career Professional</strong>
            </article>
            <article className="testimonial-card reveal-up delay-2">
              <p>"The therapist created a calm, non-judgmental space and gave me practical tools to manage stress every single day. The skills I learned are game-changing. Highly recommended for anyone seeking real support."</p>
              <strong>— James K., Business Owner</strong>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid reveal-up">
            <div>
              <p className="section-label">Begin Your Journey</p>
              <h2>Ready to Start Your Transformation?</h2>
              <p>Take the first step toward emotional wellness. Fill out the form below to schedule a consultation with our licensed therapist. Your confidentiality and comfort are our top priorities.</p>
              <a href="https://forms.gle/YrDP7aSDu5qTWmwu6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule Your Session</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Mindoze Therapy · Professional therapy for emotional wellness and lasting transformation</p>
          <p>© 2026 Mindoze Therapy. All rights reserved. Your mental health matters.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;