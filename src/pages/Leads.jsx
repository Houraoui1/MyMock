import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

import { useSelector } from "react-redux";

import * as XLSX from "xlsx";

import Leadscomponants from "../componants/Leadscomponants";
import HeaderLeads from "../componants/HeaderLeads";

const initialData = [
  // Données initiales
];

const App = () => {
  const dataleads = useSelector((state) => state.leads.data);
  console.log(dataleads);


  const [filter, setFilter] = useState("");

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "DataLeads.xlsx");
  };

  const filteredData = dataleads.filter((item) =>
    item.nom.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Filtrer par nom"
        value={filter}
        onChange={handleChangeFilter}
        style={{ marginBottom: 20 }}
      />

      <TableContainer component={Paper}>
       <HeaderLeads filteredData={filteredData} />
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Télécharger en Excel
      </Button>
    </div>
  );
};

export default App;
