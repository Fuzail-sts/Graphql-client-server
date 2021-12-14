import { gql } from "@apollo/client";

export const GetEmployeeList = gql`
  query employeeList {
    employeeList {
      emp_id,
      first_name,
      last_name,
      sex,
      salary,
      branch_id
    }
  }
`;
