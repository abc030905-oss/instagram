import { Story } from '../types';

const mockStories: Story[] = [
  { id: '1', user: { id: 'u1', username: 'your_story', avatar: 'https://picsum.photos/seed/user/100/100' }, isViewed: false },
  { id: '2', user: { id: 'u2', username: 'travel_gram', avatar: 'https://picsum.photos/seed/travel/100/100' }, isViewed: false },
  { id: '3', user: { id: 'u3', username: 'foodie_life', avatar: 'https://picsum.photos/seed/food/100/100' }, isViewed: false },
  { id: '4', user: { id: 'u4', username: 'tech_guru', avatar: 'https://picsum.photos/seed/tech/100/100' }, isViewed: false },
  { id: '5', user: { id: 'u5', username: 'nature_lover', avatar: 'https://picsum.photos/seed/nature/100/100' }, isViewed: false },
  { id: '6', user: { id: 'u6', username: 'art_corner', avatar: 'https://picsum.photos/seed/art/100/100' }, isViewed: false },
  { id: '7', user: { id: 'u7', username: 'music_vibes', avatar: 'https://picsum.photos/seed/music/100/100' }, isViewed: false },
  { id: '8', user: { id: 'u8', username: 'fitness_pro', avatar: 'https://picsum.photos/seed/fitness/100/100' }, isViewed: false },
];

export default function Stories() {
  return (
    <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg overflow-x-auto scrollbar-hide mb-6">
      {mockStories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1 min-w-[72px]">
          <div className={`w-16 h-16 rounded-full p-[2px] ${
            story.isViewed ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600'
          }`}>
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
              <img 
                src={story.user.avatar} 
                alt={story.user.username} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <span className="text-xs text-gray-600 truncate w-full text-center">
            {story.user.username}
          </span>
        </div>
      ))}
    </div>
  );
}
