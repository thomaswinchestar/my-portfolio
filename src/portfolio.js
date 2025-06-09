/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Devpph",
    title: "Hi all, I'm Thomas.",
    subTitle: emoji(
        "A passionate Senior Full Stack Engineer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / TypeScript / Reactjs / Nodejs / PHP / Laravel and some other cool libraries and frameworks."
    ),
    resumeLink: "https://flowcv.com/resume/uab12f48c9",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/thomaswinchestar",
    // linkedin: "https://www.linkedin.com/in/",
    gmail: "thomasanthony999@gmail.com",
    // gitlab: "https://gitlab.com/",
    facebook: "https://www.facebook.com/thomas.winchestar/",
    medium: "https://medium.com/@thomaswinchestar",
    stackoverflow: "https://stackoverflow.com/users/9617432/thomas-winchestar",
    instagram: 'https://www.instagram.com/thomaswinchestar/',
    twitter: 'https://twitter.com/thomaswinches11',
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "tailwindcss",
            fontAwesomeClassname: "fas fa-tailwind"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "bootstrap",
            fontAwesomeClassname: "fab fa-bootstrap"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "php",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "laravel",
            fontAwesomeClassname: "fab fa-laravel"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "TypeScript",
            fontAwesomeClassname: "fab fa-typescript"
        },
        {
            skillName: "ExpressJS",
            fontAwesomeClassname: "fas fa-server"
        },
        {
            skillName: "MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Wordpress",
            fontAwesomeClassname: "fab fa-wordpress"
        },
        {
            skillName: "AR/VR",
            fontAwesomeClassname: "fas fa-vr-cardboard"
        },
        {
            skillName: "Material",
            fontAwesomeClassname: "fab fa-material-ui"
        },
        {
            skillName: "Ant Design",
            fontAwesomeClassname: "fab fa-ant-design"
        },
        {
            skillName: "MySQL",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "AWS",
            fontAwesomeClassname: "fab fa-aws"
        },

    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
            schoolName: "Yangon University Distance Education",
            logo: require("./assets/images/yude-logo.png"),
            subHeader: "Bachelor of Science in Physics",
            duration: "January 2015 - December 2019",
            desc: "Graduated with a Bachelor of Science in Physics, focusing on theoretical and experimental physics. Developed strong analytical and problem-solving skills through coursework and research projects.",
            descBullets: [
                "Physics"
            ]
        },
        {
            schoolName: "National Management Degree College",
            logo: require("./assets/images/NMDC.png"),
            subHeader: "Diploma in Information Technology and Computer Programming",
            duration: "September 2016 - April 2017",
            desc: "Completed a Diploma in Information Technology and Computer Programming, gaining foundational knowledge in computer science principles, programming languages, and software development methodologies.",
            descBullets: [
                "Information Technology",
                "Computer Programming",
                "Software Development",
                "Web Development",
                "Database Management",
                "Networking",
                "System Analysis and Design",
                "Project Management",
                "IT Security",
                "Cloud Computing",
                "Mobile App Development",
                "Agile Methodologies",
                "Data Structures and Algorithms",
            ]
        },
        {
            schoolName: "Myanmar Imformation Technology Consulting Co.,ltd",
            logo: require("./assets/images/MITC.jpg"),
            subHeader: "Professional Web Development",
            duration: "2017 - 2018",
            desc: "Completed a comprehensive course in Professional Web Development, covering essential technologies and frameworks for building modern web applications. Gained hands-on experience in front-end and back-end development, database management, and deployment.",
            descBullets: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "RESTful APIs",
                "Web Security",
                "Responsive Design",
                "Version Control",
            ]
        },
        {
            schoolName: "Fairway Technology",
            logo: require("./assets/images/fairway.png"),
            subHeader: "Rockstar Developer Class",
            duration: "August 2020 - Jan 2021",
            desc: "Project Management, Service-oriented Architecture, SOLID Design Principle, Git SCM, Build Automation, NodeJS, MongoDB, ExpressJS, Server Architecture",
            descBullets: [
                "JavaScript",
                "Node.js",
                "NPM",
                "Vite",
                "TypeScript",
                "React.js",
                "React-Router",
                "React-Query",
                "React Hook Form",
                "Redux Toolkit",
                "Redux Saga",
                "Next.js",
                "Tailwind CSS",
                "Express.js",
                "Prisma ORM",
                "MongoDB",
                "RESTful APIs",
                "Git and Version Control",
                "Agile Methodologies",
                "Service-Oriented Architecture (SOA)",
                "SOLID Design Principles",
                "Build Automation"
            ]
        },
        {
            schoolName: "Turing Programming Training Center",
            logo: require("./assets/images/turing-logo.png"),
            subHeader: "JavaScript +Frontend development with React",
            duration: "August 2020 - Feb 2021",
            desc: "A comprehensive course covering JavaScript fundamentals, frontend development with React, and advanced programming concepts.",
            descBullets: [
                "Understanding how JavaScript works from source code to machine code in a browser",
                "Mastering data types and control flow structures",
                "Functions, event handling, and the DOM",
                "JavaScript event loop model",
                "Object-oriented programming with JavaScript",
                "Functional programming techniques (higher-order functions, functors, monoids, monads, functional design patterns)",
                "Core programming principles",
                "Basic Node.js and building applications using CRUD operations with JWT, Express.js, and MongoDB",
                "Asynchronous programming (callbacks, promises, async/await)",
                "Writing clean code and basic refactoring",
                "Frontend development with React and Next.js",
                "Package managers and project setup",
                "Overview of how React works under the hood",
                "Handling React elements and JSX in depth",
                "Virtual DOM, component and component life cycle, and conditional rendering",
                "Component architecture with React design patterns (Higher-Order Components, composite, and render props patterns)",
                "Mastering Flux and Redux for state management",
                "Forms, HTTP, routing, hooks, and the Context API in React"
            ]
        },
        // {
        //     schoolName: "AProgrammer",
        //     logo: require("./assets/images/aprogrammer.png"),
        //     subHeader: "Laravel Online Class Batch 4",
        //     duration: "Nov 2020 - Jan 2021",
        //     desc: "Learned about laravel basic concept and architecture.",
        //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        // },
        // {
        //     schoolName: "MM Coder",
        //     logo: require("./assets/images/mmcoder.png"),
        //     subHeader: "Laravel Master and Vue Class",
        //     duration: "Jan 2021 - Feb 2021",
        //     desc: "Learned about laravel Vue advanced and build real life projects",
        //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        // },
        // {
        //     schoolName: "Creative Coder",
        //     logo: require("./assets/images/creative-coder-online-course.jpg"),
        //     subHeader: "Vue Firebase",
        //     duration: "Jan 2021 - present",
        //     desc: "Learned about laravel Vue advanced and build real life projects",
        //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        // },
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend / Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "90%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Junior Web Developer",
            company: "Myanmar Web Designer Co., Ltd",
            companylogo: require("./assets/images/mwdlogo.png"),
            date: "Feb 2018 – April 2019",
            desc: "I have 1 year and 3 months of experience in this Company. I developed so many projects on Myanmar Web Designer I think they are over 30 projects. CMS Website such as:",
            descBullets: [
                "Tourism",
                "Hotel",
                "Construction",
                "Electronics",
                "RealEstate",
                "eCommerce",
                "Hospital",
                "Transportation",
                "Logistics",
                "Governments"
            ]
        },
        {
            role: "Senior Web Developer",
            company: "Pixellion 360 Co., Ltd",
            companylogo: require("./assets/images/pixellion-logo.png"),
            date: "May 2019 – Feb 2021",
            desc: "I developed frontend development and some backend development on a big project in Pixellion 360 Co., Ltd. I made some projects like:",
            descBullets: [
                "Big Platform Project with PHP Pure",
                "eCommerce Electronics",
                "Branded Cosmetic Company Website",
                "Learning Platform Website",
                "Job Management System Website",
                "Content Generator Web App"
            ]
        },
        {
            role: "Senior Web Developer",
            company: "Next Innovation Co., Ltd",
            companylogo: require("./assets/images/next-innovations.png"),
            date: "March 2021 Sept 2021",
            desc: "Developed and maintained Japan's largest delivery health information site, \"Deriheru Town.\"",
            descBullets: [
                "Delivery Health Information Site",
            ]
        },
        {
            role: "Fullstack Developer",
            company: "Trazitar Online Shop",
            companylogo: require("./assets/images/tzt-logo.png"),
            date: "Oct 2021 June 2022",
            desc: "I developed both frontend and backend for trazitar online shop website.",
            descBullets: [
                "elblog CMS Laravel",
                "Food Ordering Laravel",
                "eCommerce Web App fully customized",
                "POS asynchronous with eCommerce Web App",
            ]
        },
        {
            role: "Senior Frontend Developer & Team Lead",
            company: "Nexstack Co., Ltd Singapore",
            companylogo: require("./assets/images/nexstack.png"),
            date: "June 2022 April 2023",
            desc: "Continuously learned and adapted to new technologies and methodologies, enhancing personal and team efficiency",
            descBullets: [
                "Fully customized HR Management Web App",
                "Invoice System App",
                "Central Video Management System Singapore Government Web App",
            ]
        },
        {
            role: "Senior Fullstack Developer",
            company: "Dinger Co.,ltd Fintech",
            companylogo: require("./assets/images/dinger_logo.jpeg"),
            date: "May 2023 to OCT 2024",
            desc: "Led the successful development and delivery of multiple projects, showcasing exceptional technical skills and a deep understanding of fintech and payment gateway solutions.",
            descBullets: [
                "Mobile eWallet App",
                "Billing Portal Web App",
                "Picpicker Mobile App",
                "BCGE Web App(Non-Government)",
                "Dinger Portfolio Web App",
                "Dinger Admin Web App",
            ]
        },
        {
            role: "Senior Fullstack Developer & Team Lead",
            company: "BrndWrx Co., Ltd",
            companylogo: require("./assets/images/Brndwrx-02.svg"),
            date: "March 2024 to Present",
            desc: "Built immersive AR product experiences with React.js, Three.js, 8th Wall, A-Frame.js, and TensorFlow.js, integrating real-time motion tracking and media overlays.",
            descBullets: [
                "Web AR/VR App for Product Experience",
                "Scalable eCommerce Web App",
                "Custom Shopify API Integration Web App",
                "Custom WooCommerce API Integration with React Web App",
                "Boutique Creative Ads Agency Website",
                "BrndWrx Portfolio Website",
                "Immersive AR Solutions Website",
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "thomaswinchestar", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "Some of my most notable projects",
    projects: [{
            image: require("./assets/images/web-ar.jpg"),
            projectName: "Plantd Web AR",
            projectDesc: "An immersive AR product experience that allows users to visualize products in their environment using Web AR technologies.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://drive.google.com/drive/folders/1JxDDmyF6yS07zRAkOzNA5G89bpol3OKC?usp=sharing"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/plantd.png"),
            projectName: "Plantd eCommerce Web App",
            projectDesc: "A scalable eCommerce web application built with React.js, integrating custom Shopify API for seamless product management and user experience.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://plantdskincare.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/mtb-pay-2.jpg"),
            projectName: "MTB Pay",
            projectDesc: "A comprehensive payment gateway solution that integrates with various eCommerce platforms, providing secure and efficient payment processing.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://mtb.com.mm/digital_banking/mtb-pay/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/dinger-asia.png"),
            projectName: "Dinger Fintech",
            projectDesc: "A fintech company offering a mobile eWallet app, billing portal web app, and various payment solutions.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://dinger.asia"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/BillingPortal.png"),
            projectName: "Billing Portal Web App",
            projectDesc: "A web application for managing billing and invoicing, providing a user-friendly interface for customers to view and pay their bills.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://drive.google.com/drive/folders/1QKDMjRacHxTOsRBdY62yvzJ2ui3fvdxH?usp=sharing"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/picpicker-saas.png"),
            projectName: "Picpicker App",
            projectDesc: "A mobile application that allows users to select and manage images for various purposes, integrating with the Dinger ecosystem.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://drive.google.com/drive/folders/1lDJtZ3gA-IktnTmPDEiZkos8LbNTTgyZ?usp=sharing"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/Invoice-SaaS.png"),
            projectName: "Invoice System App",
            projectDesc: "A SaaS application for managing invoices, providing features for creating, sending, and tracking invoices online.",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://drive.google.com/drive/folders/1pg7HDY_9ifHs43j2ZbUYVyXyDJHesQKr?usp=sharing",
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/HR-SaaS.jpg"),
            projectName: "HR Management Web App",
            projectDesc: "A fully customized HR management web application that streamlines employee management, payroll processing, and performance tracking.",
            footerLink: [{
                name: "Visit Website",
                url: "https://drive.google.com/drive/folders/1AtBJjj4mPNxTjsi-XybUyyPD3REEQRra?usp=sharing"
            }]
        },
        {
            image: require("./assets/images/dinger-portfolio.png"),
            projectName: "Dinger Portfolio Web App",
            projectDesc: "A portfolio web application showcasing Dinger's fintech solutions and services, highlighting their innovative approach to digital finance.",
            footerLink: [{
                name: "Visit Website",
                url: "https://dinger.asia/portfolio"
            }]
        },
        {
            image: require("./assets/images/trazitar-eCommerce.png"),
            projectName: "Trazitar eCommerce",
            projectDesc: "A fully customized eCommerce web application built with React and Laravel, providing a seamless shopping experience for users.",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.trazitar.com"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [{
                    name: "Certification",
                    url: ""
                },
                {
                    name: "Award Letter",
                    url: ""
                },
                {
                    name: "Google Code-in Blog",
                    url: ""
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [{
                name: "View Google Assistant Action",
                url: ""
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: ""
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@thomaswinchestar/mastering-self-discipline-in-software-engineering-the-key-to-unleashing-your-full-potential-141662cd7683",
            title: "Mastering Self-Discipline in Software Engineering: The Key to Unleashing Your Full Potential",
            description: "Software engineering is a field characterized by rapid change, complex problem-solving, and the constant need to learn and adapt."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        ""
    ),

    talks: [{
        title: "",
        subtitle: "",
        slides_url: "",
        event_url: ""
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "(+66 9) 59491867, (+959) 768 931 860",
    email_address: "thomasanthony999@gmail.com",
};

// Twitter Section

const twitterDetails = {
    userName: "thomaswinchestar", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};