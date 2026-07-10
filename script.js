const events = [
    {
        no: '01',
        name: 'InnovateX Challenge',
        tag: 'Design the Future. Create Meaningful Impact.',
        mode: 'Hybrid',
        desc: 'Identify an authentic real-world problem and propose a technology-enabled solution that creates meaningful impact.',
        long: 'Two-round technology innovation challenge aligned with "Imagining an Impactful Future" — online preliminary submission, then grand finale presentation.',
        meta: ['2-4 participants', 'Grades IX-XII', 'One team per school', '8 slides · PPTX/PDF'],
        details: [
            ['Category', 'Technology Innovation Challenge'],
            ['Submission', 'Mon, Aug 6, 2026 · 6 PM IST'],
            ['Finale', 'Tue, Aug 18, 2026'],
            ['Format', '6 min presentation + 4 min Q&A'],
        ],
        rules: [
            'One team per school · Grades IX-XII',
            '8 slides max · PPTX or PDF · 20 MB max',
            'Naming: SchoolName_InnovateX_2026',
            'AI tools allowed — acknowledge on Credits slide',
            'Bring your own laptop · Wi-Fi provided',
        ],
        hook: 'Spot a real problem. Pitch tech that creates lasting impact.',
        stats: [
            { icon: 'fa-users', label: 'Team', value: '2–4' },
            { icon: 'fa-graduation-cap', label: 'Grades', value: 'IX–XII' },
            { icon: 'fa-school', label: 'Per school', value: '1 team' },
            { icon: 'fa-file-powerpoint', label: 'Deck', value: '8 slides' },
        ],
        story: [
            {
                id: 'mission',
                label: 'The Mission',
                icon: 'fa-bullseye',
                hook: 'Find an authentic real-world problem. Propose a technology solution that matters.',
                callout: 'Creativity, inquiry, empathy, feasibility, and responsible tech use.',
            },
            {
                id: 'journey',
                label: 'Your Journey',
                icon: 'fa-route',
                type: 'steps',
                steps: [
                    { icon: 'fa-magnifying-glass', title: 'Pick your challenge', text: 'Choose a theme area aligned with "Imagining an Impactful Future."' },
                    { icon: 'fa-wand-magic-sparkles', title: 'Design your solution', text: 'App, platform, AI tool, IoT prototype, or robotics concept.' },
                    { icon: 'fa-cloud-arrow-up', title: 'Submit online', text: '8-slide deck · Mon, Aug 6, 6 PM IST.' },
                    { icon: 'fa-presentation-screen', title: 'Grand finale', text: 'Tue, Aug 18 · 6 min pitch + 4 min Q&A.' },
                ],
            },
            {
                id: 'areas',
                label: 'Challenge Areas',
                icon: 'fa-compass',
                type: 'chips',
                callout: 'Pick one — or propose your own theme-aligned challenge.',
                items: [
                    'Health & Well-being',
                    'Inclusive Education',
                    'Environmental Sustainability',
                    'Smart Communities',
                    'Digital Citizenship',
                    'Accessibility',
                    'Community Development',
                    'Responsible AI',
                    'Disaster Management',
                    'Future of Learning',
                ],
            },
            {
                id: 'formats',
                label: 'Solution Formats',
                icon: 'fa-cubes',
                type: 'chips',
                callout: 'Choose the format that best solves your challenge.',
                items: [
                    'Mobile Application',
                    'Website or Web Platform',
                    'AI-enabled Solution',
                    'IoT Prototype',
                    'Physical Product Prototype',
                    'Robotics Concept',
                ],
            },
            {
                id: 'submit',
                label: 'What to Submit',
                icon: 'fa-inbox',
                type: 'specs',
                specs: [
                    { icon: 'fa-file', label: 'Format', value: 'PPTX or PDF' },
                    { icon: 'fa-weight-hanging', label: 'Size', value: 'Max 20 MB' },
                    { icon: 'fa-tag', label: 'Naming', value: 'SchoolName_InnovateX_2026' },
                    { icon: 'fa-clock', label: 'Deadline', value: 'Mon, Aug 6 · 6 PM IST' },
                ],
                steps: [
                    'Team intro — school, members, challenge title',
                    'Problem statement & target users',
                    'Proposed solution & prototype/concept',
                    'Impact, feasibility & future scope',
                    'Credits & references',
                ],
            },
            {
                id: 'score-prelim',
                label: 'Round 1 Scoring',
                icon: 'fa-chart-simple',
                type: 'scores',
                scores: [
                    ['Problem ID & User Understanding', 20],
                    ['Innovation & Technology Integration', 20],
                    ['Feasibility & Prototype', 20],
                    ['Impact & Value Proposition', 20],
                    ['Presentation & Communication', 20],
                ],
            },
            {
                id: 'finale',
                label: 'Grand Finale',
                icon: 'fa-trophy',
                type: 'finale',
                cards: [
                    { icon: 'fa-calendar', label: 'Date', value: 'Tue, Aug 18, 2026' },
                    { icon: 'fa-stopwatch', label: 'Pitch', value: '6 minutes' },
                    { icon: 'fa-comments', label: 'Q&A', value: '4 minutes' },
                    { icon: 'fa-laptop', label: 'Format', value: 'PPT/PDF + optional demo' },
                ],
                note: 'Outstation schools present virtually via Microsoft Teams.',
                scores: [
                    ['Problem Understanding & User-Centred Thinking', 20],
                    ['Innovation & Technology Integration', 20],
                    ['Working Prototype / Demonstration', 20],
                    ['Impact & Feasibility', 20],
                    ['Presentation & Communication', 20],
                    ['Q&A', 10],
                ],
            },
        ],
    },
    {
        no: '02',
        name: 'AI for Good Lab',
        tag: 'Think Fast. Build Smart. Create Impact.',
        mode: 'On-site',
        desc: 'Harness the power of AI to rapidly create a functional digital solution for a real-world challenge.',
        long: 'Fast-paced live challenge — receive a theme-aligned statement, build a functional MVP with AI-assisted tools in 2 hours, then demo to judges.',
        meta: ['2-3 participants', 'Grades IX-XII', '2 hour build', '5 min demo + 3 min Q&A'],
        details: [
            ['Category', 'AI Innovation Sprint'],
            ['Development', '2 hours'],
            ['Presentation', '5 minutes'],
            ['Q&A', '3 minutes'],
        ],
        rules: [
            'Challenge revealed at start — build during competition only',
            'Submit digital product + one-page presentation via portal',
            'Disclose all AI tools used',
            'Bring your own laptop and charger · Internet provided',
        ],
        hook: 'Two hours. One challenge. Build an AI-powered product that does good.',
        stats: [
            { icon: 'fa-users', label: 'Team', value: '2–3' },
            { icon: 'fa-graduation-cap', label: 'Grades', value: 'IX–XII' },
            { icon: 'fa-stopwatch', label: 'Build', value: '2 hours' },
            { icon: 'fa-microphone', label: 'Demo', value: '5 + 3 min' },
        ],
        story: [
            {
                id: 'mission',
                label: 'The Sprint',
                icon: 'fa-bolt',
                hook: 'Challenge drops at start. Build a functional digital product with AI — fast.',
                callout: 'Creativity, collaboration, responsible AI, and rapid problem-solving.',
            },
            {
                id: 'journey',
                label: 'How It Works',
                icon: 'fa-route',
                type: 'steps',
                steps: [
                    { icon: 'fa-envelope-open-text', title: 'Challenge revealed', text: 'Theme-aligned statement given at competition start.' },
                    { icon: 'fa-code', title: '2-hour build', text: 'Investigate, brainstorm, develop with any AI tools.' },
                    { icon: 'fa-cloud-arrow-up', title: 'Submit MVP', text: 'Digital product + one-page deck via portal.' },
                    { icon: 'fa-desktop', title: 'Live demo', text: '5 min product demo + 3 min judges\' Q&A.' },
                ],
            },
            {
                id: 'samples',
                label: 'Sample Challenges',
                icon: 'fa-lightbulb',
                type: 'cards',
                items: [
                    { icon: 'fa-heart', text: 'Help seniors stay socially connected and engaged.' },
                    { icon: 'fa-brain', text: 'AI assistant for student emotional wellbeing and stress.' },
                    { icon: 'fa-hands-helping', text: 'Platform encouraging volunteerism and community service.' },
                    { icon: 'fa-recycle', text: 'Neighbourhood resource-sharing to reduce waste.' },
                ],
            },
            {
                id: 'mvp',
                label: 'Build an MVP',
                icon: 'fa-rocket',
                type: 'chips',
                callout: 'Minimum Viable Product (MVP) — core functionality must work.',
                items: [
                    '2–3 page web application',
                    '2–3 screen mobile application',
                    'AI chatbot or virtual assistant',
                    'AI-powered dashboard',
                    'Interactive website',
                    'Workflow automation tool',
                    'Educational learning tool',
                    'Community engagement platform',
                    'Productivity application',
                ],
            },
            {
                id: 'tools',
                label: 'AI Toolkit',
                icon: 'fa-toolbox',
                type: 'tool-groups',
                groups: [
                    { icon: 'fa-robot', title: 'AI Assistants', items: ['ChatGPT', 'Microsoft Copilot', 'Claude', 'Gemini'] },
                    { icon: 'fa-laptop-code', title: 'Dev Platforms', items: ['Bolt.new', 'Lovable', 'Firebase Studio', 'Cursor', 'Windsurf', 'Replit AI', 'Vercel v0'] },
                    { icon: 'fa-palette', title: 'Design', items: ['Figma AI', 'Canva AI'] },
                ],
                note: 'Any publicly available AI tool that complies with rules is permitted.',
            },
            {
                id: 'demo',
                label: 'Your Demo',
                icon: 'fa-presentation-screen',
                type: 'steps',
                steps: [
                    { icon: 'fa-puzzle-piece', title: 'The challenge', text: 'What problem did you tackle?' },
                    { icon: 'fa-wand-magic-sparkles', title: 'Your solution', text: 'How does your product solve it?' },
                    { icon: 'fa-robot', title: 'AI tools used', text: 'Disclose every tool — judges may verify.' },
                    { icon: 'fa-play', title: 'Live demo', text: 'Show the product working in real time.' },
                    { icon: 'fa-chart-line', title: 'Expected impact', text: 'Who benefits and how?' },
                ],
            },
            {
                id: 'score',
                label: 'How You\'re Scored',
                icon: 'fa-chart-simple',
                type: 'scores',
                scores: [
                    ['Understanding of Challenge & User Experience', 15],
                    ['Innovation & Creativity', 20],
                    ['Effective Use of AI', 20],
                    ['Product Functionality', 20],
                    ['Potential Impact', 15],
                    ['Presentation & Communication', 10],
                ],
            },
            {
                id: 'rules-detail',
                label: 'Play Fair',
                icon: 'fa-scale-balanced',
                type: 'rule-groups',
                groups: [
                    { icon: 'fa-gavel', title: 'General', items: ['One team per school', 'Build only during competition', 'Internet provided — bring laptop & charger'] },
                    { icon: 'fa-robot', title: 'AI Usage', items: ['Disclose all AI tools', 'Explain AI-generated code if asked', 'Judges may verify understanding'] },
                    { icon: 'fa-box', title: 'Product', items: ['No pre-built solutions', 'Templates & open-source OK with attribution', 'Core functionality must be demonstrated'] },
                    { icon: 'fa-handshake', title: 'Conduct', items: ['Team-only collaboration', 'Academic integrity required', 'Judges\' decision is final'] },
                ],
            },
        ],
    },
    {
        no: '03',
        name: 'Through the Lens',
        tag: 'Every Picture Inspires Change.',
        mode: 'Hybrid',
        desc: 'Create an original campaign poster or visual using curated challenge images released on the website.',
        long: 'Visual storytelling challenge — transform curated photographs into a campaign that informs, inspires, and motivates audiences toward an impactful future.',
        meta: ['1-2 participants', 'Grades IX-XII', 'Poster + 2 min video', 'No AI artwork'],
        details: [
            ['Images Released', 'Sat, Aug 1, 2026'],
            ['Submission', 'Thu, Aug 6, 2026 · 6 PM IST'],
            ['Finale', 'Tue, Aug 18, 2026'],
            ['Format', '5 min presentation + 3 min Q&A'],
        ],
        rules: [
            'One entry per school · 1-2 participants',
            'Poster: PDF/JPEG/PNG/PPTX · max 20 MB',
            '2-minute MP4 video with required sections',
            'AI-generated artwork not permitted',
            'AI for brainstorming/grammar/colour only — credit on Credits slide',
        ],
        hook: 'Turn curated photos into a campaign that inspires real change.',
        stats: [
            { icon: 'fa-user', label: 'Team', value: '1–2' },
            { icon: 'fa-graduation-cap', label: 'Grades', value: 'IX–XII' },
            { icon: 'fa-image', label: 'Poster', value: '20 MB max' },
            { icon: 'fa-video', label: 'Video', value: '2 min MP4' },
        ],
        story: [
            {
                id: 'mission',
                label: 'The Mission',
                icon: 'fa-camera-retro',
                hook: 'Don\'t just edit a photo — transform visual evidence into a campaign for change.',
                callout: 'Thoughtful communication and purposeful design over artistic perfection.',
            },
            {
                id: 'journey',
                label: 'Your Journey',
                icon: 'fa-route',
                type: 'timeline',
                items: [
                    { icon: 'fa-download', date: 'Aug 1', label: 'Images drop', text: 'Download 2–3 curated photos from the website.' },
                    { icon: 'fa-paintbrush', date: 'Aug 1–6', label: 'Create', text: 'Design campaign poster + 2-min explainer video.' },
                    { icon: 'fa-cloud-arrow-up', date: 'Aug 6', label: 'Submit', text: 'Upload by 6 PM IST via official form.' },
                    { icon: 'fa-trophy', date: 'Aug 18', label: 'Finale', text: '5 min presentation + 3 min Q&A.' },
                ],
            },
            {
                id: 'themes',
                label: 'Challenge Themes',
                icon: 'fa-palette',
                type: 'chips',
                callout: 'Image sets released Sat, Aug 1 on the event details page.',
                items: [
                    'Digital Footprints & Online Reputation',
                    'Responsible Use of Artificial Intelligence',
                    'Combating Misinformation',
                    'Cyberbullying & Online Kindness',
                ],
            },
            {
                id: 'submit',
                label: 'What to Submit',
                icon: 'fa-inbox',
                type: 'specs',
                specs: [
                    { icon: 'fa-file-image', label: 'Poster', value: 'PDF, JPEG, PNG, or PPTX' },
                    { icon: 'fa-weight-hanging', label: 'Size', value: 'Max 20 MB' },
                    { icon: 'fa-film', label: 'Video', value: '2-minute MP4' },
                    { icon: 'fa-clock', label: 'Deadline', value: 'Thu, Aug 6 · 6 PM IST' },
                ],
            },
            {
                id: 'video',
                label: 'Video Breakdown',
                icon: 'fa-clapperboard',
                type: 'steps',
                steps: [
                    { icon: 'fa-id-card', title: 'Introduction', text: 'Name, school, campaign title, selected theme.' },
                    { icon: 'fa-exclamation-circle', title: 'The issue', text: 'Significance, audience, facts & statistics.' },
                    { icon: 'fa-bullseye', title: 'Target audience', text: 'Who, what change, and why it matters.' },
                    { icon: 'fa-image', title: 'Campaign visual', text: 'Final poster — photo, illustration, typography, mixed media.' },
                    { icon: 'fa-pen-ruler', title: 'Design rationale', text: 'Concept, colour, typography, composition choices.' },
                    { icon: 'fa-quote-right', title: 'Credits', text: 'Image credits, AI tools, software used.' },
                ],
            },
            {
                id: 'score-prelim',
                label: 'Round 1 Scoring',
                icon: 'fa-chart-simple',
                type: 'scores',
                scores: [
                    ['Understanding of the Issue', 20],
                    ['Creativity & Originality', 20],
                    ['Visual Communication', 25],
                    ['Technical Design Skills', 20],
                    ['Overall Presentation', 15],
                ],
            },
            {
                id: 'finale',
                label: 'Grand Finale',
                icon: 'fa-trophy',
                type: 'finale',
                cards: [
                    { icon: 'fa-calendar', label: 'Date', value: 'Tue, Aug 18, 2026' },
                    { icon: 'fa-location-dot', label: 'Venue', value: 'DPSI, Gurugram' },
                    { icon: 'fa-stopwatch', label: 'Pitch', value: '5 minutes' },
                    { icon: 'fa-comments', label: 'Q&A', value: '3 minutes' },
                ],
                note: 'Outstation participants present virtually via Microsoft Teams.',
                scores: [
                    ['Understanding of the Issue', 15],
                    ['Creativity & Innovation', 20],
                    ['Effectiveness of the Campaign', 25],
                    ['Design Justification', 20],
                    ['Presentation & Response to Questions', 20],
                ],
            },
            {
                id: 'tools',
                label: 'Design Tools',
                icon: 'fa-toolbox',
                type: 'chips',
                callout: 'Any digital design software — licensed stock images only, with credit.',
                items: [
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Photopea',
                    'GIMP',
                    'Canva',
                    'Figma',
                    'Affinity Designer',
                    'Inkscape',
                    'Krita',
                ],
            },
            {
                id: 'schedule',
                label: 'Key Dates',
                icon: 'fa-calendar-days',
                type: 'timeline',
                items: [
                    { icon: 'fa-pen-to-square', date: 'Jul 31', label: 'Registration closes' },
                    { icon: 'fa-images', date: 'Aug 1', label: 'Challenge images released' },
                    { icon: 'fa-upload', date: 'Aug 6', label: 'Submission deadline · 6 PM IST' },
                    { icon: 'fa-bell', date: 'Aug 10', label: 'Shortlist announced · 2 PM IST' },
                    { icon: 'fa-star', date: 'Aug 18', label: 'Grand finale' },
                ],
            },
        ],
    },
    {
        no: '04',
        name: 'SoundCraft Challenge',
        tag: 'Design. Build. Play.',
        mode: 'On-site',
        desc: 'Transform simple everyday materials into functional musical instruments during a live engineering challenge.',
        long: 'Live design-and-engineering challenge — build functional instruments from a provided kit, then present and perform in 3 minutes.',
        meta: ['2-3 participants', 'Grades IX-XII', '2 hour build', '3 min perform + 2 min Q&A'],
        details: [
            ['Category', 'Design & Engineering Challenge'],
            ['Venue', 'Design and Technology Lab, 4th Floor'],
            ['Build Time', '2 hours'],
            ['Deliverables', '1-2 min talk · 1 min performance · 2 min Q&A'],
        ],
        rules: [
            'Provided materials only — no extras allowed',
            'At least 4 different kit materials required',
            'Every instrument must produce audible sound',
            'Laptops, tablets, mobile phones, and AI not required',
        ],
        hook: 'Everyday materials. Original sounds. One epic performance.',
        stats: [
            { icon: 'fa-users', label: 'Team', value: '2–3' },
            { icon: 'fa-graduation-cap', label: 'Grades', value: 'IX–XII' },
            { icon: 'fa-stopwatch', label: 'Build', value: '2 hours' },
            { icon: 'fa-music', label: 'Perform', value: '3 + 2 min' },
        ],
        story: [
            {
                id: 'mission',
                label: 'The Challenge',
                icon: 'fa-guitar',
                hook: 'Build functional musical instruments from a limited kit — then play them live.',
                callout: 'Innovation from limited resources through creativity and iterative design.',
            },
            {
                id: 'journey',
                label: 'How It Works',
                icon: 'fa-route',
                type: 'steps',
                steps: [
                    { icon: 'fa-box-open', title: 'Kit briefing', text: 'Every team gets the same material kit.' },
                    { icon: 'fa-hammer', title: '2-hour build', text: 'Brainstorm, design, build, test, refine.' },
                    { icon: 'fa-microphone', title: 'Present & perform', text: '1–2 min talk · 1 min music · 2 min Q&A.' },
                ],
            },
            {
                id: 'build-phase',
                label: 'Build Phase',
                icon: 'fa-gears',
                type: 'chips',
                callout: '2 hours to brainstorm, design, build, and test.',
                items: [
                    'Brainstorm ideas',
                    'Design instrument(s)',
                    'Build & refine prototype(s)',
                    'Test sound quality',
                ],
            },
            {
                id: 'deliverables',
                label: 'On Stage',
                icon: 'fa-microphone-lines',
                type: 'specs',
                specs: [
                    { icon: 'fa-comment', label: 'Talk', value: '1–2 min — what you built & how' },
                    { icon: 'fa-music', label: 'Performance', value: '1 min — remix or original' },
                    { icon: 'fa-comments', label: 'Q&A', value: '2 min with judges' },
                ],
                steps: [
                    'Introduce team and instrument(s)',
                    'Share design inspiration',
                    'Explain how sound is produced',
                    'Discuss challenges & improvements',
                    'Live musical performance',
                ],
            },
            {
                id: 'materials',
                label: 'Your Kit',
                icon: 'fa-toolbox',
                type: 'materials',
                callout: 'Provided only — no extra materials allowed. Use at least 4 different items.',
                items: [
                    { icon: 'fa-square', name: 'Cardboard Sheet' },
                    { icon: 'fa-mug-hot', name: 'Paper Cups' },
                    { icon: 'fa-ring', name: 'Rubber Bands' },
                    { icon: 'fa-bars', name: 'Ice Cream Sticks' },
                    { icon: 'fa-bottle-water', name: 'Plastic Bottle' },
                    { icon: 'fa-wind', name: 'Drinking Straws' },
                    { icon: 'fa-link', name: 'Cotton String' },
                    { icon: 'fa-circle', name: 'Bottle Caps' },
                    { icon: 'fa-cloud', name: 'Balloon' },
                    { icon: 'fa-grip-lines', name: 'Masking Tape' },
                    { icon: 'fa-droplet', name: 'Glue' },
                    { icon: 'fa-scissors', name: 'Scissors' },
                ],
            },
            {
                id: 'score',
                label: 'How You\'re Scored',
                icon: 'fa-chart-simple',
                type: 'scores',
                scores: [
                    ['Creativity & Originality', 20],
                    ['Functionality & Sound Quality', 20],
                    ['Engineering & Craftsmanship', 20],
                    ['Design Process & Problem Solving', 20],
                    ['Presentation', 20],
                ],
            },
            {
                id: 'rules-detail',
                label: 'Play Fair',
                icon: 'fa-scale-balanced',
                type: 'rule-groups',
                groups: [
                    { icon: 'fa-school', title: 'Team', items: ['One team per school', 'All members must participate', 'Build entirely during competition'] },
                    { icon: 'fa-volume-high', title: 'Instruments', items: ['Every instrument must make audible sound', 'At least 4 kit materials required', 'One or more instruments allowed'] },
                    { icon: 'fa-shield', title: 'Safety', items: ['Maintain safety throughout', 'No laptops, phones, or AI needed', 'Judges\' decision is final'] },
                ],
            },
        ],
    },
];

