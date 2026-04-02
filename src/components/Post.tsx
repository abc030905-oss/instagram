import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal,
  CheckCircle2
} from 'lucide-react';
import { Post as PostType } from '../types';
import { motion } from 'motion/react';

import React from 'react';

export default function PostItem({ post }: { post: PostType }): React.JSX.Element {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
              <img 
                src={post.user.avatar} 
                alt={post.user.username} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm hover:text-gray-500 cursor-pointer">
              {post.user.username}
            </span>
            {post.user.isVerified && (
              <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500" />
            )}
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{post.timestamp}</span>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>

      {/* Image */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={post.image} 
          alt="Post content" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <motion.div whileTap={{ scale: 1.2 }}>
              <Heart className="w-7 h-7 cursor-pointer hover:text-gray-500" />
            </motion.div>
            <MessageCircle className="w-7 h-7 cursor-pointer hover:text-gray-500" />
            <Send className="w-7 h-7 cursor-pointer hover:text-gray-500" />
          </div>
          <Bookmark className="w-7 h-7 cursor-pointer hover:text-gray-500" />
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-2">
          {post.likes.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>

        {/* Comments count */}
        <div className="text-gray-500 text-sm mb-2 cursor-pointer">
          View all {post.commentsCount} comments
        </div>

        {/* Add comment */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="text-sm w-full outline-none bg-transparent"
          />
          <button className="text-blue-500 font-semibold text-sm ml-2 opacity-50 cursor-default">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
