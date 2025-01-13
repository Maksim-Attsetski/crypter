import { supabase } from 'features/supabase';
import { useAuthState } from './state';
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { IUser, useUsers } from 'sliced/user';

export const useAuth = () => {
  const { setUser, user } = useAuthState();
  const { onGetUser, onCreateUser } = useUsers();

  const onSignIn = async (credentials: SignInWithPasswordCredentials) => {
    try {
      const data = await supabase.auth.signInWithPassword(credentials);

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (data.data.user) {
        const response = await onGetUser(data.data.user.id);
        setUser(response);
      }
    } catch (error) {
      throw error;
    }
  };

  const onSignUp = async (
    credentials: SignUpWithPasswordCredentials,
    userData: IUser
  ) => {
    try {
      const data = await supabase.auth.signUp(credentials);

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (data.data.user) {
        const newUser: IUser = {
          ...userData,
          public_uid: data.data.user.id,
          uid: data.data.user.id,
          verified: false,
          wallet_uid: null,
          created_at: data.data.user.created_at,
        };
        await onCreateUser(newUser);
        setUser(newUser);
      }
    } catch (error) {
      throw error;
    }
  };

  const onSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const onGetUserAfterReload = async () => {
    const { data } = await supabase.auth.getSession();
    const id = data.session?.user?.id;
    if (data.session?.user?.id) {
      const res = await onGetUser(data.session?.user?.id);
      setUser(res);
    }

    return id;
  };

  return { user, onSignIn, onSignUp, onSignOut, onGetUserAfterReload };
};
