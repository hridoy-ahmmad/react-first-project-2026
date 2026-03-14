import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {/* Main Spinner Container */}
            <div className="relative w-16 h-16">
                {/* Background Ring (Static) */}
                <div className="absolute inset-0 border-4 border-slate-200 rounded-full opacity-25"></div>

                {/* Animated Ring (Moving) */}
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>

                {/* Center Pulsing Dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Professional Text Styling */}
            <div className="flex flex-col items-center">
                <span className="text-slate-800 font-bold tracking-widest text-sm uppercase">
                    Loading...
                </span>
                <div className="flex space-x-1 mt-1">
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;