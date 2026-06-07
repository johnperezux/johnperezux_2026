import { cardsData, CardData } from "./data/CardsData"
import WordPressIcon from "../icons/wordpress/WordPressIcon"
import ACFIcon from "../icons/wordpress/ACFIcon"
import SQLIcon from "../icons/wordpress/SQLIcon"
import ElementorIcon from "@/icons/wordpress/Elementor"
import PHPIcon from "@/icons/wordpress/PHPIcon"
import GPIcon from "@/icons/wordpress/GPIcon"
import WebFlowIcon from "@/icons/wordpress/WebFlowIcon"
import APIIcon from "@/icons/wordpress/APIIcon"
import ShopifyIcon from "@/icons/wordpress/ShopifyIcon"
import ReactIcon from '@/icons/front-end/React'
import SemrushIcon from '@/icons/seo/SemrushIcon'
import GaIcon from '@/icons/seo/GaIcon'
import PageSpeedIcon from '@/icons/seo/PageSpeedIcon'
import ConsoleIcon from '@/icons/seo/ConsoleIcon'
import MailChimpIcon from '@/icons/seo/MailChimpIcon'
import KlaviyoIcon from '@/icons/seo/KlaviyoIcon'
import AuditIcon from '@/icons/seo/AuditIcon'
import SchemaIcon from '@/icons/seo/SchemaIcon'



const titleIconMap: Record<string, React.ReactNode> ={
  wordpress: <WordPressIcon />,
}

const skillIconMap: Record<string, React.ReactNode> = {
  acf: <ACFIcon />,
  sql:<SQLIcon/>,
  elementor:<ElementorIcon/>,
  cms:<PHPIcon/>,
  gp:<GPIcon/>,
  shopify:<ShopifyIcon/>,
  webflow:<WebFlowIcon/>,
  restapi:<APIIcon/>,
  react:<ReactIcon/>,
  semrush:<SemrushIcon/>,
  ga4:<GaIcon/>,
  pagespeed:<PageSpeedIcon/>,
  console:<ConsoleIcon/>,
  mailchimp:<MailChimpIcon/>,
  klaviyo:<KlaviyoIcon/>,
  audit:<AuditIcon/>,
  schema:<SchemaIcon/>,
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