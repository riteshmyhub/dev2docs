import React, { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Docs() {
   const [toggle, setToggle] = useState(false);
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton edge="start" color="inherit" size="large" sx={{ mr: 1 }} onClick={() => setToggle(true)}>
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     React
                  </Typography>
                  <Button color="inherit">home</Button>
                  <Button color="inherit">Logout</Button>
               </Toolbar>
            </AppBar>
         </Box>

         <Drawer open={toggle} onClose={() => setToggle(false)}>
            <Box sx={{ width: 300 }}>
               <List>
                  <ListItem button>
                     <ListItemText>List Item Text</ListItemText>
                  </ListItem>
               </List>
            </Box>
         </Drawer>
      </>
   );
}
