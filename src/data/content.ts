export interface Role {
  title: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
}

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  description: string;
  note?: string;
  href?: string;
  screenshot: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    crop?: boolean;
  };
}

export const projects: Project[] = [
  {
    id: "breezepilot",
    title: "BreezePilot",
    category: "Featured project / Open source",
    summary: "Control your AC from your iPhone’s Home Screen.",
    tags: ["Open source", "SwiftUI", "WidgetKit"],
    description:
      "Turn your AC on or off, set the temperature, and adjust the fan right from your iPhone’s Home Screen.",
    note: "Works with compatible Daikin and Xiaomi/Mijia units over home Wi-Fi.",
    href: "https://github.com/augarte/BreezePilot",
    screenshot: {
      src: "/breezepilot-controls.webp",
      width: 880,
      height: 1913,
      alt: "BreezePilot connected to an AC, showing a cooling target of 26.5°C and buttons to adjust it.",
      caption: "BreezePilot / Cooling controls",
      crop: true,
    },
  },
  {
    id: "simple-line-chart",
    title: "Simple Line Chart",
    category: "Open source / UIKit",
    summary: "UIKit line charts with custom styling and time-range filters.",
    tags: ["Open source", "UIKit"],
    description:
      "A lightweight UIKit chart library with customizable styling, multiple datasets, and time-range filters.",
    note: "Customize the lines, points, and background. Install it with Swift Package Manager or CocoaPods.",
    href: "https://github.com/augarte/SimpleLineChart",
    screenshot: {
      src: "/simple-line-chart.webp",
      width: 880,
      height: 737,
      alt: "A Simple Line Chart example with a blue line, circular data points, and a shaded area beneath it.",
      caption: "Simple Line Chart / Custom styling",
    },
  },
];

export const experience: Experience[] = [
  {
    company: "Nomasystems S.L.",
    location: "Spain · Remote",
    period: "2022–Present",
    roles: [
      {
        title: "iOS Engineer",
        period: "Jun 2022 — Present",
        type: "Full-time",
        description:
          "Build native iOS features and help improve the architecture behind Inditex retail apps, including Zara.",
        highlights: [
          "Led efforts to modernize the codebase and split core components into modules that could scale across apps.",
          "Built features and UI components with attention to performance and maintainability. Used code reviews, unit tests, and SOLID principles to keep the codebase easy to change.",
          "Worked with product, UX, and QA to ship weekly releases and respond to design changes using Scrum and Kanban.",
        ],
      },
    ],
  },
  {
    company: "NTS SEIDOR",
    location: "Bilbao Area, Spain",
    period: "2019–2022",
    roles: [
      {
        title: "Mobile Application Developer",
        period: "Jun 2019 — Jun 2022",
        type: "Full-time",
        description:
          "Developed and maintained native iOS and Android apps.",
        highlights: [
          "Worked directly with the client to define requirements and iterate on feedback in Scrum.",
          "Maintained SonarQube, Fastlane, and Google Analytics integrations for code quality, deployment automation, and app analytics.",
          "Used GitFlow, code reviews, and linting to keep the codebase consistent.",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "Jan 2019 — May 2019",
        type: "Internship",
        description:
          "Helped build a hybrid Ionic app for remote control of smart industrial appliances.",
        highlights: [
          "Worked on web and mobile interfaces and integrated APIs for connected devices.",
        ],
      },
    ],
  },
  {
    company: "Eurohelp Consulting",
    location: "San Sebastián, Spain",
    period: "2018",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "May 2018 — Jun 2018",
        type: "Internship",
        description:
          "Built features for the company intranet using Java and Struts.",
        highlights: [
          "Worked with the development team on an existing codebase for internal tools.",
        ],
      },
    ],
  },
];

export const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Concurrency",
  "Architecture",
] as const;

export const socials = {
  github: "https://github.com/augarte",
  linkedin: "https://www.linkedin.com/in/aimarugarte/",
  email: "ugarteaimar@gmail.com",
} as const;
