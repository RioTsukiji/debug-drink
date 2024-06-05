import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import LOGO from "../../icons/BahicomLOGO.png";

const drawerWidth = 210;

type Props = {
  children: React.ReactNode;
};

const AppTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none", height: "60px", paddingTop: '4px' }}>
        <Toolbar>
          <img src={LOGO} style={{
            width: '28px',
            height: '28px',
            opacity: '0.8'
          }} />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              paddingLeft: 1.5,
              fontFamily: "Baskervville",
              fontWeight: 800,

              fontSize: "20px",
              color: "#3C3C3C",

            }}
          >
            Debug Drink

          </Typography>
          <span className="false-menu-square"></span>
        </Toolbar>
      </AppBar>
      <Grid
        component="main"
      // sx={{ flexGrow: 1, p: 3, mt: 8, ml: `${drawerWidth}px` }}
      >
        {children}
      </Grid>
    </>
  );
};

export default AppTemplate;
