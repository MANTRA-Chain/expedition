import * as React from "react";
import { IChain as Chain } from "../../models/chain";
import Button from "@material-ui/core/Button";

interface IProps {
  selected: Chain;
}

const AddToMetaMask: React.FC<IProps> = ({selected}: IProps) => {
  const handleAdd = () => {
    // @ts-ignore
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is installed!");
      return;
    }
    // @ts-ignore
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: selected.chainId,
        rpcUrls: selected.rpc,
        chainName: selected.name,
        nativeCurrency: selected.nativeCurrency,
        blockExplorerUrls: selected.blockExplorerUrls,
      }],
    });
  };

  return (
    <>
      <Button onClick={handleAdd} color="primary">
        Add to MetaMask
      </Button>
    </>
  );
};

export default AddToMetaMask;
