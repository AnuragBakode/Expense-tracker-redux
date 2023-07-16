import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { useSelector } from "react-redux";
import { Transactions } from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import CredDeb from "./components/CredDeb";
import { DashboardPage } from "./pages/DashboardPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const transactions = useSelector((state) => state.transaction.transaction);
  // return (
  //   <div className="App">
  //     <div className="data">
  //       <Balance transactions={transactions} />
  //       <CredDeb transactions={transactions} />
  //       <AddTransaction transactions={transactions} />
  //     </div>

  //     <div className="transactions-list">
  //       <Transactions transactions={transactions} />
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <ToastContainer theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
