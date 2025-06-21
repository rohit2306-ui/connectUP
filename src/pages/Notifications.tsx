import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { useAuth } from '../context/AuthContext';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  Timestamp
} from 'firebase/firestore';
import Button from '../components/UI/Button';

interface Notif {
  id: string;
  toUserId: string;
  fromUserId: string;
  type: string;
  createdAt: any;
}

interface Conn {
  id: string;
  userIdA: string;
  userIdB: string;
  status: string;
}

const Notifications: React.FC = () => {
  const { user } = useAuth();
  const [notifs, setNotifs] = useState<Notif[]>([]);
  const [conns, setConns] = useState<Conn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!user) return;

      try {
        const nq = query(
          collection(db, 'notifications'),
          where('toUserId', '==', user.id),
          orderBy('createdAt', 'desc')
        );
        const nqSnap = await getDocs(nq);
        setNotifs(nqSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));

        const cq = query(
          collection(db, 'connections'),
          where('userIdB', '==', user.id),
          where('status', '==', 'pending')
        );
        const cqSnap = await getDocs(cq);
        setConns(cqSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
      } catch (err) {
        console.error('Error fetching notifications:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  const accept = async (n: Notif) => {
  const conn = conns.find(
    c => c.userIdA === n.fromUserId && c.userIdB === user!.id
  );

  if (!conn) {
    alert("Connection not found for this request. Possible mismatch.");
    return;
  }

  await updateDoc(doc(db, 'connections', conn.id), { status: 'friends' });

  await addDoc(collection(db, 'notifications'), {
    toUserId: conn.userIdA,
    fromUserId: user!.id,
    type: 'connect_accepted',
    createdAt: Timestamp.now()
  });

  setConns(prev => prev.filter(c => c.id !== conn.id));
};


  const renderMessage = (n: Notif) => {
    switch (n.type) {
      case 'connect_request':
        return (
          <div className="flex justify-between items-center">
            <span>👋 {n.fromUserId} sent you a connect request.</span>
            <Button size="sm" onClick={() => accept(n)}>Accept</Button>
          </div>
        );
      case 'connect_accepted':
        return <span>✅ {n.fromUserId} accepted your request.</span>;
      case 'like':
        return <span>❤️ {n.fromUserId} liked your post.</span>;
      case 'comment':
        return <span>💬 {n.fromUserId} commented on your post.</span>;
      default:
        return <span>🔔 You have a new notification.</span>;
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      ) : notifs.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No notifications yet.</p>
      ) : (
        <ul className="space-y-3">
          {notifs.map(n => (
            <li key={n.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow border border-gray-200 dark:border-gray-700">
              {renderMessage(n)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
