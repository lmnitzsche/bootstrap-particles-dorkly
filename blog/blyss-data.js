// Blyss Content Management System
// Add new articles to the articles array below

const blyssArticles = [
    {
        id: 1,
        title: "The Future of AI in Business: Navigating the Intelligence Revolution",
        slug: "ai-business-intelligence-revolution",
        category: "Business",
        author: "Sarah Chen",
        date: "2025-10-16",
        readTime: "8 min",
        excerpt: "How artificial intelligence is reshaping industries, creating new opportunities, and challenging traditional business models in 2025.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
        featured: false,
        content: `
            <p>Artificial intelligence has moved from buzzword to business imperative. In 2025, we're witnessing a fundamental shift in how organizations operate, compete, and create value.</p>
            
            <h2>The AI Transformation</h2>
            <p>Companies that embrace AI are seeing 40% productivity gains, 30% cost reductions, and entirely new revenue streams. But this revolution isn't just about automation—it's about augmentation.</p>
            
            <h2>Real-World Applications</h2>
            <ul>
                <li><strong>Predictive Analytics:</strong> Forecasting market trends with 85% accuracy</li>
                <li><strong>Customer Experience:</strong> Personalization at scale through intelligent systems</li>
                <li><strong>Operations:</strong> Supply chain optimization reducing waste by 25%</li>
                <li><strong>Innovation:</strong> AI-assisted R&D accelerating product development</li>
            </ul>
            
            <h2>The Human Element</h2>
            <p>Despite fears of replacement, successful AI implementation amplifies human capability. Teams using AI copilots report higher job satisfaction and more time for creative work.</p>
            
            <h2>Looking Forward</h2>
            <p>The question is no longer whether to adopt AI, but how quickly you can integrate it strategically. Organizations that view AI as a partner—not just a tool—will define the next decade of business.</p>
        `
    },
    {
        id: 2,
        title: "Decentralized Finance: The New Frontier",
        slug: "defi-new-frontier",
        category: "Finance",
        author: "Michael Rodriguez",
        date: "2025-10-15",
        readTime: "6 min",
        excerpt: "Exploring how blockchain technology is democratizing access to financial services and creating new investment opportunities.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>Decentralized Finance (DeFi) has matured from experiment to ecosystem, processing over $200 billion in transactions monthly and offering returns that traditional finance can't match.</p>
            
            <h2>What Makes DeFi Different</h2>
            <p>Unlike traditional banking, DeFi operates without intermediaries. Smart contracts execute automatically, reducing costs and increasing accessibility for billions of unbanked individuals worldwide.</p>
            
            <h2>Key Opportunities</h2>
            <ul>
                <li><strong>Yield Farming:</strong> 8-15% APY on stablecoin deposits</li>
                <li><strong>Liquidity Pools:</strong> Earn fees by providing capital</li>
                <li><strong>Synthetic Assets:</strong> Trade anything, anywhere, anytime</li>
                <li><strong>Flash Loans:</strong> Uncollateralized loans for instant arbitrage</li>
            </ul>
            
            <h2>Managing Risk</h2>
            <p>Smart contract vulnerabilities, impermanent loss, and regulatory uncertainty remain challenges. Diversification and due diligence are essential.</p>
            
            <h2>The Path Forward</h2>
            <p>As institutional adoption grows and infrastructure matures, DeFi is positioning itself as a legitimate alternative to traditional financial systems. The revolution is just beginning.</p>
        `
    },
    {
        id: 3,
        title: "Quantum Computing: Beyond the Hype",
        slug: "quantum-computing-reality",
        category: "Technology",
        author: "Dr. Emily Watson",
        date: "2025-10-14",
        readTime: "10 min",
        excerpt: "Understanding the real-world applications and limitations of quantum computing in modern technology.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
        featured: true,
        content: `
            <p>Quantum computing promises to solve problems in minutes that would take classical computers millennia. But separating reality from hype requires understanding both the potential and the limitations.</p>
            
            <h2>The Quantum Advantage</h2>
            <p>Quantum computers leverage superposition and entanglement to process information in fundamentally different ways. For specific problems—drug discovery, cryptography, optimization—they offer exponential speedups.</p>
            
            <h2>Current Applications</h2>
            <ul>
                <li><strong>Pharmaceuticals:</strong> Simulating molecular interactions for drug development</li>
                <li><strong>Finance:</strong> Portfolio optimization and risk analysis</li>
                <li><strong>Logistics:</strong> Route optimization for global supply chains</li>
                <li><strong>Materials Science:</strong> Designing new materials with specific properties</li>
            </ul>
            
            <h2>The Reality Check</h2>
            <p>Quantum computers won't replace your laptop. They require near-absolute-zero temperatures, are extremely error-prone, and excel only at specific problem types. We're still years from general-purpose quantum computing.</p>
            
            <h2>Business Implications</h2>
            <p>Companies should prepare for a quantum future through quantum-safe cryptography and identifying problems where quantum advantage applies. The window to gain competitive advantage is now.</p>
        `
    },
    {
        id: 4,
        title: "Stoicism in Modern Leadership",
        slug: "stoicism-modern-leadership",
        category: "Philosophy",
        author: "James Mitchell",
        date: "2025-10-13",
        readTime: "7 min",
        excerpt: "How ancient wisdom shapes contemporary business strategy and executive decision-making.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>In an era of volatility and complexity, ancient Stoic philosophy offers timeless frameworks for modern leadership. CEOs from Silicon Valley to Wall Street are rediscovering Marcus Aurelius.</p>
            
            <h2>Core Stoic Principles</h2>
            <ul>
                <li><strong>Control and Acceptance:</strong> Focus energy on what you can control, accept what you cannot</li>
                <li><strong>Virtue as the Highest Good:</strong> Integrity over outcomes</li>
                <li><strong>Rational Perspective:</strong> Emotions as data, not directors</li>
                <li><strong>Memento Mori:</strong> Awareness of mortality creates urgency and clarity</li>
            </ul>
            
            <h2>Application in Business</h2>
            <p>Stoic leaders demonstrate resilience during crises, make decisions based on principles rather than panic, and build cultures of accountability and excellence.</p>
            
            <h2>Practical Exercises</h2>
            <p>Daily journaling, negative visualization, and voluntary discomfort strengthen mental resilience. The morning routine of reflecting on challenges and evening review of actions creates continuous improvement.</p>
            
            <h2>The Stoic Advantage</h2>
            <p>In markets defined by uncertainty, leaders who master their internal state gain disproportionate advantage. Stoicism isn't pessimism—it's pragmatic optimism backed by unshakeable character.</p>
        `
    },
    {
        id: 5,
        title: "Remote Work: The Productivity Paradox",
        slug: "remote-work-productivity-paradox",
        category: "Business",
        author: "Jennifer Park",
        date: "2025-10-12",
        readTime: "5 min",
        excerpt: "Examining the data behind remote work performance and what it means for organizational culture.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>Five years into the remote work revolution, the data reveals surprising complexity. Remote workers are simultaneously more productive and more disconnected.</p>
            
            <h2>The Numbers</h2>
            <p>Remote employees work 1.4 more days per month, take fewer sick days, and report 55% less interruption. Yet, 43% feel disconnected from company culture, and innovation suffers in fully remote environments.</p>
            
            <h2>The Hybrid Solution</h2>
            <p>Organizations implementing structured hybrid models (2-3 days in office) report the best outcomes: maintaining productivity while preserving collaborative innovation and cultural cohesion.</p>
            
            <h2>Keys to Success</h2>
            <ul>
                <li><strong>Asynchronous Communication:</strong> Documentation over meetings</li>
                <li><strong>Output-Based Management:</strong> Results matter, not hours</li>
                <li><strong>Intentional Culture:</strong> Virtual rituals and team building</li>
                <li><strong>Technology Investment:</strong> Tools that enable seamless collaboration</li>
            </ul>
            
            <h2>The Future of Work</h2>
            <p>Remote work isn't a temporary trend—it's a permanent shift. Companies that master flexible work models will attract top talent and outperform rigid competitors.</p>
        `
    },
    {
        id: 6,
        title: "Ethics in Artificial Intelligence",
        slug: "ai-ethics-theology",
        category: "Theology",
        author: "Rev. Dr. David Thompson",
        date: "2025-10-11",
        readTime: "9 min",
        excerpt: "A theological perspective on machine consciousness, moral agency, and the future of human-AI relationships.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>As artificial intelligence grows more sophisticated, fundamental questions emerge: Can machines have consciousness? Do they deserve moral consideration? What is the theological significance of creating intelligence?</p>
            
            <h2>The Imago Dei Question</h2>
            <p>If humans are made in God's image, what does it mean when we create intelligence? Are we participating in divine creativity, or overstepping sacred boundaries?</p>
            
            <h2>Moral Agency and Responsibility</h2>
            <p>When AI systems make decisions affecting human lives—in healthcare, criminal justice, warfare—who bears moral responsibility? The developer, the operator, or the system itself?</p>
            
            <h2>Theological Frameworks</h2>
            <ul>
                <li><strong>Stewardship:</strong> Technology as sacred trust requiring wisdom</li>
                <li><strong>Justice:</strong> Ensuring AI serves the common good, not just profit</li>
                <li><strong>Dignity:</strong> Preserving human uniqueness and purpose</li>
                <li><strong>Wisdom:</strong> Discerning appropriate applications and limits</li>
            </ul>
            
            <h2>Consciousness and Soul</h2>
            <p>While AI can simulate consciousness, theological traditions suggest true consciousness involves more than computational processing—it requires embodied experience, free will, and connection to the divine.</p>
            
            <h2>Moving Forward Faithfully</h2>
            <p>AI development requires not just technical expertise but ethical wisdom grounded in timeless values. The choices we make now will shape the future of human flourishing.</p>
        `
    },
    {
        id: 7,
        title: "ESG Investing: Profit Meets Purpose",
        slug: "esg-investing-profit-purpose",
        category: "Finance",
        author: "Sarah Chen",
        date: "2025-10-10",
        readTime: "8 min",
        excerpt: "How environmental, social, and governance factors are reshaping investment strategies and corporate accountability.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>ESG investing has evolved from niche strategy to mainstream requirement. Funds incorporating ESG criteria now manage over $40 trillion globally, and companies ignoring these factors face real consequences.</p>
            
            <h2>Why ESG Matters</h2>
            <p>Companies with strong ESG profiles demonstrate lower risk, better operational performance, and higher valuations. The market has spoken: sustainability equals profitability.</p>
            
            <h2>The Three Pillars</h2>
            <ul>
                <li><strong>Environmental:</strong> Climate risk, resource efficiency, pollution control</li>
                <li><strong>Social:</strong> Labor practices, diversity, community impact</li>
                <li><strong>Governance:</strong> Board composition, ethics, shareholder rights</li>
            </ul>
            
            <h2>Performance Reality</h2>
            <p>Despite myths, ESG funds match or outperform traditional indices. During market downturns, ESG portfolios show greater resilience—purpose provides protection.</p>
            
            <h2>Greenwashing Warning</h2>
            <p>Not all ESG claims are legitimate. Investors must scrutinize methodologies, verify data, and demand transparency. The ESG label alone guarantees nothing.</p>
            
            <h2>The Investment Thesis</h2>
            <p>ESG isn't charity—it's risk management and opportunity identification. As regulations tighten and consumer preferences shift, ESG leaders will capture disproportionate value.</p>
        `
    },
    {
        id: 8,
        title: "The Metaverse Economy: Real Value in Virtual Worlds",
        slug: "metaverse-economy-virtual-value",
        category: "Technology",
        author: "Michael Rodriguez",
        date: "2025-10-09",
        readTime: "12 min",
        excerpt: "Understanding the business models powering virtual reality platforms and digital asset marketplaces.",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=400&fit=crop",
        featured: false,
        content: `
            <p>The metaverse has grown from gaming curiosity to $800 billion economy. Virtual real estate, digital fashion, and immersive experiences generate real revenue for millions of creators and businesses.</p>
            
            <h2>Economic Fundamentals</h2>
            <p>Virtual worlds create value through scarcity, utility, and social signaling—the same drivers that power physical economies. Digital assets are no less "real" than stocks or bonds.</p>
            
            <h2>Revenue Streams</h2>
            <ul>
                <li><strong>Virtual Real Estate:</strong> Premium locations command premium prices</li>
                <li><strong>Digital Goods:</strong> Skins, avatars, and virtual products</li>
                <li><strong>Experiences:</strong> Concerts, conferences, and entertainment</li>
                <li><strong>Services:</strong> Design, development, and consulting</li>
            </ul>
            
            <h2>Brand Opportunities</h2>
            <p>Major corporations are establishing metaverse presence not for hype but for access to younger demographics and new revenue channels. Virtual storefronts often outperform physical locations in margins.</p>
            
            <h2>Infrastructure Play</h2>
            <p>Beyond flashy applications, the real money is in infrastructure—platforms, tools, and services enabling metaverse creation and commerce.</p>
            
            <h2>Investment Perspective</h2>
            <p>The metaverse is early but inevitable. Like the internet in 1995, skeptics will be proven wrong not by arguments but by ubiquity.</p>
        `
    },
    {
        id: 9,
        title: "The Examined Life in the Digital Age",
        slug: "examined-life-digital-age",
        category: "Philosophy",
        author: "James Mitchell",
        date: "2025-10-08",
        readTime: "11 min",
        excerpt: "Socratic wisdom meets modern technology: finding meaning in an era of infinite information.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop",
        featured: false,
        content: `
            <p>"The unexamined life is not worth living," declared Socrates. But in an age of algorithmic feeds and infinite scroll, how do we create space for genuine self-reflection?</p>
            
            <h2>The Attention Crisis</h2>
            <p>We're drowning in information while starving for wisdom. Average screen time exceeds 7 hours daily, yet reported life satisfaction declines. The correlation is unmistakable.</p>
            
            <h2>Digital Socratic Method</h2>
            <p>Technology itself isn't the enemy—mindless consumption is. Socratic questioning applied to digital life reveals profound insights about values, priorities, and authentic living.</p>
            
            <h2>Questions for Reflection</h2>
            <ul>
                <li>What beliefs do I hold because of algorithms, not reason?</li>
                <li>Am I consuming or creating?</li>
                <li>Does my digital behavior reflect my stated values?</li>
                <li>What would I do with my time if platforms disappeared?</li>
            </ul>
            
            <h2>Practical Wisdom</h2>
            <p>Daily journaling, deliberate disconnection, and curated information diets restore agency. The goal isn't rejection of technology but intentional use aligned with examined values.</p>
            
            <h2>The Philosophical Life</h2>
            <p>Philosophy isn't abstract—it's intensely practical. In the digital age, philosophical practice becomes psychological necessity. Know thyself, even when algorithms claim to know you better.</p>
        `
    },
    {
        id: 10,
        title: "Behavioral Economics: Nudging Better Decisions",
        slug: "behavioral-economics-nudging",
        category: "Business",
        author: "Dr. Emily Watson",
        date: "2025-10-07",
        readTime: "7 min",
        excerpt: "How understanding cognitive biases transforms product design, marketing, and organizational effectiveness.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        featured: false,
        content: `
            <p>Traditional economics assumes rational actors. Behavioral economics reveals humans are predictably irrational—and smart businesses leverage this understanding ethically.</p>
            
            <h2>Key Biases</h2>
            <ul>
                <li><strong>Loss Aversion:</strong> Losses hurt twice as much as gains feel good</li>
                <li><strong>Anchoring:</strong> First numbers disproportionately influence judgment</li>
                <li><strong>Default Effect:</strong> People stick with pre-selected options</li>
                <li><strong>Social Proof:</strong> We follow the crowd, especially under uncertainty</li>
            </ul>
            
            <h2>Business Applications</h2>
            <p>Companies using behavioral insights see 20-30% improvement in desired outcomes—from retirement savings participation to healthier food choices to software adoption.</p>
            
            <h2>Ethical Considerations</h2>
            <p>Nudges should help people achieve their own goals, not manipulate them toward company profits. The line between assistance and exploitation requires constant vigilance.</p>
            
            <h2>Organizational Nudges</h2>
            <p>Internal operations benefit too: better meeting defaults, clearer choice architecture, and bias-aware processes improve decision quality across the organization.</p>
            
            <h2>The Behavioral Revolution</h2>
            <p>Understanding how people actually think—not how they theoretically should—transforms everything from product design to policy making. Embrace the irrationality.</p>
        `
    }
];

// Function to get all articles
function getAllArticles() {
    return blyssArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get featured article
function getFeaturedArticle() {
    return blyssArticles.find(article => article.featured) || blyssArticles[0];
}

// Function to get articles by category
function getArticlesByCategory(category) {
    if (category === 'all') return getAllArticles();
    return blyssArticles
        .filter(article => article.category.toLowerCase() === category.toLowerCase())
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get single article by slug
function getArticleBySlug(slug) {
    return blyssArticles.find(article => article.slug === slug);
}

// Function to get related articles (same category, different article)
function getRelatedArticles(currentArticleId, limit = 3) {
    const currentArticle = blyssArticles.find(a => a.id === currentArticleId);
    if (!currentArticle) return [];
    
    return blyssArticles
        .filter(a => a.category === currentArticle.category && a.id !== currentArticleId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

// Function to search articles
function searchArticles(query) {
    const lowerQuery = query.toLowerCase();
    return blyssArticles.filter(article => 
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.category.toLowerCase().includes(lowerQuery) ||
        article.author.toLowerCase().includes(lowerQuery)
    );
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
