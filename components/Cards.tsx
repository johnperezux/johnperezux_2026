import { cardsData, CardData } from "./data/CardsData";
import WordPressIcon from "../icons/wordpress/WordPressIcon"
import ACFIcon from "../icons/wordpress/ACFIcon"


const titleIconMap: Record<string, React.ReactNode> ={
  wordpress: <WordPressIcon />,
}

const skillIconMap: Record<string, React.ReactNode> = {
  acf: <ACFIcon />,
}

const Card = ({ title, titleIcon, skills }: Omit<CardData, "id">) => {
  const half = Math.ceil(skills.length / 2)
  const leftSkills = skills.slice(0, half)
  const rightSkills = skills.slice(half)

  return (
    <div className="tool_card">
      <div className="card_title flex items-center gap-[15px] mb=[30px] justify-center">
        {titleIconMap[titleIcon]}
        <h3>{title}</h3>
      </div>
      <div className="card_skills flex gap-[30px] justify-center w-100% gap-[60px]">
        <ul className="skills_list">
          {leftSkills.map((skill) => (
            <li className="skill_item " key={skill.label}>
              {skillIconMap[skill.icon]}
              <span className="skill_name">{skill.label}</span>
            </li>
          ))}
        </ul>
        <ul className="skills_list">
          {rightSkills.map((skill) => (
            <li className="skill_item" key={skill.label}>
              {skillIconMap[skill.icon]}
              <span className="skill_name">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className="cards_grid">
      {cardsData.map((card) => (
        <Card key={card.id} title={card.title} titleIcon={card.titleIcon} skills={card.skills} />
      ))}
    </div>
  )
}

export default Cards