const chapters = [
    {
        no: '01',
        title: 'Investigate.',
        body: 'Start by understanding the challenge — who is affected, what the problem truly is, and why it matters before any solution is built.',
    },
    {
        no: '02',
        title: 'Design.',
        body: 'Shape thoughtful, human-centred ideas. Explore diverse perspectives and plan technology-enabled solutions that respond to real needs.',
    },
    {
        no: '03',
        title: 'Create.',
        body: 'Turn ideas into action — build prototypes, products, and experiences that bring innovation to life with purpose and creativity.',
    },
    {
        no: '04',
        title: 'Reflect.',
        body: 'Evaluate impact, feasibility, and ethics. Learn from the process to build a more inclusive, sustainable, and compassionate future.',
    },
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const chapterLock = {
    progress: 0,
    touchY: null,
    active: false,
    pinnedTop: null,
    pendingDelta: 0,
    rafId: 0,
};

const scrollState = {
    ticking: false,
    philosophy: null,
    timeline: null,
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function scheduleScrollWork() {
    if (scrollState.ticking) return;
    scrollState.ticking = true;
    requestAnimationFrame(() => {
        updateProgress();
        updateChapter();
        updateTimelineProgress();
        scrollState.ticking = false;
    });
}

function getPhilosophyMetrics() {
    const section = document.querySelector('.philosophy');
    if (!section) return null;
    const top = section.offsetTop;
    scrollState.philosophy = { section, top, bottom: top + section.offsetHeight };
    return scrollState.philosophy;
}

function getTimelineCache() {
    if (scrollState.timeline?.list?.isConnected) return scrollState.timeline;
    const section = document.querySelector('.timeline');
    const list = document.querySelector('.timeline-list');
    const copy = document.querySelector('.timeline-copy');
    if (!list) return null;
    scrollState.timeline = {
        section,
        list,
        copy,
        milestones: [...list.querySelectorAll('.timeline-milestone')],
        rails: [...document.querySelectorAll('.timeline-rail b')],
        number: document.getElementById('timeline-copy-number'),
        phase: document.getElementById('timeline-copy-phase'),
        lastIndex: section ? Number(section.dataset.timelineIndex) : -1,
        lastCopyY: null,
        lastNumberX: null,
    };
    return scrollState.timeline;
}

function setupAnchorSmoothScroll() {
    if (prefersReducedMotion) return;
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const id = link.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', id);
        });
    });
}

