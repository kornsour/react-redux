import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // This is refferred to as array destructuring
  // Assign the first element of the useState array to activeIndex
  // Assign the second element of the useState array to setActiveIndex
  // All this does is save time so you're not writing "const" three times
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      // Using a framgent instead of a div stops double border at the top of accordion
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          // Using arrow function so that callback isn't run the instant it is rendered
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
