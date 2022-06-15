import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../Network/config";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Customers from "../../Components/Customers/Customers";
import Header from "../../Components/Header/Header";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/customers")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={classes.mainContainer}>
        <Sidebar />
        <div className={classes.rightContainer}>
          <Header />
          <Customers customers={customers} />
        </div>
      </div>
    </>
  );
};

export default Home;
