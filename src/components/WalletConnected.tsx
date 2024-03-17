import useWeb3Balance from "../hooks/providerData";

function WalletConnected({ connectedAccount }: { connectedAccount: string }) {
  const { balance, error, isLoading } = useWeb3Balance(connectedAccount);
  return (
    <>
      <p>{connectedAccount}</p>
      <p>BNB: {isLoading ? "Loading.." : error ? "error" : balance}</p>
      <button>Metamask Connected</button>
    </>
  );
}

export default WalletConnected;
