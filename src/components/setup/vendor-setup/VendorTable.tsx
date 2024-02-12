import * as React from "react";
import { Button } from "@mui/material";
import CreateVendorModal from "./CreaetVendorModal";
import EditVendorModal from "./EditVendorModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {  useState } from "react";
import { VendorDataItems } from "./VendorDataTypes";
import  '../../../styles/modalStyles.scss'
import { useGetVendoerSetupQuery } from "../../../redux/services/vendoerSetupAPI";

export default function VendorTable() {
   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<VendorDataItems[] | any>(null);
  const { data: vendorData, isLoading, isError } = useGetVendoerSetupQuery();
  const { data } = useGetVendoerSetupQuery();
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
    { field: 'vendorName', headerName: 'Vendor Name', width: 150 },
    { field: 'vendorType', headerName: 'Vendor Type', width: 150 },
    { field: 'vendorCountry', headerName: 'Vendor Country', width: 150 },
    { field: 'vendorOfficeName', headerName: 'Vendor Office', width: 150 },
    { field: 'vendorOfficeLocation', headerName: 'Office Location', width: 150 },
    { field: 'vendoerPhone', headerName: 'Phone', width: 150 },
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
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Button onClick={handleOpenCreateModal}>Create</Button>

      {/* Data Table */}
      <div style={{ height: 400, width: '250%' }}>
        <DataGrid rows={vendorData || []} columns={columns} />
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