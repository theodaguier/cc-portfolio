import { useState, useEffect } from "react";

import "./../styles/components/tagNav.scss";

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
  isTransitioning,
  setIsTransitioning,
  selectedTag,
  setSelectedTag,
  tag,
}) {
  const handleSelectedTag = () => {
    setSelectedTag(tag);
    setCurrentTag(tag);
  };

  return (
    <ul className="tag-nav" onClick={() => setIsTransitioning(true)}>
      {tags.map((tag, index) => (
        <li
          key={index}
          className={`tag ${tag === selectedTag ? "active" : ""}`}
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
