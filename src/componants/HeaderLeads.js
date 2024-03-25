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
import Leadscomponants from "./Leadscomponants";

const HeaderLeads = ({ filteredData }) => {
  const data = [
    "Gender",
    "Nom",
    "Prénom",
    "Âge",
    "Email",
    "Code Postal",
    "Téléphone",
  ];
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {data.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <Leadscomponants filteredData={filteredData} />
      </Table>
    </>
  );
};

export default HeaderLeads;
