import { useContext } from "react";
import { Web3Context } from "../Context/Web3Provider";
import WalletConnected from "./WalletConnected";

function WalletConnect() {
  const { connectedAccount, connect } = useContext(Web3Context);
  return (
    <>
      {connectedAccount ? (
        <WalletConnected connectedAccount={connectedAccount} />
      ) : (
        <button onClick={connect}>Connect MetaMask</button>
      )}
    </>
  );
}

export default WalletConnect;