function setupMarquee() {
    document.querySelectorAll('.ticker').forEach((ticker) => {
        if (ticker.dataset.loopReady) return;
        ticker.dataset.loopReady = 'true';
        const content = ticker.innerHTML;
        ticker.innerHTML = content;
        const singleWidth = ticker.scrollWidth;
        const copies = Math.max(4, Math.ceil((window.innerWidth * 2.5) / Math.max(1, singleWidth)) + 2);
        ticker.innerHTML = Array.from({ length: copies }, () => content).join('');
        ticker.style.setProperty('--ticker-shift', `${singleWidth}px`);
        ticker.style.setProperty('--ticker-duration', `${Math.max(12, singleWidth / 90)}s`);
    });
}

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    document.querySelector('.progress span').style.width = `${pct}%`;
}

function revealOnScroll() {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14, rootMargin: '0px 0px -50px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    document.querySelectorAll('main > section:not(.hero), .footer').forEach((el) => {
        if (!el.classList.contains('reveal') && !el.classList.contains('philosophy')) {
            el.classList.add('reveal');
            io.observe(el);
        }
    });
}

function countStats() {
    const counters = document.querySelectorAll('[data-count]');
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = Number(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const pad = el.dataset.count.length;
                const start = performance.now();
                const duration = 1300;

                function frame(now) {
                    const t = Math.min(1, (now - start) / duration);
                    const eased = 1 - Math.pow(1 - t, 3);
                    const value = Math.round(target * eased)
                        .toString()
                        .padStart(pad, '0');
                    el.textContent = `${value}${suffix}`;
                    if (t < 1) requestAnimationFrame(frame);
                }

                requestAnimationFrame(frame);
                io.unobserve(el);
            });
        },
        { threshold: 0.6 },
    );

    counters.forEach((counter) => io.observe(counter));
}

