import WalletConnect from "./components/WalletConnect";
import { useGetSymbol } from "./hooks/erc20TokenData";

function App() {
  const { symbol, error, isLoading } = useGetSymbol();
  if (isLoading) console.log("Loading..");
  if (error) console.log(error);
  if (symbol) console.log(symbol);
  // const sendToken = async (toAddress:string, amount:number) => {
  //   const value = web3.utils.toWei(amount,'ether');
  //   const txReceipt = await erc20Token.methods.transfer(toAddress,value).send({from: connectedAccount});
  //   console.log('Tx hash:',txReceipt.transactionHash);
  // }
  return (
    <>
      <WalletConnect />
      {/* <button onClick={() => sendToken('0xf66bB24d5ce7694A43AE9D5F2FaBea407546DcE7', 0.001)}>Send Token</button> */}
    </>
  );
}

export default App;
