import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, Timestamp, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Pencil } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsQuery = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(postsQuery);
      const fetchedPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(fetchedPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), {
        ...newPost,
        createdAt: Timestamp.now()
      });
      setNewPost({ title: '', content: '' });
      setIsWriting(false);
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <button
            onClick={() => setIsWriting(!isWriting)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Pencil size={20} />
            {isWriting ? 'Cancel' : 'Write Post'}
          </button>
        </div>

        {isWriting && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12 bg-zinc-900/50 p-6 rounded-lg border border-emerald-900/30"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-medium">Title</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full bg-zinc-800 text-white rounded-lg p-3 border border-emerald-900/30 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-medium">Content</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full bg-zinc-800 text-white rounded-lg p-3 border border-emerald-900/30 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                rows={8}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Publish
              </button>
            </div>
          </motion.form>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-lg border border-emerald-900/30 hover:border-emerald-500 transition-colors"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
                <p className="text-gray-300 mb-4 whitespace-pre-wrap">{post.content}</p>
                <time className="text-sm text-emerald-400">
                  {new Date(post.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}