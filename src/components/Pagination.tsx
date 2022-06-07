import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CardBody from "./CardBody";
import '../css/_pagination.css'

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [charPerPage] = useState(4);

  React.useEffect(() => {
    axios
    .get("https://swapi.dev/api/people")
    .then(res => setCharacter(res.data.results));
  }, []);

  const lastPost = number * charPerPage;
  const firstPost = lastPost - charPerPage;
  const currentPost = characters.slice(firstPost, lastPost);
  const PageCount = Math.ceil((characters.length / charPerPage) + 1);
  const ChangePage = ({ selected }: any) => {
    setNumber(selected);
  };
  return (
    <>
      <div className="container-fluid containerSW">
        <div className="row finalContainer">
          {currentPost.map((character: { id: React.Key | null | undefined }) => {
            return <CardBody key={character.id} character={character}/>
          })}
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Próximo"}
            pageCount={PageCount}
            onPageChange={ChangePage}
            containerClassName={"paginationBttns"}
            activeClassName={"paginationActive"}
            disableInitialCallback={true}
            initialPage={1}
          ></ReactPaginate>
        </div>
      </div>
    </>
  );
};

export default App;
