# How to Upload Your Assets to Supabase

Your website now has an easy-to-use upload interface at: **`/upload-assets`**

## Quick Start

1. Visit: `http://localhost:5173/upload-assets` (or your deployed URL + `/upload-assets`)
2. Click "Choose File" for each asset:
   - **Logo** (logo.png) - Your company logo
   - **Favicon** (favicon.png) - Browser tab icon
   - **Certificates** (All-cert.png) - Technology certifications image
3. Files upload automatically when selected
4. You'll see a green checkmark when each upload succeeds
5. Refresh your homepage to see the images appear

## What Was Set Up

### Supabase Storage Bucket
- Bucket name: `public-assets`
- Public access: Enabled (anyone can view files)
- Upload access: Everyone (including anonymous users)
- Max file size: 5MB per file
- Supported formats: PNG, JPEG, JPG, WebP, SVG, GIF

### Frontend Integration
- Smart image loading with fallbacks
- Automatic error handling
- Loading states while images load
- Professional placeholders if images are missing

### File Locations in Supabase
After uploading, your files will be at:
- `public-assets/logo.png`
- `public-assets/favicon.png`
- `public-assets/All-cert.png`

### Public URLs
Images are accessible at:
```
https://[your-project-id].supabase.co/storage/v1/object/public/public-assets/logo.png
https://[your-project-id].supabase.co/storage/v1/object/public/public-assets/favicon.png
https://[your-project-id].supabase.co/storage/v1/object/public/public-assets/All-cert.png
```

## Alternative Upload Methods

### Method 1: Supabase Dashboard (No Code)
1. Go to your Supabase project
2. Click Storage in the left menu
3. Select the `public-assets` bucket
4. Click "Upload file"
5. Upload logo.png, favicon.png, and All-cert.png

### Method 2: Direct API Upload (Developer)
```typescript
import { uploadAsset } from './src/lib/storage';

const logoFile = new File([blob], "logo.png", { type: "image/png" });
await uploadAsset(logoFile, "logo.png");
```

## Troubleshooting

### Files Not Showing After Upload?
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check browser console for any errors

### Upload Failed?
- Check file size (must be under 5MB)
- Check file format (PNG, JPEG, JPG, WebP supported)
- Check browser console for error details
- Verify Supabase connection in .env file

### Images Still Not Appearing?
Don't worry! The website has smart fallbacks:
- Logo shows "Technocrat" text with an icon
- Certificates show a star icon placeholder
- Everything still looks professional

## Security Note

For production, you may want to restrict uploads to authenticated users only. The current setup allows anyone to upload for ease of development. To restrict:

1. Remove the "Anyone can upload assets" policy
2. Keep only "Authenticated users can upload" policy
3. Use the Supabase Dashboard or authenticated API calls to upload

## Need Help?

Check the browser console (F12) for detailed error messages if uploads fail.
