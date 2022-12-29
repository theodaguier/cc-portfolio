import { useState } from "react";

import "./../styles/components/accordion.scss";

import AccordionContent from "./AccordionContent";

import chevron from "./../assets/icons/chevron-b.svg";

function Accordion({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="accordion-container"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="accordion">
        <div className="accordion-i">
          <img
            className="chevron"
            src={chevron}
            alt="chevron"
            style={{ transform: `rotate(${isExpanded ? 90 : 0}deg)` }}
          />
        </div>
        <div className="title-project">
          <p>{project.name}</p>
        </div>
      </div>
      {isExpanded && <AccordionContent project={project} />}
    </div>
  );
}

export default Accordion;
