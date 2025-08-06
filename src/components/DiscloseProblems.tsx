import { motion } from 'framer-motion';
import { AlertCircle, Calendar, Clock, Lock } from 'lucide-react';
import React from 'react';

interface DiscloseProblemsProps {
    onBack: () => void;
}

const DiscloseProblems: React.FC<DiscloseProblemsProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0d0d1a] to-[#000000]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Lock className="w-24 h-24 text-[#00f0ff] mx-auto mb-6" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-orbitron font-bold text-[#00f0ff] mb-6"
                        style={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                    >
                        PROBLEM STATEMENTS LOCKED
                    </motion.h1>

                    <motion.div
                        className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8 mb-8"
                        whileHover={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)' }}
                    >
                        <p className="text-xl text-[#e6e6e6] mb-6 font-exo">
                            The problem statements will be revealed when the hackathon begins.
                            Get ready to tackle exciting challenges in AI and innovation!
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                            <div className="flex items-center justify-center space-x-2 text-[#00f0ff]">
                                <Calendar className="w-5 h-5" />
                                <span>September 20, 2025</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-[#00f0ff]">
                                <Clock className="w-5 h-5" />
                                <span>10:00 AM IST</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-left">
                            <div className="flex items-start space-x-3">
                                <AlertCircle className="w-6 h-6 text-[#00f0ff] mt-1 flex-shrink-0" />
                                <p className="text-[#e6e6e6] font-exo">
                                    Problems will be disclosed at the start of the hackathon to ensure fair competition
                                    and equal preparation time for all participants.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <AlertCircle className="w-6 h-6 text-[#00f0ff] mt-1 flex-shrink-0" />
                                <p className="text-[#e6e6e6] font-exo">
                                    Make sure your team is registered and ready before the hackathon begins.
                                    Use this time to prepare your development environment and brush up on your skills.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8"
                        whileHover={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)' }}
                    >
                        <h2 className="text-2xl font-orbitron font-bold text-[#00f0ff] mb-4">
                            While You Wait
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-[#e6e6e6] font-exo">
                                <h3 className="text-[#00f0ff] font-semibold mb-2">Prepare Your Setup</h3>
                                <p>Install necessary development tools and ensure your environment is ready.</p>
                            </div>
                            <div className="text-[#e6e6e6] font-exo">
                                <h3 className="text-[#00f0ff] font-semibold mb-2">Form Your Team</h3>
                                <p>Connect with potential teammates and register your team for the event.</p>
                            </div>
                            <div className="text-[#e6e6e6] font-exo">
                                <h3 className="text-[#00f0ff] font-semibold mb-2">Review Guidelines</h3>
                                <p>Familiarize yourself with the hackathon rules and submission requirements.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default DiscloseProblems;
