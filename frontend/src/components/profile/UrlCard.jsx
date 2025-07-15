import { Copy, Trash2, ExternalLink } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';
import { useState } from 'react';

const UrlCard = ({ url }) => {
  const deleteUrl = useProfileStore((state) => state.deleteUrl);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-2 text-lg font-bold text-blue-700 break-all">
            <ExternalLink className="w-5 h-5 text-purple-600" />
            <a
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-800 transition-colors"
            >
              {url.shortUrl}
            </a>
          </div>
          <p className="text-gray-800 text-sm mt-2 break-all font-medium">
            {url.originalUrl}
          </p>
          <div className="flex items-center space-x-4 mt-3 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {new Date(url.createdAt).toLocaleDateString()}
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-semibold">
              {url.clickCount} clicks
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-4">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 text-white font-medium transition-colors"
          >
            <Copy className="w-5 h-5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>

          <button
            onClick={() => deleteUrl(url._id)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2 font-medium transition-colors"
          >
            <Trash2 className="w-5 h-5" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;