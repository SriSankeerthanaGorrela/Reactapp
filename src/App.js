// import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/header.js';
import SidebarWithButton from './components/sidebar.js';
import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Toolbar,
} from "@mui/material";

import MovieGrid from "./components/MovieGrid";


const theme = createTheme({
  palette: {
    background: {
      default: 'black', // Set the background color here
    },
    primary: {
      main: "#2196f3",
    },
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" ,flexDirection:'column',width:'100%'}}>
        <SearchAppBar handleDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: "flex", flexGrow: 1 }}>

        <SidebarWithButton
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* This empty Toolbar acts as a spacer */}
          <MovieGrid />
        </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;