import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TicketCard from './components/TicketCard';
function App() {
  

  return (
    <>
  
     {/* Navbar */}
      <Navbar />
    
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

    <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onClick={() => handleAddToTask(ticket.id)}
                  />

       {/* Footer */}
      <Footer />
    </>
  )
}

export default App
