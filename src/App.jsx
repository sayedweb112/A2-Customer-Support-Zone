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
