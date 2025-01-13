import { messageState } from 'features/state';

export const useMessage = (duration: number = 3000) => {
  const state = messageState();

  const onAddMessage = (text: string) => {
    if (state.messages.length >= 5) return;

    const id = Math.random() * 999999999999;
    state.addMessage({ id, text });

    setTimeout(() => {
      state.removeMessage(id);
    }, duration);
  };

  return { messages: state.messages, onAddMessage };
};
