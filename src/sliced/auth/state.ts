import { TUser } from 'sliced/user';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IState {
  user: TUser;
  setUser: (data: TUser) => void;
}

export const useAuthState = create(
  persist<IState>(
    (use) => ({
      user: null,
      setUser: (data: TUser) =>
        use((state) => ({
          ...state,
          user: state?.user && data ? { ...state.user, ...data } : data,
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
