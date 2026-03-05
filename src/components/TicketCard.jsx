import React from 'react';

const TicketCard = ({ ticket, onClick }) => {
  const statusColor =
    ticket.status === "open" ? "bg-green-500" : "bg-yellow-500";

  const priorityColor =
    ticket.priority === "HIGH PRIORITY"
      ? "text-red-500"
      : ticket.priority === "MEDIUM PRIORITY"
      ? "text-yellow-500"
      : "text-blue-500";

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800 dark:text-white">
          {ticket.title}
        </h3>

        <span className={`rounded-full w-4 h-4 ${statusColor}`}></span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {ticket.description}
      </p>

      <div className="flex justify-between mt-2 text-sm text-gray-700 dark:text-gray-300">
        <span className={priorityColor}>
          #{ticket.id} {ticket.priority}
        </span>

        <span>
          {ticket.customer} □ {ticket.createdAt}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;