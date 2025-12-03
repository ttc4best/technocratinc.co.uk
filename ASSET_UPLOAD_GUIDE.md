# Asset Upload Guide

Your website is configured to use Supabase Storage for all images. Currently, the following assets need to be uploaded:

## Required Assets

1. **logo.png** - Company logo (displayed in header and footer)
2. **favicon.png** - Browser tab icon
3. **All-cert.png** - Technology certifications image

## Current Status

The website has been built with smart fallback handling:
- If images fail to load from Supabase Storage, elegant fallback icons will be displayed
- The favicon uses an emoji placeholder
- The logo shows "Technocrat" text with an icon when the image is unavailable
- The certificates section shows a star icon placeholder

## How to Upload Assets

### Option 1: Using the Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to Storage > public-assets bucket
3. Click "Upload file"
4. Upload each of the three files:
   - logo.png
   - favicon.png
   - All-cert.png

### Option 2: Using the Upload Utility (Development)

A client-side upload form has been created. To use it:

1. Import and call the function in your dev environment:
```typescript
import { createImageUploadForm } from './src/utils/uploadAssets';

// This will create an upload form on the page
createImageUploadForm();
```

2. Select your image files and click "Upload All"
3. Refresh the page to see the images

### Option 3: Programmatic Upload

Use the `uploadAsset` function from `src/lib/storage.ts`:

```typescript
import { uploadAsset } from './src/lib/storage';

// Upload logo
const logoFile = new File([blob], "logo.png", { type: "image/png" });
await uploadAsset(logoFile, "logo.png");

// Upload favicon
const faviconFile = new File([blob], "favicon.png", { type: "image/png" });
await uploadAsset(faviconFile, "favicon.png");

// Upload certificates
const certFile = new File([blob], "All-cert.png", { type: "image/png" });
await uploadAsset(certFile, "All-cert.png");
```

## Image Requirements

- **Format**: PNG, JPEG, or WebP
- **Max Size**: 5MB per file
- **Logo**: Recommended size 200x60px (transparent background recommended)
- **Favicon**: 32x32px or 64x64px
- **Certificates**: Any reasonable size (will auto-scale)

## Verification

After uploading, the images will be available at:
- `https://[your-project].supabase.co/storage/v1/object/public/public-assets/logo.png`
- `https://[your-project].supabase.co/storage/v1/object/public/public-assets/favicon.png`
- `https://[your-project].supabase.co/storage/v1/object/public/public-assets/All-cert.png`

You can test these URLs directly in your browser.

## Notes

- The website will continue to function perfectly even without these images
- Fallback UI elements ensure a professional appearance
- Images are cached for better performance
- All uploads replace existing files automatically (upsert mode)
