import { gql } from "@apollo/client";

export const AddEmployeeDetail = gql`
  mutation createEmployee(
    $emp_id: Int!
    $first_name: String!
    $last_name: String!
    $sex: String!
    $salary: Int!
    $branch_id: Int!
  ) {
    createEmployee(
      emp_id: $emp_id
      first_name: $first_name
      last_name: $last_name
      sex: $sex
      salary: $salary
      branch_id: $branch_id
    ) {
      emp_id
      first_name
      last_name
      sex
      salary
      branch_id
    }
  }
`;
