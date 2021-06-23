import React, {useState} from 'react';
import {AppBar, Button, Drawer, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function MobileAppBar({children, classes}) {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);
  let clickDrawer = () =>{
    console.log("HOLAAa");
    setdrawerIsOpen(!drawerIsOpen);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon onClick={clickDrawer}/>
          </IconButton>
          <Typography variant="h6">
            Guachinches Modernos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerIsOpen}
        onBackdropClick={clickDrawer}
      >
      <Button onClick={clickDrawer}>test</Button>
        <div>
          <p>drawer content</p>
        </div>
      </Drawer>
      {children}
    </div>
  );
}

export default MobileAppBar;
