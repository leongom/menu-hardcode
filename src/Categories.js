import React from "react";

const Categories = ({ categories, filteritems }) => {
  return (
    console.log("funfando"),
    (
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filteritems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    )
  );
};

export default Categories;
