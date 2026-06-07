import { workData, WorkData } from "./data/WorkData"


import SpicelopediaLogo from "../icons/work/SpicelopediaLogo"


const workIconMap: Record<string, React.ReactNode> ={
  spicelopedia: <SpicelopediaLogo />,

}


const Work = ({ workTitle, workIcon, workType }: Omit<WorkData, "id">) => {

  return (
    <a href="#">
        <div className="work_item">
            <div className="work_inner_item flex place-content-between items-center">
                <div className="work_title_icon flex gap-[30px] items-center">
                    {workIconMap[workIcon]}
                    <h3>{workTitle}</h3>
                </div>
                <div className="work_type">
                    {workType}
                </div>
            </div>
        </div>
    </a>


    // <div className="tool_card">
    //   <div className="card_title flex items-center gap-[15px] mb=[30px] justify-center">
    //     {titleIconMap[titleIcon]}
    //     <h3>{title}</h3>
    //   </div>
    //   <div className="card_skills flex gap-[30px] justify-around w-100% gap-[30px]">
    //     <ul className="skills_list">
    //       {leftSkills.map((skill) => (
    //         <li className="skill_item " key={skill.label}>
    //           {skillIconMap[skill.icon]}
    //           <span className="skill_name">{skill.label}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  )
}

const Works = () => {
  return (
    <div className="work_list flex flex-col m-[60px]">
      {workData.map((work) => (
        <Work key={work.id} workTitle={work.workTitle} workIcon={work.workIcon} workType={work.workType} />
      ))}
    </div>
  )
}

export default Works