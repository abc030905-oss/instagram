import { User } from '../types';

const suggestions: User[] = [
  { id: 's1', username: 'nature_explorer', avatar: 'https://picsum.photos/seed/nature/100/100', isVerified: true },
  { id: 's2', username: 'urban_vibes', avatar: 'https://picsum.photos/seed/urban/100/100' },
  { id: 's3', username: 'chef_mario', avatar: 'https://picsum.photos/seed/chef/100/100' },
  { id: 's4', username: 'digital_art', avatar: 'https://picsum.photos/seed/digital/100/100', isVerified: true },
  { id: 's5', username: 'fitness_journey', avatar: 'https://picsum.photos/seed/fitness/100/100' },
];

export default function Suggestions() {
  return (
    <div className="hidden lg:block w-80 p-4 fixed right-0 top-0 h-screen bg-white">
      {/* Current User */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="Current User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="font-semibold text-sm">your_username</div>
            <div className="text-gray-500 text-sm">Your Name</div>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
        <button className="text-gray-900 text-xs font-semibold hover:text-gray-500">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src={user.avatar} 
                  alt={user.username} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-semibold text-sm hover:text-gray-500 cursor-pointer">
                  {user.username}
                </div>
                <div className="text-gray-500 text-xs">Followed by travel_gram + 2 more</div>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-xs text-gray-400 space-y-4">
        <div className="flex flex-wrap gap-2">
          {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'].map((link) => (
            <span key={link} className="hover:underline cursor-pointer">{link}</span>
          ))}
        </div>
        <div>© 2024 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
}
