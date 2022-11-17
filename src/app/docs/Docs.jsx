import React, { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Grid, MenuItem, MenuList, Chip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { docsRoutes, topics } from "./docs.routes";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Outlet as RouterOutlet } from "react-router";

export default function Docs() {
   const [toggle, setToggle] = useState(false);
   const [sublist, setSublist] = useState([]);
   let { pathname } = useLocation();

   const filterSubList = () => {
      let [, , topicUrl] = pathname.split("/");
      let x = docsRoutes.filter((f) => {
         return f.topic === topicUrl;
      });
      return x;
   };

   useEffect(() => {
      setSublist(filterSubList());
      return () => {};
   }, [pathname]);

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
                  <MenuList style={{ width: "100%" }}>
                     {topics.map((list, i) => (
                        <MenuItem key={`m-item-${i}`}>
                           <NavLink
                              to={list.path} //
                              className={({ isActive }) => `${isActive ? "active-" : ""}docs-link`}>
                              {list.library ? (
                                 <>
                                    {list.name} <Chip label="library" />
                                 </>
                              ) : (
                                 list.name
                              )}
                           </NavLink>
                        </MenuItem>
                     ))}
                  </MenuList>
               </List>
            </Box>
         </Drawer>
         {/*  */}
         <Grid container>
            <Grid item xs={9} padding={"8px"} style={{ height: `90vh`, overflowY: "scroll" }}>
               {/* component loading here */}
               <RouterOutlet />
               {/* component loading here */}
            </Grid>
            <Grid item xs={3}>
               <div className="side-panel">
                  <MenuList style={{ width: "100%" }}>
                     {sublist.map((list, i) => (
                        <MenuItem key={`${list.path}-${i}`}>
                           <NavLink
                              to={list.path} //
                              className={({ isActive }) => `${isActive ? "active-" : ""}docs-sub-link px-3 py-1`}>
                              {list.name}
                           </NavLink>
                        </MenuItem>
                     ))}
                  </MenuList>
               </div>
            </Grid>
         </Grid>
         {/*  */}
      </>
   );
}
