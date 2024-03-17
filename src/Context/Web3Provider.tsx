import { createContext, useState } from "react";
import Web3 from "web3";

interface Web3ContextProps {
  web3: Web3 | null;
  connectedAccount: string | undefined;
  connect: () => Promise<void>;
}

export const Web3Context = createContext<Web3ContextProps>({
  web3: null,
  connectedAccount: undefined,
  connect: async () => {},
});

const Web3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [connectedAccount, setConnectedAccount] = useState<string | undefined>(
    undefined
  );
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const connect = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  return (
    <Web3Context.Provider value={{ web3, connectedAccount, connect }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
