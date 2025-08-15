import { motion } from 'framer-motion';
import { ArrowLeft, Check, Copy, Download } from 'lucide-react';
import QRCode from 'qrcode';
import React, { useState } from 'react';

interface RegistrationProps {
  onBack: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    registrationNumber: '',
    course: '',
    year: '',
    teamLeaderName: '',
    leaderRegNumber: '',
    member1Name: '',
    member1RegNumber: '',
    member2Name: '',
    member2RegNumber: '',
    member3Name: '',
    member3RegNumber: '',
    teamName: '',
    address: '',
    pincode: '',
    city: '',
    accountHolderName: '',
    utrNumber: '',
  });

  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teamSize, setTeamSize] = useState('solo');
  const [amount, setAmount] = useState(99);
  const [showSuccess, setShowSuccess] = useState(false);

  const upiId = 'shivanshsky0808-1@oksbi';

  React.useEffect(() => {
    generateQRCode();
  }, [amount]); // Add amount as a dependency

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(
        `upi://pay?pa=${upiId}&pn=Inferno Verse&am=${amount}&cu=INR`
      );
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.download = 'inferno-verse-payment-qr.png';
    link.href = qrCodeUrl;
    link.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update the handleTeamSizeChange function to include QR regeneration
  const handleTeamSizeChange = (size: string) => {
    setTeamSize(size);
    let newAmount = 99;
    switch (size) {
      case 'solo':
        newAmount = 99;
        break;
      case 'duo':
        newAmount = 199;
        break;
      case 'trio':
        newAmount = 299;
        break;
      case 'quartet':
        newAmount = 349;
        break;
    }
    setAmount(newAmount);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to Google Sheets
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzdKNga_V3t91N9cPJ2fapZ2bxcl_e9iahLmq_TCHf5hutzzqK4f5EXABSJG47a5eFF/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      // Instead of alert, show success modal
      setShowSuccess(true);

      // Reset form
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        registrationNumber: '',
        course: '',
        year: '',
        teamLeaderName: '',
        leaderRegNumber: '',
        member1Name: '',
        member1RegNumber: '',
        member2Name: '',
        member2RegNumber: '',
        member3Name: '',
        member3RegNumber: '',
        teamName: '',
        address: '',
        pincode: '',
        city: '',
        accountHolderName: '',
        utrNumber: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const SuccessModal = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={() => setShowSuccess(false)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="bg-slate-800 border border-cyan-400/20 rounded-xl p-8 max-w-md mx-4 text-center"
          onClick={e => e.stopPropagation()}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <Check className="w-10 h-10 text-slate-900" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-cyan-400 mb-4"
          >
            Registration Successful!
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 mb-6"
          >
            Get ready for an amazing hackathon experience! Make sure to prepare well and bring your best ideas forward.
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold"
            onClick={() => setShowSuccess(false)}
          >
            Got it!
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={onBack}
            className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-cyan-400 text-center mb-8">
              Inferno Verse Registration
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Registration Number *
                  </label>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="BTech">B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>

              {/* Team Details */}
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Team Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Team Leader Name *
                    </label>
                    <input
                      type="text"
                      name="teamLeaderName"
                      value={formData.teamLeaderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Leader Registration Number *
                    </label>
                    <input
                      type="text"
                      name="leaderRegNumber"
                      value={formData.leaderRegNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Team Members */}
                  {[1, 2, 3].map((num) => (
                    <React.Fragment key={num}>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Member {num} Name
                        </label>
                        <input
                          type="text"
                          name={`member${num}Name`}
                          value={formData[`member${num}Name` as keyof typeof formData]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Member {num} Registration Number
                        </label>
                        <input
                          type="text"
                          name={`member${num}RegNumber`}
                          value={formData[`member${num}RegNumber` as keyof typeof formData]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </React.Fragment>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Address Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Payment Details</h3>

                <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    {/* Add Team Size Selector */}
                    <div className="mb-4">
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Select Team Size
                      </label>
                      <select
                        value={teamSize}
                        onChange={(e) => handleTeamSizeChange(e.target.value)}
                        className="px-4 py-2 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="solo">Solo (₹99)</option>
                        <option value="duo">Duo (₹199)</option>
                        <option value="trio">Trio (₹299)</option>
                        <option value="quartet">Quartet (₹349)</option>
                      </select>
                    </div>

                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      Registration Fee: ₹{amount}
                    </h4>
                    <p className="text-gray-300">Scan QR Code or Use UPI ID to pay</p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* QR Code */}
                    <div className="text-center">
                      {qrCodeUrl && (
                        <div id="qr-code" className="mb-4">
                          <img
                            src={qrCodeUrl}
                            alt="Payment QR Code"
                            className="w-48 h-48 mx-auto border-2 border-cyan-400 rounded-lg"
                          />
                        </div>
                      )}
                      <motion.button
                        type="button"
                        onClick={downloadQRCode}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors mx-auto"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download QR</span>
                      </motion.button>
                    </div>

                    {/* UPI ID */}
                    <div className="text-center">
                      <div className="text-gray-300 mb-2">UPI ID:</div>
                      <div className="flex items-center space-x-2 bg-slate-600/50 px-4 py-2 rounded-lg">
                        <span className="text-cyan-400 font-mono">{upiId}</span>
                        <motion.button
                          type="button"
                          onClick={copyUpiId}
                          whileHover={{ scale: 1.05 }}
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Confirmation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Account Holder Name *
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      placeholder="Name as per bank account"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      UTR Number *
                    </label>
                    <input
                      type="text"
                      name="utrNumber"
                      value={formData.utrNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      placeholder="Transaction Reference Number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-cyan-400 text-slate-900 font-bold text-lg rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Registration'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      {showSuccess && <SuccessModal />}
    </div>
  );
};

export default Registration;
