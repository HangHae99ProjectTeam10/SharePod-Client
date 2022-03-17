import React from "react";
import styled from "styled-components";

const Dropdown = ({ children, ...props }) => {
  const { width, height } = props;
  const handleChange = (e) => {
    props.changeData(() => e.target.value);
  };
  console.log(props);

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

Dropdown.defaultProps = {
  width: 160,
  height: 50,
};

const DropdownWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  & select {
    width: 100%;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
    border: 1px solid #dedede;
    border-radius: 8px;
  }
`;

export default Dropdown;
