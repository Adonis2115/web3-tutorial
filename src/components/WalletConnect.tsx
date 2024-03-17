import { useContext } from "react";
import { Web3Context } from "../Context/Web3Provider"; // Adjust the path
import useWeb3Balance from "../hooks/providerData";

function WalletConnect() {
  const { connectedAccount, connect } = useContext(Web3Context);
  const { balance, error, isLoading } = useWeb3Balance(
    connectedAccount as string
  );
  return (
    <>
      <p>{connectedAccount}</p>
      <p>{isLoading ? "Loading.." : error ? "error" : balance}</p>
      {connectedAccount ? (
        <button>Metamask Connected</button>
      ) : (
        <button onClick={connect}>Connect MetaMask</button>
      )}
    </>
  );
}

export default WalletConnect;
