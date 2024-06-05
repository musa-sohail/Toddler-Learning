// // App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import LearningABC from './pages/LearningABC';
import LearningUrdu from './pages/LearningUrdu';
import LearningMaths from './pages/LearningMaths';
import LearningAnimals from './pages/LearningAnimals';
import LearningPlants from './pages/LearningPlants';
import LearningFurniture from './pages/LearningFurniture';
import Quizes from './pages/Quizes';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/learningabc' element={<LearningABC />} />
              <Route path='/learningurdu' element={<LearningUrdu />} />
              <Route path='/learningmaths' element={<LearningMaths />} />
              <Route path='/learninganimals' element={<LearningAnimals />} />
              <Route path='/learningplants' element={<LearningPlants />} />
              <Route path='/learningfurniture' element={<LearningFurniture />} />
              <Route path='/quizes' element={<Quizes />} />
              {/* Add routes for other learning pages as needed */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
