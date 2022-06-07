import axios from "axios";
import React from "react";
import Card from "../../components/Card";
import DataGridComponent from "../../components/DataGrid";
import Pagination from "../../components/Pagination";

function Home() {
  
  return (
    <div className="container-fluid m-4">
      <Pagination />
    </div>
  );
}

export default Home;