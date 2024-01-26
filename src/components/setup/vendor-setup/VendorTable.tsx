import * as React from "react";
import { Button } from "@mui/material";
import CreateVendorModal from "./CreaetVendorModal";
import EditVendorModal from "./EditVendorModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { VendorDataItems } from "./VendorDataTypes";
import  '../../../styles/modalStyles.scss'

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
      <div style={{ height: 400, width: '250%' }}>
        <DataGrid rows={setUsers} columns={columns} />
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