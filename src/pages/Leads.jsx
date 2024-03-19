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
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";

import * as XLSX from "xlsx";
import { RemoveFromdata } from "../redux/action/action";

const initialData = [
  // Données initiales
];

const App = () => {
  const dispatch = useDispatch();
  const dataleads = useSelector((state) => state.leads.data);
  console.log(dataleads);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState(dataleads);
  const [filter, setFilter] = useState("");
  const [deletee, setDeletee] = useState("");

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  const filteredData = dataleads.filter((item) =>
    item.nom.toLowerCase().includes(filter.toLowerCase())
  );

  const handledeleteuser = (_id, nom) => {
    if (window.confirm(`are you sure you want to delete ${nom}`)) {
      dispatch(RemoveFromdata(_id));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Filtrer par nom"
        value={filter}
        onChange={handleChangeFilter}
        style={{ marginBottom: 20 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Âge</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Code Postal</TableCell>
              <TableCell>Téléphone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.nom}</TableCell>
                <TableCell>{item.prenom}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.code_postal}</TableCell>
                <TableCell>{item.telephone}</TableCell>

                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DeleteRoundedIcon
                    style={{
                      backgroundColor: "#ffebee",
                      color: "red",
                      cursor: "pointer",
                      height: 40,
                      width: 60,
                    }}
                    onClick={() => handledeleteuser(item._id, item.nom)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Télécharger en Excel
      </Button>
    </div>
  );
};

export default App;
