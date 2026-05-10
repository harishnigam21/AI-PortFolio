/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import ChatWidget from "../components/ChatWidget";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import WorkedOn from "../components/WorkedOn";
import Project from "../components/Project";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import type { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiRefinedgithub } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";

export default function Home() {
  const [greet, setGreet] = useState("");
  // const [working, setWorking] = useState("Full Stack Developer");

  // const workingas = [
  //   "Full Stack Developer",
  //   "Backend Engineer",
  //   "Frontend Developer",
  //   "API Architect",
  //   "System Designer",
  // ];

  interface Project {
    link: string;
    githubLink?: string;
    image: string;
    title: string;
    short: string;
    long: string;
    tech: string;
  }
  interface Certificate {
    id: number;
    name: string;
    image: string;
  }
  type Category = "MERN" | "PHP" | "WordPress";

  interface PortfolioType {
    profileImg: string;
    profile_bg: string;
    profile_full: string;
    about: {
      name: string;
      title: string;
      description: string[];
      tagline: string;
    };
    education: {
      description: string;
      details: {
        from: string;
        type: string;
        institute: string;
        board: string;
        stream: string;
      }[];
    };
    experience: {
      role: string;
      company: string;
      period: string;
      points: string[];
    }[];
    projects: {
      description: string;
      category: Category[];
      MERN: Project[];
      PHP: Project[];
      WordPress: Project[];
    };
    workedOn: {
      id: number;
      image: string;
      link: string;
    }[];
    achievements: {
      description: string;
      certificate: Certificate[];
    };
    contact: {
      description: string;
      phone: string[];
      email: string;
      website: string;
      address: string;
      googlemapIframe: string;
      links: { name: string; icon: IconType; link: string }[];
    };
  }
  const portfolioData: PortfolioType = {
    profileImg: "preimg.jpeg",
    profile_bg: "portfolio_bg.jpeg",
    profile_full: "profileFull.png",
    about: {
      name: "Harish Nigam",
      title: "Full Stack Developer — MERN | PHP | WordPress",
      description: [
        `Hello! ${greet}, I am Harish Nigam, a passionate Full Stack Developer
                and Computer Science Engineering graduate (Class of 2023) from
                Shri Govindram Seksaria Institute of Technology and Science,
                Indore.`,
        `My journey into web development began in 2020, when I started
                exploring the fundamentals of HTML, CSS, and JavaScript. What
                started as curiosity quickly became a passion for building
                interactive and user-focused websites. Over the years, I
                expanded my skills into modern frameworks and technologies,
                mastering the MERN stack (MongoDB, Express.js, React.js,
                Node.js) to create complete, responsive, and scalable web
                applications.`,
        `Although I couldn’t pursue an internship during my college years
                due to the pandemic, I invested that time in online courses,
                self-learning, and hands-on projects, which gave me practical
                experience and problem-solving confidence. I enjoy turning ideas
                into real-world solutions and constantly strive to write clean,
                efficient, and optimized code.`,
        `Apart from web development, I love solving programming
                challenges in C, Java, and JavaScript to strengthen my
                algorithmic thinking. I’m now looking for opportunities where I
                can contribute to impactful projects, learn from experienced
                professionals, and continue growing as a Full Stack Developer.`,
      ],
      tagline:
        "Passionate about building scalable web solutions with clean design and efficient code.",
    },

    education: {
      description:
        "Education has played a vital role in shaping my technical foundation and problem-solving mindset. During my B.Tech in Computer Science and Engineering (2019–2023) at Shri Govindram Seksaria Institute of Technology and Science, Indore, I developed a strong interest in web technologies, programming, and software development. Along with my formal studies, I focused on applying theoretical concepts through personal projects and continuous self-learning, which helped me understand real-world development better and prepared me for the challenges of full-stack web development.",
      details: [
        {
          from: "2019–2023",
          type: "Graduation",
          institute: "Shri G.S. Institute of Technology & Science, Indore",
          board: "RGPV, Bhopal",
          stream: "CSE",
        },
        {
          from: "2018–2019",
          type: "Senior Secondary (XII)",
          institute: "Shri Rajendra Vidya Sanskar Dham, Rajgarh",
          board: "CBSE",
          stream: "PCM",
        },
        {
          from: "2017–2018",
          type: "Secondary (X)",
          institute: "Jawahar Navodaya Vidyalaya, Multhan",
          board: "CBSE",
          stream: "All Subject",
        },
      ],
    },

    experience: [
      {
        role: "Full Stack Developer",
        company: "DHHANASHRI AUTOWORKFLOW LLP",
        period: "Nov 2025 - April 2026",
        points: [
          "Developed and maintained web applications using React, Next, Vue & PHP.",
          "Build Role based dashboard using MERN stack for better optimization and Scalability",
          "Built several advertising websites & E-commerce website using wordpress.",
          "Managed hosting, DNS, and domain–hosting connections.",
        ],
      },
      {
        role: "Full Stack Web Developer Intern",
        company: "CREATIVE SQUADZ",
        period: "Jul 2025 – Nov 2025",
        points: [
          "Built a MERN-based File/Media Conversion platform with guest/paid models and secure tracking.",
          "Developed PHP advertising websites and multiple WordPress sites including a WooCommerce store.",
          "Managed hosting, DNS, SSL, and performed SEO optimizations.",
          "Configured servers and handled domain–hosting connections.",
        ],
      },
      {
        role: "MERN Stack Developer Intern",
        company: "LABMENTIX",
        period: "Jan 2025 – Jun 2025",
        points: [
          "Contributed to live e-commerce and social-media MERN projects.",
          "Implemented APIs, authentication, and database schemas.",
          "Collaborated via GitHub and received a Letter of Recommendation.",
        ],
      },
    ],
    workedOn: [
      {
        id: 1,
        image: "adsexhibition",
        link: "https://adsexhibition.com/",
      },
      {
        id: 2,
        image: "azoncenter",
        link: "https://azonecenter.com/",
      },
      {
        id: 3,
        image: "flipinindia",
        link: "https://flipinindia.in/",
      },
      {
        id: 4,
        image: "nntc",
        link: "https://nntc.digital/",
      },
      {
        id: 5,
        image: "practicalrecovery",
        link: "https://www.practicalrecovery.com/",
      },
      {
        id: 6,
        image: "roofinginnh",
        link: "https://www.roofinginnh.com/",
      },
    ],
    projects: {
      description: `Projects are the most exciting part of my journey as a developer.
              Each project I’ve built represents my learning growth—from simple
              HTML pages to full-fledged MERN stack applications. I’ve worked on
              projects like Resume Builder, VC Plugin, Spodemy, and Transaction
              Tracker, each improving my understanding of front-end and back-end
              integration, database handling, and responsive UI design. These
              projects helped me gain practical experience and confidence in
              turning ideas into functional and user-friendly web applications.`,
      category: ["MERN", "PHP", "WordPress"],
      MERN: [
        {
          link: "https://chatflow.harishnigam.cloud/",
          githubLink: "https://github.com/harishnigam21/ChatFlow",
          image: "chatflow.png",
          title: "ChatFlow : A Real Time Messaging App",
          short:
            "ChatFlow is a full-stack real-time chat application built with React, Node.js, and Socket.io, featuring smart message grouping, media caching using IndexedDB, and real-time social interactions like follow requests and message deletion, all optimized for performance and scalability.",
          long: `ChatFlow is a full-stack real-time chat application engineered to deliver a highly responsive and scalable messaging experience. The application leverages Socket.io for real-time communication, enabling instant message delivery, live seen-status updates, and synchronized message deletion across users.

One of the core highlights of the system is its optimized message handling, where messages are grouped by year and date using MongoDB aggregation pipelines. This not only improves UI readability but also enables efficient retrieval of last messages and unread counts in a single query.

The platform introduces a media optimization strategy by integrating Cloudinary for storage and IndexedDB for local caching of previously viewed media. This significantly reduces redundant network requests and improves performance, especially in media-heavy conversations.

In addition to messaging, ChatFlow incorporates a social interaction layer where users can follow/unfollow others, send and manage requests, and receive real-time updates through socket events.

The frontend is built with React and Redux Toolkit, ensuring scalable and predictable state management, while the backend uses Node.js, Express, and MongoDB (Mongoose) for robust API and database handling.

Overall, ChatFlow demonstrates strong engineering practices including real-time architecture, efficient data handling, performance optimization, and modern UI/UX design.`,
          tech: "React.js, Redux Toolkit, Node.js, Express.js, MongoDB, Mongoose, Socket.io, Cloudinary, IndexedDB, JWT, Axios, React Three Fiber (Three.js",
        },
        {
          link: "https://unitube.harishnigam.cloud/",
          githubLink: "https://github.com/harishnigam21/UniTube",
          image: "unitube.png",
          title: "Unitube : A Post Hub",
          short:
            "UniTube is a YouTube-style video sharing platform where users can register/login, create channels, upload video posts with thumbnails, browse a feed using cursor-based pagination, and interact through likes/dislikes, subscriptions, and nested comments.",
          long: `UniTube is a full-stack video platform inspired by YouTube, built with a Node.js + Express backend and MongoDB (Mongoose) database. It supports secure user authentication using JWT and provides APIs for core features like channel management (create/update/delete channels, unique channel handlers), post management (upload videos and thumbnails, create/update/delete posts), and social interactions (subscribe/unsubscribe channels, like/dislike posts and comments).

The backend uses middleware-based validation for request payloads, multer for handling file uploads (stored in an uploads/ folder), and MongoDB transactions for critical operations where multiple collections must stay consistent (example: channel creation updates both Channel and User documents). Feed loading is optimized with cursor-based pagination using createdAt sorting and indexed queries for scalability. Comments are stored in a separate collection and served as a nested tree structure using parent-child relationships.`,
          tech: "Node js, Express js, MongoDB (Transaction, aggregation, sessions etc.), JWT Authentication, Multer, REST API, React.js, Redux, React Router",
        },
        {
          link: "https://taskflow.harishnigam.cloud/",
          githubLink: "https://github.com/harishnigam21/TaskFlow",
          image: "taskflow.png",
          title: "TaskFlow : A Task Book",
          short:
            "TaskFlow is a full-stack task management application that enables users to securely manage tasks with authentication, optimized state handling, and a responsive UI.",
          long: `TaskFlow is a full-stack task management application built to demonstrate scalable architecture, clean code practices, and modern web development techniques. It allows users to register, log in, and efficiently manage their daily tasks through a responsive and intuitive dashboard.

The application uses secure JWT-based authentication to protect user data and implements complete CRUD operations for task management, including task creation, updating, deletion, and completion toggling. It also incorporates pagination and optimized state management using Redux to handle large datasets efficiently.

On the frontend, TaskFlow leverages React with TypeScript for type safety and maintainability, along with reusable components and a custom API hook to streamline server communication. On the backend, it uses Node.js and Express with Prisma ORM to interact with a relational database, ensuring robust data handling and structured queries.

Additional features such as form validation using Zod, centralized error handling, CORS configuration, request logging, and loading states enhance both developer experience and application performance. Overall, TaskFlow reflects a production-ready approach to building modern web applications.`,
          tech: "Node.js, Express.js, Next.js, Redux Toolkit, TypeScript, Prisma ORM, MySQL, Zod, JWT Authentication",
        },
        {
          link: "https://fileflux.harishnigam.cloud/",
          githubLink: "https://github.com/harishnigam21/FileFlux",
          image: "conversion.png",
          title: "File / Media Conversion",
          short:
            "A conversion platform with guest and paid users, trial limits, and fingerprint/IP-based security.",
          long: "This MERN application allows users to convert PDFs, images, and media with advanced user control. Guest users have limited trials while paid users access unlimited conversions. To prevent abuse, fingerprinting and IP tracking ensure fair usage. The system supports queued file processing and cloud storage. UI is minimal and mobile-friendly, emphasizing speed and privacy.",
          tech: "Prisma, Express,Node, React, React Router, TailwindCSS, JWT, REST API, RazorPay",
        },
        {
          link: "https://spodemy.harishnigam.cloud/",
          githubLink: "https://github.com/harishnigam21/Spodemy",
          image: "spodemy.png",
          title: "Spodemy",
          short:
            "A sports platform combining e-commerce, social media, sports directory, and mini e-games for a complete sports ecosystem.",
          long: "Spodemy merges multiple verticals of the sports industry: an e-commerce store for sports products, a social hub for community engagement, a local search for academies and gyms, and an online mini-game section. Users can register, browse products, manage wishlists, purchase via secure checkout, and track orders. The platform also allows users to post, like, and comment on sports-related content, helping grow the community. Built with MERN stack, it uses Stripe for payments, JWT authentication for user security, and REST APIs for order and content management. Performance was optimized through server-side rendering and database indexing. The future roadmap includes tournament management and real-time chats.",
          tech: "React js, Node js, Express, Prisma, cloudinary, Stripe, TailwindCSS",
        },
        {
          link: "https://tracking-front-iota.vercel.app/",
          githubLink: "https://github.com/harishnigam21/Transaction-Tracking",
          image: "TransactionTracker.png",
          title: "Transaction Tracker",
          short:
            "Track daily income and expenses with analytics dashboard and graphical insights.",
          long: "Transaction Tracker is a productivity-focused MERN application for managing personal finances. Users can log incomes, expenses, and view analytics using Chart.js. Each entry is categorized for clarity and summarized in graphs showing monthly and category-based statistics. Security and data integrity are ensured with JWT and input sanitization.",
          tech: "React, Node js, Express, MongoDB, Chart js, TailwindCSS",
        },
        {
          link: "https://weather8472.vercel.app/",
          githubLink: "https://github.com/harrysingh17022552/Weather-App",
          image: "weather.png",
          title: "Open Weather API",
          short:
            "A modern, responsive weather application that provides real-time weather updates, dynamic UI changes, and enhanced user experience with features like recent searches, location-based weather, and custom alerts.",
          long: "A modern, responsive weather application that provides real-time weather updates, dynamic UI changes, and enhanced user experience with features like recent searches, location-based weather, and custom alerts.",
          tech: "react, tailwind css, weather api, session storage",
        },
      ],
      PHP: [
        {
          link: "https://adsexhibition.com/",
          githubLink: "https://github.com/harishnigam21/ADSExhibition",
          image: "ADSExhibition.png",
          title: "Ads Exhibition",
          short:
            "A dynamic exhibition and portfolio website with a responsive frontend, media gallery, and an admin panel for managing content, users, and interactions.",
          long: `ADS Exhibition is a full-featured web platform designed to showcase exhibitions, innovations, and client portfolios through a modern and responsive interface. It includes multiple structured pages such as home, about, gallery, and contact, along with a media-rich gallery that supports both images and videos with client-side filtering and optimized rendering.

The platform also provides a robust admin panel that enables administrators to manage contacts, subscribers, testimonials, and portfolio data efficiently. It integrates backend functionality for handling database operations, form submissions, and email triggers, ensuring smooth communication and data flow.

Built with a modular PHP architecture and MySQL database, the project emphasizes scalability, maintainability, and clean routing using .htaccess. With reusable layout components and organized asset management, it serves as a solid foundation for exhibition websites, agency portfolios, or business presentation platforms.`,
          tech: "php, mysql, javascript, bootstrap, html, css",
        },
        {
          link: "https://flipinindia.in/",
          githubLink: "https://github.com/harishnigam21/FlipInIndia",
          image: "FlipInIndia.png",
          title: "FlipInIndia",
          short:
            "A business website with gallery, pickup request system, and admin dashboard for managing content, users, and website data.",
          long: `FlipInIndia is a comprehensive web platform built to present business services, company details, and client engagement features in a modern and responsive way. The website includes multiple structured pages such as home, about, services, gallery, and contact, along with a dynamic gallery that displays factory images and media content.

The platform includes user interaction features like contact forms and pickup request forms, which are integrated with backend models to store data in the database. It ensures smooth handling of user inquiries and service requests.

A powerful admin panel is included to manage all aspects of the website, including contacts, pickup requests, testimonials, store content, and profiles. The system is built using a modular PHP architecture with MySQL database integration and includes a complete database dump for quick setup.

With structured templates, reusable components, and integrated frontend plugins, FlipInIndia serves as a scalable foundation for business websites, service platforms, or portfolio-based applications.`,
          tech: "php, mysql, javascript, bootstrap, html, css",
        },
        {
          link: "/",
          githubLink: "https://github.com/harishnigam21/Resume_Builder",
          image: "portfolio_bg.jpeg",
          title: "Resume Builder",
          short:
            "Online resume creation platform allowing login, template selection, and PDF generation.",
          long: "This project enables users to log in, choose from resume templates, and export professional resumes in PDF format. It maintains user history, offers editing functionality, and allows cloning previous resumes. Created to simplify resume creation for job seekers.",
          tech: "php, mysql, javascript, bootstrap, html, css",
        },
      ],
      WordPress: [
        {
          link: "https://www.practicalrecovery.com/",
          image: "practicalRecovery.png",
          title: "Practical Recovery",
          short:
            "Rebuilt a US rehab center website with 500+ blog migration and SEO optimization.",
          long: "A major WordPress redesign project for a US-based rehabilitation organization. Migrated 500+ blog posts, improved SEO ranking, and revamped UI/UX with Elementor. Implemented structured content blocks and responsive templates to enhance readability and traffic.",
          tech: "WordPress, Elementor, PHP, SEO Plugins",
        },
        {
          link: "https://azonecenter.com/",
          image: "azone.png",
          title: "Azone Center",
          short:
            "WooCommerce grocery and gadget store with login, cart, and multiple payment methods.",
          long: "Developed a modern WooCommerce site for Azone Center — a store offering affordable groceries and gadgets. Integrated COD and online payment gateways. Enhanced performance through caching and SEO optimization.",
          tech: "WordPress, WooCommerce, PHP, MySQL, SEO",
        },
      ],
    },

    achievements: {
      description: `Continuous learning is a key part of my career path. I’ve
              completed multiple online certifications in Full Stack Web
              Development, UX Design, and Cyber Security from reputed platforms
              such as Coursera and Udemy. These achievements reflect my
              dedication to self-improvement and my enthusiasm for exploring
              diverse areas of technology. Beyond certificates, these
              experiences have expanded my skills, improved my project quality,
              and motivated me to stay updated with the latest industry tools
              and practices.`,
      certificate: [
        {
          id: 1,
          name: "Full Stack Web Development",
          image: "bws.png",
        },
        {
          id: 2,
          name: "UX Designing",
          image: "coursera.jpg",
        },
        {
          id: 3,
          name: "Cyber Security",
          image: "verzeo.jpg",
        },
      ],
    },

    contact: {
      description: `I’m always open to collaborating on exciting web development
              projects or discussing new opportunities. Whether you’re an
              employer, developer, or fellow tech enthusiast, feel free to reach
              out! I enjoy connecting with people who share a passion for
              technology and innovation. You can contact me through email,
              LinkedIn, or GitHub, and I’ll be happy to share my work or discuss
              how we can collaborate to build something meaningful together.`,
      phone: ["+91 8962937969", "+91 8962008472"],
      email: "harishnigam21@gmail.com",
      website: "https://harishnigam.cloud",
      address: "Street Number 6, Wazirabad, New Delhi, 110084",
      googlemapIframe:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d496.7706647974259!2d77.21771490000003!3d28.7242043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1750405525423!5m2!1sen!2sin",
      links: [
        {
          name: "Email",
          icon: MdEmail,
          link: "mailto:harishnigam21@gmail.com",
        },
        {
          name: "Github",
          icon: SiRefinedgithub,
          link: "https://github.com/harishnigam21",
        },
        {
          name: "Linkedin",
          icon: TfiLinkedin,
          link: "https://www.linkedin.com/in/harishnigam21/",
        },
      ],
    },
  };

  const time = parseInt(new Date().toTimeString().slice(0, 2));

  useEffect(() => {
    if (time >= 4 && time < 12) setGreet("Good Morning");
    else if (time >= 12 && time < 16) setGreet("Good Afternoon");
    else if (time >= 16 && time < 22) setGreet("Good Evening");
    else setGreet("Welcome");
  }, [time]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWorking(workingas[Math.floor(Math.random() * workingas.length)]);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-sans">
      {/* Navbar */}
      <Header />

      <Hero info={portfolioData.about} img={portfolioData.profile_full} />
      <About info={portfolioData.about} />
      <Education info={portfolioData.education} />
      <Experience info={portfolioData.experience} />
      <WorkedOn info={portfolioData.workedOn} />
      <Project info={portfolioData.projects} />
      <Achievements info={portfolioData.achievements} />
      <Contact info={portfolioData.contact} />
      {/* AI Chat */}
      <ChatWidget />
    </div>
  );
}
