import useSWR from "swr";
import { web3 } from "../lib/web3Provider";

const useWeb3Balance = (address: string) => {
  const { data, error, isLoading } = useSWR(
    address ? `balance:${address}` : null,
    async () => {
      const balance = await web3.eth.getBalance(address);
      return web3.utils.fromWei(balance, "ether"); // Convert to Ether units
    },
    {
      revalidateOnFocus: false, // Avoid unnecessary revalidation
    }
  );
  return { balance: data, error, isLoading };
};

export default useWeb3Balance;
