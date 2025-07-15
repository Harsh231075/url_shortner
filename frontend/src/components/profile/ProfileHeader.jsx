import { User, Mail, Calendar } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';

const ProfileHeader = () => {
  const { user } = useProfileStore();

  if (!user) return null;

  return (
    <div className="relative rounded-2xl shadow-xl p-8 mb-8 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple- opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
            <img
              src={user.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s'}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-1">{user.name}</h2>
          <p className="text-indigo-100 font-medium">{user.email}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10">
            <Mail className="w-5 h-5 text-white mr-3" />
            <span className="text-white font-medium">{user.email}</span>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10">
            <Calendar className="w-5 h-5 text-white mr-3" />
            <span className="text-white font-medium">
              Joined {new Date(user.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;