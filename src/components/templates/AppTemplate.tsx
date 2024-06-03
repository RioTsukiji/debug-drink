import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

const drawerWidth = 210;

type Props = {
  children: React.ReactNode;
};

const AppTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              paddingLeft: 1.5,
              fontWeight: 550,
              fontSize: 24,
              color: "#3C3C3C"
            }}
          >
            健康度診断
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8, ml: `${drawerWidth}px` }}
      >
        {children}
      </Grid>
    </>
  );
};

export default AppTemplate;