function glyphSvg(seed = 1, mode = 'offline') {
    const no = Number(seed);
    const glyphs = {
        1: 'fa-lightbulb',
        2: 'fa-microchip',
        3: 'fa-camera',
        4: 'fa-guitar',
        7: 'fa-eye',
    };
    const colors = {
        1: '#ffd166',
        2: '#f7f7ff',
        3: '#ff8fab',
        4: '#9dffb0',
        7: '#f7f7ff',
    };

    return `
    <div class="neon-icon" style="--glyph-color:${colors[no] || colors[7]}; color:${colors[no] || colors[7]}">
      <span class="neon-ring neon-ring-a"></span>
      <span class="neon-ring neon-ring-b"></span>
      <i class="fa-solid ${glyphs[no] || glyphs[7] || glyphs[1]}" aria-hidden="true"></i>
    </div>
  `;
}

function renderGlyphs() {
    document.querySelectorAll('.event-glyph').forEach((el) => {
        el.innerHTML = glyphSvg(el.dataset.seed || 1, el.dataset.mode || 'offline');
    });
}

const EVENT_GROUPS = [
    { mode: 'Hybrid', label: 'Hybrid', modifier: 'hybrid' },
    { mode: 'On-site', label: 'On-site', modifier: 'onsite' },
];

