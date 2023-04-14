import "./App.css";
import { useSelector } from "react-redux";
import { Transactions } from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import CredDeb from "./components/CredDeb";

function App() {
  const transactions = useSelector((state) => state.transaction.transaction);
  return (
    <div className="App">
      <div className="data">
        <Balance transactions={transactions} />
        <CredDeb transactions={transactions} />
        <AddTransaction transactions={transactions} />
      </div>

      <div className="transactions-list">
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
