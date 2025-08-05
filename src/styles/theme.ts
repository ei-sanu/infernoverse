export const cyberpunkTheme = {
    colors: {
        primary: '#00f0ff',
        background: {
            primary: '#000000',
            secondary: '#0d0d1a',
            overlay: 'rgba(13, 13, 26, 0.5)',
            card: 'rgba(13, 13, 26, 0.5)',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bfbfbf',
            accent: '#00f0ff',
        },
        border: {
            primary: 'rgba(0, 240, 255, 0.2)',
        },
        neon: {
            glow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
            pulse: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff',
        },
    },
    layout: {
        containerClass: "container mx-auto px-4",
        sectionClass: "py-20 px-4",
        cardClass: "bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-6",
    },
    animation: {
        neonPulse: "animate-pulse text-[#00f0ff]",
        hoverScale: "hover:scale-105 transition-transform duration-300",
    }
};
