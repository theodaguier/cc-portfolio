import "./../styles/components/accordion.scss";

function AccordionContent({ project }) {
  return (
    <div className="acccordion-content">
      <div className="bloc">
        <p>{project.year}</p>
        <p>Design/Concept: {project.author}</p>
        <p>Size: {project.size}</p>
      </div>
      <div className="description">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default AccordionContent;
