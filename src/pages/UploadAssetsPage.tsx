import { useState } from 'react';
import { Upload, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { uploadAsset, ASSETS } from '../lib/storage';

export default function UploadAssetsPage() {
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<{ [key: string]: 'success' | 'error' | null }>({
    logo: null,
    favicon: null,
    certificates: null,
  });
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File | null, filename: string, key: string) => {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      await uploadAsset(file, filename);
      setResults(prev => ({ ...prev, [key]: 'success' }));
    } catch (err) {
      console.error(`Error uploading ${filename}:`, err);
      setResults(prev => ({ ...prev, [key]: 'error' }));
      setError(`Failed to upload ${filename}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, filename: string, key: string) => {
    const file = e.target.files?.[0] || null;
    handleUpload(file, filename, key);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Upload Assets to Supabase</h1>
            <p className="text-gray-400">Upload your logo, favicon, and certificates to Supabase Storage</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Logo (logo.png)</h3>
                  <p className="text-sm text-gray-400">Company logo for header and footer</p>
                </div>
                {results.logo === 'success' && <CheckCircle className="w-6 h-6 text-green-400" />}
                {results.logo === 'error' && <XCircle className="w-6 h-6 text-red-400" />}
              </div>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={(e) => handleFileChange(e, 'logo.png', 'logo')}
                disabled={uploading}
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer disabled:opacity-50"
              />
              {results.logo === 'success' && (
                <div className="mt-4">
                  <img src={ASSETS.logo} alt="Logo preview" className="h-16 w-auto object-contain bg-white/5 p-2 rounded" />
                </div>
              )}
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Favicon (favicon.png)</h3>
                  <p className="text-sm text-gray-400">Browser tab icon</p>
                </div>
                {results.favicon === 'success' && <CheckCircle className="w-6 h-6 text-green-400" />}
                {results.favicon === 'error' && <XCircle className="w-6 h-6 text-red-400" />}
              </div>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={(e) => handleFileChange(e, 'favicon.png', 'favicon')}
                disabled={uploading}
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer disabled:opacity-50"
              />
              {results.favicon === 'success' && (
                <div className="mt-4">
                  <img src={ASSETS.favicon} alt="Favicon preview" className="h-8 w-8 object-contain bg-white/5 p-1 rounded" />
                </div>
              )}
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Certificates (All-cert.png)</h3>
                  <p className="text-sm text-gray-400">Technology certifications display</p>
                </div>
                {results.certificates === 'success' && <CheckCircle className="w-6 h-6 text-green-400" />}
                {results.certificates === 'error' && <XCircle className="w-6 h-6 text-red-400" />}
              </div>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={(e) => handleFileChange(e, 'All-cert.png', 'certificates')}
                disabled={uploading}
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer disabled:opacity-50"
              />
              {results.certificates === 'success' && (
                <div className="mt-4">
                  <img src={ASSETS.certificates} alt="Certificates preview" className="w-full max-w-md h-auto object-contain bg-white/5 p-2 rounded" />
                </div>
              )}
            </div>
          </div>

          {uploading && (
            <div className="mt-6 flex items-center justify-center gap-3 text-blue-400">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </div>
          )}

          {Object.values(results).every(r => r === 'success') && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
              All assets uploaded successfully! Refresh your homepage to see the changes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
