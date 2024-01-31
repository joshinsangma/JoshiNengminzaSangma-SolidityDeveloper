import { useState } from 'react'

import './App.css'

function App() {

  // Component state
  const [currentAccount, setCurrentAccount] = useState(null)

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log("connected Account:", accounts[0])
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
    </>
  )







}

export default App
