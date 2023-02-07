import "./../styles/components/accordion.scss";

function AccordionContent({ project }) {
  console.log(project.description);
  return (
    <>
      <div className="txt-container">
        <p className="year">
          <p>{project.year}</p>
        </p>
        <div className="acccordion-content">
          <div className="bloc">
            <div className="info">
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
            {project.description.split("\n").map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionContent;
