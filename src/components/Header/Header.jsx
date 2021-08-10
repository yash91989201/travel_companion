import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          <Box display="flex">
            <Typography variant="h5"></Typography>
            <Autocomplete className={classes.search}>
              <div className={classes.serch}>
                <div className={classes.searchIcon}>
                  <SearchOutlined />
                </div>
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
