import Cardstyles from "./style.css";
import Link from "next/link";

export default function Card(props) {
  const { Account_Number, Account_name, AccountBalance } = props.data;

  return (
    <>
      <div className="card">
        <p className="name">Account Number: {Account_name}</p>
        <p>Account Name: {Account_Number}</p>
        <p>Account Balance: {AccountBalance}</p>
      </div>
    </>
  );
}

