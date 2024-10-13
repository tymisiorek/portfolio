
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Ty",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    // {
    //   title: "Links",
    //   link: "/links",
    // },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/tymisiorek/",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Ty!",
  description: "I'm Currently a Third-Year Computer Science Student at the University of Virginia",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1N1y-Y6Z71xMro3zOavs2hDjM13AhWRph/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I'm a third-year Computer Science major in the School of Engineering at the University of Virginia, currently doing research in the School of Data Science. My academic and research experience has fueled my passion for AI and Machine Learning, and I'm excited to apply the skills I've learned to real-world challenges. Outside of school, some of my favorite things to do are playing basketball, listening to music, and playing with my dog. (She's a little too old to play now :/)",
  ],
}

// export const work = {
//   title: "What I do",
//   cards: [
//     {
//       title: "Mobile App Development",
//       description: "I create pixel perfect iOS and Andriod apps using Flutter.",
//       icons: null,
//     },
//     {
//       title: "Web Development",
//       description: "I create responsive static websites using Reactjs.",
//       icons: null,
//     }
//   ],
// }

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "SongScribe",
      description: "An interactive network visualization of the top Spotify artists, highlighting the interconnectedness of the music collaboration landscape.",
      icons: [
        // {
        //   icon: faAppStore,
        //   link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        // },
        {
          icon: faGithub,
          link: "https://github.com/tymisiorek/songscribe",
        },
      ]
    },
    {
      title: "Connected Data Hub",
      description: "Files from my research over the past year. Details the process and changes within the process over time.",
      icons: [
        // {
        //   icon: faAppStore,
        //   link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        // },
        {
          icon: faGithub,
          link: "https://github.com/tymisiorek/connected-data",
        },
      ]
    },
    {
      title: "theCourseForum",
      description: "Developer @ theCourseForum.com, the largest course review platform at UVA, serving 80% of the student body.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/thecourseforum",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to email me or connect on LinkedIn if you'd like to reach out!",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:tymisiorek@gmail.com",
      isPrimary: true,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/tymisiorek/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Ty Misiorek",
  description: "I'm Currently a Third-Year Computer Science Student at the University of Virginia.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@tymisiorek",
  description: "Ty Misiorek",
  cards: [
    {
      title: "My website",
      link: "https://tymisiorek.github.io/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/tymisiorek/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/tymisiorek/",
    },
  ]
}