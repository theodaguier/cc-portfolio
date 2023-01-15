import { useState } from "react";

import "./../styles/components/accordion.scss";

import AccordionContent from "./AccordionContent";

import chevronDark from "./../assets/icons/chevron-b.svg";
import chevronLight from "./../assets/icons/chevron-w.svg";

function Accordion({ isLight, setLight, project }) {
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
            src={isLight ? chevronDark : chevronLight}
            alt="chevron"
            style={{
              width: 16,
              height: 20,
              transform: `rotate(${isExpanded ? 90 : 0}deg)`,
            }}
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
