import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    background: {
      grey: grey[200],
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        width: '100%'
      },
    },
  },
});

export default theme;
