/**
 * Universal Quiz Engine
 * A flexible, reusable quiz system for DorklyAI
 * Supports multiple quiz types, scoring systems, and result displays
 */

class QuizEngine {
    constructor(config) {
        this.config = {
            containerId: 'quiz-container',
            theme: 'default',
            showProgress: true,
            allowBack: false,
            shuffleQuestions: false,
            shuffleAnswers: false,
            showResults: true,
            enableLeadCapture: true,
            resultRedirect: null,
            analytics: true,
            ...config
        };
        
        this.currentQuestion = 0;
        this.answers = [];
        this.startTime = null;
        this.endTime = null;
        this.results = null;
        
        this.init();
    }
    
    init() {
        this.container = document.getElementById(this.config.containerId);
        if (!this.container) {
            console.error('Quiz container not found');
            return;
        }
        
        this.applyTheme();
        this.renderStartScreen();
        
        if (this.config.analytics) {
            this.trackEvent('quiz_loaded', {
                quiz_type: this.config.quizType || 'unknown',
                quiz_title: this.config.title || 'Unknown Quiz'
            });
        }
    }
    
    applyTheme() {
        const themes = {
            hogwarts: {
                gradient: 'linear-gradient(135deg, #8B4513 0%, #FFD700 50%, #8B0000 100%)',
                primaryColor: '#8B0000',
                secondaryColor: '#FFD700'
            },
            cobrakai: {
                gradient: 'linear-gradient(135deg, #000000 0%, #FFD700 50%, #FF0000 100%)',
                primaryColor: '#000000',
                secondaryColor: '#FFD700'
            },
            starwars: {
                gradient: 'linear-gradient(135deg, #000000 0%, #0066CC 50%, #FFFFFF 100%)',
                primaryColor: '#0066CC',
                secondaryColor: '#FFD700'
            },
            sports: {
                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                primaryColor: '#43e97b',
                secondaryColor: '#38f9d7'
            },
            business: {
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                primaryColor: '#4facfe',
                secondaryColor: '#00f2fe'
            },
            financial: {
                gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                primaryColor: '#fcb69f',
                secondaryColor: '#ffecd2'
            }
        };
        
        const theme = themes[this.config.theme] || themes.business;
        
        document.documentElement.style.setProperty('--quiz-gradient', theme.gradient);
        document.documentElement.style.setProperty('--quiz-primary', theme.primaryColor);
        document.documentElement.style.setProperty('--quiz-secondary', theme.secondaryColor);
    }
    
    renderStartScreen() {
        this.container.innerHTML = `
            <div class="quiz-start-screen text-center">
                <div class="logo-section mb-4">
                    <img src="../../assets/dorklogo.png" alt="DorklyAI" style="height: 80px;">
                </div>
                
                <h1 class="quiz-title mb-3">${this.config.title}</h1>
                <p class="quiz-description mb-4">${this.config.description}</p>
                
                <div class="quiz-stats mb-4">
                    <div class="row text-center">
                        <div class="col-4">
                            <div class="stat-item">
                                <h3>${this.config.questions.length}</h3>
                                <small>Questions</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-item">
                                <h3>${this.config.estimatedTime || '2-3'}</h3>
                                <small>Minutes</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-item">
                                <h3>${Object.keys(this.config.results).length}</h3>
                                <small>Outcomes</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="btn btn-primary btn-lg px-5" onclick="quiz.startQuiz()">
                    Start Quiz
                </button>
                
                ${this.config.disclaimer ? `<p class="disclaimer mt-3"><small>${this.config.disclaimer}</small></p>` : ''}
            </div>
        `;
    }
    
    startQuiz() {
        this.startTime = new Date();
        this.currentQuestion = 0;
        this.answers = [];
        
        if (this.config.shuffleQuestions) {
            this.config.questions = this.shuffleArray(this.config.questions);
        }
        
        this.renderQuestion();
        
        if (this.config.analytics) {
            this.trackEvent('quiz_started', {
                quiz_type: this.config.quizType,
                timestamp: this.startTime.toISOString()
            });
        }
    }
    
