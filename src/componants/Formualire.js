import React from "react";
import SideImage from "./SideImage";

import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import { sendFormData } from "../redux/action/action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Formualire = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            textAlign="center"
            wrap="wrap-reverse"
            sx={{
              backgroundColor: "#EFEFEF",
            }}
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
                    <FormLabel id="demo-radio-buttons-group-label">
                      Civilité * :
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name="radio-buttons-group"
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
                            {...register("gender", {
                              required: "Civilité est obligatoire",
                            })}
                          />
                        </Grid>
                        <Grid item>
                          <FormControlLabel
                            value="M"
                            control={<Radio />}
                            label="M"
                            {...register("gender", {
                              required: "Civilité est obligatoire",
                            })}
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} style={{}}>
                    <TextField
                      style={{ backgroundColor: "white" }}
                      sx={{ boxShadow: 4, width: "80%", borderRadius: "6% " }}
                      id="outlined-basic"
                      label="nom"
                      variant="outlined"
                      {...register("nom", { required: "nom est obligatoir" })}
                    />
                    <Box>
                      {" "}
                      {errors.nom && (
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {errors.nom.message}
                        </span>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} style={{}}>
                    <TextField
                      style={{ backgroundColor: "white" }}
                      sx={{ boxShadow: 4, width: "80%", borderRadius: "6% " }}
                      id="outlined-basic"
                      label="prenom"
                      variant="outlined"
                      {...register("prenom", {
                        required: "Prenom est obligatoir",
                      })}
                    />
                    <Box>
                      {" "}
                      {errors.prenom && (
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {errors.prenom.message}
                        </span>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} style={{}}>
                    <TextField
                      style={{ backgroundColor: "white" }}
                      sx={{ boxShadow: 4, width: "80%", borderRadius: "6% " }}
                      id="outlined-basic"
                      label="Age"
                      variant="outlined"
                      {...register("age", {
                        required: "Age est obligatoir",
                      })}
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                    />
                    <Box>
                      {" "}
                      {errors.age && (
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {errors.age.message}
                        </span>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} style={{}}>
                    <TextField
                      style={{ backgroundColor: "white" }}
                      sx={{
                        boxShadow: 4,
                        width: "80%",
                      }}
                      id="outlined-basic"
                      label=" Email"
                      variant="outlined"
                      type="email"
                      {...register("email", {
                        required: "Email est obligatoir",
                      })}
                    />
                    <Box>
                      {" "}
                      {errors.email && (
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </Box>
                  </Grid>

                  <Grid item xs={10.16}>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                      textAlign="center"
                      mb={"5%"}
                    >
                      <Grid xs={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          sx={{
                            boxShadow: 4,
                            width: "90%",
                          }}
                          id="outlined-basic"
                          label="code postal "
                          variant="outlined"
                          {...register("code_postal", {
                            required: "code_postal est obligatoir",
                          })}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                        />
                        <Box>
                          {" "}
                          {errors.code_postal && (
                            <span style={{ color: "red", fontSize: "20px" }}>
                              {errors.code_postal.message}
                            </span>
                          )}
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          sx={{ boxShadow: 4, width: "90%" }}
                          id="outlined-basic"
                          label=" Telephone"
                          variant="outlined"
                          {...register("telephone", {
                            required: "Telephone est obligatoir",
                          })}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                        />
                        <Box>
                          {" "}
                          {errors.telephone && (
                            <span style={{ color: "red", fontSize: "20px" }}>
                              {errors.telephone.message}
                            </span>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                    <div style={{ marginBottom: "4%" }}>
                      <Button type="submit" variant="contained" color="primary">
                        Submit
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item>
                <SideImage />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default Formualire;
