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
      { label: "SquareSpace", icon: "webflow" },
      { label: "GeneratePress", icon: "gp" },
    ],
  },  
  {
    id: 1,
    title: "Front-End Dev",
    titleIcon: "frontend",
    skills: [
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "sql" },
      { label: "TailWind CSS", icon: "tailwind" },
      { label: "CSS3/SCSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "Git/GitHub", icon: "git" },
      { label: "TypeScript", icon: "typescript" },
      { label: "BootStrap", icon: "bs" },
    ],
  },
  {
    id: 1,
    title: "Design & Prototyping",
    titleIcon: "design",
    skills: [
      { label: "Photoshop", icon: "photoshop" },
      { label: "Illustrator", icon: "illustrator" },
      { label: "InDesign", icon: "indesign" },
      { label: "Figma", icon: "figma" },
      { label: "XD", icon: "xd" },
      { label: "After Effects", icon: "aftereffect" },
      { label: "UI/UX", icon: "ux" },
      { label: "WireFraming", icon: "wireframing" },
    ],
  },
  {
    id: 1,
    title: "SEO & Analytics",
    titleIcon: "seo",
    skills: [
      { label: "Google Analytics", icon: "ga4" },
      { label: "SEMRush", icon: "semrush" },
      { label: "PageSpeed", icon: "pagespeed" },
      { label: "Search Console", icon: "console" },
      { label: "MailChimp", icon: "mailchimp" },
      { label: "Klaviyo", icon: "klaviyo" },
      { label: "Site Audits", icon: "technical" },
      { label: "Schema Markup", icon: "schema" },
    ],
  },
]