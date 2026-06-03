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
      { label: "MySQL", icon: "mysql" },
      { label: "Headless CMS", icon: "headlesscms" },
      { label: "Elementor", icon: "elementor" },
      { label: "RESTFUL API", icon: "restapi" },
      { label: "Divi", icon: "divi" },
      { label: "Webflow", icon: "webflow" },
      { label: "GeneratePress", icon: "generatepress" },
    ],
  },
]