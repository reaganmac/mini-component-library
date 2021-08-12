import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--font-size": "14",
    "--padding": "4px 0px 4px 24px",
    "--border-bottom": "1px",
    "--icon-dimensions": "16px",
  },
  large: {
    "--font-size": "18",
    "--padding": "8px 0px 7px 36px",
    "--border-bottom": "2px",
    "--icon-dimensions": "22px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = { ...SIZES[size], "--width": `${width}px` };
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: $`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput placeholder={placeholder} style={styles} />
      <IconWrapper style={styles}>
        <Icon id={icon} size={size === "small" ? 15 : 20} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => `${props.style["--font-size"] / 16}rem`};
  font-weight: 700;
  color: inherit;
  padding: var(--padding);
  width: var(--width);
  border: none;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  border-radius: 1px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--icon-dimensions);
  height: var(--icon-dimensions);
`;

export default IconInput;
