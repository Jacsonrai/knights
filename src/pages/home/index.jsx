import React from "react";
//layout imported from home
import HomeLayout from "./homeLayout";
//calling the mock api
import { newsData } from "../../mock/data";

const Home = () => {
  return <HomeLayout newsData={newsData} />;
};

export default Home;
