import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetEmployeeList } from "./Graphql/Queries";
import { ReactTabulator } from "react-tabulator";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import {
  Typography,
  Box,
  IconButton,
  TableContainer,
  Paper,
} from "@material-ui/core";

const EmployeeList = () => {
  let { data } = useQuery(GetEmployeeList);
  console.log(data);
  data = JSON.parse(JSON.stringify(data?.employeeList || []));
  const columns = [
    { title: "EMP ID", field: "emp_id" },
    { title: "FIRST NAME", field: "first_name" },
    { title: "LAST NAME", field: "last_name" },
    { title: "SEX", field: "sex" },
    { title: "SALARY", field: "salary" },
    { title: "BRANCH ID", field: "branch_id" },
  ];
  const ref = useRef();
  return (
    <div className="container" align="center">
      <Box textAlign="center" mt={6}>
        <Typography variant="h4">Employee List</Typography>
      </Box>

      <IconButton>
        <Link to="/home">Add Employee </Link>
      </IconButton>
      <TableContainer component={Paper}></TableContainer>
      <ReactTabulator
        ref={ref}
        columns={columns}
        data={(data && [...data]) || []}
        options={{
          layout: "fitColumns",
          movableColumns: true,
          pagination: "local",
          paginationSize: 3,
          paginationSizeSelector: [2, 5],
          placeholder: "",
        }}
      />
    </div>
  );
};

export default EmployeeList;
