export interface IWalletActivity {
  action: 'sell' | 'buy';
  nft_id: string;
}

export interface IWallet<U = number, C = string> {
  id: number;
  user_uid: U;
  eth_amount: number;
  collection: C[];
  created_at: string;
  activity: IWalletActivity[];
}
