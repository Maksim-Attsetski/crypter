import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IState {
  users: any[];
  setUsers: (data: any[]) => void;
}

export const useUsersState = create(
  persist<IState>(
    (use) => ({
      users: [],
      setUsers: (data: any[]) => use((state) => ({ ...state, users: data })),
    }),
    {
      name: 'users',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
