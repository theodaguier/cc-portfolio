import { useState, useEffect, useRef } from "react";
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
  const cursorRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    cursorRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleScroll = () => {
    cursorRef.current = {
      x: cursorRef.current.x + window.scrollX,
      y: cursorRef.current.y + window.scrollY,
    };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="custom-cursor"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      style={{
        left: cursorRef.current.x,
        top: cursorRef.current.y,
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
