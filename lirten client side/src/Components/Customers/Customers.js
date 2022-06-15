import React from "react";
import tableLogo from "../../Pics/table.png";
import classes from "./Customers.module.css";

const Customers = ({ customers }) => {
  return (
    <table className={classes.tableContainer}>
      <thead>
        <tr className={classes.tableHeader}>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Customer E-Mail</th>
          <th>Country</th>
          <th>State</th>
        </tr>
      </thead>

      {customers.map((customer) => (
        <tbody key={customer._id}>
          <tr className={classes.tableBody}>
            <img className={classes.tablePic} src={tableLogo} alt="table" />
            <td>#{customer.id}</td>
            <td>
              {customer.firstName} {customer.lastName}
            </td>
            <td>{customer.email}</td>
            <td>{customer.country}</td>
            <td>{customer.city}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Customers;
