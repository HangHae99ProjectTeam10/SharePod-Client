import React from "react";
import styled from "styled-components";

const Dropdown = (props) => {
  const handleChange = (e) => {
    props.changeDate(() => e.target.value);
  };
  console.log(props.options);

  return (
    <DropdownWrap>
      <select onChange={handleChange}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </DropdownWrap>
  );
};

const DropdownWrap = styled.div`
  display: flex;
  flex-direction: row;
  & select {
    width: 160px;
    height: 50px;
    padding: 2px;
    box-sizing: border-box;
    border: 1px solid #dedede;
    border-radius: 8px;
  }
`;

export default Dropdown;
