import UrlFilter from './UrlFilter';
import UrlCard from './UrlCard';
import { useProfileStore } from '../../store/useProfileStore';

const UrlHistory = () => {
  const getFilteredUrls = useProfileStore((state) => state.getFilteredUrls);
  const filteredUrls = getFilteredUrls(); // ← Call outside

  return (
    <div className=" rounded-2xl shadow-2xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-white mb-4">Your Short URLs</h3>

      <div className="space-y-4 mt-4">
        {filteredUrls.length === 0 ? (
          <p className="text-center text-white">No URLs match your filters.</p>
        ) : (
          filteredUrls.map((url) => <UrlCard key={url._id} url={url} />)
        )}
      </div>
    </div>
  );
};

export default UrlHistory;
