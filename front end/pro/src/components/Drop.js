
import React, { useState } from 'react';

const dropdownlist = ["item1", "item2", "item3"]

const FirstDropDown = () => {
  const [firstdropdown, setFirstdropdown] = useState("I am the first!");
return(
  <label htmlFor="First Dropdown">
    First Dropdown
      <select
        id="first"
        value={firstdropdown}
        onChange={e=> setFirstdropdown(e.target.value)}
        onBlur={e=> setFirstdropdown(e.target.value)}
        disabled={!dropdownlist.length}>
          <option>All</option>
          {list.map=>(item()=> <option key={item} value={item}>
          {item}
          </item>)}
      </select>
  </label>
);
};

export default FirstDropDown