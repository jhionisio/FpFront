import '../css/_card-body.css'

const CardBody = ({ character }: any) => {
    const {
      name,
      height,
      mass,
      gender,
      born,
      died,
      diedLocation,
    } = character;
  
    let bornYear = `${born < 0 ? " BBY" : " ABY"}`;
    let deathYear = `${died < 0 ? " BBY" : " ABY"}`;
  
    return (
      <>
        <div className="cardListContainer flex flex-column  ">
          <h4>
            Name: <span>{name}</span>
          </h4>
          <h4>
            Height: <span>{height}cm</span>
          </h4>
          <h4>
            Mass: <span>{mass}kg</span>
          </h4>
          <h4>
            Gender: <span>{gender}</span>
          </h4>

          <h4>
            Birth:{" "}
            <span>
              {born}
              {bornYear}
            </span>
          </h4>
          {died && (
            <h4>
              Death:
              <span>
                {died ? `${died}${deathYear}` : ""}
                {diedLocation ? `, ${diedLocation}` : ""}
              </span>
            </h4>
          )}
        </div>
      </>
    );
  };
  
  export default CardBody;