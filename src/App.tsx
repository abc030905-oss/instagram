import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import PostItem from './components/Post';
import Suggestions from './components/Suggestions';
import { Post as PostType } from './types';

const mockPosts: PostType[] = [
  {
    id: 'p1',
    user: { id: 'u2', username: 'travel_gram', avatar: 'https://picsum.photos/seed/travel/100/100', isVerified: true },
    image: 'https://picsum.photos/seed/nature1/1080/1080',
    likes: 12450,
    caption: 'Exploring the hidden gems of the world! 🌍✨ #travel #adventure #nature',
    timestamp: '2h',
    commentsCount: 84,
  },
  {
    id: 'p2',
    user: { id: 'u3', username: 'foodie_life', avatar: 'https://picsum.photos/seed/food/100/100' },
    image: 'https://picsum.photos/seed/food1/1080/1080',
    likes: 8920,
    caption: 'The best pasta I have ever had! 🍝🇮🇹 #foodie #italy #pasta',
    timestamp: '5h',
    commentsCount: 120,
  },
  {
    id: 'p3',
    user: { id: 'u4', username: 'tech_guru', avatar: 'https://picsum.photos/seed/tech/100/100', isVerified: true },
    image: 'https://picsum.photos/seed/tech1/1080/1080',
    likes: 5600,
    caption: 'New setup is finally complete! 💻🔥 #setup #tech #gaming',
    timestamp: '1d',
    commentsCount: 45,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex justify-center ml-16 xl:ml-64 lg:mr-80 min-h-screen pt-8">
        <div className="w-full max-w-[630px] px-4">
          {/* Stories Bar */}
          <Stories />

          {/* Feed of Posts */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <div key={post.id}>
                <PostItem post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar Suggestions */}
      <Suggestions />
    </div>
  );
}
