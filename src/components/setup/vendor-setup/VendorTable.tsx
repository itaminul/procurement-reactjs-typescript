import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import ModalComponent from "./CreaetVendorModal";
import CreateVendorModal from "./CreaetVendorModal";
import EditVendorModal from "./EditVendorModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { VendorDataItems } from "./VendorDataTypes";

export default function VendorTable() {
   const [isCreateModalOpen, setCreateModalOpen] = React.useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<VendorDataItems[] | any>(null);

  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleOpenEditModal = (id: number) => {
    setSelectedRowId(id);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedRowId(null);
    setEditModalOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: { row: { id: number; }; }) => (
        <div>
          <Button onClick={() => handleOpenEditModal(params.row.id as number)}>Edit</Button>
        </div>
      ),
    },
  ];


  const [setUsers, setsetUsers] = useState<VendorDataItems[]>([]);

  // Simulate fetching data based on the selectedRowId
  useEffect(() => {
    // Fetch data based on selectedRowId
    const fetchData = async () => {
      // Simulated API call
      const response = await fetch(`/data.json`);
      const resData = users.response;
      const data = await response.json();

  console.log("response", response);
    //  setSelectedRow(data);
    setsetUsers(data);
    }; 
      fetchData();    
  }, []);

  const rows: VendorDataItems[] = [
    { id: 1, name: 'John Doe ddd'  },
    { id: 2, name: 'Jane Doe' },
    // Add other rows as needed
  ];
  console.log("setUsers table rows", rows);

  return (
    <div>
      <Button onClick={handleOpenCreateModal}>Create</Button>

      {/* Data Table */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

    
      <CreateVendorModal open={isCreateModalOpen} onClose={handleCloseCreateModal} />
   
      <EditVendorModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        selectedRowId={selectedRowId}
      />
    </div>
  );
}