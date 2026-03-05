import React from 'react';

const ResolvedCard = ({ ticket }) => {
  return (
    <div className="bg-purple-100 dark:bg-purple-900 shadow-md rounded-lg p-4 mb-4">
      <h3 className="font-bold text-gray-800 dark:text-white">
        {ticket.title}
      </h3>
    </div>
  );
};

export default ResolvedCard;