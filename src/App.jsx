// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskCard from './components/TaskCard';
import ResolvedCard from './components/ResolvedCard';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/tickets.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load tickets');
        return response.json();
      })
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading tickets:', error);
        toast.error('Could not load tickets. Using fallback data.');
        setTickets([
          { id: 9999, title: "Demo Ticket", description: "...", customer: "Demo", priority: "LOW PRIORITY", status: "open", createdAt: "Today" }
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const inProgressCount = tickets.filter(t => t.status === 'in-progress').length;
  const resolvedCount   = tickets.filter(t => t.status === 'resolved').length;

  const handleAddToTask = (id) => {
    const ticket = tickets.find(t => t.id === id);
    if (!ticket || ticket.status !== 'open') return;

    setTickets(prev =>
      prev.map(t => t.id === id ? { ...t, status: 'in-progress' } : t)
    );
    toast.success('Ticket moved to In-Progress!');
  };

  const handleComplete = (id) => {
    setTickets(prev =>
      prev.map(t => t.id === id ? { ...t, status: 'resolved' } : t)
    );
    toast.success('Ticket resolved!');
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content relative">
      
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner inProgress={inProgressCount} resolved={resolvedCount} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left side */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets
                .filter(t => t.status !== 'resolved')
                .map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onClick={() => handleAddToTask(ticket.id)}
                  />
                ))}
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Task Status
            </h2>

            {/* In-Progress */}
            <div className="space-y-4">
              {tickets
                .filter(t => t.status === 'in-progress')
                .map(ticket => (
                  <TaskCard
                    key={ticket.id}
                    ticket={ticket}
                    onComplete={() => handleComplete(ticket.id)}
                  />
                ))}
            </div>

            {/* Resolved */}
            <h3 className="text-2xl font-semibold mt-10 mb-4 text-base-content">
              Resolved Tasks
            </h3>
            <div className="space-y-3">
              {tickets
                .filter(t => t.status === 'resolved')
                .map(ticket => (
                  <ResolvedCard key={ticket.id} ticket={ticket} />
                ))}
              {resolvedCount === 0 && (
                <p className="text-base-content/70 italic">
                  No resolved tasks yet.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="z-[9999]"
      />
    </div>
  );
}

export default App;