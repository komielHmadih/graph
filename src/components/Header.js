import {
  AppBar,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  Input 
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "black",
    fontFamily: "Shabnam",
    fontWeight: "bold",
    cursor: "pointer",
  },
  shadow:{
    boxShadow:"0 2px 2px -2px gray !important"

  },
  shadow_0:{
    boxShadow:"none !important"

  },
  search:{
    borderColor:"black !important",
    position:"relative",
    color:"black !important",

  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(243,244,248)",
    },
    type: "dark",
  },
});

function Header() {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 100);
   });
 }, []);
  const classes = useStyles();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" className={scroll ? "shadow_0" : "shadow"} > 
      <Container maxWidth>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              className={classes.title}
              style={{ flex:1,width: "auto", height: "auto",alignContent:"start", marginLeft: 15,color:"black",borderColor:"black",textAlign:"right"}}

            >
              افزایش سرمایه
            </Typography>
            {/* <Button variant="contained" color="inherit">Login</Button> */}
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
