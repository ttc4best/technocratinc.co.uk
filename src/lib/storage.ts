import { supabase } from './supabase';

const STORAGE_BUCKET = 'public-assets';

export const getPublicUrl = (path: string): string => {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(path);

  return data.publicUrl;
};

export const ASSETS = {
  logo: getPublicUrl('logo.png'),
  favicon: getPublicUrl('favicon.png'),
  certificates: getPublicUrl('All-cert.png'),
} as const;

export const uploadAsset = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, {
      upsert: true,
      cacheControl: '3600',
    });

  if (error) {
    throw error;
  }

  return data;
};
