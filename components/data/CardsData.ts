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
      { label: "SquareSpace", icon: "squarespace" },
      { label: "GeneratePress", icon: "gp" },
    ],
  },  
  {
    id: 2,
    title: "Front-End Dev",
    titleIcon: "frontend",
    skills: [
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextjs" },
      { label: "TailWind CSS", icon: "tailwind" },
      { label: "CSS3/SCSS", icon: "sass" },
      { label: "JavaScript", icon: "javascript" },
      { label: "Git/GitHub", icon: "github" },
      { label: "TypeScript", icon: "typescript" },
      { label: "BootStrap", icon: "bootstrap" },
    ],
  },
  {
    id: 3,
    title: "Design & Prototype",
    titleIcon: "design",
    skills: [
      { label: "WireFraming", icon: "wireframing" },
      { label: "Figma", icon: "figma" },
      { label: "Photoshop", icon: "photoshop" },
      { label: "UI/UX", icon: "ux" },
      { label: "XD", icon: "xd" },
      { label: "Illustrator", icon: "illustrator" },
      { label: "After Effects", icon: "aftereffect" },
      { label: "InDesign", icon: "indesign" },
    ],
  },
  {
    id: 4,
    title: "SEO & Analytics",
    titleIcon: "seo",
    skills: [
      { label: "SEMRush", icon: "semrush" },
      { label: "Google Analytics", icon: "ga4" },
      { label: "PageSpeed", icon: "pagespeed" },
      { label: "Search Console", icon: "console" },
      { label: "MailChimp", icon: "mailchimp" },
      { label: "Klaviyo", icon: "klaviyo" },
      { label: "Site Audits", icon: "audit" },
      { label: "Schema Markup", icon: "schema" },
    ],
  },
]