'use client';

import { useRef } from 'react';
import { workData, WorkData } from './data/WorkData';

import { workIconMap } from './data/workIconMap';

const Work = ({
  workTitle,
  workIcon,
  workType,
  workURL,
}: Omit<WorkData, 'id'>) => {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (btnRef.current) {
      btnRef.current.style.left = `${x}px`;
      btnRef.current.style.top = `${y}px`;
    }
  };

  return (
    <a
      className="work_link relative"
      href={workURL}
      onMouseMove={handleMouseMove}
      target="__blank"
    >
      <div className="work_item">
        <div className="work_inner_item flex flex-col md:flex-row place-content-between items-center gap-[0] flex-wrap">
          <div className="work_title_icon flex flex-col md:flex-row gap-[30px] items-center flex-wrap">
            {workIconMap[workIcon]}
            <h3>{workTitle}</h3>
          </div>
          <p className="work_type">{workType}</p>
        </div>
        <div className="see_more_btn z-0" ref={btnRef}>
          see more
        </div>
      </div>
    </a>
  );
};

const Works = () => {
  const recentWork = workData.slice(0, 5);

  return (
    <div className="work_list flex flex-col mt-[60px] mb-[60px]">
      {recentWork.map((work) => (
        <Work
          key={work.id}
          workTitle={work.workTitle}
          workIcon={work.workIcon}
          workType={work.workType}
          workURL={work.workURL}
        />
      ))}
    </div>
  );
};

export default Works;
