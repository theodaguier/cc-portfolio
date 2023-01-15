import "./../styles/components/accordion.scss";

function AccordionContent({ project }) {
  return (
    <div className="acccordion-content">
      <div className="bloc">
        <div className="info">
          <p>{project.year}</p>
          <p>{project.tag}</p>
          <p>Design/Concept: {project.author}</p>
          <p>Cover Collage: {project.coverCollage}</p>
          <p>Typeface: {project.typeface}</p>
          <p>Paper: {project.paper}</p>
          <p>Print: {project.print}</p>
          <p>Bind: {project.bind}</p>
          <p>Size: {project.size}</p>
          <p>Supervisor: {project.supervisor}</p>
        </div>
        <div className="image-collected">
          <p>All images were collected from {project.imageCollected}</p>
        </div>
      </div>
      <div className="description">
        {project.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}

export default AccordionContent;
