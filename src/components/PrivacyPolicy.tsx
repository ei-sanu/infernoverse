import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-4 pt-24 pb-8">
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
                        Back
                    </button>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center"
                            style={{ textShadow: '0 0 20px #00FFFF' }}>
                            Privacy Policy
                        </h1>

                        <div className="space-y-6 text-gray-300">
                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Information We Collect</h2>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-cyan-300">Personal Information</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Name, email address, and contact information</li>
                                        <li>Educational background and professional details</li>
                                        <li>Profile pictures and social media links</li>
                                        <li>Payment information for registration fees</li>
                                    </ul>

                                    <h3 className="text-lg font-medium text-cyan-300">Technical Information</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>IP address and browser information</li>
                                        <li>Device type and operating system</li>
                                        <li>Cookies and usage analytics</li>
                                        <li>Project submissions and code repositories</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. How We Use Your Information</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Process hackathon registrations and manage participants</li>
                                    <li>Communicate event updates and important announcements</li>
                                    <li>Facilitate team formation and networking</li>
                                    <li>Evaluate projects and determine winners</li>
                                    <li>Improve our services and future events</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Information Sharing</h2>
                                <p className="mb-4">We do not sell your personal information. We may share information with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Event sponsors and partners (with your consent)</li>
                                    <li>Service providers who assist with event operations</li>
                                    <li>Legal authorities when required by law</li>
                                    <li>Other participants for networking purposes (limited information)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Data Security</h2>
                                <p>
                                    We implement appropriate security measures to protect your personal information against unauthorized
                                    access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular
                                    security audits.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Cookies and Tracking</h2>
                                <p>
                                    We use cookies and similar technologies to enhance your experience, analyze website traffic, and
                                    personalize content. You can control cookie settings through your browser preferences.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Third-Party Services</h2>
                                <p className="mb-4">We integrate with third-party services including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Google Analytics for website analytics</li>
                                    <li>Firebase for authentication and data storage</li>
                                    <li>Payment processors for registration fees</li>
                                    <li>Social media platforms for login and sharing</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Your Rights</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Withdraw consent for processing</li>
                                    <li>Data portability rights</li>
                                    <li>Object to certain processing activities</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Data Retention</h2>
                                <p>
                                    We retain your information for as long as necessary to fulfill the purposes outlined in this policy,
                                    comply with legal obligations, and resolve disputes. Project submissions may be retained for
                                    promotional purposes with your consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. International Transfers</h2>
                                <p>
                                    Your information may be transferred to and processed in countries other than your own. We ensure
                                    appropriate safeguards are in place to protect your data during international transfers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Children's Privacy</h2>
                                <p>
                                    Our services are not intended for children under 13. We do not knowingly collect personal information
                                    from children under 13. If you are under 18, please obtain parental consent before participating.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Changes to Privacy Policy</h2>
                                <p>
                                    We may update this privacy policy periodically. We will notify you of significant changes through
                                    email or prominent notices on our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">12. Contact Us</h2>
                                <p>
                                    For privacy-related questions or to exercise your rights, contact us at{' '}
                                    <a href="mailto:privacy@infernoverse.com" className="text-cyan-400 hover:underline">
                                        privacy@infernoverse.com
                                    </a>
                                </p>
                            </section>

                            <div className="mt-8 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
                                <p className="text-sm text-cyan-400">
                                    Last updated: August 6, 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
