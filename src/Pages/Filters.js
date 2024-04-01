// Filters.js
import React, { useState, useEffect } from "react";
import "../Css/filter.css";

const Filters = ({ applyFilters }) => {
  const [filterData, setFilterData] = useState({
    assignee: "",
    priority: "",
    startDateFrom: "",
    startDateTo: "",
  });

  const handleChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filterData);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="filter">
          Filter By:
          <input
            type="text"
            name="assignee"
            placeholder="assignee"
            value={filterData.assignee}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={filterData.priority}
            onChange={handleChange}
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>

          <input
            type="date"
            name="startDateFrom"
            value={filterData.startDateFrom}
            onChange={handleChange}
          />
          <input
            type="date"
            name="startDateTo"
            value={filterData.startDateTo}
            onChange={handleChange}
          />
          <button type="submit">Apply Filters</button>
        </div>

        <div className="sort">
          Sort By:
          <select
            name="priority"
            value={filterData.priority}
            onChange={handleChange}
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
