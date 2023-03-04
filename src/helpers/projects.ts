import type { Project } from "@/types";

const mainProjects: Project[] = [
  {
    id: 1,
    title: "College Gate",
    src: "",
    description: "Entry-Exit Automation. A highly automated entry/exit gate pass system is composed of four panels.",
    techList: ["Flutter", "Firebase", "Dart"],
    repoUrl: "https://college-gate-dbd50.web.app/",
    liveUrl: "https://play.google.com/store/apps/details?id=com.iiitl.college_gate",
    type: "main",
    url:"https://drive.google.com/file/d/1SCRDCNcb06TItTWNnPBh5iOSQOjAeuHn/view?usp=sharing"
  },
  {
    id: 2,
    title: "Talk GPT",
    src: "/assets/projects/rest-countries.jpg",
    description: "The AI bot which gives the result based on the voice Input. Integration of API and front-end Framework.",
    techList: ["Flutter", "Firebase", "NodeJS", "ExpressJS"],
    repoUrl: "https://github.com/DHRUVA-N-L-CHOUDHARY/talkGPT",
    liveUrl: "https://drive.google.com/file/d/1iptEzHsxGJm-BstkYKN5Y8QCVAlD1LP1/view?usp=sharing",
    type: "main",
    url:"https://drive.google.com/file/d/1SCRDCNcb06TItTWNnPBh5iOSQOjAeuHn/view?usp=sharing"
  },
  {
    id: 3,
    title: "Capital Holding Co",
    src: "/assets/projects/countdown-timer.jpg",
    description: "This application works like a wallet giving statement of Expenses and income.",
    techList: ["Flutter", "Firebase", "Dart"],
    repoUrl: "https://github.com/DHRUVA-N-L-CHOUDHARY/freelanceproject",
    liveUrl: "https://drive.google.com/file/d/1evMzEBPfTwAcRQwhmZi0_gcHFeLaYmnm/view?usp=share_link",
    type: "main",
    url:"https://drive.google.com/file/d/1SCin-buD7wjfXjYpd7YYK1QEySRYJ605/view?usp=sharing"
  },
  {
    id: 4,
    title: "E-Connect",
    src: "/assets/projects/cc-interactive.jpg",
    description: "An interactive credit card with card animation and form validation",
    techList: ["Flutter", "Firebase", "Dart"],
    repoUrl: "https://github.com/DHRUVA-N-L-CHOUDHARY/smart_talk-main",
    liveUrl: "https://drive.google.com/file/d/1W_2do8erOAnpGLg2gI3H8OrbUb1RAVA-/view?usp=share_link",
    type: "main",
    url:"https://drive.google.com/file/d/1SCnRttkVtrvlJCLIB9Md5y_CCuDvSWlV/view?usp=sharing"
  },
  {
    id: 5,
    title: "VyamBhog",
    description:"A Food Delivery application by Incubation Center of IIIT Lucknow",
    src: "/assets/projects/multistep-form.jpg",
    techList: ["Flutter", "NodeJS", "Express JS", "Firebase"],
    repoUrl: "https://github.com/DHRUVA-N-L-CHOUDHARY/vyayam-bhog-frontend",
    liveUrl: "",
    type: "main",
    url:""
  },
  // {
  //   id: 6,
  //   title: "Space Tourism",
  //   src: "/assets/projects/space-tourism.jpg",
  //   techList: ["Typescript", "NextJs", "Styled Components", "Framer Motion"],
  //   repoUrl: "https://github.com/zulmy-azhary/space-tourism",
  //   liveUrl: "https://zoel-space-tourism.vercel.app/",
  //   type: "main"
  // },
  // {
  //   id: 7,
  //   title: "Fake Store",
  //   src: "/assets/projects/fake-store.jpg",
  //   techList: ["Typescript", "ReactJs", "Material UI", "React Router DOM"],
  //   repoUrl: "https://github.com/zulmy-azhary/fake-store",
  //   liveUrl: "https://fake-store-demo.vercel.app/store",
  //   type: "main"
  // }
];

