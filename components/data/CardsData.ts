export interface CardData {
  id: number
  title: string
  titleIcon: string
  skills: {
    label: string
    icon: string
  }[]
}

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "WordPress & CMS",
    titleIcon: "wordpress",
    skills: [
      { label: "ACF", icon: "acf" },
      { label: "MySQL", icon: "sql" },
      { label: "Elementor", icon: "elementor" },
      { label: "PHP", icon: "cms" },
      { label: "RESTFUL API", icon: "restapi" },
      { label: "Shopify", icon: "shopify" },
      { label: "Webflow", icon: "webflow" },
      { label: "GeneratePress", icon: "gp" },
    ],
  },  
  {
    id: 1,
    title: "Front-End Dev",
    titleIcon: "wordpress",
    skills: [
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "sql" },
      { label: "TailWind CSS", icon: "elementor" },
      { label: "CSS3/SCSS", icon: "cms" },
      { label: "JavaScript", icon: "restapi" },
      { label: "Git/GitHub", icon: "divi" },
      { label: "TypeScript", icon: "webflow" },
      { label: "BootStrap", icon: "gp" },
    ],
  },
  {
    id: 1,
    title: "Design & Prototyping",
    titleIcon: "wordpress",
    skills: [
      { label: "ACF", icon: "acf" },
      { label: "MySQL", icon: "sql" },
      { label: "Elementor", icon: "elementor" },
      { label: "PHP", icon: "cms" },
      { label: "RESTFUL API", icon: "restapi" },
      { label: "Divi", icon: "divi" },
      { label: "Webflow", icon: "webflow" },
      { label: "GeneratePress", icon: "gp" },
    ],
  },
  {
    id: 1,
    title: "SEO & Analytics",
    titleIcon: "wordpress",
    skills: [
      { label: "ACF", icon: "acf" },
      { label: "MySQL", icon: "sql" },
      { label: "Elementor", icon: "elementor" },
      { label: "PHP", icon: "cms" },
      { label: "RESTFUL API", icon: "restapi" },
      { label: "Divi", icon: "divi" },
      { label: "Webflow", icon: "webflow" },
      { label: "GeneratePress", icon: "gp" },
    ],
  },
]