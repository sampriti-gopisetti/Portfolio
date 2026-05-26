export const projects = [
  {
    slug: 'roleready',
    title: 'RoleReady',
    image: 'images/project-RoleReady.png',
    summary:
      'Built an AI onboarding platform that turns code, docs, tickets, and internal content into role-specific learning assets.',
    highlights: [
      'Searchable knowledge base powered by RAG and PGVector',
      'Generates summaries, mind maps, infographics, and audio walkthroughs',
      'FastAPI and Supabase backend for structured training content',
    ],
    description:
      'Built an AI-powered onboarding and training platform that transforms organizational knowledge from code, docs, tickets, and internal content into searchable, role-specific learning assets. The system uses FastAPI, Supabase with PGVector, and model-driven generation to create structured summaries, mind maps, infographics, and audio walkthroughs, helping teams preserve institutional knowledge and accelerate new-hire productivity.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'PGVector', 'Angular', 'TypeScript', 'Tailwind', 'Gemini', 'Ollama'],
    repo: 'https://github.com/sampriti-gopisetti/RoleReady',
    demo: undefined,
  },
  {
    slug: 'event-search',
    title: 'Event Search',
    image: 'images/project-event-search.png',
    summary:
      'Built a cross-platform event discovery suite for web and Android with shared API integrations and synced user favorites.',
    highlights: [
      'React and Kotlin apps connected to Ticketmaster, Spotify, and geocoding APIs',
      'State management with React Query and State Flow',
      'MongoDB and Data Store backed favorite synchronization',
    ],
    description:
      'Constructed a cross-platform discovery suite featuring a React/TypeScript web app and a Kotlin/Jetpack Compose Android app, integrating Ticketmaster, Spotify, and GCP Geocoding APIs. Developed robust state management (React Query/State Flow) and persistent storage (MongoDB/Data Store) to sync user favorites, achieving a 90% satisfaction rate across 20+ peer evaluations.',
    stack: ['React', 'TypeScript', 'Kotlin', 'MongoDB', 'Android Studio'],
    repo: 'https://github.com/sampriti-gopisetti/Event-Search-Hub',
    demo: undefined,
  },
  {
    slug: 'promptquest',
    title: 'PromptQuest',
    image: 'images/project-promptquest.png',
    summary:
      'Created a gamified prompt-engineering trainer that scores input quality and guides users through progressively harder challenges.',
    highlights: [
      'Gemini-powered scoring and feedback loop',
      'Detects vague prompts and improves context quality',
      '10+ levels of increasing difficulty',
    ],
    description:
      'Spearheaded a full-stack gamified progression system to train users in prompt engineering, utilizing Generative AI (Gemini) to evaluate user inputs against a custom quality-scoring algorithm. Launched an automated feedback loop that detects vague inputs and optimizes context windows, successfully gamifying the prompt optimization process for over 10 levels of increasing difficulty.',
    stack: ['TypeScript', 'Tailwind', 'Generative AI (Gemini)'],
    repo: 'https://github.com/sampriti-gopisetti/PromptQuest',
    demo: undefined,
  },
  {
    slug: 'isl-interpreter',
    title: 'Indian Sign Language (ISL) Interpreter',
    image: 'images/project-isl-interpreter.png',
    summary:
      'Built a real-time ISL recognition platform that combines computer vision, deep learning, and a responsive web interface.',
    highlights: [
      'TensorFlow/Keras CNN-LSTM model with 92.8% accuracy',
      'MediaPipe and OpenCV hand tracking pipeline',
      'Springer-published and Best Project award recognition',
    ],
    description:
      "Led the design of a TensorFlow/Keras CNN-LSTM for real-time ISL recognition, leveraging MediaPipe and OpenCV for hand tracking and achieving 92.8% accuracy (published by Springer). Architected a full-stack ISL platform with a Flask backend serving the AI model and a JavaScript frontend handling real-time video translation across 10+ interactive modules. This project was recognized with the 'Best Project' award for its innovation and impact.",
    stack: ['TensorFlow', 'Keras', 'Flask', 'OpenCV'],
    paper: true,
    repo: 'https://github.com/sampriti-gopisetti/Indian-Sign-Language-Interpreter-Tutor',
    demo: undefined,
  },
  {
    slug: 'automail-ai',
    title: 'Automail AI',
    image: 'images/project-voice-email.png',
    summary:
      'Engineered a voice-command email assistant that classifies spoken instructions and sends messages through a guided workflow.',
    highlights: [
      'Naive Bayes classifier improved accuracy by 25%',
      'Django backend integrated with SMTP and audio feedback',
      'IEEE-published voice-to-email project',
    ],
    description:
      'Engineered and optimized a Naive Bayes classifier for a voice-command email system, improving model accuracy by 25% and cutting training time by 30% through data analysis with Pandas and Scikit-learn (published by IEEE). Developed a full-stack voice-to-email application, architecting a Django backend to integrate the ML model and utilize Python\'s SMTP library for sending emails, and a JavaScript frontend for voice command capture and audio feedback via gTTS.',
    stack: ['Django', 'Python', 'Naive Bayes'],
    paper: true,
    repo: 'https://github.com/sampriti-gopisetti/Automated-Voice-Email-Generator',
    demo: undefined,
  },
  {
    slug: 'anpr',
    title: 'Vehicle Number Plate Detection',
    image: 'images/project-anpr.jpg',
    summary:
      'Built a number plate OCR pipeline that combines custom computer vision models with a full-stack API workflow.',
    highlights: [
      'Boosted Pytesseract accuracy to 82%',
      'Keras and OpenCV recognition pipeline',
      'IEEE-published and Smart India Hackathon recognized',
    ],
    description:
      'Spearheaded a number plate OCR pipeline, boosting Pytesseract\'s accuracy to 82% on 1,000+ vehicles with a custom Keras model, earning recognition at the Smart India Hackathon (publication by IEEE). Launched a full-stack recognition application, creating a PHP backend on an Apache server to expose the Python computer vision system via an API and to visualize model performance graphs generated with Matplotlib.',
    stack: ['Python', 'Keras', 'OpenCV', 'PHP'],
    paper: true,
    repo: 'https://github.com/sampriti-gopisetti/Automated-Number-Plate-Detection',
    demo: undefined,
  },
  {
    slug: 'ecommerce',
    title: 'eCommerce Website',
    image: 'images/project-ecommerce.jpg',
    summary:
      'Designed and launched a clean eCommerce experience with account flows, product pages, and a simple full-stack backend.',
    highlights: [
      'React front end with MySQL and XAMPP backend',
      'Secure sign-up, login, home, and product pages',
      'Improved user engagement by 30%',
    ],
    description:
      'Architected and launched a robust eCommerce website from the ground up, utilizing React for a dynamic front-end and MySQL with XAMPP for the back-end. I developed essential functionalities, including secure user sign-up and login, a home page, and individual product pages. By focusing on a clean and user-friendly UI/UX design, I achieved a 30% boost in user engagement.',
    stack: ['React', 'MySQL', 'XAMPP'],
    repo: 'https://github.com/sampriti-gopisetti/Ecommerce-Website',
    demo: undefined,
  },
  {
    slug: 'age-gender',
    title: 'Age and Gender Detection',
    image: 'images/project-age-gender.png',
    summary:
      'Built a real-time age and gender detection system using a convolutional model and live facial analysis.',
    highlights: [
      '85% classification accuracy',
      'CNN trained with Keras, Dlib, and OpenCV',
      'Dynamic content based on live facial analysis',
    ],
    description:
      'Spearheaded the development of a real-time age and gender identification system, achieving 85% classification accuracy. I trained a Convolutional Neural Network (CNN) using Keras, Dlib, and OpenCV on a classified Kaggle dataset, enabling the final program to deliver dynamic and targeted content based on live facial analysis.',
    stack: ['Keras', 'OpenCV', 'Dlib'],
    repo: 'https://github.com/sampriti-gopisetti/Age-Gender-Detection',
    demo: undefined,
  },
  {
    slug: 'stock-valuation',
    title: 'Stock Valuation',
    image: 'images/project-stock-valuation.png',
    summary:
      'Created a portfolio management platform with predictive analytics for future asset performance and visual decision support.',
    highlights: [
      'Linear regression-based forecasting module',
      'Python and SQLite backend with responsive frontend',
      'Validated 90% trend prediction accuracy',
    ],
    description:
      'Created a comprehensive, full-stack portfolio management platform by developing a robust backend with Python and SQLite, and a responsive frontend using HTML, CSS, and JavaScript. The application\'s core feature is an integrated predictive analytics module that leverages linear regression algorithms to forecast future asset performance based on historical data. This system provides users with actionable insights through real-time data analysis and dynamic visualizations, empowering strategic investment planning with a validated trend prediction accuracy rate of 90%.',
    stack: ['Python', 'SQLite', 'Regression'],
    repo: 'https://github.com/sampriti-gopisetti/Stock-Prediction',
    demo: undefined,
  },
  {
    slug: 'restaurant-reservation',
    title: 'Restaurant Reservation System',
    image: 'images/project-restaurant.png',
    summary:
      'Built a full-stack reservation platform that simplifies booking with a clean customer-first interface.',
    highlights: [
      'Java and SQL backend with a streamlined booking flow',
      'Intuitive frontend focused on user experience',
      'Reduced reservation time by 40%',
    ],
    description:
      'Designed and launched a full-stack restaurant reservation platform, developing a robust backend with Java and SQL and a highly intuitive, easy-to-navigate frontend using HTML, CSS, and JavaScript. The project emphasized a clean and user-centric design, creating a seamless workflow that simplified the booking process for customers. This commitment to a superior user experience directly resulted in a 40% reduction in the average time required to secure a reservation.',
    stack: ['Java', 'SQL', 'JS', 'HTML', 'CSS'],
    repo: 'https://github.com/sampriti-gopisetti/Restaurant-Reservation-System',
    demo: undefined,
  },
]

