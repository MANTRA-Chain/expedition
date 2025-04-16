import { IChain as Chain } from "../models/chain";
import React from "react";

export default function() {
  // Check host name
  const hostname = window.location.hostname;
  let chainList: Chain[] = [];
  if (hostname.includes("localhost") || hostname.includes(".mantrachain.dev")) {
    chainList = [
      {
        name: "MANTRA EVM Canary",
        network: "canary",
        rpc: ["https://evm.archive.evm-canary.mantrachain.dev"],
      },
      {
        name: "OMSTEAD Testnet",
        network: "testnet",
        rpc: ["https://evm.archive.omstead.io"],
      },
    ];
  } else if (hostname.includes(".omstead.io")) {
    chainList = [
      {
        name: "OMSTEAD Testnet",
        network: "testnet",
        rpc: ["https://evm.omstead.io"],
      },
    ];
  }
  const [chains, setChains] = React.useState<Chain[]>(chainList);

  return [chains, setChains];
}
