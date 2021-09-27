/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React from "react";
import Paper from "@mui/material/Paper";
import styles from "./styles";

import withStyles from "./withStyles";

const InnerElement = ({ variant, styles }) => {
  console.log(styles);

  return (
    <div>
      <Paper
        css={[
          styles.paper,
          variant === "large" ? styles.colorRed : null,
          styles.padding
        ]}
      >
        variant={variant}
        <br />
        <a href="asdasdas" className="link">
          A link
        </a>
      </Paper>
      <div css={styles?.colorRed}>A div</div>
      <div css={styles?.colorByWitdth}>color by widths</div>
    </div>
  );
};

InnerElement.defaultProps = {
  variant: "large"
};

export default withStyles(styles)(InnerElement);
