import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { AddEmployeeDetail } from "./Graphql/Mutations";
import { Link } from "react-router-dom";

import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";

const AddEmployee = () => {
  const defaultForm = {
    emp_id: "",
    first_name: "",
    last_name: "",
    sex: "",
    salary: "",
    branch_id: "",
  };
  const [inputField, setInputField] = useState(defaultForm);
  const [createEmployee, { error }] = useMutation(AddEmployeeDetail);
  const inputHandle = (e) => {
    let value = e.target.value;
    if (
      e.target.name === "salary" ||
      e.target.name === "branch_id" ||
      e.target.name === "emp_id"
    ) {
      value = parseInt(value);
    }
    if (e.target.name === "sex") {
    }
    console.log(value);
    setInputField({
      ...inputField,
      [e.target.name]: value,
    });
  };
  const formSubmit = () => {
    console.log(inputField);
    try {
      createEmployee({
        variables: inputField,
      });
      setInputField(defaultForm);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <Box textAlign="center" m={3}>
        <Typography variant="h3">ADD EMPLOYEE </Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <form
            action=""
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="emp_id"
                  variant="outlined"
                  label="emp_id"
                  required
                  fullWidth
                  id="emp_id"
                  autoFocus
                  onChange={inputHandle}
                  value={inputField.emp_id}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="first_name"
                  onChange={inputHandle}
                  value={inputField.first_name}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="last_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="last_name"
                  onChange={inputHandle}
                  value={inputField.last_name}
                ></TextField>
              </Grid>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="flexCheckDisabled"
                  onChange={inputHandle}
                  value={"M"}
                />
                <label className="form-check-label" htmlFor="flexCheckDisabled">
                  M
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sex"
                  id="flexCheckCheckedDisabled"
                  onChange={inputHandle}
                  value={"F"}
                />
                <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                  F
                </label>
              </div>

              <Grid item md={6} xs={12}>
                <TextField
                  name="salary"
                  variant="outlined"
                  required
                  fullWidth
                  id="salary"
                  label="salary"
                  onChange={inputHandle}
                  value={inputField.salary}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="branch_id"
                  variant="outlined"
                  required
                  fullWidth
                  id="branch_id"
                  label="branch_id"
                  onChange={inputHandle}
                  value={inputField.branch_id}
                ></TextField>
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                required
                fullWidth
                id="submit"
                onClick={(e) => {
                  e.preventDefault();
                  formSubmit();
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </form>
          <Box textAlign="center">
            <Link to="/employee-list">
              <Button variant="contained">BACK TO HOME</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddEmployee;
