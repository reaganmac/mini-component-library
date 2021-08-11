import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <LabelWrapper for={label}>
        <NativeSelect id={label} value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalSelect>
          {displayedValue}
          <IconWrapper style={{ "--size": 24 + "px" }}>
            <Icon id='chevron-down' strokeWidth={1} size={24} />
          </IconWrapper>
        </PresentationalSelect>
      </LabelWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const PresentationalSelect = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: (16/16) rem;
  font-family: "Roboto", sans-serif;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`;

const LabelWrapper = styled.label``;

export default Select;
