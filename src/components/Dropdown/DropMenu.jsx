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
  const selectCategory = (e) => setCategory(e.target.value);

  return (
    <div className="drop">
      <br />

      <select className="select" name="category" onChange={selectCategory}>
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
      <br/><br/><br/>
      <form onSubmit={submit} >
        <input className="search" placeholder="Search..." name="search" className="searchItem"></input>
        <button type="submit" onClick="" className="buttonSearch">Go</button>
      </form>
    </div>
  );
}

export default Dropdown;