    renderQuestion() {
        const question = this.config.questions[this.currentQuestion];
        let answers = [...question.answers];
        
        if (this.config.shuffleAnswers) {
            answers = this.shuffleArray(answers);
        }
        
        const progressPercent = ((this.currentQuestion + 1) / this.config.questions.length) * 100;
        
        this.container.innerHTML = `
            <div class="quiz-question-screen">
                ${this.config.showProgress ? `
                    <div class="progress-container mb-4">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <small class="progress-text">Question ${this.currentQuestion + 1} of ${this.config.questions.length}</small>
                    </div>
                ` : ''}
                
                <div class="question-content">
                    <h2 class="question-title mb-4">${question.question}</h2>
                    
                    <div class="answers-container">
                        ${answers.map((answer, index) => `
                            <button class="answer-btn" onclick="quiz.selectAnswer('${answer.value}', '${answer.text}')" data-answer="${answer.value}">
                                <span class="answer-text">${answer.text}</span>
                                ${answer.description ? `<small class="answer-description">${answer.description}</small>` : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                ${this.config.allowBack && this.currentQuestion > 0 ? `
                    <button class="btn btn-outline-secondary mt-3" onclick="quiz.previousQuestion()">
                        <i class="bi bi-arrow-left"></i> Previous
                    </button>
                ` : ''}
            </div>
        `;
    }
    
    selectAnswer(value, text) {
        this.answers[this.currentQuestion] = {
            questionId: this.config.questions[this.currentQuestion].id,
            value: value,
            text: text,
            timestamp: new Date()
        };
        
        // Visual feedback
        const selectedBtn = document.querySelector(`[data-answer="${value}"]`);
        selectedBtn.classList.add('selected');
        
        // Disable all buttons temporarily
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        // Proceed to next question after brief delay
        setTimeout(() => {
            this.nextQuestion();
        }, 300);
    }
    
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= this.config.questions.length) {
            this.calculateResults();
        } else {
            this.renderQuestion();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    }
    
    calculateResults() {
        this.endTime = new Date();
        const duration = Math.round((this.endTime - this.startTime) / 1000);
        
        // Calculate scores based on quiz type
        let scores = {};
        
        if (this.config.scoringMethod === 'category') {
            // Count answers by category (e.g., Hogwarts houses)
            this.answers.forEach(answer => {
                scores[answer.value] = (scores[answer.value] || 0) + 1;
            });
        } else if (this.config.scoringMethod === 'weighted') {
            // Weighted scoring system
            this.answers.forEach(answer => {
                const question = this.config.questions.find(q => q.id === answer.questionId);
                const answerData = question.answers.find(a => a.value === answer.value);
                
                if (answerData.weights) {
                    Object.keys(answerData.weights).forEach(category => {
                        scores[category] = (scores[category] || 0) + answerData.weights[category];
                    });
                }
            });
        } else if (this.config.scoringMethod === 'percentage') {
            // Percentage-based scoring
            let correctAnswers = 0;
            this.answers.forEach(answer => {
                const question = this.config.questions.find(q => q.id === answer.questionId);
                const answerData = question.answers.find(a => a.value === answer.value);
                if (answerData.correct) correctAnswers++;
            });
            scores.percentage = Math.round((correctAnswers / this.config.questions.length) * 100);
        }
        
        // Determine result
        let resultKey;
        if (this.config.scoringMethod === 'percentage') {
            resultKey = this.getPercentageResult(scores.percentage);
        } else {
            resultKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        }
        
        this.results = {
            resultKey: resultKey,
            result: this.config.results[resultKey],
            scores: scores,
            answers: this.answers,
            duration: duration,
            completedAt: this.endTime
        };
        
        if (this.config.showResults) {
            this.renderResults();
        }
        
        if (this.config.analytics) {
            this.trackEvent('quiz_completed', {
                quiz_type: this.config.quizType,
                result: resultKey,
                duration: duration,
                scores: scores
            });
        }
    }
    
    getPercentageResult(percentage) {
        // Find the appropriate result based on percentage ranges
        const resultKeys = Object.keys(this.config.results);
        for (let key of resultKeys) {
            const result = this.config.results[key];
            if (percentage >= result.minScore && percentage <= (result.maxScore || 100)) {
                return key;
            }
        }
        return resultKeys[0]; // fallback
    }
    
    renderResults() {
        const result = this.results.result;
        
        this.container.innerHTML = `
            <div class="quiz-results-screen text-center">
                <div class="result-header mb-4">
                    <div class="result-icon mb-3" style="font-size: 4rem;">
                        ${result.icon || '🎉'}
                    </div>
                    <h1 class="result-title mb-2">${result.title}</h1>
                    <p class="result-subtitle">${result.subtitle || ''}</p>
                </div>
                
                <div class="result-description mb-4">
                    <p>${result.description}</p>
                </div>
                
                ${result.traits ? `
                    <div class="result-traits mb-4">
                        <h4>Your Traits:</h4>
                        <div class="traits-list">
                            ${result.traits.map(trait => `<span class="trait-badge">${trait}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${this.config.scoringMethod !== 'percentage' ? `
                    <div class="score-breakdown mb-4">
                        <h5>Score Breakdown:</h5>
                        <div class="scores">
                            ${Object.entries(this.results.scores).map(([key, score]) => `
                                <div class="score-item">
                                    <span class="score-label">${this.formatScoreLabel(key)}:</span>
                                    <span class="score-value">${score}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : `
                    <div class="percentage-score mb-4">
                        <h2>${this.results.scores.percentage}%</h2>
                        <p>Correct Answers</p>
                    </div>
                `}
                
                <div class="quiz-stats mb-4">
                    <small class="text-muted">
                        Completed in ${Math.floor(this.results.duration / 60)}:${(this.results.duration % 60).toString().padStart(2, '0')}
                    </small>
                </div>
                
                <div class="result-actions">
                    <button class="btn btn-primary me-2" onclick="quiz.shareResults()">
                        <i class="bi bi-share"></i> Share Results
                    </button>
                    <button class="btn btn-outline-primary me-2" onclick="quiz.retakeQuiz()">
                        <i class="bi bi-arrow-repeat"></i> Retake Quiz
                    </button>
                    ${result.actionButton ? `
                        <a href="${result.actionButton.url}" class="btn btn-success">
                            ${result.actionButton.text}
                        </a>
                    ` : ''}
                </div>
                
                ${this.config.enableLeadCapture ? `
                    <div class="lead-capture mt-4 p-4 border rounded">
                        <h5>Get Your Detailed Results</h5>
                        <p>Enter your email to receive a detailed breakdown of your results and personalized recommendations!</p>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email" id="leadEmail">
                            <button class="btn btn-primary" onclick="quiz.captureEmail()">Get Results</button>
                        </div>
                    </div>
                ` : ''}
                
                <div class="mt-4">
                    <a href="../" class="btn btn-outline-secondary">
                        <i class="bi bi-house"></i> More Quizzes
                    </a>
                </div>
            </div>
        `;
    }
    
    formatScoreLabel(key) {
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    }
    
    shareResults() {
        const result = this.results.result;
        const url = window.location.href;
        const text = `I just completed the ${this.config.title} and got: ${result.title}! ${result.subtitle || ''} Try it yourself:`;
        
        if (navigator.share) {
            navigator.share({
                title: this.config.title,
                text: text,
                url: url
            });
        } else {
            // Fallback to copying to clipboard
            navigator.clipboard.writeText(`${text} ${url}`).then(() => {
                alert('Results copied to clipboard!');
            });
        }
        
        if (this.config.analytics) {
            this.trackEvent('quiz_shared', {
                quiz_type: this.config.quizType,
                result: this.results.resultKey,
                method: navigator.share ? 'native' : 'clipboard'
            });
        }
    }
    
    retakeQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.results = null;
        this.renderStartScreen();
        
        if (this.config.analytics) {
            this.trackEvent('quiz_retaken', {
                quiz_type: this.config.quizType
            });
        }
    }
    
    captureEmail() {
        const email = document.getElementById('leadEmail').value;
        if (!email || !this.isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would integrate with your email service
        console.log('Capturing email:', email, 'Results:', this.results);
        
        // Show success message
        document.querySelector('.lead-capture').innerHTML = `
            <div class="alert alert-success">
                <i class="bi bi-check-circle"></i>
                Thank you! Check your email for detailed results.
            </div>
        `;
        
        if (this.config.analytics) {
            this.trackEvent('email_captured', {
                quiz_type: this.config.quizType,
                result: this.results.resultKey,
                email: email
            });
        }
    }
    
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    trackEvent(eventName, data) {
        // Integrate with Google Analytics, Mixpanel, or your analytics service
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
        
        // Also log to console for debugging
        console.log('Analytics Event:', eventName, data);
    }
}

// Global quiz instance will be set by individual quiz pages
let quiz;