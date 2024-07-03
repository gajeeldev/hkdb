import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getAchievements = async (): Promise<Tables<'achievements'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('achievements').select('*');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
