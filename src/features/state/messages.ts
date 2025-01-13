import { IMessagePopup } from 'features/types';
import { create } from 'zustand';

interface IState {
  messages: IMessagePopup[];
  addMessage: (message: IMessagePopup) => void;
  removeMessage: (id: number) => void;
}

export const messageState = create<IState>((use) => ({
  messages: [],
  addMessage: (m) => use((state) => ({ messages: [...state.messages, m] })),
  removeMessage: (id) =>
    use((state) => ({
      messages: state.messages.filter((item) => item.id !== id),
    })),
}));
