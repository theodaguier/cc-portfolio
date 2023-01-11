import { useState, useEffect } from "react";
import "./../styles/cursor/cursor.scss";

import cursorAW from "./../assets/cursor/CursorA_White.png";
import cursorBB from "./../assets/cursor/CursorB_Black.svg";
import cursorAB from "./../assets/cursor/CursorA_Black.svg";
import cursorBW from "./../assets/cursor/CursorB_White.png";

const CustomCursor = ({
  cursorPosition,
  isLight,
  onHover,
  isHovering,
  setIsHovering,
  setCursorPosition,
}) => {
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      style={{
        position: "absolute",
        left: cursorPosition.x,
        top: cursorPosition.y,
        width: "20px",
        height: "20px",
        backgroundImage: `url(${
          isHovering
            ? isLight
              ? cursorBB
              : cursorBW
            : isLight
            ? cursorAB
            : cursorAW
        })`,
        backgroundRepeat: "no-repeat",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
