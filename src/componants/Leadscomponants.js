import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
  } from "@mui/material";
  import { useDispatch } from "react-redux";
  import { RemoveFromdata } from "../redux/action/action";
  import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";


const Leadscomponants = ({filteredData}) => {
    const dispatch = useDispatch();

    const handledeleteuser = (_id,nom) => {
        if (window.confirm(`are you sure you want to delete ${nom}`)) {
          dispatch(RemoveFromdata(_id));
        }
      };
  return (
    <>
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
  </>
  )
}

export default Leadscomponants