// src/components/AdminSidebar.tsx

import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemText primary="Users" />
        </ListItem>
        {/* Add more sidebar items as needed */}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
