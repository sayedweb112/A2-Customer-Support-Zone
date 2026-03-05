import './App.css'
import Navbar from './components/Navbar';
function App() {
  

  return (
    <>
  
     {/* Navbar */}
      <Navbar />
    
    <Banner inProgress={inProgressCount} resolved={resolvedCount} />

       {/* Footer */}
      <Footer />
    </>
  )
}

export default App
