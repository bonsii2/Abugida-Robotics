import React, { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  Heart,
  MessageCircle,
  BookOpen,
  Send,
} from "lucide-react";

import recap1 from "../assets/recap1.jpg";
import recap2 from "../assets/recap2.jpg";
import recap3 from "../assets/recap3.jpg";

import unleashing1 from "../assets/unleashing1.jpg";
import unleashing2 from "../assets/unleashing2.png";
import unleashing3 from "../assets/unleashing3.jpg";

import Amh1 from "../assets/Amh1.jpg";
import Amh2 from "../assets/Amh2.jpg";
import Amh3 from "../assets/Amh3.png";

import ebs1 from "../assets/ebs1.jpg";
import ebs2 from "../assets/ebs2.jpg";

import showcast from "../assets/showcast.png";

import celebrate1 from "../assets/celebrate1.jpg";
import celebrate2 from "../assets/celebrate2.jpg";
import celebrate3 from "../assets/celebrate3.jpg";

import exciting1 from "../assets/Exciting1.jpg";
import exciting2 from "../assets/exciting2.png";
import exciting3 from "../assets/exciting3.png";

import pm1 from "../assets/pm1.jpg";
import pm2 from "../assets/pm2.jpg";


// Define types for our data structures
interface Comment {
  id: number;
  user: string;
  text: string;
  time: string;
}

interface BlogPost {
  id: number;
  title: string;
  images: string[];
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  initialLikes: number;
  initialComments: Comment[];
}

