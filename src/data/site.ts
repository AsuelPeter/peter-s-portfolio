export const site = {
  name: "Peter Asuelinmhen",
  role: "STEM Educator || Electronic Engineer || Teen Handler",
  tagline: "Empowering teens in STEM and nurturing future innovators.",
  shortBio:
    "STEM educator and electrical/electronic engineer helping teens and organisations build real-world skills in robotics, renewable energy and technology.",
  description:
    "Peter Asuelinmhen is a STEM educator and electrical/electronic (computer) engineer empowering teens through robotics, renewable energy, technical writing and hands-on STEM mentorship.",
  url: "https://peter.nibot.africa",
  company: "NiBOT Engineering",
  companyTagline: "Building innovative minds for the future",
  email: "peter@nibot.africa",
  phone: "+234-706-198-1127",
  phoneHref: "tel:+2347061981127",
  whatsapp:
    "https://wa.me/2347061981127?text=Hello%2C%20I%27m%20interested%20in%20your%20STEM%20programs%20or%20procurement%20and%20installation",
  location: "Rivers State, Nigeria",
  availability: "Available for workshops, mentorship and engineering projects",
} as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/omonchere/",
  instagram: "https://www.instagram.com/asuelpeter/",
  facebook: "https://web.facebook.com/Siz.4.christ",
  youtube: "https://www.youtube.com/watch?v=K3DF-NP6Fog",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Renewable Energy", href: "/renewable-energy" },
  { label: "Workshops", href: "/workshops" },
  { label: "Mentorship", href: "/mentorship" },
] as const;

export const headerNav = nav.filter((item) => item.href !== "/renewable-energy");

export const stats = [
  { value: "10+", label: "Years in engineering" },
  { value: "1,000+", label: "Teens reached" },
  { value: "6", label: "Programmes offered" },
  { value: "2", label: "Peer-reviewed publications" },
] as const;
