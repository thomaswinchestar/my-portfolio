/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Pyei Phyo Htet",
    title: "Hi all, I'm Devpph",
    subTitle: emoji(
        "A passionate Senior Web Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
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
            desc: "Physics",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "National Management Degree College",
            logo: require("./assets/images/NMDC.png"),
            subHeader: "Diploma in Information Technology and Computer Programming",
            duration: "September 2016 - April 2017",
            desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },
        {
            schoolName: "Myanmar Imformation Technology Consulting Co.,ltd",
            logo: require("./assets/images/MITC.jpg"),
            subHeader: "Professional Web Development",
            duration: "2017 - 2018",
            desc: "learned about HTML5, CSS3, Javascript, Bootstrap, PHP, Wordpress, Laravel, CodeIgniter, Drupal",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },
        {
            schoolName: "Fairway Technology",
            logo: require("./assets/images/fairway.png"),
            subHeader: "Rockstar Developer Class",
            duration: "August 2020 - Jan 2021",
            desc: "Project Management, Service-oriented Architecture, SOLID Design Principle, Git SCM, Build Automation, NodeJS, MongoDB, ExpressJS, Server Architecture",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },
        {
            schoolName: "Turing Programming Training Center",
            logo: require("./assets/images/turing.png"),
            subHeader: "JavaScript +Frontend development with React",
            duration: "August 2020 - Feb 2021",
            desc: "Understanding how JavaScript works, from source code to machine code in a browser, involves mastering data types and control flow structures. Key concepts include functions, event handling, the DOM, and the JavaScript event loop model. Object-oriented programming with JavaScript, along with functional programming techniques—ranging from higher-order functions to functors, monoids, monads, and functional design patterns—are essential. Core programming principles, basic Node.js, and building applications using CRUD operations with JWT, Express.js, and MongoDB are fundamental for backend development. Asynchronous programming through callbacks, promises, and async/await, paired with writing clean code and basic refactoring, enhances code quality. On the frontend, React with Next.js necessitates an understanding of package managers and project setup, offering an overview of how React operates under the hood. This includes handling React elements, JSX in depth, the virtual DOM, component and component life cycle, and conditional rendering. Component architecture is further refined through React design patterns like Higher-Order Components, composite, and render props patterns. Additionally, mastering Flux and Redux for state management, forms, HTTP, routing, hooks, and the Context API are integral to building efficient React applications.",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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
            date: "May 2023 to Present",
            desc: "Led the successful development and delivery of multiple projects, showcasing exceptional technical skills and a deep understanding of fintech and payment gateway solutions.",
            descBullets: [
                "Mobile eWallet App",
                "Billing Portal Web App",
                "Picpicker Mobile App",
                "BCGE Web App(Non-Government)",
                "Dinger Portfolio Web App",
                "Dinger Admin Web App",
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
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/welldone_logo.png"),
            projectName: "Welldone",
            projectDesc: "Find the perfect freelance services for your business",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://www.welldone.im"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/tzt-logo.png"),
            projectName: "Trazitar",
            projectDesc: "The Best Shoes Online Shop in Yangon",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.trazitar.com"
            }]
        }
    ],
    display: false // Set false to hide this section, defaults to true
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
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
    number: "(+959) 768 931 860",
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