import React from "react";

import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";

import { setFilter } from "../redux/actions";

const VisibilityFilters = ({ setFilter }) => (
  <div>
    {Object.keys(VISIBILITY_FILTERS).map((filterKey, index) => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      return (
        <span
          key={VISIBILITY_FILTERS[filterKey]}
          onClick={() => setFilter(currentFilter)}
        >
          {currentFilter}
          {Object.keys(VISIBILITY_FILTERS).length - 1 !== index ? " | " : ""}
        </span>
      );
    })}
  </div>
);

export default connect(
  null,
  { setFilter }
)(VisibilityFilters);
