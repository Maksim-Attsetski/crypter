export interface IBid {
  placed_at: string;
  user_uid: string;
  price: number;
}

export interface INft<T = string> {
  id: number;
  created_at: string;
  name: string;
  image_url: string | null;
  description: '';
  price: number;
  start_price: number;
  end_at: string;
  created_by: T;
  bids: IBid[];
  owner_ids: T[];
  like_ids: T[];
}

export type TFullNft = INft<string>;
