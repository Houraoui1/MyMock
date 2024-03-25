import React from "react";
import SideImage from "./SideImage";
import {
  TextField,
  Button,
  Grid,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { sendFormData } from "../redux/action/action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Formulaire = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSend) => {
    console.log("data from frontend", dataSend);

    if (dataSend) {
      dispatch(sendFormData(dataSend));
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
          wrap="wrap-reverse"
          sx={{ backgroundColor: "#EFEFEF" }}
        >
          <Grid item xs={12} lg={6}>
            <Box>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                textAlign="center"
              >
                <Grid item xs={12} style={{ marginTop: "20px" }}>
                  <FormLabel>Civilité * :</FormLabel>
                  <RadioGroup
                    defaultValue=""
                    name="gender"
                    {...register("gender", {
                      required: "Civilité est obligatoire",
                    })}
                  >
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                      textAlign="center"
                      style={{}}
                    >
                      <Grid item>
                        <FormControlLabel
                          value="Mme"
                          control={<Radio />}
                          label="Mme"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          value="M"
                          control={<Radio />}
                          label="M"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%", borderRadius: "6%" }}
                    id="nom"
                    label="Nom"
                    variant="outlined"
                    {...register("nom", { required: "Nom est obligatoire" })}
                  />
                  {errors.nom && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.nom.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%", borderRadius: "6%" }}
                    id="prenom"
                    label="Prénom"
                    variant="outlined"
                    {...register("prenom", {
                      required: "Prénom est obligatoire",
                    })}
                  />
                  {errors.prenom && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.prenom.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%", borderRadius: "6%" }}
                    id="age"
                    label="Âge"
                    variant="outlined"
                    {...register("age", { required: "Âge est obligatoire" })}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                  {errors.age && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.age.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%" }}
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    {...register("email", {
                      required: "Email est obligatoire",
                    })}
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.email.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={5.3}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%" }}
                    id="code_postal"
                    label="Code Postal"
                    variant="outlined"
                    {...register("code_postal", {
                      required: "Code Postal est obligatoire",
                    })}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                  {errors.code_postal && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.code_postal.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={5.3}>
                  <TextField
                    style={{ backgroundColor: "white" }}
                    sx={{ boxShadow: 4, width: "80%" }}
                    id="telephone"
                    label="Téléphone"
                    variant="outlined"
                    {...register("telephone", {
                      required: "Téléphone est obligatoire",
                    })}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                  {errors.telephone && (
                    <span style={{ color: "red", fontSize: "20px" }}>
                      {errors.telephone.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SideImage />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Formulaire;
