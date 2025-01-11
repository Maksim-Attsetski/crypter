import { createClient } from '@supabase/supabase-js';

export const sbUrl = process.env.REACT_APP_SUPABASE_URL!;
export const sbStorageUrl =
  process.env.REACT_APP_SUPABASE_URL! + '/storage/v1/object/public/assets/';

export const supabase = createClient(
  sbUrl,
  process.env.REACT_APP_SUPABASE_API_KEY!
);
