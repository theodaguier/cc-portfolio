import { useState } from "react";

import "./../styles/components/accordion.scss";

import AccordionContent from "./AccordionContent";

import chevronDark from "./../assets/icons/chevron-b.svg";
import chevronLight from "./../assets/icons/chevron-w.svg";

import useMediaQuery from "beautiful-react-hooks/useMediaQuery";

function Accordion({ isLight, setLight, project }) {
  const isSmall = useMediaQuery("(max-width: 48rem)");

  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div
      className="accordion-container"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isSmall && (
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
          <div className="title-project" style={{ borderBottom: "solid" }}>
            <p>{project.name}</p>
          </div>
        </div>
      )}
      {!isSmall && (
        <div
          className="title-project"
          style={{ paddingLeft: "32px", borderBottom: "solid" }}
        >
          <p>{project.name}</p>
        </div>
      )}
      {isExpanded && <AccordionContent project={project} />}
    </div>
  );
}

export default Accordion;
