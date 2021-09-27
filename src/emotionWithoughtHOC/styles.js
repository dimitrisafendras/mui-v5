import { css } from "@emotion/react";

const styles = {
  paper: (theme) =>
    css`
      background: ${theme?.palette?.primary?.main};
      a {
        color: red;
      }
    `,
  colorRed: (theme) =>
    css`
      color: red;
    `,
  padding: (theme) =>
    css`
      padding: ${theme.spacing(2)};
    `,
  colorByWitdth: (theme) => css`
    color: red;
    ${theme.breakpoints.up("lg")} {
      color: blue;
    }
  `
};

export default styles;
