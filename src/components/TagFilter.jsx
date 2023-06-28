import { useState, useEffect } from "react";
import Media from "react-media";

const tags = [
  "All",
  "Branding",
  "Editorial",
  "Art Direction",
  "Packaging",
  "Objects",
  // "Visual Communication",
];

function TagFilter({
  currentTag,
  setCurrentTag,
  handleTagClick,
  selectedTag,
  setSelectedTag,
}) {
  const handleSelectedTag = (tag) => {
    setSelectedTag(tag);
    setCurrentTag(tag);
  };

  return (
    <ul className="tag-nav">
      {tags.map((tag, index) => (
        <li
          key={index}
          className={`tag ${tag === currentTag ? "active" : ""}`}
          onClick={() => {
            handleTagClick(tag);
            handleSelectedTag(tag);
          }}
        >
          ({tag})
        </li>
      ))}
    </ul>
  );
}

export default TagFilter;
