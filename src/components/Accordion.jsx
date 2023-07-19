import { useState } from "react";
import Media from "react-media";

import AccordionContent from "./AccordionContent";
import chevronDark from "./../assets/icons/chevron-b.svg";
import chevronLight from "./../assets/icons/chevron-w.svg";

export default function Accordion({ isLight, setLight, project }) {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Media query="(max-width: 950px)">
        {(matches) =>
          matches ? (
            <div className="accordion-container" onClick={toggleAccordion}>
              <div className="accordion">
                <div className="title-project">
                  <p>{project.name}</p>
                </div>
                <div className="accordion-i">
                  <img
                    className="chevron"
                    src={!isLight ? chevronLight : chevronDark}
                    alt="chevron"
                    style={{
                      width: 16,
                      height: 16,
                      transform: `rotate(${isExpanded ? 90 : 0}deg)`,
                    }}
                  />
                </div>
              </div>
              {isExpanded && <AccordionContent project={project} />}
            </div>
          ) : (
            <div className="accordion-container">
              <div className="accordion">
                <div className="title-project">
                  <p>{project.name}</p>
                </div>
              </div>
              {isExpanded && <AccordionContent project={project} />}
            </div>
          )
        }
      </Media>
    </>
  );
}
