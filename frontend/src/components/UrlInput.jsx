import { Copy } from 'lucide-react';
import { useUrlStore } from '../store/useUrlStore';
import { useState } from 'react';

const UrlInput = () => {
  const url = useUrlStore(state => state.url);
  const setUrl = useUrlStore(state => state.setUrl);
  const handleSubmit = useUrlStore(state => state.handleSubmit);
  const shortUrl = useUrlStore(state => state.shortUrl);
  const loading = useUrlStore(state => state.loading);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      {/* Input + Button */}
      <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-60"
        >
          {loading ? 'Loading...' : 'Shorten URL'}
        </button>
      </div>

      {/*  Show Short URL + Copy Button */}
      {shortUrl && (
        <div className="mt-6 flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline break-all"
          >
            {shortUrl}
          </a>
          <button
            onClick={handleCopy}
            className="ml-4 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white flex items-center gap-1"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </>
  );
};

export default UrlInput;
