import { Grid } from "@mui/material";
import React from "react";
import HomeHeader from "../Components/Home/Header";
import TableContact from "../Components/Home/TableContact";

const Home = () => {
  return (
    <Grid>
      <HomeHeader />
      <TableContact />
    </Grid>
  );
};

export default Home;
