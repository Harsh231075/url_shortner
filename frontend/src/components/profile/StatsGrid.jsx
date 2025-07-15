import { useProfileStore } from '../../store/useProfileStore';

const StatsGrid = () => {
  const { urls } = useProfileStore();

  const totalClicks = urls.reduce((sum, u) => sum + u.clickCount, 0);

  return (
    <div className="  grid grid-cols-2 gap-6 mb-10">
      <div className="inset-0 bg-gradient-to-br from-indigo-300 to-purple- opacity-90 p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-indigo-600 mb-1">{urls.length}</div>
        <div className="text-sm font-medium text-gray-600">Short Links</div>
      </div>
      <div className="inset-0 bg-gradient-to-br from-indigo-300 to-purple- opacity-90 p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
        <div className="text-3xl font-bold text-purple-600 mb-1">{totalClicks}</div>
        <div className="text-sm font-medium text-gray-600">Total Clicks</div>
      </div>
    </div>
  );
};

export default StatsGrid;