function renderEventCard(event) {
    return `
    <article class="event-card tilt reveal" tabindex="0" role="button" aria-label="Open ${event.name} brief" data-event="${event.no}">
      <div class="event-card-inner">
        <div class="event-status"><span><i class="fa-solid fa-cube event-icon" aria-hidden="true"></i> EVT . ${event.no}</span><b>${event.mode}</b></div>
        <div class="event-visual">
          <div class="event-glyph" data-seed="${Number(event.no)}" data-mode="${event.mode}"></div>
          <span class="event-no">${event.no}</span>
        </div>
        <div class="event-content">
          <h3>${event.name}</h3>
          <p class="event-tag">${event.tag}</p>
          <p class="event-desc">${event.desc}</p>
          <div class="chips">${event.meta
              .slice(0, 2)
              .map((item) => `<span>${item}</span>`)
              .join('')}</div>
          <div class="open-brief"><span>Open brief</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></div>
        </div>
      </div>
    </article>
  `;
}

function renderEvents() {
    const container = document.getElementById('event-groups');
    container.innerHTML = EVENT_GROUPS.map((group) => {
        const groupEvents = events.filter((event) => event.mode === group.mode);
        if (!groupEvents.length) return '';

        return `
    <section class="event-group event-group--${group.modifier} reveal">
      <header class="event-group-header">
        <p class="section-kicker">${group.label}</p>
      </header>
      <div class="event-grid">
        ${groupEvents.map((event) => renderEventCard(event)).join('')}
      </div>
    </section>
  `;
    }).join('');

    container.querySelectorAll('.event-card').forEach((card) => {
        const open = () => openModal(events.find((event) => event.no === card.dataset.event));
        card.addEventListener('click', open);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                open();
            }
        });
    });

    renderGlyphs();
    revealOnScroll();
    setupTilt();
}

const EVENT_THEMES = {
    '01': { color: '#ffd166', icon: 'fa-lightbulb' },
    '02': { color: '#8fd6ff', icon: 'fa-microchip' },
    '03': { color: '#ff8fab', icon: 'fa-camera' },
    '04': { color: '#9dffb0', icon: 'fa-guitar' },
};

function renderScorePanel(scores) {
    const scoreTotal = scores.reduce((sum, [, value]) => sum + Number(value), 0);
    return `
    <div class="modal-scores">
      ${scores
          .map(([key, value]) => {
              const score = Number(value);
              const pct = scoreTotal > 0 ? (score / scoreTotal) * 100 : 0;
              return `
        <div class="modal-score" style="--score-width:${pct}%">
          <div class="modal-score-head">
            <span>${key}</span>
            <strong>${score}</strong>
          </div>
          <span class="modal-score-bar" aria-hidden="true"></span>
        </div>`;
          })
          .join('')}
    </div>`;
}

function renderJourney(steps) {
    return `
    <ol class="modal-journey">
      ${steps
          .map(
              (step) => `
        <li>
          <span class="modal-journey-marker"><i class="fa-solid ${step.icon}" aria-hidden="true"></i></span>
          <div class="modal-journey-copy">
            <strong>${step.title}</strong>
            <p>${step.text}</p>
          </div>
        </li>`,
          )
          .join('')}
    </ol>`;
}

function renderTags(items) {
    return `<div class="modal-tags">${items.map((item) => `<span>${item}</span>`).join('')}</div>`;
}

function renderSpecs(specs) {
    return `
    <dl class="modal-specs">
      ${specs
          .map(
              (spec) => `
        <div>
          <dt><i class="fa-solid ${spec.icon}" aria-hidden="true"></i>${spec.label}</dt>
          <dd>${spec.value}</dd>
        </div>`,
          )
          .join('')}
    </dl>`;
}

function renderTimeline(items) {
    return `
    <ol class="modal-timeline">
      ${items
          .map(
              (item) => `
        <li>
          <span class="modal-timeline-date">${item.date}</span>
          <div class="modal-timeline-copy">
            <strong>${item.label}</strong>
            ${item.text ? `<p>${item.text}</p>` : ''}
          </div>
        </li>`,
          )
          .join('')}
    </ol>`;
}

function renderList(items) {
    return `
    <ul class="modal-list">
      ${items
          .map(
              (item) => `
        <li>
          <i class="fa-solid ${item.icon}" aria-hidden="true"></i>
          <span>${item.text || item.name}</span>
        </li>`,
          )
          .join('')}
    </ul>`;
}

function renderGroups(groups, note) {
    return `
    <div class="modal-groups">
      ${groups
          .map(
              (group) => `
        <div class="modal-group">
          <h4><i class="fa-solid ${group.icon}" aria-hidden="true"></i>${group.title}</h4>
          <ul>${group.items.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>`,
          )
          .join('')}
    </div>
    ${note ? `<p class="modal-aside">${note}</p>` : ''}`;
}

function renderFinale(chapter) {
    const meta = chapter.cards
        .map((card) => `<span><i class="fa-solid ${card.icon}" aria-hidden="true"></i>${card.label}: <strong>${card.value}</strong></span>`)
        .join('');
    const scores = chapter.scores ? renderScorePanel(chapter.scores) : '';
    const note = chapter.note ? `<p class="modal-aside">${chapter.note}</p>` : '';
    return `<div class="modal-finale-meta">${meta}</div>${note}${scores}`;
}

function renderSlideOrder(steps) {
    return `
    <div class="modal-slide-order">
      <p class="modal-subhead">Slide order</p>
      <ol>
        ${steps.map((step) => `<li>${step}</li>`).join('')}
      </ol>
    </div>`;
}

function renderStorySection(chapter) {
    let body = '';

    switch (chapter.type) {
        case 'steps':
            body = renderJourney(chapter.steps);
            break;
        case 'chips':
            body = renderTags(chapter.items);
            break;
        case 'specs':
            body = renderSpecs(chapter.specs);
            if (chapter.steps) body += renderSlideOrder(chapter.steps);
            break;
        case 'timeline':
            body = renderTimeline(chapter.items);
            break;
        case 'scores':
            body = renderScorePanel(chapter.scores);
            break;
        case 'cards':
        case 'materials':
            body = renderList(chapter.items);
            break;
        case 'tool-groups':
        case 'rule-groups':
            body = renderGroups(chapter.groups, chapter.note);
            break;
        case 'finale':
            body = renderFinale(chapter);
            break;
        default:
            break;
    }

    const lead = chapter.hook ? `<p class="modal-section-lead">${chapter.hook}</p>` : '';
    const aside = chapter.callout ? `<p class="modal-aside">${chapter.callout}</p>` : '';

    return `
    <section class="modal-section" id="story-${chapter.id}">
      <header class="modal-section-head">
        <i class="fa-solid ${chapter.icon}" aria-hidden="true"></i>
        <h3>${chapter.label}</h3>
      </header>
      ${lead}
      ${aside}
      ${body}
    </section>`;
}

let modalScrollY = 0;

function lockBodyForModal() {
    modalScrollY = window.scrollY;
    document.body.style.top = `-${modalScrollY}px`;
    document.body.classList.add('modal-open');
}

function unlockBodyForModal() {
    const scrollY = modalScrollY;
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
    requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
    });
}

