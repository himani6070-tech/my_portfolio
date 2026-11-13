import { img } from "framer-motion/client";

const info = {
  // ---------- BASICS ----------
  name: "Himani Singh Bisht",
  firstName: "Himani",
  role: "Frontend Developer",
  roleSub: "Learning Full Stack",
  status: "Open to internships and learning opportunities", // TODO: edit or remove
  location: "jaipur, rajasthan", // TODO: e.g. "India"
  resume: "/resume/Himani_Bisht_Resume.pdf", // TODO: e.g. "/resume.pdf" (put the file in /public)
  tagline:
    "A passionate Frontend Developer who loves transforming creative ideas into clean, responsive, and user-friendly websites. I enjoy building interactive web experiences, exploring new technologies, and continuously improving my skills. Always curious, eager to learn, and excited to turn ideas into reality through code. ✨",
  avatar: "/images/himani.jpeg", // e.g. "/images/avatar.png"

  // ---------- ABOUT ----------
  about: [
    "Hello again! Thanks for scrolling this far.",
    "I love to code. I build websites with JavaScript, React and Next.js, and I'm currently learning backend development to become a full stack developer.",
    "I started with a simple e-commerce app, ShopEase, and kept building: clones, new frameworks and now backend. Every project teaches me something the last one didn't.",
    "TODO: what you do outside coding (hobbies, books, games, music).",
  ],
  aboutPhoto: "/images/photo.png", 

  funFacts: [
    "TODO: a fun fact about you",
    "TODO: your go-to coding snack or music",
    "TODO: something non-tech you love",
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      school: "S. S. jain subodh p.g. (autonomous) college", // TODO: college / university
      degree: "Bachelor of computer application", // TODO: e.g. B.Tech in Computer Science
      year: "2023 - 2026", // TODO: e.g. 2023 - 2027
    },
  ],

  // ---------- JOURNEY (shows growth and will to learn) ----------
  journey: [
    {
      title: "Started with React",
      text: "Built ShopEase, my first project: a demo e-commerce app with cart, product management and category filtering.",
    },
    {
      title: "Learned by cloning",
      text: "Recreated a Blinkit-style app to practise real-world UI, state and layout.",
    },
    {
      title: "Moved to Next.js",
      text: "Learning routing, rendering and how production-style React apps are structured.",
    },
    {
      title: "Diving into backend",
      text: "Learning to build APIs and databases so I can ship full stack projects on my own.",
    },
  ],

  // ---------- SKILLS ----------
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    backend: ["Learning Node.js / Express"], // TODO: confirm what you're learning
    tools: ["Git", "GitHub", "Vite", "VS Code"],
  },

  toolkit: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "tailwind",
    "React",
    "Next.js",
    "Vite",
    "Git",
    "GitHub",
  ],

  // ---------- STRENGTHS / HOW I WORK ----------
  strengths: [
    { title: "Fast learner", text: "I pick up new tools by building real projects with them." },
    { title: "Detail-minded", text: "I care about clean UI, working features and tidy code." },
    { title: "Curious", text: "I like understanding how things work, not just copying them." },
  ],

  // ---------- PROJECTS ----------
  projects: [
    {
      title: "ShopEase",
      description:
        "A demo e-commerce app with a shopping cart, product management and category-wise filtering.",
      tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Axios"],
      features: ["Add to cart", "Product management", "Category-wise filter"],
      status: "Completed",
      github: "https://github.com/himani6070-tech/mini-e-commerce-", // TODO
      live: "https://mini-e-commerce-ruby-omega.vercel.app/", // TODO
      image: "", // e.g. "/images/shopease.png"
    },
    {
      title: "Blinkit Clone",
      description: "TODO: describe what your Blinkit clone does.",
      tech: ["React", "Bootstrap"], // TODO: confirm
      features: ["slider","dummy api product"], // TODO
      status: "TODO",
      github: "https://github.com/himani6070-tech/blinkit",
      live: "https://blinkit-neon.vercel.app/",
      image: "",
    },
     {
      title: "foodie-website",
    description: "A responsive web application built with Next.js and Tailwind CSS, featuring modern UI and smooth page navigation.",
tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Lucide React"],
features: ["Page navigation", "Responsive design", "Modern UI", "Lucide icons"],
status: "Completed",
      github: "https://github.com/himani6070-tech/foodie-website",
      live: "https://foodie-website-8w69-5jyxbwt0v-himani8.vercel.app/menu",
      image: "",
    },
     {
      title: "movie-search-app",
      description: "A movie search app built with HTML, CSS, and JavaScript to search movies and explore their details.",
tech: ["HTML", "CSS", "JavaScript"],
features: ["Movie search", "Movie details", "API integration"],
status: "Completed",
      github: "https://github.com/himani6070-tech/movie-search-app",
      live: "https://movie-search-1fsjk0ep7-himani8.vercel.app/",
      image: "",
    },
     {
        title: "todo list",
        description: "A Todo List app built using HTML, CSS, and JavaScript to add, manage, and track daily tasks with a simple and user-friendly interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        features: ["Add tasks", "Delete tasks", "Mark tasks as completed", "Task management"],
        status: "Completed",
      github: "https://github.com/himani6070-tech/to-do-list",
      live: "https://to-do-list-three-delta-88.vercel.app/",
      image: "",
    },
     {
       title: "Image Slider",
      description: "An interactive Image Slider built using HTML, CSS, and JavaScript. It allows users to navigate through images smoothly using next and previous buttons.",
      tech: ["HTML", "CSS", "JavaScript"],
       features: ["Next and previous buttons", "Smooth image navigation", "Interactive image display", "Responsive design"],
      status: "Completed",
      github: "https://github.com/himani6070-tech/slider-",
      live: "https://slider-minitask.vercel.app/",
      image: "",
    }

    // TODO: add your other projects here
  ],

  // ---------- LEARNING ----------
  learning: {
    currently: ["Node.js", "MongoDB", "Backend development"],
    next: [], // TODO: e.g. ["Node.js", "MongoDB", "TypeScript"]
    note: "I believe the best developers never stop learning, so I build something new with every skill I pick up.",
  },

  // ---------- GOALS ----------
  goals: [
    "Become a confident full stack developer",
    "Build and deploy projects that real people use",
    "TODO: your own goal (open source, internship, a dream company?)",
  ],

  // ---------- CONTACT ----------
  contact: {
    email: "himanilaati@gmail.com", // TODO
    github: "", // TODO
    linkedin: "", // TODO
    // twitter: "", // TODO (optional)
    // leetcode: "", // TODO (optional)
  },
};
export default info;