export const experience = [
  {
    company: 'Synamedia',
    role: 'Associate Software Engineer Intern',
    period: '—',
    logo: 'images/logo-synamedia.png',
    summary:
      'Improved diagnostics and reporting workflows by automating backtrace analysis and operational reporting.',
    highlights: [
      'Cut bug identification time from 2–3 hours to under 10 minutes',
      'Isolated network issues through backend log analysis with zero defects',
      'Automated daily customer reports for faster data-driven decisions',
    ],
    description:
      'Drove critical improvements in system diagnostics and operational efficiency through targeted automation and analysis. Engineered a backtrace automation tool that reduced bug identification from 2–3 hours to under 10 minutes, boosting team efficiency by 90%. Investigated complex network issues via backend log analysis, isolating root causes and validating system integrity with zero defects. Additionally, automated daily operational reports, transforming raw customer data into actionable insights for faster, data-driven decisions.',
  },
  {
    company: 'Technodysis',
    role: 'RPA Intern',
    period: '—',
    logo: 'images/logo-technodysis.png',
    summary:
      'Built automation bots for banking reconciliation workflows and reduced manual processing overhead.',
    highlights: [
      'Deployed 10+ bots for EcoCash banking reconciliation workflows',
      'Cut processing time by 95%',
      'Reduced task completion time to under four minutes',
    ],
    description:
      'Engineered a transformative balance checking and reconciliation solution for the African banking sector, which was successfully integrated into a live project with major partner EcoCash. By architecting and deploying over 10 automation bots in collaboration with key stakeholders, I spearheaded the automation of previously manual workloads, slashing processing time by 95%. This initiative reduced the average task completion time to under four minutes, significantly enhancing transactional accuracy, reliability, and overall operational efficiency.',
  },
  {
    company: 'Lost Stories',
    role: 'AI Intern',
    period: '—',
    logo: 'images/logo-loststories.jpg',
    summary:
      'Improved a podcasting platform with semantic search and personalized recommendations.',
    highlights: [
      'Designed NLP-driven semantic search',
      'Built a recommendation engine for historical stories',
      'Made the content library more accessible and engaging',
    ],
    description:
      'Enhanced a digital podcasting platform dedicated to preserving historical narratives by leveraging Natural Language Processing and machine learning to engineer end-to-end AI solutions. Designed and implemented core features, including an intuitive semantic search function and a personalized content recommendation engine, to optimize the user experience and make a vast library of traditional stories more accessible and engaging for a modern audience.',
  },
  {
    company: 'Salesforce',
    role: 'Intern',
    period: '—',
    logo: 'images/logo-salesforce.png',
    summary:
      'Strengthened Salesforce operations with setup optimization and security reporting dashboards.',
    highlights: [
      'Improved data management efficiency by 30%',
      'Reduced incident response times by 50%',
      'Launched comprehensive security reports and dashboards',
    ],
    description:
      'Enhanced Salesforce organizational efficiency by configuring setups and optimizing cloud performance, resulting in a 30% improvement in data management. A key achievement was the development and launch of comprehensive security reports and dashboards, which increased data visibility and critically reduced incident response times by 50%, bolstering the overall security framework.',
  },
  {
    company: 'Contriver',
    role: 'Full Stack with ML & AI Intern',
    period: '—',
    logo: 'images/logo-contriver.jpeg',
    summary:
      'Built computer vision models and responsive interfaces with a strong focus on accuracy and UX.',
    highlights: [
      'Developed recognition systems reaching up to 98% accuracy',
      'Used Python, TensorFlow, and Keras for model development',
      'Recognized as Best Intern for impactful contributions',
    ],
    description:
      'Engineered high-accuracy computer vision models and responsive web interfaces. Utilized Python, TensorFlow, and Keras to build recognition systems that achieved up to 98% accuracy, while also leveraging WordPress to create intuitive front-ends focused on an optimal user experience. In recognition of these impactful contributions, I was awarded the title of Best Intern.',
  },
  {
    company: 'BNM Institute of Technology',
    role: 'Intern',
    period: '—',
    logo: 'images/BNMIT.png',
    summary:
      'Developed graphics and systems projects that combined interactive design with dependable application logic.',
    highlights: [
      'Built a Hangman game with OpenGL and Canva',
      'Created a stadium management system with seat allocation',
      'Implemented a secure Java bank management system',
    ],
    description:
      'Developed a diverse portfolio of software applications, showcasing versatility in both graphics and system architecture. Engineered an interactive Hangman game using OpenGL and Canva, focusing on enhancing the user experience through dynamic graphics. Additionally, applied object-oriented principles in Java to build complex systems, including a stadium management application with an efficient seat allocation module and a robust bank management system designed for high reliability and secure data handling.',
  },
]