function openModal(event) {
    if (!event) return;
    const dialog = document.getElementById('event-modal');
    const theme = EVENT_THEMES[event.no] || EVENT_THEMES['01'];

    dialog.style.setProperty('--modal-accent', theme.color);
    dialog.dataset.event = event.no;

    const modeEl = document.getElementById('modal-mode');
    modeEl.textContent = event.mode;
    modeEl.className = `modal-mode modal-mode--${event.mode === 'Hybrid' ? 'hybrid' : 'onsite'}`;

    document.getElementById('modal-event-no').textContent = `Event ${event.no}`;
    document.getElementById('modal-title').textContent = event.name;
    document.getElementById('modal-hook').textContent = event.hook || event.long || '';

    document.getElementById('modal-meta-chips').innerHTML = (event.stats || [])
        .map(
            (stat) => `
      <span class="modal-chip">
        <i class="fa-solid ${stat.icon}" aria-hidden="true"></i>
        <strong>${stat.value}</strong>
        ${stat.label}
      </span>`,
        )
        .join('');

    const chapters = event.story || [];
    document.getElementById('modal-chapters').innerHTML = chapters.map(renderStorySection).join('');

    const rulesEl = document.getElementById('modal-rules');
    const quickRules = document.getElementById('modal-quickrules');
    const showRules = event.rules && event.rules.length > 0;
    rulesEl.innerHTML = showRules ? event.rules.map((rule) => `<li>${rule}</li>`).join('') : '';
    quickRules.hidden = !showRules;

    const inner = dialog.querySelector('.modal-inner');
    inner.scrollTop = 0;
    lockBodyForModal();
    dialog.showModal();
    requestAnimationFrame(() => {
        inner.scrollTop = 0;
    });
}

function setupModal() {
    const dialog = document.getElementById('event-modal');
    dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', unlockBodyForModal);
}

function pinChapterScroll(top) {
    if (Math.abs(window.scrollY - top) <= 1) {
        chapterLock.pinnedTop = top;
        return;
    }
    window.scrollTo({ top, left: 0, behavior: 'auto' });
    chapterLock.pinnedTop = top;
}

function updateChapter() {
    const metrics = getPhilosophyMetrics();
    if (!metrics) return;
    const { top, bottom } = metrics;
    const y = window.scrollY;

    if (y < top - 48) {
        if (chapterLock.progress !== 0) {
            chapterLock.progress = 0;
            chapterLock.active = false;
            chapterLock.pinnedTop = null;
            setChapterProgress(0);
        }
        return;
    }
    if (y > bottom + 24) {
        if (chapterLock.progress !== 1) {
            chapterLock.progress = 1;
            chapterLock.active = false;
            chapterLock.pinnedTop = null;
            setChapterProgress(1);
        }
        return;
    }

    if (
        chapterLock.active &&
        chapterLock.progress > 0 &&
        chapterLock.progress < 1 &&
        Math.abs(y - top) > 2
    ) {
        pinChapterScroll(top);
    }
}

let lastChapterIndex = -1;
let lastChapterLocalKey = '';

function setChapterProgress(progress) {
    chapterLock.progress = Math.min(1, Math.max(0, progress));
    const progressValue = Math.min(0.999, chapterLock.progress);
    const metrics = getPhilosophyMetrics();
    if (!metrics) return;
    const { section } = metrics;
    const scaled = Math.min(0.999, Math.max(0, progressValue));
    const index = Math.min(chapters.length - 1, Math.floor(scaled * chapters.length));
    const local = scaled * chapters.length - index;
    const localKey = `${index}:${local.toFixed(2)}`;

    if (index !== lastChapterIndex) {
        lastChapterIndex = index;
        section.dataset.chapterIndex = index;
        const copy = document.getElementById('chapter-copy');
        const number = document.getElementById('chapter-number');
        copy.classList.add('switching');
        number.classList.add('switching');
        window.setTimeout(() => {
            applyChapter(index);
            copy.classList.remove('switching');
            number.classList.remove('switching');
        }, 160);
        document.querySelectorAll('.chapter-rail b').forEach((bar, i) => {
            bar.classList.toggle('complete', i < index);
            bar.classList.toggle('active', i === index);
            bar.style.setProperty(
                '--rail-progress',
                i < index ? '100%' : i === index ? `${Math.max(8, local * 100)}%` : '0%',
            );
        });
    }

    if (localKey !== lastChapterLocalKey) {
        lastChapterLocalKey = localKey;
        document.querySelectorAll('.chapter-rail b').forEach((bar, i) => {
            if (i === index) {
                bar.style.setProperty('--rail-progress', `${Math.max(8, local * 100)}%`);
            }
        });
        document.querySelector('.story-glow').style.setProperty('--story-glow-x', `${8 - progressValue * 32}%`);
        document.getElementById('chapter-number').style.setProperty('--chapter-number-x', `${(local - 0.5) * -36}px`);
        const field = section.querySelector('.geo-field');
        if (field) field.style.setProperty('--geo-y', `${-progressValue * 12}%`);
    }
}

function shouldEngageChapterLock(deltaY) {
    const metrics = getPhilosophyMetrics();
    if (!metrics) return false;
    const { top, bottom } = metrics;
    const y = window.scrollY;
    const predictedY = y + deltaY;
    const nearTop = Math.abs(y - top) < 12;
    const crossingFromAbove = deltaY > 0 && y < top && predictedY >= top - 2;
    const crossingFromBelow = deltaY < 0 && y > top && predictedY <= top + 2;
    const insideLock =
        nearTop &&
        y >= top - 2 &&
        y < bottom &&
        ((deltaY > 0 && chapterLock.progress < 1) || (deltaY < 0 && chapterLock.progress > 0));

    if (!crossingFromAbove && !crossingFromBelow && !insideLock) return false;
    if (deltaY > 0 && chapterLock.progress >= 1) return false;
    if (deltaY < 0 && chapterLock.progress <= 0 && nearTop) return false;
    return true;
}

function applyChapterDelta(deltaY) {
    const metrics = getPhilosophyMetrics();
    if (!metrics) return;
    const { top } = metrics;
    const y = window.scrollY;
    const crossingFromAbove = deltaY > 0 && y < top;
    const enteringFromBelow = deltaY < 0 && y > top;

    if (crossingFromAbove) chapterLock.progress = 0;
    if (enteringFromBelow && chapterLock.progress <= 0.02) chapterLock.progress = 1;

    chapterLock.active = true;
    pinChapterScroll(top);
    const step = Math.sign(deltaY) * Math.min(Math.abs(deltaY) / 2200, 0.08);
    setChapterProgress(chapterLock.progress + step);
    if (chapterLock.progress <= 0 || chapterLock.progress >= 1) {
        chapterLock.active = false;
        chapterLock.pinnedTop = null;
    }
}

function flushChapterDelta() {
    chapterLock.rafId = 0;
    const deltaY = chapterLock.pendingDelta;
    chapterLock.pendingDelta = 0;
    if (!deltaY) return;
    applyChapterDelta(deltaY);
}

function queueChapterDelta(deltaY) {
    chapterLock.pendingDelta += deltaY;
    if (!chapterLock.rafId) {
        chapterLock.rafId = requestAnimationFrame(flushChapterDelta);
    }
}

function handleChapterDelta(deltaY) {
    if (prefersReducedMotion || !shouldEngageChapterLock(deltaY)) return false;
    queueChapterDelta(deltaY);
    return true;
}

