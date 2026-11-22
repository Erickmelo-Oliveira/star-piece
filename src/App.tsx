import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { StarRobots } from './components/StarRobots';
import { StarAccess } from './components/StarAccess';
import { StarDevs } from './components/StarDevs';
import { EllenAI } from './components/EllenAI';
import { EllenAIDemo } from './components/EllenAIDemo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <StarRobots />
      <StarAccess />
      <StarDevs />
      <EllenAI />
      <EllenAIDemo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;