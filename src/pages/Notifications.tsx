import React, { useEffect, useState } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../context/AuthContext';

const Notifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;
      const q = query(
        collection(db, 'notifications'),
        where('toUserId', '==', user.id),
        orderBy('createdAt', 'desc')
      );
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotifications(data);
    };

    fetchNotifications();
  }, [user]);

  const renderMessage = (notif: any) => {
    switch (notif.type) {
      case 'connect_request':
        return `👋 ${notif.fromUserId} sent you a connect request`;
      case 'like':
        return `❤️ ${notif.fromUserId} liked your post`;
      case 'comment':
        return `💬 ${notif.fromUserId} commented on your post`;
      default:
        return 'New notification';
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map(notif => (
            <li key={notif.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border border-gray-200 dark:border-gray-700">
              {renderMessage(notif)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
