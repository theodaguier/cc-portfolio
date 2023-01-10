import { useState } from "react";

import "./../styles/cursor/cursor.scss";
import cursorAW from "./../assets/cursor/CursorA_White.png";

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="custom-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        backgroundImage: `url(${cursorAW})`,
      }}
      onMouseMove={handleMouseMove}
    />
  );
}

export default CustomCursor;
