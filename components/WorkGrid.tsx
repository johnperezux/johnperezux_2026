'use client';

import { useRef } from 'react';
import { workData, WorkData } from './data/WorkData';
import { workIconMap } from './data/workIconMap';

const WorkGrid = ({
  workTitle,
  workIcon,
  workType,
  workURL,
}: Omit<WorkData, 'id'>) => {
  const icon = workIconMap[workIcon];

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
      className="work_grid_link work_link relative"
      href={workURL}
      onMouseMove={handleMouseMove}
      target="__blank"
    >
      <div className="work_grid_item">
        <div className="work_grid_inner_item">
          <div className="work_icon">{icon}</div>
        </div>
        <div className="see_more_btn" ref={btnRef}>
          see more
        </div>
      </div>
    </a>
  );
};

const WorksGrid = () => {
  return (
    <div className="work_grid">
      {workData.map((work) => (
        <WorkGrid
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

export default WorksGrid;
