import { motion } from 'framer-motion';
import React from 'react';

interface AttendanceWaitProps {
    onBack: () => void;
}

const AttendanceWait: React.FC<AttendanceWaitProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h1 className="text-4xl font-bold text-cyan-400 mb-8">Attendance Not Started</h1>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                        <p className="text-gray-300 mb-6">
                            The attendance marking system will be available once the hackathon begins. Please check back later.
                        </p>
                        <button
                            onClick={onBack}
                            className="px-6 py-3 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AttendanceWait;
