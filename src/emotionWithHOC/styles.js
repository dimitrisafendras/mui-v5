const styles = (theme) => ({
  paper: `background: ${theme?.palette?.primary?.main}; a{color:red}`,
  colorRed: `color:red`,
  padding: `padding:${theme.spacing(2)}`,
  colorByWitdth: `
          color: red;
          ${theme.breakpoints.up("lg")} {
              color: blue;
          }
          `
});

export default styles;
