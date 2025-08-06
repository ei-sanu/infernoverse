import { motion } from 'framer-motion';
import React from 'react';

const RefundPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
                    Refund Policy
                </h1>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">No Refund Policy</h2>
                        <p className="mb-4">
                            Please note that Inferno Verse Hackathon 2025 operates under a strict no-refund policy:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Once the registration payment is completed, it is non-refundable.</li>
                            <li>Team registrations are final and cannot be canceled for a refund.</li>
                            <li>The registration fee cannot be transferred to another team or event.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Reasons for No-Refund Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Event planning and resource allocation are based on confirmed registrations</li>
                            <li>Administrative costs associated with processing registrations</li>
                            <li>Limited spots available for participating teams</li>
                            <li>Commitment to maintaining fair participation opportunities</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h2>
                        <p>
                            If you have any questions about our refund policy, please contact us at:{' '}
                            <a href="mailto:info@infernoverse.com" className="text-cyan-400 hover:underline">
                                info@infernoverse.com
                            </a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default RefundPolicy;
