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
              {project.author && <p>Design/Concept: {project.author}</p>}
              {project.coverCollage && (
                <p>Cover Collage: {project.coverCollage}</p>
              )}
              {project.directed && (
                <p>Directed and produced by {project.directed}</p>
              )}
              {project.artDirection && (
                <p>Art Direction by {project.artDirection}</p>
              )}
              {project.setDesign && <p>Set Design: {project.setDesign}</p>}
              {project.styling && <p>Styling: {project.styling}</p>}
              {project.typeface && <p>Typography: {project.typeface}</p>}
              {project.collage && <p>Collage: {project.collage}</p>}
              {project.editorial && <p>Editorial: {project.editorial}</p>}
              {project.portraits && <p>Portraits: {project.portraits}</p>}
              {project.threeD && <p>3D: {project.threeD}</p>}
              {project.photography && <p>Photography: {project.photography}</p>}
              {project.illustration && (
                <p>Illustration: {project.illustration}</p>
              )}
              {project.product && <p>Products: {project.product}</p>}
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
