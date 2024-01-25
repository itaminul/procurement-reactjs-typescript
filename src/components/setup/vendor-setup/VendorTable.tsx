import * as React from "react";
import { Button } from "@mui/material";
import CreateVendorModal from "./CreaetVendorModal";
import EditVendorModal from "./EditVendorModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { VendorDataItems } from "./VendorDataTypes";
import  '../../../styles/modalStyles.scss'

const modalStyleLg = {
  position: "absolute",
  top: "20%",
  left: "45%",
  transform: "translate(-50%, -50%)",
  width: 1500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data.json`);
      const data = await response.json();
      setsetUsers(data);
    }; 
      fetchData();    
  }, []);

  const rows = setUsers

  return (
    <div>
      <Button onClick={handleOpenCreateModal}>Create</Button>

      {/* Data Table */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={setUsers} columns={columns} />
      </div>   
      <CreateVendorModal open={isCreateModalOpen} onClose={handleCloseCreateModal} modalStyleLg={modalStyleLg} />   
      <EditVendorModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        selectedRowId={selectedRowId}
        modalStyleLg={modalStyleLg}
      />
    </div>
  );
}