import WalletConnect from "./components/WalletConnect";
import { useGetSymbol } from "./hooks/erc20TokenRead";
import { useContext } from "react";
import { Web3Context } from "./Context/Web3Provider";
import { address, ABI } from "./contracts/erc20Token";

function App() {
  const { web3, connectedAccount } = useContext(Web3Context);
  const { symbol, error, isLoading } = useGetSymbol();
  if (isLoading) console.log("Loading..");
  if (error) console.log(error);
  if (symbol) console.log(symbol);
  const sendToken = async (toAddress: string, amount: number) => {
    if (web3) {
      const erc20Token = new web3.eth.Contract(ABI, address);
      const value = web3.utils.toWei(amount, "ether");
      const txReceipt = await erc20Token.methods
        .transfer(toAddress, value)
        .send({ from: connectedAccount, gas: "600000" });
      console.log("Tx hash:", txReceipt.transactionHash);
    }
  };
  return (
    <>
      <WalletConnect />
      {connectedAccount ? (
        <button
          onClick={() =>
            sendToken("0xf66bB24d5ce7694A43AE9D5F2FaBea407546DcE7", 10)
          }
        >
          Send Token
        </button>
      ) : null}
    </>
  );
}

export default App;
