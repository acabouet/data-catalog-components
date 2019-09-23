import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ToggleBlock({
  title,
  children,
  headingClasses,
  innerClasses,
  allowToggle,
}) {
  const [showFacets, toggleShowFacets] = useState(true);
  let facetBlockHeading = <h2 className={headingClasses}>{title}</h2>;
  if (allowToggle) {
    facetBlockHeading = (
      <h2 className={headingClasses}>
        <button type="button" onClick={() => toggleShowFacets(!showFacets)}>
          {title}
        </button>
      </h2>
    );
  }
  return (
    <section>
      {facetBlockHeading}
      {showFacets
        && (
          <div className={innerClasses}>
            {children}
          </div>
        )}
    </section>
  );
}

ToggleBlock.defaultProps = {
  allowToggle: true,
  headingClasses: 'facet-block-title',
  innerClasses: 'facet-block-inner',
};

ToggleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  headingClasses: PropTypes.string,
  innerClasses: PropTypes.string,
  allowToggle: PropTypes.bool,
};