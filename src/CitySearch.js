import React from "react";


export default function CitySearch() {
  return (
    <div className="CitySearch">
      <form id="city-form">
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Enter a City"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <input
              className="form-control btn btn-secondary"
              type="submit"
              value="Search"
              id="search-button"
            />
          </div>
          <div className="col-3">
            <input
              className="form-control btn btn-light"
              type="submit"
              value="Current"
              id="current-city-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}