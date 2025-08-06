import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

interface TermsConditionsProps {
    onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
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
                            Terms & Conditions
                        </h1>

                        <div className="space-y-6 text-gray-300">
                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By participating in Inferno Verse 2025, you agree to comply with and be bound by these terms and conditions.
                                    If you do not agree with these terms, please do not participate in the hackathon.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Hackathon Overview</h2>
                                <p>
                                    Inferno Verse 2025 is a 24-hour AI hackathon bringing together 1,000+ brilliant innovators to solve
                                    real-world challenges using Artificial Intelligence. The event will be held on September 20, 2025, at LPU, Punjab.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Eligibility</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Participants must be at least 18 years old or have parental consent</li>
                                    <li>Teams can consist of 1-4 members</li>
                                    <li>All skill levels are welcome</li>
                                    <li>Valid identification is required for registration</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Code of Conduct</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Respect all participants, organizers, and volunteers</li>
                                    <li>No harassment, discrimination, or inappropriate behavior</li>
                                    <li>Follow all venue rules and regulations</li>
                                    <li>Maintain a collaborative and inclusive environment</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Project Requirements</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Projects must be started during the hackathon period</li>
                                    <li>Use of pre-existing code libraries and frameworks is allowed</li>
                                    <li>Projects must be AI-focused or AI-enhanced</li>
                                    <li>All code must be original or properly attributed</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Intellectual Property</h2>
                                <p>
                                    Participants retain ownership of their intellectual property. By participating, you grant Inferno Verse
                                    permission to showcase your project and use it for promotional purposes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Prizes and Awards</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Prizes are awarded at the discretion of the judges</li>
                                    <li>Prize distribution is subject to tax regulations</li>
                                    <li>Winners may be required to provide additional documentation</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Liability</h2>
                                <p>
                                    Participants participate at their own risk. Inferno Verse is not liable for any loss, damage, or injury
                                    that may occur during the event.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Changes to Terms</h2>
                                <p>
                                    Inferno Verse reserves the right to modify these terms at any time. Updated terms will be posted on our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Contact Information</h2>
                                <p>
                                    For questions about these terms, please contact us at{' '}
                                    <a href="mailto:info@infernoverse.com" className="text-cyan-400 hover:underline">
                                        info@infernoverse.com
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

export default TermsConditions;
