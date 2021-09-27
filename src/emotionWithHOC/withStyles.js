import React from "react";
import { useTheme, css } from "@emotion/react";

const styleGenerator = (styles, theme) => {
  const importedStyles = styles(theme);

  const generatedStyles = Object.keys(importedStyles).reduce(
    (obj, key) => ({
      ...obj,
      [key]: () => css`
        ${importedStyles[key]}
      `
    }),
    {}
  );
  console.log("generatedStyles:", generatedStyles);
  return generatedStyles;
};

const withStyles = (stylesheet) => (Component) => (props) => {
  const theme = useTheme();
  const styles = styleGenerator(stylesheet, theme);

  return <Component {...props} styles={styles} />;
};

export default withStyles;
export { withStyles };
