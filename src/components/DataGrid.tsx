import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';
import '../css/_custom.css'

  const DataGridComponent = (): JSX.Element => {

    //Define columns
    const columns: GridColDef[] = [
      {field: 'name', headerName: 'Name', width: 90 },
      {
        field: 'mass',
        headerName: 'Mass',
        width: 90,
      },
      {
        field: 'height',
        headerName: 'Height',
        width: 90,
      },
    ];

    const [character, setCharacter] = React.useState([]);
    React.useEffect(() => {
      axios
      .get("https://swapi.dev/api/people")
      .then(res => setCharacter(res.data.results));
    }, []);

    //Render component
    return (
      <>
        <div className='container'>
          <div className='flex'>
            <div>
              <h1 className='list m-4'>Lista de personagens Star Wars.</h1>
            </div>
            <div className='dataCard bg-light m-4'>
              <div className='data mt-3 bg-light'>
                <DataGrid
                  getRowId={(row) => row.name}
                  rows={character}
                  columns={columns}
                  pageSize={5}
                />
              </div>  
            </div>
          </div>
        </div>
      </>
    )
  }
  export default DataGridComponent