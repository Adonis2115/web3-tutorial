import useSWR from "swr";
import { ABI, address } from "../contracts/erc20Token";
import { web3 } from "../lib/web3Provider";

const useGetSymbol = () => {
  const erc20Token = new web3.eth.Contract(ABI, address);
  const { data, error, isLoading } = useSWR(
    `symbol:${address}`,
    async () => {
      const symbol = await erc20Token.methods.symbol().call();
      return symbol;
    },
    {
      revalidateOnFocus: false,
    }
  );
  return { symbol: data, error, isLoading };
};

const useGetTokenBalance = (address: string) => {
  const erc20Token = new web3.eth.Contract(ABI, address);
  const { data, error, isLoading } = useSWR(
    `balanceOf:${address}`,
    async () => {
      const balance = await erc20Token.methods.balanceOf(address).call();
      return balance;
    },
    {
      revalidateOnFocus: false,
    }
  );
  return { balance: data, error, isLoading };
};
export { useGetSymbol, useGetTokenBalance };
