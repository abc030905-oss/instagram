import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  Menu,
  Instagram
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Search' },
  { icon: Compass, label: 'Explore' },
  { icon: Film, label: 'Reels' },
  { icon: MessageCircle, label: 'Messages' },
  { icon: Heart, label: 'Notifications' },
  { icon: PlusSquare, label: 'Create' },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 xl:w-64 border-r border-gray-200 bg-white p-3 flex flex-col transition-all duration-300 z-50">
      {/* Logo */}
      <div className="mb-8 px-3 pt-6">
        <div className="xl:hidden">
          <Instagram className="w-7 h-7" />
        </div>
        <div className="hidden xl:block">
          <h1 className="text-2xl font-bold tracking-tight italic font-serif">Instagram</h1>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 ${
              item.active ? 'font-bold' : 'font-normal'
            }`}
          >
            <item.icon className="w-7 h-7" strokeWidth={item.active ? 3 : 2} />
            <span className="hidden xl:block text-base">{item.label}</span>
          </motion.div>
        ))}
        
        <div className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100 mt-4">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="Profile" 
              className="w-full h-full rounded-full border-2 border-white object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="hidden xl:block text-base">Profile</span>
        </div>
      </nav>

      {/* More Menu */}
      <div className="mt-auto">
        <div className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
          <Menu className="w-7 h-7" />
          <span className="hidden xl:block text-base">More</span>
        </div>
      </div>
    </div>
  );
}
