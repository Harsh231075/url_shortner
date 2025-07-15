import React, { useEffect } from 'react';
import { useProfileStore } from '../store/useProfileStore';
import ProfileHeader from '../components/profile/ProfileHeader';
import StatsGrid from '../components/profile/StatsGrid';
import UrlHistory from '../components/profile/UrlHistory';
import UrlFilter from '../components/profile/UrlFilter';

const ProfilePage = () => {
  const { fetchProfileData, loading } = useProfileStore();

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) return <div className="p-8 text-center text-lg">Loading profile...</div>;

  return (
    <div
      className="min-h-screen pt-20 px-4 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/grey-sandbag.png')", // 👈 your asset here
        backgroundColor: '#1955cc',
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 ">
        {/* Left Column - Fixed */}
        <div className="lg:col-span-1 h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto">
          <div className="space-y-4 pr-2">
            <UrlFilter />
            <ProfileHeader />
          </div>
        </div>

        {/* Right Column - Scrollable */}
        <div className="lg:col-span-2 h-[calc(100vh-5rem)] overflow-y-auto pb-8 pr-1">
          <StatsGrid />
          <UrlHistory />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
