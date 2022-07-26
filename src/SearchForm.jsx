import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="row mb-3">
        <span className="col-9">
          <input
            type="search"
            placeholder="Please type a city name ..."
            className="form-control"
          />
        </span>
        <span className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </span>
      </form>
    </div>
  );
}
