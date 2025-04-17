export interface INativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface IChain {
  name: string;
  chainId?: string;
  shortName?: string;
  chain?: string;
  network: string;
  networkId?: string;
  nativeCurrency?: INativeCurrency;
  rpc: string[];
  faucets?: string[];
  infoURL?: string[];
  url?: string;
  summary?: string;
  blockExplorerUrls?: string[];
  iconUrls?: string[];
  [k: string]: any;
}