const unfinishedProjects: Project[] = [
  {
    id: 1,
    title: "Fast Shop",
    description: "A realtime E-commerce application",
    techList: [
      "Flutter","Firebase","Dart","NodeJS","MongoDB","ExpressJS"
    ],
    repoUrl: "https://github.com/DHRUVA-N-L-CHOUDHARY/Fast_shop",
    liveUrl: "https://drive.google.com/file/d/15u3l-79aXMSPXNs85J_g3NHCITCE11W2/view?usp=sharing",
    type: "unfinished",
    url:"https://drive.google.com/file/d/1Qt5iXr39eZx-JRomCdi4As4JAdqmNrxT/view?usp=sharing"
  }
];

// const otherProjects: Project[] = [
//   {
//     id: 1,
//     title: "Easybank Landingpage",
//     src: "/assets/projects/easybank.jpg",
//     techList: ["Javascript", "ReactJs"],
//     repoUrl: "https://github.com/zulmy-azhary/easybank-landingpage",
//     liveUrl: "https://ezbank.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 2,
//     title: "Rock Paper Scissors",
//     src: "/assets/projects/rock-paper-scissors.jpg",
//     techList: ["Typescript", "ReactJs", "Styled Components", "Framer Motion", "Vite"],
//     repoUrl: "https://github.com/zulmy-azhary/roshambo",
//     liveUrl: "https://roshambo-minigame.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 3,
//     title: "Sunnyside Landingpage",
//     src: "/assets/projects/sunnyside.jpg",
//     techList: ["Typescript", "Vue", "TailwindCSS"],
//     repoUrl: "https://github.com/zulmy-azhary/sunnyside-landingpage",
//     liveUrl: "https://zoel-sunnyside.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 4,
//     title: "Krypto Landingpage",
//     techList: ["Typescript", "NextJs", "Styled Components"],
//     repoUrl: "https://github.com/zulmy-azhary/krypto-landingpage",
//     type: "others"
//   },
//   {
//     id: 5,
//     title: "Todo React TS",
//     techList: ["Typescript", "ReactJs", "Material UI", "Vite"],
//     repoUrl: "https://github.com/zulmy-azhary/todo-react-ts",
//     liveUrl: "https://todo-reactts.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 6,
//     title: "React Notes",
//     techList: ["Javascript", "ReactJs"],
//     repoUrl: "https://github.com/zulmy-azhary/react-notes",
//     type: "others"
//   },
//   {
//     id: 7,
//     title: "Calculator App",
//     src: "/assets/projects/calculator-app.jpg",
//     techList: ["Typescript", "Svelte"],
//     repoUrl: "https://github.com/zulmy-azhary/calculator-app",
//     liveUrl: "https://zoel-calculator.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 8,
//     title: "Loopstudios Landingpage",
//     src: "/assets/projects/loopstudios.jpg",
//     techList: ["Typescript", "Svelte", "TailwindCSS"],
//     repoUrl: "https://github.com/zulmy-azhary/loopstudios",
//     liveUrl: "https://zoel-loopstudios.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 9,
//     title: "Gerai Design",
//     src: "/assets/projects/gerai-design.jpg",
//     techList: ["Typescript", "ReactJs", "TailwindCSS"],
//     repoUrl: "https://github.com/zulmy-azhary/gerai-design",
//     liveUrl: "https://gerai-design.vercel.app/",
//     type: "others"
//   },
//   {
//     id: 10,
//     title: "Realtime Chat App",
//     techList: ["Javascript", "NextJs", "Firebase", "Chakra UI"],
//     repoUrl: "https://github.com/zulmy-azhary/realtime-chat-app",
//     liveUrl: "https://next-chatapp.vercel.app/",
//     type: "others"
//   }
// ];

export const allProjects: Project[] = [...mainProjects, ...unfinishedProjects, ];
