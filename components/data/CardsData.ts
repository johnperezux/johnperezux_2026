export interface CardData {
 id: number
  title: string
  skills: string[]
}

export const cardsData: CardData[] = [
    {
    id: 1,
    title: "WordPress & CMS",
    skills: [
      "ACF",
      "MySQL",
      "Headless CMS",
      "Elementor",
      "RESTFUL API",
      "Divi",
      "Webflow",
      "GeneratePress",
    ],
  },
  {
    id: 2,
    title: "Front-End Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass",
    ],
  },

]