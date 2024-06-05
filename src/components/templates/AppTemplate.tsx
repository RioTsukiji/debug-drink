import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import LOGO from "../../icons/debugdrinkIcon.jpg";
import orange from '../../icons/materials/f_f_health_53_svg_f_health_53_1nbg.svg';

const drawerWidth = 210;

type Props = {
  children: React.ReactNode;
};

const AppTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#f9f9f9", boxShadow: "none", height: "60px", paddingTop: '4px' }}>
        <Toolbar>
          <img src={LOGO} style={{
            width: '30px',
            height: '30px',

          }} />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              paddingLeft: 1,
              fontFamily: "Baskervville",
              fontWeight: 800,
              backgroundColor: '#f9f9f9',
              fontSize: "20px",
              color: "#3C3C3C",

            }}
          >
            Debug drink

          </Typography>
          <span className="false-menu-square"><img src={orange} style={{}} /></span>
        </Toolbar>
      </AppBar>
      <Grid
        component="main"
      // sx={{ flexGrow: 1, p: 3, mt: 8, ml: `${drawerWidth}px` }}
      >
        {children}
      </Grid>
      <footer style={{
        height: '200px',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        padding: ''
      }}>
        <div style={{ color: '#abafb8' }}>
          <p>@2024 KODAIRA FESTIVAL</p>
          <p>Bashi.com</p>
        </div>
      </footer>
    </>
  );
};

export default AppTemplate;
