import { useProfileStore } from '../../store/useProfileStore';
import { useState } from 'react';

const UrlFilter = () => {
  const { filters, setFilters } = useProfileStore();

  const handleChange = (e) => {
    setFilters({ [e.target.name]: e.target.value });
  };

  return (
    <div className="inset-0 bg-gradient-to-br from-indigo-300 to-purple- opacity-90 border border-gray-200 rounded-xl p-4 shadow-sm mb-4 space-y-4">
      <h4 className="font-semibold text-white text-lg">Filter by Date and Clicks</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Range */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">From Date</label>
          <input
            type="date"
            name="dateFrom"
            value={filters.dateFrom}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">To Date</label>
          <input
            type="date"
            name="dateTo"
            value={filters.dateTo}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Click Range */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">Min Clicks</label>
          <input
            type="number"
            name="clickMin"
            value={filters.clickMin}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">Max Clicks</label>
          <input
            type="number"
            name="clickMax"
            value={filters.clickMax}
            onChange={handleChange}
            className="border border-white rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default UrlFilter;
