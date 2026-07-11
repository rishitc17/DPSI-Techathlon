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
                    {
                        icon: 'fa-magnifying-glass',
                        title: 'Pick your challenge',
                        text: 'Choose a theme area aligned with "Imagining an Impactful Future."',
                    },
                    {
                        icon: 'fa-wand-magic-sparkles',
                        title: 'Design your solution',
                        text: 'App, platform, AI tool, IoT prototype, or robotics concept.',
                    },
                    { icon: 'fa-cloud-arrow-up', title: 'Submit online', text: '8-slide deck · Mon, Aug 6, 6 PM IST.' },
                    {
                        icon: 'fa-presentation-screen',
                        title: 'Grand finale',
                        text: 'Tue, Aug 18 · 6 min pitch + 4 min Q&A.',
                    },
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
                    { icon: 'fa-laptop', label: 'Format', value: 'PPT/PDF + demo' },
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
        no: '03',
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
                    {
                        icon: 'fa-envelope-open-text',
                        title: 'Challenge revealed',
                        text: 'Theme-aligned statement given at competition start.',
                    },
                    {
                        icon: 'fa-code',
                        title: '2-hour build',
                        text: 'Investigate, brainstorm, develop with any AI tools.',
                    },
                    {
                        icon: 'fa-cloud-arrow-up',
                        title: 'Submit MVP',
                        text: 'Digital product + one-page deck via portal.',
                    },
                    { icon: 'fa-desktop', title: 'Live demo', text: "5 min product demo + 3 min judges' Q&A." },
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
                    {
                        icon: 'fa-robot',
                        title: 'AI Assistants',
                        items: ['ChatGPT', 'Microsoft Copilot', 'Claude', 'Gemini'],
                    },
                    {
                        icon: 'fa-laptop-code',
                        title: 'Dev Platforms',
                        items: [
                            'Bolt.new',
                            'Lovable',
                            'Firebase Studio',
                            'Cursor',
                            'Windsurf',
                            'Replit AI',
                            'Vercel v0',
                        ],
                    },
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
                label: "How You're Scored",
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
                    {
                        icon: 'fa-gavel',
                        title: 'General',
                        items: [
                            'One team per school',
                            'Build only during competition',
                            'Internet provided — bring laptop & charger',
                        ],
                    },
                    {
                        icon: 'fa-robot',
                        title: 'AI Usage',
                        items: [
                            'Disclose all AI tools',
                            'Explain AI-generated code if asked',
                            'Judges may verify understanding',
                        ],
                    },
                    {
                        icon: 'fa-box',
                        title: 'Product',
                        items: [
                            'No pre-built solutions',
                            'Templates & open-source OK with attribution',
                            'Core functionality must be demonstrated',
                        ],
                    },
                    {
                        icon: 'fa-handshake',
                        title: 'Conduct',
                        items: ['Team-only collaboration', 'Academic integrity required', "Judges' decision is final"],
                    },
                ],
            },
        ],
    },
    {
        no: '02',
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
                hook: "Don't just edit a photo — transform visual evidence into a campaign for change.",
                callout: 'Thoughtful communication and purposeful design over artistic perfection.',
            },
            {
                id: 'journey',
                label: 'Your Journey',
                icon: 'fa-route',
                type: 'timeline',
                items: [
                    {
                        icon: 'fa-download',
                        date: 'Aug 1',
                        label: 'Images drop',
                        text: 'Download 2–3 curated photos from the website.',
                    },
                    {
                        icon: 'fa-paintbrush',
                        date: 'Aug 1–6',
                        label: 'Create',
                        text: 'Design campaign poster + 2-min explainer video.',
                    },
                    {
                        icon: 'fa-cloud-arrow-up',
                        date: 'Aug 6',
                        label: 'Submit',
                        text: 'Upload by 6 PM IST via official form.',
                    },
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
                    {
                        icon: 'fa-id-card',
                        title: 'Introduction',
                        text: 'Name, school, campaign title, selected theme.',
                    },
                    {
                        icon: 'fa-exclamation-circle',
                        title: 'The issue',
                        text: 'Significance, audience, facts & statistics.',
                    },
                    { icon: 'fa-bullseye', title: 'Target audience', text: 'Who, what change, and why it matters.' },
                    {
                        icon: 'fa-image',
                        title: 'Campaign visual',
                        text: 'Final poster — photo, illustration, typography, mixed media.',
                    },
                    {
                        icon: 'fa-pen-ruler',
                        title: 'Design rationale',
                        text: 'Concept, colour, typography, composition choices.',
                    },
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
                    {
                        icon: 'fa-microphone',
                        title: 'Present & perform',
                        text: '1–2 min talk · 1 min music · 2 min Q&A.',
                    },
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
                label: "How You're Scored",
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
                    {
                        icon: 'fa-school',
                        title: 'Team',
                        items: [
                            'One team per school',
                            'All members must participate',
                            'Build entirely during competition',
                        ],
                    },
                    {
                        icon: 'fa-volume-high',
                        title: 'Instruments',
                        items: [
                            'Every instrument must make audible sound',
                            'At least 4 kit materials required',
                            'One or more instruments allowed',
                        ],
                    },
                    {
                        icon: 'fa-shield',
                        title: 'Safety',
                        items: [
                            'Maintain safety throughout',
                            'No laptops, phones, or AI needed',
                            "Judges' decision is final",
                        ],
                    },
                ],
            },
        ],
    },
];

