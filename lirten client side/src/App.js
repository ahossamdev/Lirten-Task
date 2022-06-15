import { Routes } from "react-router-dom";
import AddCutomer from "./Pages/AddingCustomer/AddCutomer";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/customers"} element={<Home />}></Route>
          <Route path={"/addcustomer"} element={<AddCutomer />}></Route>
        </Routes>
      </BrowserRouter>

      <div></div>
    </>
  );
}

export default App;
