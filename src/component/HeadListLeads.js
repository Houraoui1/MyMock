import React from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Leadscomponants from "./LeadList";

const HeaderLeads = () => {
  const data = [
    "Gender",
    "Nom",
    "Prénom",
    "Âge",
    "Email",
    "Code Postal",
    "Téléphone",
    "",
  ];
  return (
    <>
     
        <TableHead>
          <TableRow sx={{ backgroundColor: "yellow" }}>
            {data.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
    
   
    </>
  );
};

export default HeaderLeads;
