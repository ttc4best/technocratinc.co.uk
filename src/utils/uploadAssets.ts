import { uploadAsset } from '../lib/storage';

export async function uploadAssetsToSupabase() {
  const assets = [
    { path: 'logo.png', description: 'Company logo' },
    { path: 'favicon.png', description: 'Favicon' },
    { path: 'All-cert.png', description: 'Certifications' },
  ];

  console.log('Upload utility ready. To upload assets:');
  console.log('1. Ensure you have the image files ready');
  console.log('2. Use the uploadAsset function from lib/storage.ts');
  console.log('\nExample usage:');
  console.log('```typescript');
  console.log('const file = new File([blob], "logo.png", { type: "image/png" });');
  console.log('await uploadAsset(file, "logo.png");');
  console.log('```');

  return assets;
}

export function createImageUploadForm() {
  const container = document.createElement('div');
  container.style.cssText = 'position: fixed; top: 20px; right: 20px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 9999; max-width: 300px;';

  container.innerHTML = `
    <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: bold; color: #1f2937;">Upload Assets to Supabase</h3>
    <div style="margin-bottom: 12px;">
      <label style="display: block; margin-bottom: 4px; font-size: 14px; font-weight: 500; color: #374151;">Logo (logo.png)</label>
      <input type="file" id="logo-upload" accept="image/png,image/jpeg,image/jpg" style="width: 100%; font-size: 12px;" />
    </div>
    <div style="margin-bottom: 12px;">
      <label style="display: block; margin-bottom: 4px; font-size: 14px; font-weight: 500; color: #374151;">Favicon (favicon.png)</label>
      <input type="file" id="favicon-upload" accept="image/png,image/jpeg,image/jpg" style="width: 100%; font-size: 12px;" />
    </div>
    <div style="margin-bottom: 12px;">
      <label style="display: block; margin-bottom: 4px; font-size: 14px; font-weight: 500; color: #374151;">Certificates (All-cert.png)</label>
      <input type="file" id="cert-upload" accept="image/png,image/jpeg,image/jpg" style="width: 100%; font-size: 12px;" />
    </div>
    <button id="upload-btn" style="width: 100%; padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">Upload All</button>
    <button id="close-btn" style="width: 100%; margin-top: 8px; padding: 8px; background: #6b7280; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">Close</button>
    <div id="upload-status" style="margin-top: 12px; font-size: 12px; color: #6b7280;"></div>
  `;

  document.body.appendChild(container);

  const closeBtn = container.querySelector('#close-btn');
  closeBtn?.addEventListener('click', () => container.remove());

  const uploadBtn = container.querySelector('#upload-btn');
  const statusDiv = container.querySelector('#upload-status');

  uploadBtn?.addEventListener('click', async () => {
    const logoInput = container.querySelector('#logo-upload') as HTMLInputElement;
    const faviconInput = container.querySelector('#favicon-upload') as HTMLInputElement;
    const certInput = container.querySelector('#cert-upload') as HTMLInputElement;

    if (statusDiv) statusDiv.textContent = 'Uploading...';

    try {
      const uploads = [];

      if (logoInput.files?.[0]) {
        uploads.push(uploadAsset(logoInput.files[0], 'logo.png'));
      }
      if (faviconInput.files?.[0]) {
        uploads.push(uploadAsset(faviconInput.files[0], 'favicon.png'));
      }
      if (certInput.files?.[0]) {
        uploads.push(uploadAsset(certInput.files[0], 'All-cert.png'));
      }

      await Promise.all(uploads);

      if (statusDiv) statusDiv.textContent = 'Upload successful! Refresh the page.';
      if (statusDiv) statusDiv.style.color = '#10b981';
    } catch (error) {
      if (statusDiv) statusDiv.textContent = `Error: ${error}`;
      if (statusDiv) statusDiv.style.color = '#ef4444';
    }
  });

  return container;
}
