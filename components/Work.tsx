'use client';

import { useRef, useEffect } from 'react';
import { workData, WorkData } from './data/WorkData';
import { workIconMap } from './data/workIconMap';

const Work = ({
  workTitle,
  workIcon,
  workType,
  workURL,
}: Omit<WorkData, 'id'>) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  const updatePosition = () => {
    if (!linkRef.current || !btnRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = mousePos.current.x - rect.left;
    const y = mousePos.current.y - rect.top;
    btnRef.current.style.left = `${x}px`;
    btnRef.current.style.top = `${y}px`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    isHovering.current = true;
    mousePos.current = { x: e.clientX, y: e.clientY };
    updatePosition();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    updatePosition();
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  useEffect(() => {
    const onScroll = () => {
      if (isHovering.current) updatePosition();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      ref={linkRef}
      className="work_link relative"
      href={workURL}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
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
  const recentWork = workData.slice(0, 6);

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
