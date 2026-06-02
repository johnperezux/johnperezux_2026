export interface CardData {
 id: number
  title: string
  skills: string[]
}

export const cardsData: CardData[] = [
    {
    id: 1,
    title: "WordPresssss & CMS",
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
      "HTMgL5",
      "CSS/SASS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass",
      ],
    },
   {
    id: 3,
    title: "Design & Prototyping",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Framer",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],  
  },
   {
    id: 4,
    title: "SEO & Performance",
    skills: [
      "Google Analytics",
      "Google Search Console",
      "PageSpeed Insights",
      "Yoast SEO",
      "Rank Math",
      "GTmetrix",
      "Lighthouse",
    ],
    
  },

]