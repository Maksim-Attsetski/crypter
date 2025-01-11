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
    const data = await supabase.auth.signInWithPassword(credentials);

    if (data.data.user) {
      const response = await onGetUser(data.data.user.id);
      setUser(response);
    }
  };

  const onSignUp = async (
    credentials: SignUpWithPasswordCredentials,
    userData: IUser
  ) => {
    const data = await supabase.auth.signUp(credentials);

    if (data.data.user) {
      const newUser: IUser = {
        ...userData,
        public_uid: data.data.user.id,
        uid: data.data.user.id,
        verified: false,
        wallet_uid: null,
        created_at: data.data.user.created_at,
      };
      const response = await onCreateUser(newUser);
      setUser(response);
    }
  };

  const onSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, onSignIn, onSignUp, onSignOut };
};
