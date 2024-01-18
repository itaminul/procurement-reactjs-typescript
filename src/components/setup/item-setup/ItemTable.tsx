// MuiDataTableExample.tsx

import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const ItemTable: React.FC = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "city", headerName: "City", width: 120 },
  ];

  const rows = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Doe", age: 28, city: "Los Angeles" },
    // Add more data as needed
  ];

   const [filterModel, setFilterModel] = React.useState({
     items: [{ columnField: "name", operatorValue: "contains", value: "" }],
   });

  return (
    <div style={{width: "1000px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        //  pageSize={5}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
        filterModel={filterModel}
       // onFilterModelChange={(model) => setFilterModel(model)}
     //   components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default ItemTable;