const BlogPage = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [lastClickTime, setLastClickTime] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "A recap of 2023 summer camp",
      images: [recap1, recap2, recap3],
      content:
        "2023 Abugida summer Tech camp was one of a kind with 100 + students, over five courses, 88+ parents, 16 coding projects, 23 electronics+ robotics projects! We would like to thank our staff, managerial members, parents and most of all our dear students for the wonderful time we all had together. #Growing big #Edifying the next generation with STEMi",
      date: "2023-09-07",
      author: "Bemnet Tsegaye",
      readTime: "3 min read",
      category: "Summer Camp",
      initialLikes: 42,
      initialComments: [
        {
          id: 1,
          user: "Parent",
          text: "My child had an amazing experience at the camp!",
          time: "2 days ago",
        },
        {
          id: 2,
          user: "Student",
          text: "Learned so much about robotics. Can't wait for next year!",
          time: "1 week ago",
        },
      ],
    },
    {
      id: 2,
      title:
        "Unleashing Creativity Through Robotics and Coding: Summer Camp Closing 2024",
      images: [unleashing1, unleashing2, unleashing3],
      content:
        "This summer, our school hosted an exciting Robotics and Coding Summer Camp, where students from various grades explored technology and creativity! Over two months, campers participated in hands-on workshops, learning to program robotics kits and tackle real-world challenges. The highlight was a friendly competition, showcasing their unique robot creations. It was rewarding to see their enthusiasm and teamwork in action! As we wrap up this successful camp, we look forward to seeing our campers apply their new skills in the classroom and beyond. Stay tuned for updates about next year's camp and other robotics and coding opportunities throughout the school year! **Thank you to everyone who contributed to this year's success!**",
      date: "2024-09-15",
      author: "Mehiret Walga & Bemnet Tsegaye",
      readTime: "5 min read",
      category: "Summer Camp",
      initialLikes: 78,
      initialComments: [
        {
          id: 1,
          user: "Teacher",
          text: "The students' projects were incredibly innovative this year!",
          time: "3 days ago",
        },
      ],
    },
    {
      id: 3,
      title: "ኢትዮጵያውያን ታዳጊ ህፃናት በአለም አቀፍ የሮቦ ፌስት ውድድር ለመሳተፍ ወደ አሜሪካ አቀኑ",
      images: [Amh1, Amh2, Amh3],
      content:
        "አዲስ አበባ፤ ግንቦት 2/2016(ኢዜአ)፦ኢትዮጵያውያን ታዳጊ ህፃናት በአለም አቀፍ የሮቦ ፌስት ውድድር ለመሳተፍ ወደ አሜሪካ አቅንተዋል። ተወዳዳሪዎቹ ወደ ውድድሩ ስፍራ የሚያቀኑት በአዲስ አበባ ከተማ አስተዳደር ድጋፍ ፣አብርሆት ላይብራሪ ከአቦጊዳ የሮቦቲክስ ቴክኖሎጂ ማዕከል ጋር በመተባበር ኢትዮጵያውያን ተማሪዎችን በአለም አቀፍ መድረኮች ለማወዳደር በገቡት ስምምነት መሰረት መሆኑም ተገልጿል።",
      date: "2024-03-10",
      author: "Abugida Team",
      readTime: "4 min read",
      category: "Competition",
      initialLikes: 56,
      initialComments: [
        {
          id: 1,
          user: "Supporter",
          text: "Proud of our young innovators!",
          time: "5 days ago",
        },
      ],
    },
    {
      id: 4,
      title: "Our Students Shine on EBS After Winning Robotics Tournament",
      images: [ebs1, ebs2, ebs1],
      content:
        "Our Ethiopian students triumphed at a robotics tournament at Lawrence Technological University in Michigan! Following this achievement, they shared their inspiring journey on EBS, emphasizing the importance of education and STEM careers Check them out https://youtu.be/4NT5LRFzo7I",
      date: "2024-06-15",
      author: "Abugida Team",
      readTime: "2 min read",
      category: "Achievement",
      initialLikes: 89,
      initialComments: [
        {
          id: 1,
          user: "Viewer",
          text: "Saw them on TV! So inspiring!",
          time: "1 day ago",
        },
      ],
    },
    {
      id: 5,
      title: "Showcasing Russian Robotics Innovations in Ethiopia",
      images: [showcast ],
      content:
        "From October 23-25, 2024, Addis Ababa hosted the 'Days of Robotics and Innovative Educational Technologies,' organized by Southwest State University. Held at the Russian House, this event aimed to foster collaboration between Russian and Ethiopian educators, researchers, and students in robotics and innovative technologies.",
      date: "2024-10-23",
      author: "Abugida Team",
      readTime: "3 min read",
      category: "Event",
      initialLikes: 34,
      initialComments: [
        {
          id: 1,
          user: "Participant",
          text: "Great event with lots of learning opportunities!",
          time: "2 weeks ago",
        },
      ],
    },
    {
      id: 6,
      title: "Celebrating Abugida Robotics' Triumph: A Win for Ethiopia",
      images: [ celebrate1,celebrate2, celebrate3 ],
      content:
        "We are proud to announce another remarkable achievement for our team at the international robotics competition. Our students demonstrated exceptional skills and innovation, bringing home the trophy and making Ethiopia proud on the global stage.",
      date: "2025-04-13",
      author: "Abugida Team",
      readTime: "3 min read",
      category: "Achievement",
      initialLikes: 102,
      initialComments: [
        {
          id: 1,
          user: "Alumni",
          text: "So proud of our team! Ethiopia to the world!",
          time: "3 days ago",
        },
      ],
    },
    {
      id: 7,
      title:
        "Exciting Announcement: Abugida Robotics to Participate in RoboFest 2025!",
      images: [ exciting1,exciting2, exciting3 ],
      content:
        "We're thrilled to announce that Abugida Robotics will be participating in the prestigious RoboFest 2025 competition. Our team has been preparing intensively and we're excited to showcase Ethiopian innovation on the global stage.",
      date: "2025-05-26",
      author: "Abugida Team",
      readTime: "2 min read",
      category: "Announcement",
      initialLikes: 67,
      initialComments: [
        {
          id: 1,
          user: "Supporter",
          text: "Good luck team! Bring home the trophy!",
          time: "1 week ago",
        },
      ],
    },
    {
      id: 8,
      title:
        "A Momentous Occasion: Prime Minister Attends RoboFest 2024 Awards Ceremony",
      images: [  pm1, pm2 ],
      content:
        "We were honored to have the Prime Minister attend the RoboFest 2024 awards ceremony, where he congratulated all participants and emphasized the government's commitment to supporting STEM education and innovation in Ethiopia.",
      date: "2024-10-17",
      author: "Abugida Team",
      readTime: "4 min read",
      category: "Event",
      initialLikes: 93,
      initialComments: [
        {
          id: 1,
          user: "Educator",
          text: "Great to see government support for STEM education!",
          time: "2 weeks ago",
        },
      ],
    },
  ];

  const handleLike = (postId: number) => {
    const currentTime = new Date().getTime();
    const clickDelay = 300; // milliseconds for double click

    if (currentTime - lastClickTime < clickDelay) {
      // Double click - decrease like
      setLikes((prev) => ({
        ...prev,
        [postId]:
          (prev[postId] ||
            blogPosts.find((p) => p.id === postId)!.initialLikes) - 1,
      }));
    } else {
      // Single click - increase like
      setLikes((prev) => ({
        ...prev,
        [postId]:
          (prev[postId] ||
            blogPosts.find((p) => p.id === postId)!.initialLikes) + 1,
      }));
    }

    setLastClickTime(currentTime);
  };

  const handleCommentSubmit = (postId: number) => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        user: "Current User",
        text: newComment,
        time: "Just now",
      };

      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), comment],
      }));

      setNewComment("");
    }
  };

  const openPost = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo(0, 0);
  };

  const closePost = () => {
    setActivePost(null);
  };

  const allComments = (postId: number): Comment[] => {
    const post = blogPosts.find((p) => p.id === postId);
    return [...(post?.initialComments || []), ...(comments[postId] || [])];
  };

  const getLikes = (postId: number): number => {
    return likes[postId] !== undefined
      ? likes[postId]
      : blogPosts.find((p) => p.id === postId)!.initialLikes;
  };

  if (activePost) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Full Post View */}
        <article className="max-w-4xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={closePost}
              className="mb-6 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              ← Back to all posts
            </button>
            <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {activePost.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {activePost.title}
            </h1>

            <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-4">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                {activePost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                {activePost.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                {activePost.readTime}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activePost.images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${activePost.title} ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {activePost.content}
            </p>
          </div>

          {/* Engagement Section */}
          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(activePost.id)}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Heart size={20} />
                  <span>{getLikes(activePost.id)}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                  <MessageCircle size={20} />
                  <span>{allComments(activePost.id).length}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Comments
            </h3>

            {/* Comment Input */}
            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button
                onClick={() => handleCommentSubmit(activePost.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {allComments(activePost.id).map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.user.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {comment.user}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="mr-2" size={16} />
            Abugida Robotics Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Latest News & Updates
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with our latest achievements, events, and stories from
            the world of robotics and STEM education
          </p>
        </div>

        {/* Blog Posts Grid - Show all 8 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openPost(post)}
            >
              {/* Image Gallery */}
              <div className="relative h-64 overflow-hidden">
                <div className="flex h-full">
                  {post.images.slice(0, 2).map((image, index) => (
                    <div
                      key={index}
                      className="flex-1 relative overflow-hidden"
                      style={{ flex: post.images.length === 1 ? "1" : "1" }}
                    >
                      <img
                        src={image}
                        alt={`${post.title} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="mr-1" size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1" size={14} />
                    {post.author}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="mr-1" size={14} />
                    {post.readTime}
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart className="mr-1" size={14} />
                      {getLikes(post.id)}
                    </button>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MessageCircle className="mr-1" size={14} />
                      {allComments(post.id).length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
