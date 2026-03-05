import React from 'react';

const TaskCard = ({ ticket, onComplete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
      <h3 className="font-bold text-gray-800 dark:text-white">
        {ticket.title}
      </h3>

      <button
        onClick={onComplete}
        className="btn btn-success bg-green-500 text-white mt-2"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;