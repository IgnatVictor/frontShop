import { ClassNames } from "@emotion/react";
import "./styles.css";
import { useState } from "react";
import { useAtom } from "jotai";
import { CATEGORY, SEARCH } from "../atom/Atom";

function Dropdown(props) {
  const { products } = props;
  const [category, setCategory] = useAtom(CATEGORY);
  const [search, setSearch] = useAtom(SEARCH);
  const submit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  const selectCategory = (e) => {
    setCategory(e.target.value);
    e.target.blur();
  };

  return (
    <div> <br/><br/><br/>
    <div className="searchBar form-row">
      <div className="col col-lg-3 col-sm-12 mb-2">
      <select className="form-select" name="category" onChange={selectCategory}>
        <option className="option" value="0" selected className="option1">
          Select Category
        </option>
        <option className="option" value="Mouse" className="option1">
          Mouse
        </option>
        <option className="option" value="Bars" className="option1">
          Bars
        </option>
        <option className="option" value="Pc" className="option1">
          Pc
        </option>
        <option className="option" value="Tablets" className="option1">
          Tablets
        </option>
        <option className="option" value="Pads" className="option1">
          Pads
        </option>
        <option className="option" value="Led" className="option1">
          Led
        </option>
      </select>
      </div>
      <div className="col col-lg-4 col-sm-12 mb-1">
      <form onSubmit={submit}>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="search"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Go
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Dropdown;
