import { motion } from 'framer-motion';
import { AlertCircle, Check, Clock, Mail, MapPin, Phone, Send, Users } from 'lucide-react';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", "df286f06-934a-4d43-8577-f2b3bcef8764");

      // Add some basic validation
      const email = formData.get('email') as string;
      const name = formData.get('name') as string;
      const message = formData.get('message') as string;

      if (!email || !name || !message) {
        throw new Error("Please fill in all required fields");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        // Only reset if form exists
        if (form instanceof HTMLFormElement) {
          form.reset();
        }
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'infernoofficial694@gmail.com',
      description: 'For general inquiries and support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 62878 30296',
      description: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'LPU Campus, Punjab, India',
      description: 'Event venue and registration desk'
    }
  ];

  const teamContacts = [
    {
      name: 'Organizer Team',
      role: 'Event Organization',
      email: 'infernoofficial694@gmail.com',
      phone: '+91 62878 30296'
    },
    {
      name: 'Technical Team',
      role: 'Technical Support',
      email: 'someshranjanbiswal13678@gmail.com',
      phone: '+91 7008450074'
    },

    {
      name: 'Sponsorship Team',
      role: 'Partnerships & Sponsorship',
      email: 'infernoofficial694@gmail.com',
      phone: '+91 62878 30296'
    }
  ];

  const faqs = [
    {
      question: 'How do I register for the hackathon?',
      answer: 'Click on the "Register Now" button and complete the registration form with your team details.'
    },
    {
      question: 'What is the registration fee?',
      answer: 'The registration fee varies depending upon the number of participants, payable via UPI or bank transfer.'
    },
    {
      question: 'Can I participate individually?',
      answer: 'Teams must have 2-4 members. Individual participants .'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your laptop, charger, valid ID, and any specific hardware you might need for your project.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">CONTACT US</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for any questions, support, or partnership opportunities.
            We're here to help make your Inferno Verse experience amazing!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
            >
              <info.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-cyan-400 font-semibold text-lg mb-2">{info.details}</p>
              <p className="text-gray-300 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8"
          >
            <h2 className="text-2xl font-orbitron font-bold text-[#00f0ff] mb-6">Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg
                    text-white focus:border-[#00f0ff] focus:outline-none focus:ring-2
                    focus:ring-[#00f0ff]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg
                    text-white focus:border-[#00f0ff] focus:outline-none focus:ring-2
                    focus:ring-[#00f0ff]/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg
                  text-white focus:border-[#00f0ff] focus:outline-none focus:ring-2
                  focus:ring-[#00f0ff]/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg
                  text-white focus:border-[#00f0ff] focus:outline-none focus:ring-2
                  focus:ring-[#00f0ff]/20 transition-all duration-300"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#00f0ff]
                text-black font-orbitron font-bold rounded-lg hover:bg-[#00d8e6]
                transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center ${result.includes('success')
                  ? 'bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff]'
                  : 'bg-red-500/10 border border-red-500 text-red-500'
                  }`}
              >
                {result.includes('success') ? (
                  <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <span>{result}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Team Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Team Contacts</h2>
            {teamContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-1">{contact.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{contact.role}</p>
                <div className="space-y-2">
                  <a href={`mailto:${contact.email}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <Clock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM IST</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p className="text-cyan-400 text-sm mt-4">
                During hackathon: 24/7 support available
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <Users className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Response Times</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>General Inquiries:</strong> Within 24 hours</p>
              <p><strong>Technical Support:</strong> Within 12 hours</p>
              <p><strong>Urgent Issues:</strong> Within 4 hours</p>
              <p className="text-cyan-400 text-sm mt-4">
                Emergency contact: +91 98765 43210
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">Quick FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default Contact;
