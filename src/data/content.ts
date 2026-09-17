export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "stemr-workshop",
    title: "STEMR Workshops",
    description:
      "Engaging, hands-on workshops designed to spark curiosity and creativity in teens. I help you plan and strategise your STEM boot camp for maximum impact.",
    image: "/images/service-workshop.webp",
    icon: "workshop",
  },
  {
    slug: "stem-curriculum",
    title: "STEM Curriculum Development",
    description:
      "Struggling to pick the best STEM content? I craft educational material that fosters a love for science, technology, engineering, mathematics and robotics.",
    image: "/images/service-curriculum.webp",
    icon: "curriculum",
  },
  {
    slug: "electronic-engineering",
    title: "Electronic Engineering",
    description:
      "Designing, building and troubleshooting hardware and embedded systems. I create platforms with the latest look and feel, and can source hardware for you too.",
    image: "/images/service-engineering.webp",
    icon: "chip",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    description:
      "From procurement to installation and maintenance. If you need a renewable energy expert, I provide reliable, optimal energy solutions.",
    image: "/images/service-energy.webp",
    icon: "solar",
  },
  {
    slug: "teen-mentorship",
    title: "Teen Mentorship",
    description:
      "One-on-one guidance for teenagers pursuing a STEM career, with digital resources for teens and educators who want to go further.",
    image: "/images/gallery-teen-handler.webp",
    icon: "mentor",
  },
  {
    slug: "technical-writing",
    title: "Technical Writing",
    description:
      "Precision in every word and clarity in every concept — documentation, reports and communication that make complex technology easy to understand.",
    image: "/images/service-curriculum.webp",
    icon: "pen",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

export const featuredProjects: Project[] = [
  {
    title: "STEM & Robotics Boot Camp",
    description:
      "A virtual summer STEM, robotics and AI holiday boot camp for teenagers.",
    image: "/images/project-bootcamp.webp",
    tag: "Boot Camp",
  },
  {
    title: "OWSD UNIPORT",
    description:
      "Facilitator for a coding and robotics boot camp project for STEM girls.",
    image: "/images/project-owsd.webp",
    tag: "Facilitation",
  },
  {
    title: "School Outreach",
    description:
      "Collaboratively organising school sensitisation on basic and trending IT technologies.",
    image: "/images/project-outreach.webp",
    tag: "Community",
  },
  {
    title: "NYSC Community Service",
    description:
      "Technical Director for waste-management digitisation and IT community projects.",
    image: "/images/project-nysc.webp",
    tag: "Leadership",
  },
];

export type Skill = { name: string; detail?: string; level: number };

export const skills: Skill[] = [
  { name: "Training & Mentoring", level: 75 },
  { name: "Public Speaking", level: 85 },
  { name: "Technical Writing", level: 80 },
  {
    name: "Web Development",
    detail: "WordPress, HTML5, Tailwind CSS, Bun.js",
    level: 95,
  },
  {
    name: "Embedded Systems",
    detail: "Embedded C/C++, Proteus, LabVIEW, MATLAB, Python",
    level: 85,
  },
  { name: "Procurement & Installation", detail: "Purchase, logistics, maintenance", level: 95 },
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "2023 — Present",
    company: "NiBOT Engineering",
    role: "Founder",
    description:
      "Promoting STEM education and innovation through robotics, 3D printing and renewable energy, leading a team building cutting-edge, sustainable solutions.",
  },
  {
    period: "2022",
    company: "National Youth Service Corps (NYSC)",
    role: "Technical Director — Education Development & ICT CDS",
    description:
      "Organised in-house and school sensitisation programmes on basic and trending IT technologies in Umuahia, Abia State, enlightening students on ICT.",
  },
  {
    period: "2017 — 2023",
    company: "Teenagers Outreach Ministries (TOM), Rivers",
    role: "Teen Handler & Team Lead, IT Affairs",
    description:
      "Equipped teenagers in Rivers State with the information-technology skills needed to thrive in an emerging global technological space.",
  },
  {
    period: "2016 — 2021",
    company: "Copetrn Engineering Limited",
    role: "Web / Embedded Developer",
    description:
      "Responsible for in-house and client web development, and built and configured hardware prototypes and software applications to project quality standards.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
};

export const publications: Publication[] = [
  {
    title: "Development of a Web Application for Mobile Broadband Performance Measurement",
    venue:
      "European Journal of Advances in Engineering and Technology, 9(1):6-12 — ISSN: 2394-658X",
    year: "2022",
  },
  {
    title:
      "Mobile Broadband Performance Measurement Using Isp-Perf and Speedtest.Net",
    venue:
      "Conference on Sustainable Engineering and Industrial Technology, Faculty of Engineering, University of Nigeria, Nsukka",
    year: "2020",
  },
];

export const aboutParagraphs = [
  "I am a zealous Electrical/Electronic (Computer) Engineering graduate dedicated to inspiring and guiding the next generation of innovators. My journey in STEM has exposed me to developing experiences that make people's lives simpler.",
  "What truly fuels my passion is sharing my knowledge and experience with others. I firmly believe education is the key to unlocking the potential of every individual, and I am dedicated to nurturing curiosity, creativity and problem-solving skills.",
  "As a STEMR educator I am committed to fostering diversity and inclusion in the field. Innovation thrives when people from all backgrounds and perspectives collaborate and create, so I encourage students of every gender, ethnicity and background to pursue their STEM passions.",
  "My journey in STEM education has been incredibly rewarding. Together we can spark the curiosity that leads to discovery, the determination that fuels progress, and the imagination that shapes the future of technology and science.",
];

export const videos = [
  { title: "STEM outreach highlight", href: "https://www.youtube.com/watch?v=K3DF-NP6Fog" },
  { title: "Robotics & coding session", href: "https://www.youtube.com/watch?v=RN4XABhK7_w" },
];
