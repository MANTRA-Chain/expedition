import { IChain as Chain, INativeCurrency } from "../models/chain";
import React from "react";

export default function() {
  // Check host name
  const hostname = window.location.hostname;
  let chainList: Chain[];
  const nativeCurrency: INativeCurrency = {
    name: "MANTRA",
    symbol: "OM",
    decimals: 18,
  };
  const defaultParams = {
    nativeCurrency,
    iconUrls: [
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg",
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png",
    ],
  };
  if (
    hostname.includes("localhost")
    || hostname.includes(".mantrachain.dev")
    || hostname.includes(".pages.dev")
  ) {
    chainList = [
      {
        chainId: `0x${(7888).toString(16)}`,
        name: "OMSTEAD Testnet",
        network: "testnet (Archive Node)",
        rpc: ["https://evm.archive.omstead.io"],
        blockExplorerUrls: ["https://explorer.omstead.io/evm"],
        ...defaultParams,
      },
      {
        chainId: `0x${(5887).toString(16)}`,
        name: "MANTRA EVM Canary (Archive)",
        network: "canary (Archive Node)",
        rpc: ["https://evm.archive.evm-canary.mantrachain.dev"],
        blockExplorerUrls: ["https://explorer.evm-canary.mantrachain.dev"],
        ...defaultParams,
      },
    ];
  } else {
    chainList = [
      {
        chainId: `0x${(7888).toString(16)}`,
        name: "OMSTEAD Testnet",
        network: "testnet",
        rpc: ["https://evm.omstead.io"],
        blockExplorerUrls: ["https://explorer.evm-canary.mantrachain.dev"],
        ...defaultParams,
      },
    ];
  }
  const [chains, setChains] = React.useState<Chain[]>(chainList);

  return [chains, setChains];
}
