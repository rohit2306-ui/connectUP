import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  orderBy,
  limit,
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Message } from '../types';

const MessageUser: React.FC = () => {
  const { username } = useParams();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [receiver, setReceiver] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const fetchReceiver = async () => {
      const q = query(collection(db, 'users'), where('username', '==', username));
      const snapshot = await getDocs(q);
      const receiverData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0];
      setReceiver(receiverData);
    };

    fetchReceiver();
  }, [username, user]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!receiver) return;

      const messagesQuery = query(
        collection(db, 'messages'),
        where('senderId', 'in', [user.id, receiver.id]),
        where('receiverId', 'in', [user.id, receiver.id]),
        orderBy('timestamp', 'asc'),
        limit(100)
      );
      const querySnapshot = await getDocs(messagesQuery);
      const messagesList = querySnapshot.docs.map((doc) => doc.data() as Message);
      setMessages(messagesList);

      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    fetchMessages();
  }, [receiver]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      await addDoc(collection(db, 'messages'), {
        senderId: user.id,
        receiverId: receiver.id,
        message: newMessage,
        timestamp: new Date(),
        seen: false,
      });

      const updatedMessages = [
        ...messages,
        {
          senderId: user.id,
          receiverId: receiver.id,
          message: newMessage,
          timestamp: new Date(),
          seen: false,
        },
      ];
      setMessages(updatedMessages);
      setNewMessage('');
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Message send error:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 shadow border-b border-gray-700">
        <h2 className="text-lg font-semibold">Chat with @{username}</h2>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.senderId === user.id ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-sm px-4 py-2 rounded-lg text-sm ${
                message.senderId === user.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              <p>{message.message}</p>
              <span className="block text-xs mt-1 text-gray-300 text-right">
                {new Date(message.timestamp?.seconds * 1000).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="bg-gray-800 px-4 py-3 border-t border-gray-700 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageUser;
