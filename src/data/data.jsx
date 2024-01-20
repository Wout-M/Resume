import MailIcon from "../components/icons/MailIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GlobeIcon from "../components/icons/GlobeIcon";

export const resume_data = {
    name: "Wout Mergaerts",
    description: ".NET Developer focused on making fun projects with attention to detail",
    about: "I've been interested in programming and tinkering since childhood, making Java mods for Minecraft and creating projects with an Arduino. This got me into volunteering with CoderDojo in high school and going for an IT degree in college. Since 2020 I've been working as a .NET developer while making fun projects with .NET or React on the side.",
    image: "https://avatars.githubusercontent.com/u/38492330?v=4",
    links: [
        {
            icon: <MailIcon />,
            url: "mailto:wout.mergaerts@gmail.com"
        },
        {
            icon: <GlobeIcon />,
            url: "https://woutmergaerts.netlify.app/"
        },
        {
            icon: <GithubIcon />,
            url: "https://github.com/Wout-M"
        },
        {
            icon: <LinkedInIcon />,
            url: "https://www.linkedin.com/in/wout-mergaerts/"
        }
    ],
    experience: [
        {
            company: "Build-Software",
            link: "https://build-software.eu",
            start: "Since Sep. 2020",
            end: "",
            title: ".NET Developer → Integrations Team Lead",
            description: "Started as .NET developer implementing new functionality in VB.NET or C#. Quickly moved on to bigger projects like integrations with external apps & APIs, refactoring for performance improvements & maintainability and migrating from .NET Framework to .NET Core. Since 2023 I'm leading the team responsible for integrations with Outlook & Sharepoint (through Graph), planning software and various accounting programs.",
            technologies: ["C#/VB.NET/.NET", "Entity Framework (Core)", "Winforms", "SQL Server", "Blazor", "REST API"]
        },
        {
            company: "Brainjar",
            link: "https://brainjar.ai",
            start: "Mar. 2020",
            end: "May 2020",
            title: "Internship: Objective scoring in sport",
            description: "Research if scoring in dressage is possible with Pose Estimation. To make the research easier, I also created a web application with Docker, Flask & React to easily upload and annonate videos.",
            technologies: ["Python", "DeepLabCut", "Docker", "React", "Flask"]
        },
        {
            company: "Bpost",
            link: "https://www.bpost.be",
            start: "Jul. 2018",
            end: "Aug. 2018",
            title: "Summer job: Postman",
            description: "Sorting & delivering letters and packages by bicycle and van.",
            technologies: []
        },
    ],
    education: [
        {
            school: "Thomas More Geel",
            degree: "Bachelor's Degree Applied Computer Science: Application Development",
            start: "2017",
            end: "2020"
        },
        {
            school: "Western Norway University of Applied Sciences",
            degree: "Erasmus semester: Advanced Web Applications, Machine Learning & Advanced Algorithms, Selected Topics in ICT",
            start: "Aug 2019",
            end: "Dec. 2019"
        },
        {
            school: "Group T",
            degree: "Bachelor of Engineering Technology",
            start: "2016",
            end: "2017"
        },
    ],
    certificates: [
        {
            name: "AI-102: Azure AI Engineer Associate",
            year: "2022",
            location: "Microsoft"
        },
        {
            name: "MS-600: Building Applications and Solutions with Microsoft 365 Core Services",
            year: "2021",
            location: "Microsoft"
        },
        {
            name: "Advanced .NET 5 Web Development with Visual Studio 2019",
            year: "2021",
            location: "U2U"
        }
    ],
    skills: [
        {
            area: "Desktop",
            skills: [
                "C#/VB.NET/.NET",
                "Entity Framework (Core)",
                "Winforms",
                "SQL Server",
            ]
        },
        {
            area: "Web",
            skills: [
                "Blazor",
                "React",
                "JavaScript",
                "HTML5",
                "CSS3"
            ]
        },
        {
            area: "Others",
            skills: [
                "Devops",
                "CI/CD Pipelines",
                "Docker",
                "Windows",
                "Linux",
            ]
        },
    ],
    languages: [
        {
            name: "Dutch",
            level: "Mother Tongue"
        },
        {
            name: "English",
            level: "C1"
        },
        {
            name: "French",
            level: "B2"
        }
    ],
    projects: [
        {
            name: "Hungry Pig",
            description: "A symbolic comparison game for testing the cognitive development of prematurely born pre-schoolers.",
            technologies: ["Blazor", "MudBlazor", "Fluxor", ".NET 6"],
            link: "https://wout-m.github.io/HungryPig/"
        },
        {
            name: "Face Snake",
            description: "Play the famous Snake game using the position of your face in the camera.",
            technologies: ["React", "Javascript", "Tensorflow.js", "Material-UI"],
            link: "https://face-snake.netlify.app"
        },
        {
            name: "Portfolio Website",
            description: "A portfolio website made with React & Radix",
            technologies: ["React", "Javascript", "Radix", "Netlify"],
            link: "https://woutmergaerts.netlify.app/"
        },
        {
            name: "KGB Bot",
            description: "A Dicord bot that keeps track of deleted/edited messages for admins of servers that also has some fun games for members.",
            technologies: ["Discord.NET", "Quartz.NET", ".NET 6", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        },
        {
            name: "Wanderer Bot",
            description: "A Discord bot for a fantasy themed reading server of a famous YouTuber. Sorts people in their respective guilds.",
            technologies: ["Discord.NET", "Quartz.NET", ".NET 6", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        },
        {
            name: "ExWi Bot",
            description: "A Discord bot for the server of the science department of the university of Bern that keeps track of deleted/edited messages & sorts people in their respective degrees.",
            technologies: ["Discord.NET", ".NET 6", "Docker"],
            link: "https://github.com/Wout-M/Discord-Net-Bots"
        }
    ]
}
