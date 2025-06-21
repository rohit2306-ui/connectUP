import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  const form = new FormData();
  form.append('access_key', 'c51264cf-0c3c-41f6-8c8c-26cc4719cf49');
  form.append('subject', 'New Contact Form Submission');
  form.append('from_name', formData.name);
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('message', formData.message);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: form
    });

    const json = await response.json();

    if (json.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (err) {
    setStatus('error');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-16">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-300">rdhak1237@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-300">+91 9368646810</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-300">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Form */}
              <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="access_key" value="c51264cf-0c3c-41f6-8c8c-26cc4719cf49" />
  <input type="hidden" name="subject" value="New Contact Message" />
  <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
    <input
      type="text"
      name="name"
      required
      className="mt-1 block w-full rounded-md bg-zinc-900 border-emerald-900/30 text-white focus:border-emerald-500 focus:ring-emerald-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
    <input
      type="email"
      name="email"
      required
      className="mt-1 block w-full rounded-md bg-zinc-900 border-emerald-900/30 text-white focus:border-emerald-500 focus:ring-emerald-500"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
    <textarea
      name="message"
      required
      rows={4}
      className="mt-1 block w-full rounded-md bg-zinc-900 border-emerald-900/30 text-white focus:border-emerald-500 focus:ring-emerald-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
  >
    Send Message
  </button>
</form>

          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
