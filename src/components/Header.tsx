import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Star className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300`}>
                STAR PIECE
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Inovação para MT
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Soluções', 'Sobre', 'Star Robots', 'Star Access', 'Star DEVs', 'E.L.L.E.N A.I', 'Contato'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(
                  item === 'Início' ? 'home' : 
                  item === 'Soluções' ? 'services' : 
                  item === 'Star Robots' ? 'star-robots' :
                  item === 'Star Access' ? 'star-access' :
                  item === 'Star DEVs' ? 'star-devs' :
                  item === 'E.L.L.E.N A.I' ? 'ellen-ai' :
                  item === 'Contato' ? 'contact' :
                  item.toLowerCase()
                )}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-100 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col py-6">
              {['Início', 'Soluções', 'Sobre', 'Star Robots', 'Star Access', 'Star DEVs', 'E.L.L.E.N A.I', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(
                    item === 'Início' ? 'home' : 
                    item === 'Soluções' ? 'services' : 
                    item === 'Star Robots' ? 'star-robots' :
                    item === 'Star Access' ? 'star-access' :
                    item === 'Star DEVs' ? 'star-devs' :
                    item === 'E.L.L.E.N A.I' ? 'ellen-ai' :
                    item === 'Contato' ? 'contact' :
                    item.toLowerCase()
                  )}
                  className="px-6 py-4 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};