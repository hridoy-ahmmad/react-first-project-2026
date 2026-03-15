import React from 'react';

const IssuCard = ({ d }) => {



    const { ticketId, subject, description, status, category, priority, createdAt, assignedTo, requestedBy, userImg } = d
    return (
        <div  className="max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3 group relative">
                    <img
                        src={userImg}
                        alt={requestedBy}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                    />

                    {/* Tooltip */}
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-gray-900 text-white text-[11px] px-2 py-[2px] rounded">
                        {requestedBy}
                    </span>

                    <div>
                        <p className="text-sm text-gray-500">Requested by</p>
                        <h4 className="font-semibold text-gray-900">{requestedBy}</h4>
                    </div>
                </div>

                {/* Status Badge */}
                <span className={`px-3 py-1 text-xs font-semibold rounded-full  ${status === 'Submitted' ? 'bg-green-100 text-green-500' : status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : status === 'Reviewed' ? 'bg-amber-100 text-amber-600' : ''} `}>
                    {status}
                </span>
            </div>

            {/* Subject */}
            <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                {subject}
            </h2>

            {/* Priority */}
            <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500">Priority:</span>

                <span className={`px-2 py-[2px] text-xs font-semibold rounded-md  ${priority === 'High' ? 'bg-red-100 text-red-600' : priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : priority === 'Low' ? 'bg-green-50 text-green-500' : ''}`}>
                    {priority}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">

                <span className="text-xs text-gray-400">
                    Issue ID: {ticketId}
                </span>
            </div>

        </div >
    );
};

export default IssuCard;