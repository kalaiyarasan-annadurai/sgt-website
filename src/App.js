import React from 'react';
import Header from './components/Header'; // Correct import for components
import Footer from './components/Footer'; // Correct path for Footer
import { BrowserRouter as Router } from 'react-router-dom';  // Use BrowserRouter for routing
import RoutesComponent from './components/Routes'; // Component to handle routes

function App() {
  return (
    <Router> {/* Wrap your components in BrowserRouter */}
      <Header />
      <RoutesComponent />  {/* Add routing logic here */}
      <Footer />
    </Router>
  );
}

export default App;