const modalEventSource = String.raw`
### **INNOVATEX CHALLENGE**

### ***Design the Future. Create Meaningful Impact.***

Venue: Project Room, Secondary Building (4th floor)

**1\. EVENT OVERVIEW**

| Event Name | InnovateX Challenge |
| :---- | :---- |
| **Category** | **Technology Innovation Challenge** |
| **Mode** | **Two Rounds â€“ Preliminary Round (Online Submission) & Grand Finale (Presentation at Host School / Microsoft Teams for Outstation Schools)** |
| **Number of Entries** | **One team per school** |
| **Team Size** | **2â€“4 participants (Grades IXâ€“XII)** |

**2\. GUIDELINES \- PRELIMINARY ROUND (ONLINE)**

**a) Challenge**

Inspired by the Techathlon 2026 theme "Imagining an Impactful Future," teams are required to identify an authentic real-world problem and propose an innovative technology-enabled solution that creates meaningful impact.

Solutions should demonstrate creativity, inquiry, empathy, feasibility, and responsible use of technology.
**b) Suggested Challenge Areas**
Teams will have to choose one of the following challenge areas (or another relevant challenge aligned with the theme):

* Health & Well-being
* Inclusive Education
* Environmental Sustainability
* Smart Communities
* Digital Citizenship
* Accessibility
* Community Development
* Responsible AI
* Disaster Management
* Future of Learning

**d) WHAT CAN YOUR SOLUTION BE?**
Solutions may take any of the following forms:

* Mobile Application
* Website or Web Platform
* AI-enabled Solution
* IoT Prototype
* Physical Product Prototype
* Robotics Concept


**Teams are encouraged to choose the format that best addresses their selected challenge.**

**c) Submission Requirements**
**Teams must submit one presentation in PDF or PPTX format.**

**Presentation Specifications**

| Criteria | Requirements |
| :---- | :---- |
| **Maximum Slides** | **8 Slides** |
| **File Format** | **PPTX or PDF** |
| **File Size** | **Maximum 20 MB** |
| **Submission Mode** | **[Online Submission Link](https://forms.gle/e1m3BiYGebj7fLx77)** |
| **Naming Convention** | **SchoolName\_InnovateX\_2026** |
| **Submission Deadline** | **Monday, August 6, 2026, 6:00 PM IST** |

**d) Presentation Order**

* Team Introduction (School Name, Team Members, Challenge Title)
* Problem Statement
* Target Users
* Proposed Solution
* Prototype / Concept (Prototype, Wireframe, Product Design, App Screens, Website Mock-up, Working Model, System Workflow)
* Impact & Feasibility
* Future Scope
* Credits & References

**3\. JUDGEMENT CRITERIA**
**Preliminary Round**

| Problem Identification & User Understanding | Innovation & Technology Integration | Feasibility & Prototype | Impact & Value Proposition | Presentation & Communication |
| :---- | :---- | :---- | :---- | :---- |
| **20** | **20** | **20** | **20** | **20** |

**Preliminary Round Results & Grand Finale**

The results of the Preliminary Round will be announced on the official Techathlon website on Monday, August 10, 2026, at 6:00 p.m. IST.

Shortlisted teams will be invited to participate in the Grand Finale on Tuesday, August 18, 2026, at DPS International School, Gurugram, where they will present their solution along with a demonstration of their working prototype before the judging panel.

Shortlisted teams from outstation schools may present virtually via Microsoft Teams. The meeting link will be shared with the respective teams via email on Sunday, August 16, 2026\.

**Final Round**

| Problem Understanding & User-Centred Thinking | Innovation & Technology Integration | Working Prototype / Demonstration | Impact & Feasibility | Presentation & Communication | Q\&A |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **20** | **20** | **20** | **20** | **20** | **10** |

**4\. Grand Finale Guidelines**

### **Date:** Tuesday, August 18, 2026

### **Venue:** DPS International School, Gurugram

### **Presentation Time:** 6 minutes

### **Q\&A:** 4 minutes

### **Presentation Format:** PPT/PDF with prototype demonstration

### **Outstation schools whose teams are shortlisted may present virtually through Microsoft Teams.**

**5\. General Guidelines**

* Each school may submit one team.
* All work must be original.
* Teams may use AI responsibly; any AI tools used must be acknowledged on the Credits slide.
* Proper credit must be given for all external resources, datasets, images, and software.
* Solutions should demonstrate responsible and ethical use of technology.
* Participants must bring their own laptops
* Wi-Fi access will be provided
* Judges' decisions will be final and binding.

### **2\. AI for Good Lab**

 ***Think Fast. Build Smart. Create Impact.***
**Venue:**
**1\. Event Overview**

| Event Name | AI for Good Lab |
| :---- | :---- |
| **Category** | **AI Innovation Sprint** |
| **Mode** | **Live Challenge (on-site)** |
| **Number of Entries** | **One team per school** |
| **Team Size** | **2â€“3 participants (Grades IXâ€“XII)** |

 **2\. Challenge Format**

AI for Good Lab is **a fast-paced innovation challenge** where teams use Artificial Intelligence to design and develop a digital product that addresses a real-world problem. The challenge statement will be revealed at the beginning of the competition.
Teams will investigate the challenge, generate ideas, build a functional digital solution using AI-assisted development tools, and present their work to the judging panel.
The emphasis is on creativity, collaboration, responsible AI use, and rapid problem-solving.

 **3\. Challenge Brief**

On the day of the event, all participating teams will receive the challenge statement, aligned with the Techathlon 2026 theme: **"Imagining an Impactful Future."**

Sample Challenge Statements:

* Design a digital solution that helps senior citizens stay socially connected and engaged.
* Develop an AI-powered assistant that supports students' emotional wellbeing and stress management.
* Create an AI-powered platform that encourages people to volunteer and participate in community service.
* Build an AI-powered solution that helps neighbourhoods share resources, reduce waste, and support one another.

**4\. Event Format**
The challenge statement will be revealed at the start of the competition.
Each team will have 2 hours to investigate the challenge, brainstorm ideas, and develop a digital product using any AI tools and development platforms.
At the end of the development phase, teams must submit their digital product and one-page presentation through the designated submission portal.
Each team will then present their solution to the judging panel.

**Development Time: 2 hours**
**Team Presentation: 5 minutes**
**Judges' Q\&A: 3 minutes**

 **5\. Submission Requirements**
Teams are expected to develop a **Minimum Viable Product (MVP)** that demonstrates the core functionality of their solution.
Teams may develop a simple digital solution, including but not limited to:

* A 2â€“3 page web application
* A 2â€“3 screen mobile application
* An AI chatbot or virtual assistant
* An AI-powered dashboard
* An interactive website
* A workflow automation tool
* An educational learning tool
* A community engagement platform
* A productivity application

 **6\. Permitted AI Tools**
Participants are encouraged to use AI responsibly throughout the development process.

Examples include:

*  AI Assistants
*  ChatGPT
*  Microsoft Copilot
*  Claude
*  Gemini

 AI Development Platforms

*  Bolt.new
*  Lovable
*  Firebase Studio
*  Cursor
*  Windsurf
*  Replit AI
*  Vercel v0

 Design Tools

*  Figma AI
*  Canva AI

Teams may also use any other publicly available AI tools that comply with the competition rules.

 **7\. Judging Criteria**

| Understanding of the Challenge | Innovation & Creativity  | Effective Use of AI   | Product Functionality & User Experience | Potential Impact      | Presentation & Communication |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **15** | **20** | **20** | **20** | **15** | **10** |

 **8\. Presentation Format**
Each team will have:

* 5 minutes to demonstrate their product.
* 3 minutes for questions from the judging panel.

The presentation should clearly explain:

*  The challenge
*  The proposed solution
*  AI tools used
*  Live product demonstration
*  Expected impact

 **9\. Rules & Regulations**

 **A. General Rules**

* Each school may register one team.
* The challenge will be revealed only at the start of the event.
*  Teams must develop their solution entirely during the competition.
*  Internet access will be provided.
*  Teams must bring their own laptops and chargers.

**B. AI Usage**

*  AI-assisted development is encouraged.
*  Teams must disclose all AI tools used.
*  Participants can explain any AI-generated code or content included in their solution (if needed).
*  Judges may ask technical questions to verify understanding.

**C. Product Rules**

*  The product must be developed during the competition.
*  Existing templates, libraries, and open-source frameworks may be used with proper attribution.
*  Previously developed projects or pre-built solutions are not permitted.
*  The product does not need to be fully complete but should demonstrate the core functionality.

**D. Code of Conduct**

*  Collaboration is permitted only within registered team members.
*  All work must comply with academic integrity principles.
*  Teams must acknowledge external assets and datasets where applicable.
*  The judges' decision will be final and binding.

# **Through the Lens**

### ***Every Picture Inspires Change.***

1\. Event Overview

| Event Name | Through the Lens |
| ----- | :---- |
| **Category** | Visual Storytelling & Digital Campaign Challenge |
| **Mode** | Two Rounds â€“ Preliminary Round (Online Submission) & Grand Finale (Presentation at Host School / Microsoft Teams for Outstation Schools) |
| **Number of Entries** | One team per school |
| **Team Size**  | 1-2 participants |
| **Eligibility** | Grades IXâ€“XII |

**2\. Guidelines â€“ Preliminary Round**

## **a) Challenge**

Inspired by the Techathlon 2026 theme "Imagining an Impactful Future," participants will use the power of visual storytelling to inspire positive change.

**On Saturday, August 1, 2026,** participants will be able to download a curated image set from the official Techathlon website. Each image set will consist of 2â€“3 authentic, high-resolution photographs based on a common challenge theme. Using one or more of the provided images, participants must create an original campaign poster or digital visual that communicates a meaningful message, raises awareness, and encourages positive action.

The challenge is not simply to edit an image, but to transform visual evidence into a compelling campaign that informs, inspires, and motivates audiences towards imagining a more impactful future.

The emphasis is on thoughtful communication, creativity, and purposeful design rather than artistic perfection.

**b) Suggested Themes**
Participants will receive curated image sets based on a challenge theme.The image sets will be released on the Techathlon website in the event details section on Saturday, August 1, 2026\.

Examples of challenge themes may include but not limited to:

* Digital Footprints & Online Reputation
* Responsible Use of Artificial Intelligence
* Combating Misinformation
* Cyberbullying & Online Kindness

c) Submission Requirements

### Participants must submit the following through the official Techathlon Submission Form.

### Submission Deadline Thursday, August 6, 2026, 6:00 PM IST

| Criteria | Requirements |
| :---- | :---- |
| **Submissions** | **Digital Campaign Poster (PDF/JPEG/PNG) and MP4 video** |
| **File Size** | **Both files should be under 100 MB** |
| **Submission Mode** | **[Online Submission Link](https://forms.gle/e1m3BiYGebj7fLx77)** |
| **Naming Convention** | **SchoolName\_DigitalPoster\_2026** |
| **Submission Deadline** | **Thursday, August 6, 2026, 6:00 PM IST** |

### Required Files

### 1\. Digital Campaign Poster \- Accepted formats: PDF/JPEG/PNG/PPTX. File size should not be more than 20 MB

### **Presentation Specifications \-**

**Participants must submit a 2-minute video in MP4 format explaining their campaign poster.**

**The video should include:**

* **Introduction: Participant Name, School Name, Campaign Title, and Selected Theme.**
* **The Issue: A brief explanation of the issue being addressed and why it is important.**
* **Target Audience: Who the campaign is intended for and the positive change it aims to inspire.**
* **Campaign Visual: A showcase of the final campaign poster or digital visual.**
* **Design Rationale: An explanation of the creative concept, key design choices, and how the visual effectively communicates the intended message.**
* **Credits: Acknowledgement of image sources, references, AI tools (if used), and software/platforms used.**

**3\. Judging Criteria**

## **Preliminary Round**

| Understanding of the Issue | Creativity & Originality  | Visual Communication   | Technical Design Skills | Overall Presentation      |
| :---- | :---- | :---- | :---- | :---- |
| **20** | **20** | **25** | **20** | **15** |

**Final Round**

| Understanding of the Issue | Creativity & Innovation | Effectiveness of the Campaign | Design Justification | Presentation and Response to Questions     |
| :---- | :---- | :---- | :---- | :---- |
| **15** | **20** | **25** | **20** | **20** |

**4\. Grand Finale Guidelines**

* **Date:** Tuesday, August 18, 2026
* **Venue:** DPS International School, Gurugram
* **Presentation Time:** 5 minutes
* **Q\&A:** 3 minutes
* **Presentation Format:** PPT/PDF

Outstation schools whose participants are shortlisted may present virtually through **Microsoft Teams**.

# **5\. General Guidelines**

* Each school may submit **one entry**.
* All artwork and design work must be original.
* Participants may use stock images only if they are appropriately licensed and credited.
* AI-generated artwork is **not permitted**.
* AI may be used only for brainstorming, grammar refinement, or colour palette exploration. Any AI tools used must be acknowledged on the Credits slide.
* Proper credit must be given for all external resources, fonts, icons, and images.
* Judges' decisions will be final and binding.

# **6\. Recommended Software**

Participants may use any digital design software, including:

* Adobe Photoshop
* Adobe Illustrator
* Photopea
* GIMP
* Canva
* Figma
* Affinity Designer
* Inkscape
* Krita

7\. Event Timeline

| Activity | Date |
| ----- | ----- |
| **Last Date of Registration** | **Friday, July 31, 2026** |
| **Challenge Images Released** | **Saturday, August 1, 2026** |
| **Online Submission Deadline** | **Thursday, August 6, 2026, 6:00 PM IST** |
| **Shortlisted Participants Announced** | **Monday, August 10, 2026, 2:00 PM IST** |
| **Grand Finale** | **Tuesday, August 18, 2026** |

### **4\. SoundCraft Challenge**

***Design. Build. Play.***

**Venue: Design and Technology Lab, 4th Floor**
**1\. Event Overview**

| Event Name | SoundCraft Challenge |
| :---- | :---- |
| **Category** | **Design & Engineering Challenge** |
| **Mode** | **Live Challenge (on-site)** |
| **Number of Entries** | **One team per school** |
| **Team Size** | **2â€“3 participants (Grades IXâ€“XII)** |

**2\. Challenge**

Inspired by the Techathlon 2026 theme "Imagining an Impactful Future," teams are challenged to transform simple everyday materials into functional musical instruments that demonstrate creativity, engineering, and design thinking.
Using only the materials provided by the organisers, teams must design and construct one or more functional musical instruments capable of producing original sounds.The challenge encourages participants to explore how innovation can emerge from limited resources through creativity, collaboration, and iterative design.

The event concludes with a short presentation and musical performance, where teams will demonstrate the construction & functionality of their instrument(s) and share the story behind their design.

**3\. Event Format**
Following a short briefing, each team will receive an identical material kit.
Teams will have 2 hours to:

* Brainstorm ideas
* Design their instrument(s)
* Build and refine their prototype(s)
* Test sound quality and functionality

At the end of the development phase, each team will deliver:

* 1-2 minute verbal presentation (What kind of instrument/s made & how itâ€™s made)
* 1-minute Musical Performance (Remix of an existing music or a new composition)
* 2-minute Judges' Q\&A

**5\. Material Kit (Provided by Organizer)**
Each team will receive the sa me material kit containing:

* Cardboard Sheet
* Paper Cups
* Rubber Bands
* Ice Cream Sticks
* Plastic Bottle
* Drinking Straws
* Cotton String
* Bottle Caps
* Balloon
* Masking Tape
* Glue
* Scissors

\*\* No additional materials may be brought into or used during the competition.

**6\. Competition Guidelines**

* Each school may register one team.
* Teams must use only the materials provided by the organisers.
* Instruments must be designed and constructed entirely during the competition.
* Teams may build one or more instruments.
* Every instrument must produce an audible sound.
* Teams are encouraged to experiment, test, and refine their designs.
* At least four different materials from the kit must be incorporated into the final design.
* All team members must actively participate in the design, construction, and presentation.
* Safety must be maintained throughout the competition.
* Laptops, tablets, mobile phones and use of AI are not required.
* The judges' decision will be final and binding.

**7\. Final Presentation**
Each team will have 3 minutes to present and perform.
The presentation should include:

* Introduction to the team and instrument(s)
* Inspiration behind the design
* How the instrument produces sound
* Key design challenges encountered
* Improvements made during testing and refinement
* A short musical performance demonstrating the functionality of the instrument(s)

This will be followed by 2 minutes of questions from the judging panel.

**8\. Judging Criteria**

| Creativity & Originality | Functionality & Sound Quality | Engineering & Craftsmanship | Design Process & Problem Solving | Presentation |
| :---- | :---- | :---- | :---- | :---- |
| **20** | **20** | **20** | **20** | **20** |
`.replaceAll('\u00e2\u20ac\u201c', '\u2013').replaceAll('\u00e2\u20ac\u2122', '\u2019');

