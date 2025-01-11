import { supabase } from 'features/supabase';
import { useUsersState } from './state';
import { Service } from 'features/service';
import { IUser } from './types';

const userService = new Service('users');

export const useUsers = () => {
  const { users, setUsers } = useUsersState();

  const onGetUsers = async () => {
    const data = await supabase.auth.getUserIdentities();
    console.log('users', data);
  };

  const onGetUser = async (uid: string, by: keyof IUser = 'uid') => {
    const data = await userService.getBy(uid, by);
    return data.data?.[0] ?? null;
  };
  const onCreateUser = async (data: IUser) => {
    const response = await userService.create(data);
    return response.data?.[0] ?? null;
  };

  return { users, onGetUsers, onGetUser, onCreateUser };
};
