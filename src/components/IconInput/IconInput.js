import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--font-size": "14",
    "--padding": "4px 0px 4px 24px",
    "--border-bottom": "1px",
    "--icon-dimensions": "16px",
  },
  large: {
    "--height": "24px",
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
      <StyledInput placeholder={placeholder} style={styles} />
      <IconWrapper style={styles}>
        <Icon id={icon} size={size === "small" ? 15 : 20} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => `${props.style["--font-size"] / 16}rem`};
  font-weight: 700;
  color: ${COLORS.gray700};
  padding: var(--padding);
  width: var(--width);
  border: none;
  border-bottom: var(--border-bottom) solid black;
  border-radius: 1px;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: black;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  color: ${COLORS.gray700};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--icon-dimensions);
  height: var(--icon-dimensions);
  pointer-events: none;

  ${Wrapper}:hover & {
    color: black;
  }
`;

export default IconInput;
