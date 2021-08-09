/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--border-radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: $`);
  }
  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ "--width": value + "%" }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 100%;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* hide those straight corners when the bar is almost full, dawg */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 16px;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
