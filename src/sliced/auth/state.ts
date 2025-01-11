import { TUser } from 'sliced/user';
import { create } from 'zustand';

interface IState {
  user: TUser;
  setUser: (data: TUser) => void;
}

export const useAuthState = create<IState>((use) => ({
  user: null,
  setUser: (data: TUser) =>
    use((state) => ({
      ...state,
      user: state?.user && data ? { ...state.user, ...data } : data,
    })),
}));
