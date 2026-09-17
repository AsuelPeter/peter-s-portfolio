export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  span?: "tall" | "wide" | "normal";
};

export const portfolioCategories = [
  "All",
  "Web Development",
  "STEMR Events",
  "Teen Handler Moments",
  "Electronic Engineering",
  "Community Involvement",
  "Renewable Energy",
] as const;

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery-nibot-web.webp",
    title: "NiBOT online platform",
    category: "Web Development",
    span: "wide",
  },
  {
    src: "/images/service-engineering.webp",
    title: "Embedded systems build",
    category: "Electronic Engineering",
  },
  {
    src: "/images/gallery-stemr-events.webp",
    title: "STEMR events",
    category: "STEMR Events",
    span: "tall",
  },
  {
    src: "/images/gallery-community.webp",
    title: "Community involvement",
    category: "Community Involvement",
    span: "tall",
  },
  {
    src: "/images/gallery-teen-handler.webp",
    title: "Teen handler moments",
    category: "Teen Handler Moments",
    span: "tall",
  },
  {
    src: "/images/gallery-electronics.webp",
    title: "Electronic engineering work",
    category: "Electronic Engineering",
  },
  {
    src: "/images/energy-solar.webp",
    title: "Solar installation",
    category: "Renewable Energy",
  },
  {
    src: "/images/energy-solar-group.webp",
    title: "Solar training group",
    category: "Renewable Energy",
  },
  {
    src: "/images/energy-install.webp",
    title: "Inverter installation",
    category: "Renewable Energy",
  },
  { src: "/images/workshop-1.webp", title: "Hands-on workshop", category: "STEMR Events" },
  { src: "/images/workshop-2.webp", title: "Classroom session", category: "STEMR Events" },
  {
    src: "/images/workshop-3.webp",
    title: "Robotics demonstration",
    category: "STEMR Events",
  },
  { src: "/images/workshop-4.webp", title: "Boot camp day one", category: "STEMR Events" },
  { src: "/images/workshop-5.webp", title: "Team build", category: "STEMR Events" },
  { src: "/images/workshop-6.webp", title: "Mentor session", category: "Teen Handler Moments" },
  { src: "/images/workshop-7.webp", title: "Coding practice", category: "STEMR Events" },
  {
    src: "/images/workshop-8.webp",
    title: "Community sensitisation",
    category: "Community Involvement",
  },
  { src: "/images/workshop-9.webp", title: "Presentation day", category: "STEMR Events" },
  { src: "/images/workshop-10.webp", title: "Teen innovators", category: "Teen Handler Moments" },
  {
    src: "/images/workshop-11.webp",
    title: "School outreach",
    category: "Community Involvement",
  },
  { src: "/images/workshop-12.webp", title: "Project showcase", category: "STEMR Events" },
  { src: "/images/energy-1.webp", title: "Site survey", category: "Renewable Energy" },
  { src: "/images/energy-2.webp", title: "Panel mounting", category: "Renewable Energy" },
  { src: "/images/energy-3.webp", title: "Wiring & commissioning", category: "Renewable Energy" },
  { src: "/images/energy-4.webp", title: "Battery bank", category: "Renewable Energy" },
  { src: "/images/energy-5.webp", title: "Training installers", category: "Renewable Energy" },
  { src: "/images/energy-6.webp", title: "Rooftop array", category: "Renewable Energy" },
  { src: "/images/energy-7.webp", title: "Inverter setup", category: "Renewable Energy" },
  { src: "/images/energy-8.webp", title: "Solar workshop", category: "Renewable Energy" },
];
