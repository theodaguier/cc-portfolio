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

  // je veux que lorsque je click sur un tag, retourner en haut de la page
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    if (backToTop) {
      window.scrollTo(0, 0);
    }
  }, [backToTop]);

  // ne fonctionne pas la fonction pour remonter en haut de la page

  return (
    <ul className="tag-nav">
      {tags.map((tag, index) => (
        <li
          key={index}
          className={`tag ${tag === currentTag ? "active" : ""}`}
          onClick={() => {
            handleTagClick(tag);
            handleSelectedTag(tag);
            scrollBy({
              top: -100,
              behavior: "smooth",
            });
          }}
        >
          ({tag})
        </li>
      ))}
    </ul>
  );
}

export default TagFilter;