const modalEvents = [
    {
        no: '01',
        name: 'InnovateX Challenge',
        tag: 'Design the Future. Create Meaningful Impact.',
        mode: 'Hybrid',
        desc: 'Identify an authentic real-world problem and propose a technology-enabled solution that creates meaningful impact.',
        long: 'InnovateX is a two-round technology innovation challenge. Teams submit an 8-slide PPTX or PDF in the preliminary round, then shortlisted teams present at DPS International School, Gurugram, with Microsoft Teams available for shortlisted outstation schools. Solutions may be apps, web platforms, AI-enabled ideas, IoT prototypes, physical products, or robotics concepts.',
        meta: ['2-4 participants', 'Grades IX-XII', 'One team per school', 'PPTX or PDF'],
        details: [
            ['Category', 'Technology Innovation'],
            ['Submission', 'Aug 6, 2026, 6 PM'],
            ['Finale', 'Aug 18, 2026'],
            ['Venue', 'Project Room, Secondary Building'],
        ],
        rules: [
            'Teams must identify a real-world challenge aligned with the theme.',
            'Preliminary presentation: maximum 8 slides, PPTX or PDF, maximum 20 MB.',
            'Use the naming convention SchoolName_InnovateX_2026.',
            'Finale presentation is 6 minutes, followed by 4 minutes of Q&A.',
            'AI tools may be used responsibly and must be acknowledged on the credits slide.',
        ],
        sections: [
            {
                title: 'Event Overview',
                rows: [
                    ['Event Name', 'InnovateX Challenge'],
                    ['Category', 'Technology Innovation Challenge'],
                    [
                        'Mode',
                        'Two rounds: online preliminary submission and grand finale presentation at the host school or on Microsoft Teams for shortlisted outstation schools',
                    ],
                    ['Number of Entries', 'One team per school'],
                    ['Team Size', '2-4 participants from Grades IX-XII'],
                    ['Venue', 'Project Room, Secondary Building, 4th floor'],
                ],
            },
            {
                title: 'Challenge',
                body: [
                    'Inspired by the theme Imagining an Impactful Future, teams identify an authentic real-world problem and propose an innovative technology-enabled solution that creates meaningful impact.',
                    'Solutions should demonstrate creativity, inquiry, empathy, feasibility, responsible technology use, and a clear understanding of the users or communities being served.',
                ],
            },
            {
                title: 'Suggested Challenge Areas',
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
                title: 'Possible Solution Forms',
                items: [
                    'Mobile application',
                    'Website or web platform',
                    'AI-enabled solution',
                    'IoT prototype',
                    'Physical product prototype',
                    'Robotics concept',
                ],
            },
            {
                title: 'Preliminary Submission',
                rows: [
                    ['Submission', 'One presentation in PDF or PPTX format'],
                    ['Maximum Slides', '8 slides'],
                    ['Maximum File Size', '20 MB'],
                    ['Mode', '[Online Submission Link](https://forms.gle/e1m3BiYGebj7fLx77)'],
                    ['File Naming', 'SchoolName_InnovateX_2026'],
                    ['Deadline', 'Monday, August 6, 2026, 6:00 PM IST'],
                ],
            },
            {
                title: 'Presentation Order',
                items: [
                    'Team introduction: school name, team members, and challenge title',
                    'Problem statement',
                    'Target users',
                    'Proposed solution',
                    'Prototype or concept: prototype, wireframe, product design, app screens, website mock-up, working model, or system workflow',
                    'Impact and feasibility',
                    'Future scope',
                    'Credits and references',
                ],
            },
            {
                title: 'Preliminary Judging',
                rows: [
                    ['Problem Identification & User Understanding', '20'],
                    ['Innovation & Technology Integration', '20'],
                    ['Feasibility & Prototype', '20'],
                    ['Impact & Value Proposition', '20'],
                    ['Presentation & Communication', '20'],
                ],
            },
            {
                title: 'Grand Finale',
                rows: [
                    ['Date', 'Tuesday, August 18, 2026'],
                    ['Venue', 'DPS International School, Gurugram'],
                    ['Presentation', '6 minutes'],
                    ['Q&A', '4 minutes'],
                    ['Format', 'PPT or PDF with prototype demonstration'],
                    ['Outstation Schools', 'Shortlisted teams may present via Microsoft Teams'],
                ],
            },
            {
                title: 'Final Judging',
                rows: [
                    ['Problem Understanding & User-Centred Thinking', '20'],
                    ['Innovation & Technology Integration', '20'],
                    ['Working Prototype / Demonstration', '20'],
                    ['Impact & Feasibility', '20'],
                    ['Presentation & Communication', '20'],
                    ['Q&A', '10'],
                ],
            },
            {
                title: 'General Guidelines',
                items: [
                    'Only one team may participate from each school.',
                    'All work must be original.',
                    'AI tools may be used responsibly and must be acknowledged on the credits slide.',
                    'External resources, datasets, images, and software must be credited.',
                    'Solutions must demonstrate responsible and ethical technology use.',
                    'Teams should bring laptops for the finale. Wi-Fi will be provided.',
                    "The judges' decision will be final.",
                ],
            },
        ],
    },
    {
        no: '03',
        name: 'AI for Good Lab',
        tag: 'Think Fast. Build Smart. Create Impact.',
        mode: 'On-site',
        desc: 'A live AI innovation sprint where teams build a digital product for a challenge revealed on the day.',
        long: 'AI for Good Lab is a fast-paced live challenge. Teams receive a challenge statement aligned with Imagining an Impactful Future, investigate the problem, brainstorm ideas, build a functional MVP using AI-assisted development tools, submit their product and one-page presentation, then demonstrate their work to judges.',
        meta: ['2-3 participants', 'Grades IX-XII', '2 hour build', 'MVP demo'],
        details: [
            ['Category', 'AI Innovation Sprint'],
            ['Development', '2 hours'],
            ['Presentation', '5 minutes'],
            ['Q&A', '3 minutes'],
        ],
        rules: [
            'The challenge statement is revealed only at the start of the competition.',
            'Teams must develop their solution during the competition.',
            'Teams may build a web app, mobile app, AI chatbot, dashboard, interactive website, workflow tool, or similar MVP.',
            'AI-assisted development is encouraged, but all tools must be disclosed.',
            'Participants must bring their own laptops and chargers.',
        ],
        sections: [
            {
                title: 'Event Overview',
                rows: [
                    ['Event Name', 'AI for Good Lab'],
                    ['Category', 'AI Innovation Sprint'],
                    ['Mode', 'Live challenge, on-site'],
                    ['Number of Entries', 'One team per school'],
                    ['Team Size', '2-3 participants from Grades IX-XII'],
                ],
            },
            {
                title: 'Challenge Format',
                body: [
                    'Teams use AI to design and develop a digital product that responds to a real-world problem. The challenge is revealed at the beginning of the event.',
                    'Participants investigate the issue, generate ideas, build a functional digital solution using AI-assisted development tools, and present the product to judges.',
                    'The event emphasizes creativity, collaboration, responsible AI use, and rapid problem-solving.',
                ],
            },
            {
                title: 'Sample Challenge Statements',
                items: [
                    'Help senior citizens stay socially connected.',
                    "Create an AI assistant for students' emotional wellbeing and stress support.",
                    'Design an AI volunteer or community service platform.',
                    'Build a resource-sharing, waste-reduction, or community-support platform.',
                ],
            },
            {
                title: 'Event Format',
                rows: [
                    ['Challenge Release', 'At the start of the competition'],
                    ['Development Time', '2 hours'],
                    ['Submission', 'Digital product and one-page presentation through the portal'],
                    ['Team Presentation', '5 minutes'],
                    ["Judges' Q&A", '3 minutes'],
                ],
            },
            {
                title: 'MVP Possibilities',
                items: [
                    '2-3 page web app',
                    '2-3 screen mobile app',
                    'AI chatbot or virtual assistant',
                    'AI dashboard',
                    'Interactive website',
                    'Workflow automation',
                    'Educational learning tool',
                    'Community engagement platform',
                    'Productivity app',
                ],
            },
            {
                title: 'Permitted AI Tools',
                groups: [
                    ['AI Assistants', ['ChatGPT', 'Microsoft Copilot', 'Claude', 'Gemini']],
                    [
                        'AI Development Platforms',
                        ['Bolt.new', 'Lovable', 'Firebase Studio', 'Cursor', 'Windsurf', 'Replit AI', 'Vercel v0'],
                    ],
                    ['Design Tools', ['Figma AI', 'Canva AI']],
                    ['Other Tools', ['Other public AI tools may be used if they comply with the event rules.']],
                ],
            },
            {
                title: 'Judging Criteria',
                rows: [
                    ['Understanding of Challenge', '15'],
                    ['Innovation & Creativity', '20'],
                    ['Effective Use of AI', '20'],
                    ['Product Functionality & UX', '20'],
                    ['Potential Impact', '15'],
                    ['Presentation & Communication', '10'],
                ],
            },
            {
                title: 'Presentation Requirements',
                items: [
                    'Explain the challenge.',
                    'Present the proposed solution.',
                    'Disclose the AI tools used.',
                    'Demonstrate the live product.',
                    'Explain the expected impact.',
                ],
            },
            {
                title: 'Competition Rules',
                groups: [
                    [
                        'General',
                        [
                            'One team may participate from each school.',
                            'The challenge will be revealed only at the start.',
                            'The solution must be developed entirely during the competition.',
                            'Internet will be provided.',
                            'Participants must bring laptops and chargers.',
                        ],
                    ],
                    [
                        'AI Usage',
                        [
                            'AI use is encouraged.',
                            'All AI tools must be disclosed.',
                            'Participants must be able to explain AI-generated code or content.',
                            'Judges may ask technical questions.',
                        ],
                    ],
                    [
                        'Product Rules',
                        [
                            'The product must be developed during the competition.',
                            'Templates, libraries, and open-source resources are allowed with attribution.',
                            'Previous projects and pre-built products are not allowed.',
                            'The product does not need to be complete, but it must demonstrate core functionality.',
                        ],
                    ],
                    [
                        'Code of Conduct',
                        [
                            'Collaboration is permitted only within the team.',
                            'Academic integrity must be maintained.',
                            'External assets and datasets must be acknowledged.',
                            "The judges' decision will be final.",
                        ],
                    ],
                ],
            },
        ],
    },
    {
        no: '02',
        name: 'Through the Lens',
        tag: 'Every Picture Inspires Change.',
        mode: 'Hybrid',
        desc: 'Create an original campaign poster or visual using curated challenge images released on the website.',
        long: 'Through the Lens is a visual storytelling and digital campaign challenge. Participants use one or more images from a curated set released on Saturday, August 1, 2026, to create a campaign poster or digital visual that raises awareness, communicates a meaningful message, and encourages positive action.',
        meta: ['1-2 participants', 'Grades IX-XII', 'Poster + video', 'No AI artwork'],
        details: [
            ['Image Set', 'Aug 1, 2026'],
            ['Submission', 'Aug 6, 2026, 6 PM'],
            ['Finale', 'Aug 18, 2026'],
            ['Presentation', '5 minutes + 3 Q&A'],
        ],
        rules: [
            'Submit the campaign poster as PDF, JPEG, PNG, or PPTX, maximum 20 MB.',
            'Submit a 2-minute MP4 video explaining the issue, audience, campaign visual, design rationale, credits, and references.',
            'AI-generated artwork is not permitted.',
            'AI may be used only for brainstorming, grammar refinement, or colour palette exploration, and must be acknowledged.',
            'All artwork and design work must be original, with proper credits for external resources.',
        ],
        sections: [
            {
                title: 'Event Overview',
                rows: [
                    ['Event Name', 'Through the Lens'],
                    ['Category', 'Visual Storytelling & Digital Campaign Challenge'],
                    [
                        'Mode',
                        'Two rounds: online preliminary submission and grand finale presentation at the host school or on Microsoft Teams for shortlisted outstation schools',
                    ],
                    ['Number of Entries', '1-2 participants per school'],
                    ['Eligibility', 'Grades IX-XII'],
                ],
            },
            {
                title: 'Challenge',
                body: [
                    'Participants use visual storytelling to inspire positive change. On Saturday, August 1, 2026, participants can download a curated image set from the official website.',
                    'Each set includes 2-3 authentic, high-resolution photographs based on a common challenge theme. Participants use one or more provided images to create an original campaign poster or digital visual that communicates a message, raises awareness, and encourages positive action.',
                    'The focus is thoughtful communication, creativity, and purposeful design rather than artistic perfection.',
                ],
            },
            {
                title: 'Suggested Themes',
                body: ['Image sets will be released on Saturday, August 1, 2026.'],
                items: [
                    'Digital Footprints & Online Reputation',
                    'Responsible Use of Artificial Intelligence',
                    'Combating Misinformation',
                    'Cyberbullying & Online Kindness',
                ],
            },
            {
                title: 'Submission',
                rows: [
                    ['Submission Method', '[Online Submission Link](https://forms.gle/e1m3BiYGebj7fLx77)'],
                    ['Deadline', 'Thursday, August 6, 2026, 6:00 PM IST'],
                    ['Submissions', 'Digital Campaign Poster (PDF/JPEG/PNG) and MP4 video'],
                    ['File Size', 'Both files should be under 100 MB'],
                    ['Naming Convention', 'SchoolName_ThroughTheLens_2026'],
                ],
            },
            {
                title: 'Video Must Cover',
                items: [
                    'Introduction: Participant Name, School Name, Campaign Title, and Selected Theme.',
                    'The Issue: A brief explanation of the issue being addressed and why it is important.',
                    'Target Audience: Who the campaign is intended for and the positive change it aims to inspire.',
                    'Campaign Visual: A showcase of the final campaign poster or digital visual.',
                    'Design Rationale: An explanation of the creative concept, key design choices, and how the visual effectively communicates the intended message.',
                    'Credits: Acknowledgement of image sources, references, AI tools (if used), and software/platforms used.',
                ],
            },
            {
                title: 'Preliminary Judging',
                rows: [
                    ['Understanding the Issue', '20'],
                    ['Creativity & Originality', '20'],
                    ['Visual Communication', '25'],
                    ['Technical Design Skills', '20'],
                    ['Overall Presentation', '15'],
                ],
            },
            {
                title: 'Grand Finale',
                rows: [
                    ['Date', 'Tuesday, August 18, 2026'],
                    ['Venue', 'DPS International School, Gurugram'],
                    ['Presentation', '5 minutes'],
                    ['Q&A', '3 minutes'],
                    ['Format', 'PPT or PDF'],
                    ['Outstation Schools', 'Shortlisted teams may present via Microsoft Teams'],
                ],
            },
            {
                title: 'Final Judging',
                rows: [
                    ['Understanding the Issue', '15'],
                    ['Creativity & Innovation', '20'],
                    ['Effectiveness of Campaign', '25'],
                    ['Design Justification', '20'],
                    ['Presentation and Response to Questions', '20'],
                ],
            },
            {
                title: 'Guidelines',
                items: [
                    'One entry may be submitted per school.',
                    'All work must be original.',
                    'Stock images may be used only if they are appropriately licensed and credited.',
                    'AI-generated artwork is not permitted.',
                    'AI may be used only for brainstorming, grammar refinement, or colour palette exploration, and must be acknowledged in credits.',
                    'External resources, fonts, icons, and images must be credited.',
                    "The judges' decision will be final.",
                ],
            },
            {
                title: 'Recommended Software',
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
                title: 'Timeline',
                rows: [
                    ['Registration', 'Friday, July 31, 2026'],
                    ['Challenge Images', 'Saturday, August 1, 2026'],
                    ['Online Deadline', 'Thursday, August 6, 2026, 6:00 PM IST'],
                    ['Shortlisted Results', 'Monday, August 10, 2026, 2:00 PM IST'],
                    ['Grand Finale', 'Tuesday, August 18, 2026'],
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
        long: 'SoundCraft Challenge asks teams to design and construct one or more functional musical instruments using only the materials provided by the organisers. The challenge rewards creativity, engineering, collaboration, iterative design, and the ability to explain how the instrument produces sound.',
        meta: ['2-3 participants', 'Grades IX-XII', '2 hour build', 'Live performance'],
        details: [
            ['Category', 'Design & Engineering'],
            ['Venue', 'Design and Technology Lab'],
            ['Build Time', '2 hours'],
            ['Finale', '3 minute performance + 2 Q&A'],
        ],
        rules: [
            'Teams must use only the materials provided by the organisers.',
            'Every instrument must produce an audible sound.',
            'At least four different materials from the kit must be incorporated into the final design.',
            'Laptops, tablets, and mobile phones are not required.',
            'All team members must actively participate in design, construction, and presentation.',
        ],
        sections: [
            {
                title: 'Event Overview',
                rows: [
                    ['Event Name', 'SoundCraft Challenge'],
                    ['Category', 'Design & Engineering Challenge'],
                    ['Mode', 'Live challenge, on-site'],
                    ['Number of Entries', 'One team per school'],
                    ['Team Size', '2-3 participants from Grades IX-XII'],
                    ['Venue', 'Design and Technology Lab, 4th floor'],
                ],
            },
            {
                title: 'Challenge',
                body: [
                    'Teams transform simple everyday materials into functional musical instruments that demonstrate creativity, engineering, and design thinking.',
                    'Using only the provided materials, participants design and build one or more instruments capable of producing original sounds.',
                    'The event encourages innovation from limited resources through creativity, collaboration, and iterative design. It concludes with a short presentation and musical performance that demonstrate construction, functionality, and the story behind the design.',
                ],
            },
            {
                title: 'Format',
                rows: [
                    ['Briefing', 'Teams receive the challenge and identical material kit'],
                    ['Build Time', '2 hours to brainstorm, design, build, refine, and test'],
                    ['Verbal Presentation', '1-2 minutes'],
                    ['Musical Performance', '1 minute; remix existing music or perform a new composition'],
                    ["Judges' Q&A", '2 minutes'],
                ],
            },
            {
                title: 'Material Kit',
                items: [
                    'Cardboard sheet',
                    'Paper cups',
                    'Rubber bands',
                    'Ice cream sticks',
                    'Plastic bottle',
                    'Drinking straws',
                    'Cotton string',
                    'Bottle caps',
                    'Balloon',
                    'Masking tape',
                    'Glue',
                    'Scissors',
                ],
                body: ['No additional materials may be brought or used.'],
            },
            {
                title: 'Competition Guidelines',
                items: [
                    'Only one team may participate from each school.',
                    'Only provided materials may be used.',
                    'Instruments must be built during the competition.',
                    'Teams may build one or more instruments.',
                    'Every instrument must produce audible sound.',
                    'Teams should experiment, test, and refine their designs.',
                    'At least four different materials from the kit must be used.',
                    'All team members must participate.',
                    'Safety must be maintained throughout the activity.',
                    'Laptops, tablets, mobile phones, and AI are not required.',
                    "The judges' decision will be final.",
                ],
            },
            {
                title: 'Final Presentation',
                body: ['Teams receive 3 minutes to present and perform, followed by 2 minutes of questions.'],
                items: [
                    'Introduce the team and instrument or instruments.',
                    'Explain the inspiration.',
                    'Explain how the instrument produces sound.',
                    'Share key design challenges.',
                    'Describe improvements made during testing and refinement.',
                    'Perform a short musical piece demonstrating functionality.',
                ],
            },
            {
                title: 'Judging Criteria',
                rows: [
                    ['Creativity & Originality', '20'],
                    ['Functionality & Sound Quality', '20'],
                    ['Engineering & Craftsmanship', '20'],
                    ['Design Process & Problem Solving', '20'],
                    ['Presentation', '20'],
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
};

const scrollState = {
    ticking: false,
    philosophy: null,
    timeline: null,
    modalY: 0,
    chapterTriggerReady: false,
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function scheduleScrollWork() {
    if (scrollState.ticking) return;
    scrollState.ticking = true;
    requestAnimationFrame(() => {
        updateProgress();
        if (!scrollState.chapterTriggerReady) updateChapter();
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
        lastIndex: section ? Number(section.dataset.timelineIndex) : -1,
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
    const tickers = [];
    document.querySelectorAll('.ticker').forEach((ticker) => {
        if (ticker.dataset.loopReady) return;
        ticker.dataset.loopReady = 'true';
        const content = ticker.innerHTML;
        ticker.innerHTML = content;
        const singleWidth = ticker.scrollWidth;
        const copies = Math.max(4, Math.ceil((window.innerWidth * 2.5) / Math.max(1, singleWidth)) + 2);
        ticker.innerHTML = Array.from({ length: copies }, () => content).join('');
        tickers.push({
            el: ticker,
            width: singleWidth,
            speed: ticker.classList.contains('ticker-reverse') ? -42 : 52,
            offset: 0,
            visible: true,
        });
    });

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const item = tickers.find((ticker) => ticker.el === entry.target);
            if (item) item.visible = entry.isIntersecting;
        });
    });
    tickers.forEach((ticker) => io.observe(ticker.el));

    let last = performance.now();
    function frame(now) {
        const delta = Math.min(64, now - last) / 1000;
        last = now;
        tickers.forEach((ticker) => {
            if (!ticker.visible || !ticker.width) return;
            ticker.offset = (ticker.offset + ticker.speed * delta) % ticker.width;
            if (ticker.offset < 0) ticker.offset += ticker.width;
            ticker.el.style.transform = `translate3d(${-ticker.offset}px, 0, 0)`;
        });
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
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
        2: 'fa-camera',
        3: 'fa-microchip',
        4: 'fa-guitar',
        7: 'fa-eye',
    };
    const colors = {
        1: '#ffd166',
        2: '#ff8fab',
        3: '#f7f7ff',
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

const HYBRID_SUBMISSION_URL = 'https://forms.gle/e1m3BiYGebj7fLx77';

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
        ${
            group.mode === 'Hybrid'
                ? `<a class="event-group-link" href="${HYBRID_SUBMISSION_URL}" target="_blank" rel="noreferrer"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i> Submit hybrid entry</a>`
                : ''
        }
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

function renderModalSection(section) {
    const body = section.body ? section.body.map((paragraph) => `<p>${paragraph}</p>`).join('') : '';
    const isScored = section.rows && /judging/i.test(section.title);
    const rows =
        section.rows && !isScored
            ? `
    <div class="modal-table">
      ${section.rows
          .map(
              ([key, value]) => `
        <div>
          <span>${key}</span>
          <strong>${value}</strong>
        </div>
      `,
          )
          .join('')}
    </div>
  `
            : '';
    const scoreTotal = isScored ? section.rows.reduce((sum, [, value]) => sum + Number(value), 0) : 0;
    const scores = isScored
        ? `
    <div class="score-panel">
      <div class="score-summary">
        <span>${scoreTotal} points</span>
      </div>
      <div class="score-list">
        ${section.rows
            .map(([key, value]) => {
                const score = Number(value);
                const pct = scoreTotal > 0 ? (score / scoreTotal) * 100 : 0;
                return `
            <div class="score-row" style="--score-width:${pct}%">
              <div>
                <span>${key}</span>
                <strong>${score}</strong>
              </div>
              <i aria-hidden="true"></i>
            </div>
          `;
            })
            .join('')}
      </div>
    </div>
  `
        : '';
    const items = section.items ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : '';
    const groups = section.groups
        ? section.groups
              .map(
                  ([title, groupItems]) => `
    <div class="modal-group">
      <h4>${title}</h4>
      <ul>${groupItems.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
  `,
              )
              .join('')
        : '';

    return `
    <section class="modal-section">
      <h3>${section.title}</h3>
      ${body}
      ${rows}
      ${scores}
      ${items}
      ${groups}
    </section>
  `;
}

function escapeModalHtml(value) {
    return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderModalInline(value) {
    return escapeModalHtml(value)
        .replace(/\\([\\`*_{}\[\]()<>#+.!&-])/g, '$1')
        .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
        .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function normalizeModalText(value) {
    return value
        .replace(/^#+\s+/, '')
        .replace(/\\([\\`*_{}\[\]()<>#+.!&-])/g, '$1')
        .replace(/[*_`]/g, '')
        .replace(/^\d+\.\s+/, '')
        .replace(/\s+/g, ' ')
        .replace(/:$/, '')
        .trim()
        .toLowerCase();
}

function isEmptyLabelLine(line) {
    return /^\*{0,2}[^:*]+:\*{0,2}\s*$/.test(line.trim());
}

function shouldSkipModalLine(line, event, hasContent) {
    const normalized = normalizeModalText(line);
    if (isEmptyLabelLine(line)) return true;
    if (hasContent) return false;
    return normalized === normalizeModalText(event.name) || normalized === normalizeModalText(event.tag);
}

function isStandaloneHeadingLine(line) {
    return /^\s*\*\*([^:*]+?)\*\*\s*$/.test(line);
}

function getPlainModalText(value) {
    return renderModalInline(value)
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, ' ')
        .trim();
}

function isModalSectionHeading(value) {
    const text = getPlainModalText(value).replace(/^\s*#+\s*/, '').trim();
    const textWithoutNumber = text
        .replace(/^\s*#+\s*/, '')
        .replace(/^\s*\d+\\?\.\s*/, (match) => match.replace('\\', ''))
        .trim();
    const lower = textWithoutNumber.toLowerCase();
    return (
        /^\d+\\?\.\s+\S/.test(text) ||
        /^[a-z]\)\s+\S/i.test(text) ||
        /^[a-z]\.\s+\S/i.test(text) ||
        /^(preliminary round|final round|sample challenge statements|required files|presentation specifications|ai development platforms|design tools|competition guidelines)$/i.test(lower)
    );
}

function renderModalHeading(value, level = 4) {
    const plain = getPlainModalText(value);
    const tag = level === 3 ? 'h3' : 'h4';
    const className = level === 3 ? 'brief-heading' : 'brief-subheading';
    return `<${tag} class="${className}">${escapeModalHtml(plain)}</${tag}>`;
}

function getModalHeadingLevel(value) {
    return /^\s*(?:#+\s*)?(?:\*\*)?\d+\\?\.\s+\S/.test(value.trim()) ? 3 : 4;
}

function renderModalMarkdown(source, event) {
    const lines = source.trim().split(/\r?\n/);
    const output = [];
    let index = 0;
    let hasContent = false;

    while (index < lines.length) {
        const line = lines[index];
        if (!line.trim()) {
            index += 1;
            continue;
        }

        if (shouldSkipModalLine(line, event, hasContent)) {
            index += 1;
            continue;
        }

        if (/^\|/.test(line)) {
            const tableLines = [];
            while (index < lines.length && /^\|/.test(lines[index])) tableLines.push(lines[index++]);
            const rows = tableLines.map((row) => row.split('|').slice(1, -1).map((cell) => cell.trim()));
            const isDivider = (row) => row.every((cell) => /^:?-{3,}:?$/.test(cell));
            const firstRowIsEventName = normalizeModalText(rows[0]?.[0] || '') === 'event name';
            const header = firstRowIsEventName ? null : rows[0];
            const body = rows
                .slice(header ? 1 : 0)
                .filter((row) => !isDivider(row))
                .filter((row) => normalizeModalText(row[0] || '') !== 'event name')
                .filter((row) => row.some((cell) => normalizeModalText(cell)));
            const tableHead = header ? `<thead><tr>${header.map((cell) => `<th>${renderModalInline(cell)}</th>`).join('')}</tr></thead>` : '';
            const tableClass = header
                ? 'modal-markdown-table brief-score-table'
                : body.every((row) => row.length === 1)
                  ? 'modal-markdown-table brief-list-table'
                  : 'modal-markdown-table brief-key-table';
            output.push(`<div class="${tableClass}"><table>${tableHead}<tbody>${body.map((row) => `<tr>${row.map((cell, cellIndex) => `<td${!header && cellIndex === 0 ? ' class="brief-table-label"' : ''}>${renderModalInline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
            hasContent = true;
            continue;
        }

        const heading = line.match(/^#{1,6}\s+(.+)$/);
        if (heading) {
            const headingText = heading[1].trim();
            if (/^(\*\*)?.+?:/.test(headingText)) {
                output.push(`<div class="modal-fact-lines brief-facts"><p>${renderModalInline(headingText)}</p></div>`);
            } else if (isModalSectionHeading(headingText)) {
                output.push(renderModalHeading(headingText, 3));
            } else {
                output.push(`<p class="modal-emphasis">${renderModalInline(headingText)}</p>`);
            }
            hasContent = true;
            index += 1;
            continue;
        }

        const standaloneHeading = line.match(/^\s*\*\*([^:*]+?)\*\*\s*$/);
        if (standaloneHeading) {
            output.push(
                isModalSectionHeading(standaloneHeading[1])
                    ? renderModalHeading(standaloneHeading[1], getModalHeadingLevel(standaloneHeading[1]))
                    : `<p class="modal-emphasis">${renderModalInline(line.trim())}</p>`,
            );
            hasContent = true;
            index += 1;
            continue;
        }

        if (isModalSectionHeading(line)) {
            output.push(renderModalHeading(line, getModalHeadingLevel(line)));
            hasContent = true;
            index += 1;
            continue;
        }

        const list = line.match(/^\*\s+(.+)$/);
        const ordered = line.match(/^\d+\\?\.\s+(.+)$/);
        if (list || ordered) {
            const tag = ordered ? 'ol' : 'ul';
            const items = [];
            while (index < lines.length) {
                const match = tag === 'ol' ? lines[index].match(/^\d+\\?\.\s+(.+)$/) : lines[index].match(/^\*\s+(.+)$/);
                if (!match) break;
                items.push(`<li>${renderModalInline(match[1])}</li>`);
                index += 1;
            }
            output.push(`<${tag}>${items.join('')}</${tag}>`);
            hasContent = true;
            continue;
        }

        const paragraph = [];
        while (
            index < lines.length &&
            lines[index].trim() &&
            !/^\||^#{1,6}\s+|^\*\s+|^\d+\\?\.\s+/.test(lines[index]) &&
            !isStandaloneHeadingLine(lines[index])
        ) {
            const currentLine = lines[index].trim();
            if (!shouldSkipModalLine(currentLine, event, hasContent)) paragraph.push(currentLine);
            index += 1;
        }
        if (paragraph.length) {
            const factLines = paragraph.every((item) => /^(\*\*)?.+?:/.test(item));
            const rendered = paragraph.map((item) => renderModalInline(item)).join(factLines ? '' : '<br>');
            output.push(factLines ? `<div class="modal-fact-lines brief-facts">${paragraph.map((item) => `<p>${renderModalInline(item)}</p>`).join('')}</div>` : `<p>${rendered}</p>`);
            hasContent = true;
        }
    }

    return `<section class="modal-section modal-source">${output.join('')}</section>`;
}

function getModalSource(eventNumber) {
    const markers = {
        '01': ['### **INNOVATEX CHALLENGE**', '### **2\\. AI for Good Lab**'],
        '02': ['# **Through the Lens**', '### **4\\. SoundCraft Challenge**'],
        '03': ['### **2\\. AI for Good Lab**', '# **Through the Lens**'],
        '04': ['### **4\\. SoundCraft Challenge**'],
    };
    const [startMarker, endMarker] = markers[eventNumber];
    const start = modalEventSource.indexOf(startMarker);
    const end = endMarker ? modalEventSource.indexOf(endMarker) : modalEventSource.length;
    return modalEventSource.slice(start, end === -1 ? modalEventSource.length : end);
}

function openModal(event) {
    if (!event) return;
    event = modalEvents.find((modalEvent) => modalEvent.no === event.no) || event;
    const dialog = document.getElementById('event-modal');
    scrollState.modalY = window.scrollY;
    dialog.querySelector('.modal-visual').dataset.seed = Number(event.no);
    dialog.querySelector('.modal-visual').dataset.mode = event.mode;
    const source = getModalSource(event.no);
    document.getElementById('modal-meta').hidden = true;
    document.getElementById('modal-title').textContent = event.name;
    document.getElementById('modal-tag').textContent = event.tag;
    document.getElementById('modal-long').hidden = true;
    document.getElementById('modal-details').hidden = true;
    document.getElementById('modal-rules').hidden = true;
    const hybridSubmission =
        event.mode === 'Hybrid'
            ? `<aside class="modal-submission-callout"><span>Hybrid submission</span><a href="${HYBRID_SUBMISSION_URL}" target="_blank" rel="noreferrer">Submit entry <i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i></a></aside>`
            : '';
    document.getElementById('modal-sections').innerHTML = `${hybridSubmission}${renderModalMarkdown(source, event)}`;
    const modalBody = dialog.querySelector('.modal-body');
    modalBody.scrollTop = 0;
    renderGlyphs();
    dialog.showModal();
    requestAnimationFrame(() => {
        modalBody.scrollTop = 0;
    });
    document.body.style.top = `-${scrollState.modalY}px`;
    document.body.classList.add('modal-open');
}

function setupModal() {
    const dialog = document.getElementById('event-modal');
    dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo({ top: scrollState.modalY, left: 0, behavior: 'auto' });
    });
}

function updateChapter() {
    const section = document.querySelector('.philosophy');
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (window.scrollY < top - 2) chapterLock.progress = 0;
    if (window.scrollY > bottom - 2) {
        chapterLock.progress = 1;
        chapterLock.active = false;
    }
    if (
        chapterLock.active &&
        chapterLock.progress > 0 &&
        chapterLock.progress < 1 &&
        Math.abs(window.scrollY - top) > 2
    ) {
        window.scrollTo({ top, left: 0, behavior: 'auto' });
    }
    setChapterProgress(chapterLock.progress);
}

let lastChapterIndex = -1;
let lastChapterLocalKey = '';

function setChapterProgress(progress) {
    chapterLock.progress = Math.min(1, Math.max(0, progress));
    const progressValue = Math.min(0.999, chapterLock.progress);
    const section = document.querySelector('.philosophy');
    const scaled = Math.min(0.999, Math.max(0, progressValue));
    const index = Math.min(chapters.length - 1, Math.floor(scaled * chapters.length));
    const local = scaled * chapters.length - index;
    if (Number(section.dataset.chapterIndex) !== index) {
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
    }
    document.querySelectorAll('.chapter-rail b').forEach((bar, i) => {
        bar.classList.toggle('complete', i < index);
        bar.classList.toggle('active', i === index);
        bar.style.setProperty(
            '--rail-progress',
            i < index ? '100%' : i === index ? `${Math.max(8, local * 100)}%` : '0%',
        );
    });
    document.querySelector('.story-glow').style.setProperty('--story-glow-x', `${8 - progressValue * 32}%`);
    document.getElementById('chapter-number').style.setProperty('--chapter-number-x', `${(local - 0.5) * -36}px`);
    const field = section.querySelector('.geo-field');
    if (field) field.style.setProperty('--geo-y', `${-progressValue * 12}%`);
}

function handleChapterDelta(deltaY) {
    const section = document.querySelector('.philosophy');
    if (!section) return false;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const y = window.scrollY;
    const predictedY = y + deltaY;
    const nearTop = Math.abs(y - top) < 4;
    const crossingFromAbove = deltaY > 0 && y < top && predictedY >= top;
    const crossingFromBelow = deltaY < 0 && y > top && predictedY <= top;
    const enteringFromAbove = deltaY > 0 && (crossingFromAbove || (y >= top - 4 && y < bottom));
    const enteringFromBelow = deltaY < 0 && (crossingFromBelow || (y <= bottom + 4 && y > top));
    const insideLock =
        nearTop && ((deltaY > 0 && chapterLock.progress < 1) || (deltaY < 0 && chapterLock.progress > 0));

    if (!enteringFromAbove && !enteringFromBelow && !insideLock) return false;
    if (deltaY > 0 && chapterLock.progress >= 1) return false;
    if (deltaY < 0 && chapterLock.progress <= 0 && nearTop) return false;

    if (crossingFromAbove) chapterLock.progress = 0;
    if (enteringFromBelow && chapterLock.progress <= 0.02) chapterLock.progress = 1;
    chapterLock.active = true;
    window.scrollTo({ top, left: 0, behavior: 'auto' });
    const step = Math.sign(deltaY) * Math.min(Math.abs(deltaY) / 1500, 0.105);
    setChapterProgress(chapterLock.progress + step);
    if (chapterLock.progress <= 0 || chapterLock.progress >= 1) {
        chapterLock.active = false;
    }
    return true;
}

function setupChapterScrollLock() {
    window.addEventListener(
        'wheel',
        (event) => {
            if (handleChapterDelta(event.deltaY)) event.preventDefault();
        },
        { passive: false, capture: true },
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
            if (Math.abs(deltaY) > 2 && handleChapterDelta(deltaY * 2.4)) event.preventDefault();
        },
        { passive: false, capture: true },
    );
}

function setupChapterScrollTrigger() {
    const section = document.querySelector('.philosophy');
    const stage = document.querySelector('.philosophy-stage');
    if (!section || !stage || prefersReducedMotion) {
        setChapterProgress(0);
        return;
    }

    if (!window.gsap || !window.ScrollTrigger) {
        setupChapterScrollLock();
        setChapterProgress(0);
        return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    scrollState.chapterTriggerReady = true;

    window.ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(window.innerHeight * 5.5, stage.offsetHeight * 4.5)}`,
        pin: stage,
        pinSpacing: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
            snapTo: 1 / chapters.length,
            duration: { min: 0.18, max: 0.42 },
            delay: 0.04,
            ease: 'power2.out',
        },
        onUpdate: (self) => {
            setChapterProgress(self.progress);
        },
        onRefresh: (self) => {
            setChapterProgress(self.progress);
        },
    });

    setChapterProgress(0);
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

function updateTimelineProgress() {
    const cache = getTimelineCache();
    if (!cache) return;

    const { section, list, copy, milestones } = cache;
    if (!milestones.length) return;

    const viewport = window.innerHeight;
    const listRect = list.getBoundingClientRect();
    const start = viewport * 0.72;
    const end = viewport * 0.28;
    const progress = Math.min(1, Math.max(0, (start - listRect.top) / Math.max(1, listRect.height - (start - end))));
    list.style.setProperty('--timeline-progress', `${progress * 100}%`);

    if (!copy) return;

    const itemRects = milestones.map((item) => item.getBoundingClientRect());
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const dotOffset = rootFontSize * 2.15;
    let activeIndex = -1;

    itemRects.forEach((itemRect, index) => {
        const dotY = itemRect.top - listRect.top + dotOffset;
        if (listRect.height * progress >= dotY) activeIndex = index;
    });

    if (activeIndex !== cache.lastIndex) {
        cache.lastIndex = activeIndex;
        milestones.forEach((item, index) => {
            item.classList.toggle('is-active', index === activeIndex);
            item.classList.toggle('is-complete', index < activeIndex);
        });
        if (section) section.dataset.timelineIndex = String(activeIndex);
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
    setupChapterScrollTrigger();
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
