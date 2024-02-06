// src/components/MainContent.tsx

import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { RootState } from "../../redux/store";

const MainContent: React.FC = () => {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen);

  const mainContentStyle: React.CSSProperties = {
    marginLeft: isDrawerOpen ? "240px" : "0",
    transition: "margin-left 0.3s",
    padding: "20px",
  };

  return (
    <Container component="main" style={mainContentStyle}>
      {/* Main content goes here */}
      <Typography variant="h4">Welcome to the App</Typography>
    </Container>
  );
};

export default MainContent;
