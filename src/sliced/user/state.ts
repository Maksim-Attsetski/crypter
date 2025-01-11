import { create } from 'zustand';

interface IState {
  users: any[];
  setUsers: (data: any[]) => void;
}

export const useUsersState = create<IState>((use) => ({
  users: [],
  setUsers: (data: any[]) => use((state) => ({ ...state, users: data })),
}));
