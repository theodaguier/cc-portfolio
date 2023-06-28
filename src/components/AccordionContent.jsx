export default function AccordionContent({ project }) {
  return (
    <>
      <div className="txt-container">
        <div className="year">
          <p>{project.year}</p>
        </div>
        <div className="acccordion-content">
          <div className="bloc">
            <div className="info">
              <p>{project.tag}</p>
              <p>Design/Concept: {project.author}</p>
              {project.coverCollage && (
                <p>Cover Collage: {project.coverCollage}</p>
              )}
              {project.typeface && <p>Typeface: {project.typeface}</p>}
              {project.editorial && <p>Editorial: {project.typeface}</p>}
              {project.portraits && <p>Portraits: {project.portraits}</p>}
              {project.threeD && <p>3D: {project.threeD}</p>}
              {project.note && (
                <p style={{ paddingTop: "15px" }}>{project.note}</p>
              )}
              {project.paper && <p>Paper: {project.paper}</p>}
              {project.print && <p>Print: {project.print}</p>}
              {project.bind && <p>Bind: {project.bind}</p>}
              {project.size && <p>Size: {project.size}</p>}
              {project.supervisor && <p>Supervisor: {project.supervisor}</p>}
              {project.talent && <p>Talents: {project.talent}</p>}
            </div>
            {project.imageCollected && (
              <div
                className="image-collected"
                style={{ lineHeight: "15px", marginTop: "17px" }}
              >
                <p>All images were collected from {project.imageCollected}</p>
              </div>
            )}
          </div>
          {project.description && (
            <div className="description" style={{ lineHeight: "" }}>
              {project.description
                .toString()
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
