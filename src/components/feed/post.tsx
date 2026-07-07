import { useEffect, useRef, useState } from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import IPost from '../../schemas/post'
import {
  BookmarkIcon,
  EmojiCollection,
  FilledHeartIcon,
  HeartIcon,
  MessageIcon,
  ShareIcon,
} from './icons'

interface IProps {
  post: IPost
}
const Post = ({ post }: IProps) => {
  const [liked, setLiked] = useState(false)
  const [showHeart, setShowHeart] = useState(false)
  const heartTimer = useRef<number | null>(null)
  const lastTap = useRef(0)
  
  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true)
    }
    
    setShowHeart(true)
    
    if (heartTimer.current !== null) {
      clearTimeout(heartTimer.current)
    }
    
    heartTimer.current = window.setTimeout(() => {
      setShowHeart(false)
      heartTimer.current = null
    }, 700)
  
  }

  const handleTouchEnd = () => {
    const now = Date.now()

    if (now - lastTap.current < 300) {
      handleDoubleClick()
    }

    lastTap.current = now
  }

  useEffect(() => {
    return () => {
      if (heartTimer.current !== null) {
        clearTimeout(heartTimer.current)
      }
    }
  }, [])

  return (
    <div className="relative card space-y-4">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center -m-2">
          <div className="w-8 h-8 overflow-hidden rounded-full cursor-pointer">
            <img className="w-full" src={post.profile} alt={post.profile} />
          </div>
          <h2 className="font-semibold">{post.username}</h2>
        </div>
        <DotsHorizontalIcon className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Posted Image */}
      <div
      className="relative -mx-5 aspect-square overflow-hidden"
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
      >
        <img className="w-full" src={post.image} alt={post.username} />
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
            className="w-24 h-24 animate-heartPop drop-shadow-2xl"
            fill="#ff3040"
            viewBox="0 0 24 24"
            >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.03 6.03 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
      </div>
    )}
    </div>

      {/* Actions */}
      <div className="space-y-2">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-4 dark:text-white">
           <div
           onClick={() => setLiked(!liked)}
           className="cursor-pointer"
           >
            {liked ? <FilledHeartIcon /> : <HeartIcon />}
            </div>
            <MessageIcon />
            <ShareIcon />
          </div>
          <div className="dark:text-white">
            <BookmarkIcon />
          </div>
        </div>
        <span className="font-semibold">{`${post.likes} likes`}</span>
        <p>
          <span className="font-semibold">{post.username} </span>
          {post.description}
        </p>
        <h3 className="text-xs text-gray-500 dark:text-gray-400">{post.createdAt}</h3>
      </div>

      <div className="h-[1px] relative left-0 right-0 bg-gray-200 dark:bg-gray-700 -mx-5"></div>

      <div className="flex gap-4">
        <div className="dark:text-white">
          <EmojiCollection />
        </div>
        <input
          className="focus:outline-none w-full bg-transparent dark:text-white"
          type="text"
          placeholder="Add a comment"
        />
        <button className="text-blue-500">Post</button>
      </div>
    </div>
  )
}

export default Post
