export const siteConfig = {
  name: "Parikshit kaushal",
  headline: "Software Engineer & Product Builder",
  pitch: "I build high-quality, scalable, and user-friendly web applications that solve real-world problems and drive business growth.",
  headshotUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/128x128/0D0D0D/BEF264?text=PK",
  email: "parikshitkaushal0712@gmail.com",
  calendlyUrl: "https://calendly.com/your-link",
  socialLinks: {
    github: "https://github.com/Parikshit127",
    linkedin: "https://linkedin.com/in/parikshit-kaushal-86a17a283/",
    twitter: "https://twitter.com/your-profile",
  },
  bio: "I'm a software engineer who loves turning complex problems into simple, beautiful, and intuitive designs. I specialize in full-stack development with a strong focus on user experience and product impact. For me, it's not just about writing code—it's about building products that people love to use.",
  
  timeline: [
    {
      date: "2021 - Present",
      title: "Full-Stack Engineer",
      subtitle: "Tech Solutions Inc.",
      description: "Led the development of a new SaaS platform from scratch, resulting in a 40% increase in user engagement. Implemented a scalable microservices architecture and mentored junior developers."
    },
    {
      date: "2019 - 2021",
      title: "Frontend Developer",
      subtitle: "Creative Agency",
      description: "Developed and maintained responsive websites for various clients, improving page load times by an average of 30% through performance optimization techniques."
    },
    {
      date: "2015 - 2019",
      title: "B.Sc. in Computer Science",
      subtitle: "University of Technology",
      description: "Graduated with First Class Honours. Focused on algorithms, data structures, and software engineering principles. Completed a final year project on machine learning."
    }
  ],

  values: [
    {
      icon: "Users",
      title: "User-Centric",
      description: "I prioritize the user experience above all else, ensuring every feature is intuitive, accessible, and solves a real problem."
    },
    {
      icon: "Code",
      title: "Clean Code",
      description: "I believe in writing clean, maintainable, and well-documented code that is easy for teams to collaborate on and scale."
    },
    {
      icon: "TrendingUp",
      title: "Business Impact",
      description: "I focus on delivering solutions that not only meet technical requirements but also drive measurable business outcomes and ROI."
    }
  ],

  failureStory: {
    title: "The One Where I Over-Engineered",
    story: "Early in my career, I was tasked with building a simple internal dashboard. Excited to use the latest tech, I built a complex system with micro-frontends, a message queue, and three different databases. It was a technical masterpiece, but it was slow, hard to maintain, and complete overkill. The project was eventually scrapped. That failure taught me a crucial lesson: the best solution is often the simplest one that meets the user's needs. Technology is a tool, not the goal."
  },

  services: [
    {
      title: "Starter",
      price: "₹15k - ₹50k | $200 - $700",
      description: "Perfect for individuals or early-stage startups needing a professional online presence.",
      features: [
        "Landing Page or 5-Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
      ],
      isPopular: false,
    },
    {
      title: "Growth",
      price: "₹75k - ₹3L | $1k - $4k",
      description: "Ideal for growing businesses looking to build a custom, feature-rich web application.",
      features: [
        "Custom Web Application",
        "Database Integration",
        "Admin Dashboard",
        "Third-party API Integrations",
        "Advanced SEO & Performance",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Let's Talk",
      description: "Comprehensive solutions for established businesses with complex requirements.",
      features: [
        "Scalable Architecture Design",
        "Dedicated Support & Maintenance",
        "Advanced Security Features",
        "CI/CD & DevOps Setup",
        "Team Training & Handoff",
      ],
      isPopular: false,
    }
  ],

  retainer: {
    title: "Ongoing Partnership",
    description: "For clients who need continuous development, maintenance, and strategic advice. This ensures your product evolves with your business.",
    benefits: [
      "Priority Support",
      "Dedicated Monthly Hours",
      "Proactive Maintenance & Updates",
      "Strategic Technical Consulting"
    ]
  },

  projects: [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      category: 'E-commerce', 
      summary: 'A scalable online store with real-time inventory and payment processing.', 
      imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0D0D0D/E6E6E6?text=Project+1', 
      tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'], 
      metric: '+200% Revenue', 
      liveUrl: '#', 
      repoUrl: '#',
      problem: "Local businesses struggled to move online during the pandemic due to high commission fees on existing platforms.",
      solution: "We built a multi-tenant e-commerce platform with a low, flat-rate subscription model, empowering small businesses to create their own branded storefronts with ease.",
      role: "Lead Full-Stack Engineer",
      process: [
        "Conducted user interviews with local business owners to understand their pain points.",
        "Designed and architected a scalable multi-tenant database schema.",
        "Developed the frontend storefront and admin dashboard using React and TypeScript.",
        "Integrated Stripe for secure payment processing and subscription management.",
        "Deployed the application on AWS using Docker and a CI/CD pipeline."
      ],
      deliverables: ["Fully functional e-commerce platform", "Admin dashboard for merchants", "Design system and component library"],
      galleryImages: [
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/0D0D0D/E6E6E6?text=Gallery+1',
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/0D0D0D/E6E6E6?text=Gallery+2',
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/0D0D0D/E6E6E6?text=Gallery+3'
      ]
    },
    { 
      id: 2, 
      title: 'SaaS Dashboard', 
      category: 'SaaS', 
      summary: 'Analytics dashboard for a B2B software, improving data visualization and user engagement.', 
      imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0D0D0D/E6E6E6?text=Project+2', 
      tags: ['TypeScript', 'D3.js', 'GraphQL', 'React'], 
      metric: '50% Faster Reporting', 
      liveUrl: '#', 
      repoUrl: '#',
      problem: "Users found it difficult to derive actionable insights from their data due to a cluttered and slow analytics interface.",
      solution: "I led the redesign and re-implementation of the analytics dashboard, focusing on performance and intuitive data visualization. We introduced customizable widgets and real-time data fetching.",
      role: "Frontend Architect",
      process: [
        "Analyzed user feedback and performance bottlenecks in the old dashboard.",
        "Created interactive prototypes in Figma to validate new design concepts.",
        "Built a new component library from scratch using TypeScript and Storybook.",
        "Replaced the existing REST API with a more efficient GraphQL endpoint.",
        "Used D3.js for complex, interactive data visualizations."
      ],
      deliverables: ["High-performance analytics dashboard", "Interactive chart components", "GraphQL API schema"],
      galleryImages: [
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/0D0D0D/E6E6E6?text=Gallery+1',
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/0D0D0D/E6E6E6?text=Gallery+2'
      ]
    },
    { 
      id: 3, 
      title: 'Mobile Banking App', 
      category: 'Mobile', 
      summary: 'A secure and intuitive mobile app for managing finances on the go.', 
      imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0D0D0D/E6E6E6?text=Project+3', 
      tags: ['React Native', 'Security', 'UX', 'Biometrics'], 
      metric: '99.9% Uptime', 
      repoUrl: '#',
      problem: "The client's existing mobile banking app was outdated, slow, and lacked modern security features, leading to poor App Store ratings.",
      solution: "I was part of the core team that built a new, native-like mobile app from the ground up using React Native. We focused on a slick UI, biometric authentication, and robust offline capabilities.",
      role: "Mobile Application Developer",
      process: [
        "Collaborated with UX designers to create a user-friendly and accessible interface.",
        "Implemented secure authentication flows using OAuth 2.0 and biometric APIs.",
        "Built a state management system using Redux Toolkit for predictable state.",
        "Wrote native modules for performance-critical features.",
        "Set up automated testing and deployment pipelines for both iOS and Android."
      ],
      deliverables: ["Cross-platform mobile app (iOS/Android)", "Secure authentication module", "Push notification service"],
      galleryImages: [
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x800/0D0D0D/E6E6E6?text=Mobile+1',
        'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x800/0D0D0D/E6E6E6?text=Mobile+2'
      ]
    },
  ],
  resume: {
    pdfUrl: "/placeholder-resume.pdf",
    summary: "A results-driven Software Engineer with 5+ years of experience in building and scaling high-performance web applications. Proven ability to lead projects from concept to completion, with a strong focus on user experience, clean architecture, and business impact. Passionate about leveraging modern technologies to solve complex problems and create elegant, intuitive solutions.",
    experience: [
      {
        role: "Full-Stack Engineer",
        company: "Tech Solutions Inc.",
        date: "2021 - Present",
        description: "Led the development of a new SaaS platform from scratch, resulting in a 40% increase in user engagement. Implemented a scalable microservices architecture and mentored junior developers."
      },
      {
        role: "Frontend Developer",
        company: "Creative Agency",
        date: "2019 - 2021",
        description: "Developed and maintained responsive websites for various clients, improving page load times by an average of 30% through performance optimization techniques."
      }
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science",
        institution: "University of Technology",
        date: "2015 - 2019",
        description: "Graduated with First Class Honours. Specialized in Algorithms and Software Engineering."
      }
    ],
    skills: {
      "Languages & Frameworks": ["TypeScript", "JavaScript", "React", "Node.js", "Next.js", "GraphQL", "Python"],
      "Databases & Tools": ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "Figma", "AWS"],
      "Concepts": ["Agile Methodologies", "CI/CD", "System Design", "Microservices", "TDD"]
    }
  },
  privacyPolicy: {
    lastUpdated: "June 1, 2025",
    sections: [
      {
        title: "Introduction",
        content: "Welcome to my personal portfolio. This Privacy Policy explains how I collect, use, and disclose information about you when you visit my website."
      },
      {
        title: "Information I Collect",
        content: "I may collect personal information that you voluntarily provide to me, such as your name and email address when you use the contact form. I also use analytics tools (like Plausible or GA4) to collect anonymous data about website traffic and usage patterns to improve the site."
      },
      {
        title: "How I Use Your Information",
        content: "I use the information I collect to respond to your inquiries, provide you with requested services, and analyze website performance. I will not sell or share your personal information with third parties for marketing purposes."
      },
      {
        title: "Cookies",
        content: "This website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, but some parts of the site may not function properly."
      },
      {
        title: "Your Rights",
        content: "You have the right to access, correct, or delete your personal information. If you wish to do so, please contact me at the email address provided on the contact page."
      }
    ]
  }
};