function setupChapterScrollLock() {
    if (prefersReducedMotion) return;

    window.addEventListener(
        'wheel',
        (event) => {
            if (handleChapterDelta(event.deltaY)) event.preventDefault();
        },
        { passive: false },
    );

    window.addEventListener(
        'touchstart',
        (event) => {
            chapterLock.touchY = event.touches[0]?.clientY ?? null;
        },
        { passive: true },
    );

    window.addEventListener(
        'touchmove',
        (event) => {
            if (chapterLock.touchY == null) return;
            const nextY = event.touches[0]?.clientY ?? chapterLock.touchY;
            const deltaY = chapterLock.touchY - nextY;
            chapterLock.touchY = nextY;
            if (Math.abs(deltaY) > 2 && handleChapterDelta(deltaY * 2)) event.preventDefault();
        },
        { passive: false },
    );

    window.addEventListener(
        'resize',
        () => {
            scrollState.philosophy = null;
            scrollState.timeline = null;
        },
        { passive: true },
    );
}

function applyChapter(index) {
    const chapter = chapters[index];
    document.getElementById('chapter-number').textContent = chapter.no;
    document.getElementById('chapter-index').textContent = index + 1;
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('chapter-body').textContent = chapter.body;
}

function setupTilt() {
    document.querySelectorAll('.tilt').forEach((card) => {
        if (card.dataset.tiltReady) return;
        card.dataset.tiltReady = 'true';
        card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            const strength = card.classList.contains('event-card') ? 18 : 20;
            const lift = card.classList.contains('event-card') ? 5 : 7;
            const scale = card.classList.contains('event-card') ? 1.018 : 1.025;
            card.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-${lift}px) scale(${scale})`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });
}

const timelinePhases = [
    { no: '01', phase: 'Registration' },
    { no: '02', phase: 'Resources' },
    { no: '03', phase: 'Submissions' },
    { no: '04', phase: 'Results' },
    { no: '05', phase: 'Finale' },
];

function updateTimelineProgress() {
    const cache = getTimelineCache();
    if (!cache) return;

    const { section, list, copy, milestones, rails, number, phase } = cache;
    if (!milestones.length) return;

    const viewport = window.innerHeight;
    const listRect = list.getBoundingClientRect();
    const start = viewport * 0.72;
    const end = viewport * 0.28;
    const progress = Math.min(1, Math.max(0, (start - listRect.top) / Math.max(1, listRect.height - (start - end))));
    list.style.setProperty('--timeline-progress', `${progress * 100}%`);

    if (!copy) return;

    const anchor = viewport * 0.4;
    const itemRects = milestones.map((item) => item.getBoundingClientRect());
    let activeIndex = 0;

    itemRects.forEach((itemRect, index) => {
        const itemCenter = itemRect.top + itemRect.height / 2;
        if (itemCenter <= anchor) activeIndex = index;
    });

    const activeRect = itemRects[activeIndex];
    const nextRect = itemRects[activeIndex + 1];
    const segmentTop = activeRect.top;
    const segmentBottom = nextRect ? nextRect.top : activeRect.bottom;
    const local = Math.min(1, Math.max(0, (anchor - segmentTop) / Math.max(1, segmentBottom - segmentTop)));

    if (activeIndex !== cache.lastIndex) {
        cache.lastIndex = activeIndex;
        milestones.forEach((item, index) => {
            item.classList.toggle('is-active', index === activeIndex);
            item.classList.toggle('is-complete', index < activeIndex);
        });
        rails.forEach((bar, index) => {
            bar.classList.toggle('complete', index < activeIndex);
            bar.classList.toggle('active', index === activeIndex);
            bar.style.setProperty(
                '--rail-progress',
                index < activeIndex ? '100%' : index === activeIndex ? `${Math.max(8, local * 100)}%` : '0%',
            );
        });
        if (section) section.dataset.timelineIndex = String(activeIndex);
        const current = timelinePhases[activeIndex];
        if (number) number.classList.add('switching');
        if (phase) phase.classList.add('switching');
        window.setTimeout(() => {
            if (number) number.textContent = current.no;
            if (phase) phase.textContent = current.phase;
            if (number) number.classList.remove('switching');
            if (phase) phase.classList.remove('switching');
        }, 160);
    }

    const firstCenter = itemRects[0].top + itemRects[0].height / 2;
    const lastCenter = itemRects[itemRects.length - 1].top + itemRects[itemRects.length - 1].height / 2;
    const milestoneSpan = lastCenter - firstCenter;
    const scrollProgress =
        milestoneSpan > 0 ? Math.min(1, Math.max(0, (anchor - firstCenter) / milestoneSpan)) : 0;
    const maxCopyTravel = Math.max(0, list.offsetHeight - copy.offsetHeight);
    const copyY = Math.round(scrollProgress * maxCopyTravel);
    const numberX = Math.round((local - 0.5) * -28);

    if (copyY !== cache.lastCopyY) {
        cache.lastCopyY = copyY;
        copy.style.setProperty('--timeline-copy-y', `${copyY}px`);
    }
    if (numberX !== cache.lastNumberX) {
        cache.lastNumberX = numberX;
        copy.style.setProperty('--timeline-number-x', `${numberX}px`);
    }

    const activeBar = rails[activeIndex];
    if (activeBar) {
        activeBar.style.setProperty('--rail-progress', `${Math.max(8, local * 100)}%`);
    }
}

async function setupHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    try {
        const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js');
        setupThreeHero(canvas, THREE);
    } catch {
        setupFallbackHero(canvas);
    }
}

function setupThreeHero(canvas, THREE) {
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    scene.add(new THREE.AmbientLight(0x8fd6ff, 0.6));
    const key = new THREE.PointLight(0x8fd6ff, 2.4);
    key.position.set(4, 5, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0x3a63ff, 1.5);
    fill.position.set(-6, -3, 2);
    scene.add(fill);

    const group = new THREE.Group();
    group.scale.setScalar(1.35);
    scene.add(group);

    function triangleGeometry(radius, rot, tube) {
        const corners = [];
        for (let i = 0; i < 3; i += 1) {
            const a = rot + (i / 3) * Math.PI * 2 - Math.PI / 2;
            corners.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
        }
        const pts = [];
        for (let e = 0; e < 3; e += 1) {
            const p0 = corners[e];
            const p1 = corners[(e + 1) % 3];
            for (let s = 0; s < 14; s += 1) pts.push(new THREE.Vector3().lerpVectors(p0, p1, s / 14));
        }
        return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0), 180, tube, 14, true);
    }

    function tri(radius, rot, tube, color, z, opacity = 1) {
        const material = new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.75,
            metalness: 0.6,
            roughness: 0.25,
            transparent: opacity < 1,
            opacity,
        });
        const mesh = new THREE.Mesh(triangleGeometry(radius, rot, tube), material);
        mesh.position.z = z;
        group.add(mesh);
    }

    tri(1.5, 0, 0.07, 0x39c6ff, 0.14);
    tri(1.5, Math.PI, 0.07, 0x2f7bff, -0.14);
    tri(1.02, Math.PI / 6, 0.05, 0x6fe0ff, 0.02, 0.86);
    tri(1.02, Math.PI + Math.PI / 6, 0.05, 0x3a63ff, -0.02, 0.86);

    const shape = new THREE.Shape();
    shape.moveTo(-0.62, 0.82);
    shape.lineTo(0.92, 0);
    shape.lineTo(-0.62, -0.82);
    shape.lineTo(-0.34, 0);
    shape.closePath();
    const play = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, {
            depth: 0.22,
            bevelEnabled: true,
            bevelThickness: 0.06,
            bevelSize: 0.05,
            bevelSegments: 3,
        }),
        new THREE.MeshStandardMaterial({
            color: 0xeaf6ff,
            emissive: 0xbfe6ff,
            emissiveIntensity: 0.45,
            metalness: 0.7,
            roughness: 0.2,
        }),
    );
    play.position.set(0.05, 0, 0.28);
    group.add(play);

    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
        const r = 3 + Math.random() * 5;
        const t = Math.random() * Math.PI * 2;
        const p = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(p) * Math.cos(t);
        positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
        positions[i * 3 + 2] = r * Math.cos(p);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
            color: 0x5ab4ff,
            size: 0.025,
            transparent: true,
            opacity: 0.82,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        }),
    );
    scene.add(particles);

    function resize() {
        const rect = canvas.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / Math.max(1, rect.height);
        camera.updateProjectionMatrix();
    }

    let running = !prefersReducedMotion;
    let frameId = 0;

    function animate(now) {
        if (!running) return;
        const t = now * 0.001;
        group.rotation.y = t * 0.38;
        group.rotation.x = Math.sin(t * 0.65) * 0.28;
        group.rotation.z = Math.cos(t * 0.5) * 0.2;
        group.position.y = Math.sin(t * 1.1) * 0.14;
        particles.rotation.y = t * 0.035;
        particles.rotation.x = Math.sin(t * 0.18) * 0.06;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
    }

    function start() {
        if (running) return;
        running = true;
        frameId = requestAnimationFrame(animate);
    }

    function stop() {
        running = false;
        if (frameId) cancelAnimationFrame(frameId);
        frameId = 0;
    }

    const heroSection = canvas.closest('.hero');
    if (heroSection && 'IntersectionObserver' in window) {
        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) start();
                else stop();
            },
            { rootMargin: '120px 0px', threshold: 0 },
        );
        heroObserver.observe(heroSection);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    if (running) requestAnimationFrame(animate);
}

function setupFallbackHero(canvas) {
    const ctx = canvas.getContext('2d');
    const particles = Array.from({ length: 320 }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        vx: -0.00008 + Math.random() * 0.00016,
        vy: -0.00005 + Math.random() * 0.0001,
        pulse: Math.random() * Math.PI * 2,
    }));

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(canvas.offsetHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rotatePoint(point, rx, ry, rz) {
        let { x, y, z } = point;
        let cy = Math.cos(rx);
        let sy = Math.sin(rx);
        [y, z] = [y * cy - z * sy, y * sy + z * cy];
        cy = Math.cos(ry);
        sy = Math.sin(ry);
        [x, z] = [x * cy + z * sy, -x * sy + z * cy];
        cy = Math.cos(rz);
        sy = Math.sin(rz);
        [x, y] = [x * cy - y * sy, x * sy + y * cy];
        return { x, y, z };
    }

    function project(point, cx, cy, scale) {
        const perspective = 4.2;
        const depth = perspective / (perspective - point.z);
        return {
            x: cx + point.x * scale * depth,
            y: cy + point.y * scale * depth,
            depth,
            z: point.z,
        };
    }

    function triangle3d(cx, cy, radius, baseRot, color, width, z, rx, ry, rz, scale) {
        const vertices = Array.from({ length: 3 }, (_, i) => {
            const a = baseRot + (i / 3) * Math.PI * 2 - Math.PI / 2;
            return rotatePoint({ x: Math.cos(a) * radius, y: Math.sin(a) * radius, z }, rx, ry, rz);
        }).map((point) => project(point, cx, cy, scale));

        ctx.beginPath();
        vertices.forEach((point, i) => {
            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
        });
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width * Math.max(0.72, vertices.reduce((sum, p) => sum + p.depth, 0) / vertices.length);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.shadowColor = color;
        ctx.shadowBlur = 28;
        ctx.stroke();
        ctx.shadowBlur = 0;
    }

    function play3d(cx, cy, size, rx, ry, rz) {
        const points = [
            { x: -0.34, y: -0.46, z: 0.28 },
            { x: 0.48, y: 0, z: 0.34 },
            { x: -0.34, y: 0.46, z: 0.28 },
            { x: -0.16, y: 0, z: 0.45 },
        ]
            .map((point) => rotatePoint(point, rx, ry, rz))
            .map((point) => project(point, cx, cy, size));
        ctx.beginPath();
        points.forEach((point, index) => {
            if (index === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
        });
        ctx.closePath();
        ctx.fillStyle = '#eaf6ff';
        ctx.shadowColor = '#bfe6ff';
        ctx.shadowBlur = 30;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    let running = !prefersReducedMotion;
    let frameId = 0;

    function draw(now) {
        if (!running) return;
        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        const cx = w * 0.64;
        const cy = h * 0.42;
        ctx.clearRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';
        particles.forEach((p) => {
            p.x += p.vx * 16;
            p.y += p.vy * 16;
            if (p.x < -0.04) p.x = 1.04;
            if (p.x > 1.04) p.x = -0.04;
            if (p.y < -0.04) p.y = 1.04;
            if (p.y > 1.04) p.y = -0.04;
            const driftX = Math.cos(now * 0.00008 + p.pulse) * 18 * p.z;
            const driftY = Math.sin(now * 0.00006 + p.pulse) * 14 * p.z;
            const x = p.x * w + driftX;
            const y = p.y * h + driftY;
            ctx.globalAlpha = 0.18 + p.z * 0.62;
            ctx.fillStyle = '#5ab4ff';
            ctx.beginPath();
            ctx.arc(x, y, 0.55 + p.z * 1.7, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;

        const spin = now * 0.00032;
        const rx = Math.sin(now * 0.00042) * 0.48;
        const ry = spin * 1.15;
        const rz = Math.cos(now * 0.00033) * 0.34;
        const size = Math.min(w, h) * 0.22;
        triangle3d(cx, cy, 1.5, 0, '#39c6ff', 8, 0.18, rx, ry, rz, size);
        triangle3d(cx, cy, 1.5, Math.PI, '#2f7bff', 8, -0.18, rx, ry, rz, size);
        triangle3d(cx, cy, 1.02, Math.PI / 6, '#6fe0ff', 5, 0.04, rx, ry, rz, size);
        triangle3d(cx, cy, 1.02, Math.PI + Math.PI / 6, '#3a63ff', 5, -0.04, rx, ry, rz, size);
        play3d(cx + 8, cy, size * 0.82, rx, ry, rz);
        ctx.globalCompositeOperation = 'source-over';

        frameId = requestAnimationFrame(draw);
    }

    function start() {
        if (running) return;
        running = true;
        frameId = requestAnimationFrame(draw);
    }

    function stop() {
        running = false;
        if (frameId) cancelAnimationFrame(frameId);
        frameId = 0;
    }

    const heroSection = canvas.closest('.hero');
    if (heroSection && 'IntersectionObserver' in window) {
        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) start();
                else stop();
            },
            { rootMargin: '120px 0px', threshold: 0 },
        );
        heroObserver.observe(heroSection);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    if (running) requestAnimationFrame(draw);
}

window.addEventListener('scroll', scheduleScrollWork, { passive: true });

window.addEventListener('DOMContentLoaded', () => {
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setupMarquee();
    setupChapterScrollLock();
    setupAnchorSmoothScroll();
    revealOnScroll();
    countStats();
    renderEvents();
    setupModal();
    if (!prefersReducedMotion) setupTilt();
    setupHeroCanvas();
    setChapterProgress(0);
    scheduleScrollWork();
});
