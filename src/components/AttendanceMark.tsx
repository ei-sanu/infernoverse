import { motion } from 'framer-motion';
import React from 'react';

interface AttendanceMarkProps {
    onBack: () => void;
}

const AttendanceMark: React.FC<AttendanceMarkProps> = ({ onBack }) => {
    const handleAttendanceClick = () => {
        window.open('https://infernov.me/', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h1 className="text-4xl font-bold text-cyan-400 mb-8">Mark Your Attendance</h1>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                        <p className="text-gray-300 mb-6">
                            Please use the exact email ID that you used to register on the Inferno Verse main website to mark your attendance.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={handleAttendanceClick}
                                className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg hover:bg-cyan-300 transition-colors font-bold"
                            >
                                Mark Attendance
                            </button>
                            <button
                                onClick={onBack}
                                className="block w-full px-6 py-3 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AttendanceMark;
