export interface IUser {
  name: string;
  fullName: string;
  uid: string;
  wallet_uid: string | null;
  avatar_url: string | null;
  public_uid: string;
  verified: boolean;
  bio: string;
  background: number;
  email: string;
  created_at: string;
}

export type TUser = null | IUser;