export const skills = [
  'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS',
  'React', 'Angular', 'Node.js', 'Django', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Supabase', 'PGVector',
  'AWS', 'Azure', 'Docker', 'GitHub Actions', 'Linux', 'CI/CD',
  'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face',
  'Gemini AI', 'LLM APIs', 'RAG', 'Vector Embeddings', 'LangChain',
  'OpenCV', 'MediaPipe', 'Pytesseract', 'GANs',
  'FastAPI', 'Flask', 'REST APIs', 'JWT Authentication',
  'Git', 'Playwright', 'Jira', 'Power BI', 'Power Automate',
]

export const skillsByCategory = {
  languages: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  frameworks: ['React', 'Angular', 'Node.js', 'Django', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MongoDB', 'Supabase', 'PGVector'],
  cloud_devops: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Linux', 'CI/CD'],
  ml_frameworks: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face'],
  gen_ai_nlp: ['Gemini AI', 'LLM APIs', 'RAG', 'Vector Embeddings', 'LangChain'],
  computer_vision: ['OpenCV', 'MediaPipe', 'Pytesseract', 'GANs'],
  mlops_backend: ['FastAPI', 'Flask', 'REST APIs', 'JWT Authentication'],
  tools_technologies: ['Git', 'Playwright', 'Jira', 'Power BI', 'Power Automate'],
}

export const contact = {
  fullName: 'Sampriti Gopisetti',
  emails: ['sampriti@usc.edu', 'sampriti.gopisetti@gmail.com'],
  phone: '213-774-8828',
  social: {
    linkedin: 'https://www.linkedin.com/in/sampritigopisetti25/',
    github: 'https://github.com/sampriti-gopisetti',
    resumeSWE: 'files/Sampriti_Gopisetti_SWE.pdf',
    resumeAIML: 'files/Sampriti_Gopisetti_AIML.pdf',
  }
}

export const certifications = [
  {
    title: 'Computer Vision, NPTEL',
    text: 'I advanced my knowledge and practical skills in computer vision, including image processing, object detection, and visual recognition, with demonstrated proficiency through top exam performance.',
    image: 'images/Computer Vision.png',
  },
  {
    title: 'Leadership course, Harvard',
    text: 'I developed advanced leadership and interpersonal skills through a prestigious series of courses, achieving results that distinguished me from my peers.',
    image: 'images/Harvard.png',
  },
  {
    title: 'Microsoft Azure, Microsoft',
    text: 'I gained comprehensive knowledge and hands-on experience in Microsoft Azure, developing practical skills in deploying, managing, and implementing cloud services and solutions.',
    image: 'images/Microsoft.png',
  },
  {
    title: 'AI Fundamentals, IBM',
    text: 'I acquired foundational knowledge and practical skills in artificial intelligence, including machine learning algorithms and data analysis.',
    image: 'images/AI-IBM.png',
  },
  {
    title: 'Web Development Fundamentals, IBM',
    text: 'I built a strong foundation in web development, gaining knowledge of core web technologies and design principles.',
    image: 'images/Web-IBM.png',
  },
  {
    title: 'MongoDB, Appteknow Careers',
    text: 'I gained practical knowledge and skills in MongoDB, focusing on NoSQL database design, implementation, and optimization.',
    image: 'images/MongoDB.png',
  },
  {
    title: 'AWS, BrainOVision',
    text: 'I attained hands-on experience in cloud deployment on AWS, including EC2 and S3 integration, and built a functional project while achieving a top 10% finish in a hackathon.',
    image: 'images/AWS.png',
  },
  {
    title: 'RPA, Automation Anywhere',
    text: 'I gained proficiency in Robotic Process Automation (RPA), with skills in designing, implementing, and managing automated workflows to enhance business process efficiency.',
    image: 'images/RPA.png',
  },
  {
    title: 'Visual Graphics in C, Great Learning',
    text: 'I acquired expertise in visual graphics programming with OpenGL and related technologies, applying it to create innovative graphical applications.',
    image: 'images/Visual Graphics.png',
  },
  {
    title: 'Salesforce Administrator, Salesforce',
    text: 'Learned to efficiently manage and optimize Salesforce systems, enhancing data visibility, security monitoring, and organizational efficiency.',
    image: 'images/Salesforce.png',
  },
  {
    title: 'Multimedia, BNMIT',
    text: 'Gained expertise in multimedia content creation, including video editing, graphic design, and animation techniques in C, OpenGL and Canva.',
    image: 'images/Multimedia.png',
  },
  {
    title: 'Super 60, BNMIT',
    text: 'Recognized among the top 60 students for academic excellence and campus contributions, while developing skills like extempore speaking and presentations.',
    image: 'images/Super 60.png',
  },
]

export const leadership = [
    {
    title: 'GoodVibesOnly Hackathon — Vercel Award',
    text: 'Won first prize under the Vercel Award category for PromptQuest.',
    image: 'images/GoodVibesOnly.png',
  },
  {
    title: 'Gold Medalist',
    text: 'Awarded 2 Gold Medals as Computer Science branch topper at BNM Institute of Technology.',
    image: 'images/Topper.jpg',
  },
  {
    title: 'Bharatanatyam',
    text: 'Learnt Bharatanatyam for six years, successfully completing the Junior level certification.',
    image: 'images/Bharatanatyam.jpg',
  },
  {
    title: 'IBM EcoEquify Finalist',
    text: 'Top 50 finalists among 282 teams (national hackathon).',
    image: 'images/IBM.png',
  },
  {
    title: 'Sponsorship and Organizer, TATVA',
    text: 'Served on the sponsorship committee and organized the photobooth, successfully raising significant funds for the fest.',
    image: 'images/Tatva.jpg',
  },
  {
    title: 'Merit Scholarship',
    text: 'Merit-based scholarship for 5 out of 8 semesters.',
    image: 'images/Scholarship.png',
  },
  {
    title: 'NSS Volunteer',
    text: 'Actively participated in diverse community service initiatives with the National Service Scheme, including teaching children, cleaning streets, and planting trees.',
    image: 'images/NSS.jpg',
  },
  {
    title: 'Best Intern',
    text: 'Awarded Best Intern for outstanding performance during Contriver internship program.',
    image: 'images/Best Intern.jpg',
  },
  {
    title: 'Open Day',
    text: 'Organized and participated in BNMIT’s Open Day, showcasing my project to industry professionals and students, while engaging visitors and facilitating interactive demonstrations.',
    image: 'images/Open day.png',
  },
  {
    title: 'Best Project',
    text: 'Awarded Best Project for outstanding innovation and execution during the final year project showcase.',
    image: 'images/Best Project.png',
  },
  {
    title: 'Blood Donation',
    text: 'Actively participated in blood donation drives, contributing to community health and awareness.',
    image: 'images/Blood donation.png',
  },
]
